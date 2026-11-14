import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildItems, counts, inventoryCount, pluginSnapshot, resourceProgress, mcpNames, mcpServer, rowState } from '../herdr/mods/skillshare/model.js';
import { loadResources } from '../herdr/mods/skillshare/loader.js';

test('source-only MCP connections are counted without scheduling synchronization', () => {
  const items = buildItems('global', { list: [], mcp: { serverNames: ['github', 'memory'], changes: [] } });
  assert.equal(counts(items).mcp, 2);
  assert.ok(items.every(item => item.state === 'ok' && item.targets.length === 0));
  assert.equal(rowState(items[0], false), 'existing configuration');
});

test('a targeted connection is counted once and retains its synchronization status', () => {
  const items = buildItems('global', { list: [], mcp: { serverNames: ['github'], changes: [{ name: 'github', target: 'codex', action: 'add' }] } });
  assert.equal(counts(items).mcp, 1);
  assert.equal(items[0].state, 'sync');
  assert.deepEqual(items[0].targets, ['codex']);
});

test('JSON and YAML source files expose names while previews mask credentials', () => {
  assert.deepEqual(mcpNames('servers:\n  github:\n    command: npx\n  "memory":\n    command: npx\n'), ['github', 'memory']);
  const text = JSON.stringify({ servers: { github: { command: 'npx', env: { API_KEY: 'never-render-this' }, headers: { Authorization: 'never-render-this-either' }, bearerToken: 'also-private' } } });
  assert.deepEqual(mcpNames(text), ['github']);
  const preview = JSON.stringify(mcpServer(text, 'github'));
  assert.match(preview, /API_KEY/);
  assert.doesNotMatch(preview, /never-render|also-private/);
});

test('loader includes source-only definitions without putting their credentials in state', async () => {
  const replies = { list: [], diff: {}, mcp: { sourcePath: 'source.yaml', changes: [] }, plugin: { packages: {} }, hooks: {} };
  const io = {
    run: async () => ({ code: 0, stdout: JSON.stringify({ version: 'test', targets: [], agents: { targets: [] } }), stderr: '' }),
    job: async args => ({ code: 0, stdout: JSON.stringify(replies[args[0]]), stderr: '' }),
    sh: async () => ({ code: 0, stdout: JSON.stringify({ servers: { existing: { command: 'npx', env: { SECRET: 'private-fixture-value' } } } }), stderr: '' }),
  };
  const state = await loadResources(io, null, null, false);
  assert.equal(state.error, null);
  assert.equal(counts(buildItems('global', state.raw.global)).mcp, 1);
  assert.doesNotMatch(JSON.stringify(state), /private-fixture-value/);
});

test('the complete imported MCP catalogue is visible', () => {
  const text = fs.readFileSync(new URL('../mcp-config/servers.yaml', import.meta.url), 'utf8');
  const original = Object.keys(JSON.parse(text).servers);
  assert.equal(original.length, 45);
  assert.deepEqual(mcpNames(text), original);
  assert.equal(counts(buildItems('global', { list: [], mcp: { serverNames: original, changes: [] } })).mcp, 45);
});

const plugins = { packages: { first: { bindings: { codex: { id: 'first@market', version: '1' } } }, second: { bindings: { claude: { id: 'second@market', version: '2' } } } } };

test('known plugin counts stay visible while native verification is pending', () => {
  const raw = { global: { plugins, pending: ['plugins'] } };
  const progress = resourceProgress(raw);
  const items = buildItems('global', raw.global);
  assert.equal(inventoryCount('plugins', counts(items).plugins, progress), '2');
  assert.ok(items.every(item => item.state === 'unknown'));
  assert.equal(inventoryCount('plugins', 0, resourceProgress({ global: { pending: ['plugins'] } })), '…');
});

