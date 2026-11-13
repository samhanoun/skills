import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildItems, counts, mcpNames, mcpServer, rowState } from '../herdr/mods/skillshare/model.js';
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