test('persisted plugin snapshots contain display metadata without native configuration or credentials', () => {
  const snapshot = pluginSnapshot({ packages: { first: { source: 'private-source-value', env: { KEY: 'private-env-value' }, bindings: { codex: { id: 'private-native-id', version: '1', token: 'private-token-value' } } } }, hosts: [{ secret: 'private-host-value' }] });
  assert.equal(counts(buildItems('global', { plugins: snapshot, pending: ['plugins'] })).plugins, 1);
  assert.doesNotMatch(JSON.stringify(snapshot), /private-/);
  assert.equal(snapshot.cached, true);
});

test('cold-start cached plugins are available before a slow native inventory resolves', async () => {
  let release, firstReady;
  const native = new Promise(resolve => { release = resolve; });
  const available = new Promise(resolve => { firstReady = resolve; });
  const replies = { list: [], diff: {}, mcp: {}, hooks: {} };
  const io = {
    run: async () => ({ code: 0, stdout: '{"targets":[]}', stderr: '' }),
    sh: async () => ({ code: 0, stdout: 'norepo', stderr: '' }),
    job: async args => args[0] === 'plugin' ? native : { code: 0, stdout: JSON.stringify(replies[args[0]]), stderr: '' },
  };
  const work = loadResources(io, null, null, false, state => {
    if (state.raw.global.list && state.raw.global.pending.includes('plugins')) firstReady(state);
  }, { global: { plugins: pluginSnapshot(plugins) } });
  const partial = await available;
  assert.equal(counts(buildItems('global', partial.raw.global)).plugins, 2);
  assert.ok(buildItems('global', partial.raw.global).every(item => item.state === 'unknown'));
  release({ code: 0, stdout: JSON.stringify({ packages: { first: plugins.packages.first } }), stderr: '' });
  const final = await work;
  assert.equal(counts(buildItems('global', final.raw.global)).plugins, 1);
  assert.ok(buildItems('global', final.raw.global).every(item => item.state === 'ok'));
});

test('frequent resource refreshes reuse recent plugin verification and an explicit refresh checks again', async () => {
  let pluginReads = 0;
  const replies = { list: [], diff: {}, mcp: {}, hooks: {} };
  const io = {
    run: async () => ({ code: 0, stdout: '{"targets":[]}', stderr: '' }),
    sh: async () => ({ code: 0, stdout: 'norepo', stderr: '' }),
    job: async args => { if (args[0] === 'plugin') pluginReads++; return { code: 0, stdout: JSON.stringify(args[0] === 'plugin' ? plugins : replies[args[0]]), stderr: '' }; },
  };
  const previous = { global: { plugins, pluginsReadAt: Date.now() } };
  const warm = await loadResources(io, null, null, false, () => {}, previous);
  assert.equal(pluginReads, 0);
  assert.equal(counts(buildItems('global', warm.raw.global)).plugins, 2);
  assert.ok(!warm.raw.global.pending.includes('plugins'));
  await loadResources(io, null, null, true, () => {}, warm.raw);
  assert.equal(pluginReads, 1);
});

test('a failed native inventory keeps recorded plugins visible with unconfirmed status', async () => {
  const replies = { list: [], diff: {}, mcp: {}, hooks: {} };
  const io = {
    run: async () => ({ code: 0, stdout: '{"targets":[]}', stderr: '' }),
    sh: async () => ({ code: 0, stdout: 'norepo', stderr: '' }),
    job: async args => args[0] === 'plugin' ? { code: 1, stdout: '', stderr: 'native inventory unavailable' } : { code: 0, stdout: JSON.stringify(replies[args[0]]), stderr: '' },
  };
  const state = await loadResources(io, null, null, false, () => {}, { global: { plugins: pluginSnapshot(plugins) } });
  const progress = resourceProgress(state.raw);
  assert.equal(inventoryCount('plugins', counts(buildItems('global', state.raw.global)).plugins, progress), '2');
  assert.ok(buildItems('global', state.raw.global).every(item => item.state === 'unknown'));
  assert.equal(progress.incomplete, true);
});
