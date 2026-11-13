import fs from 'node:fs';
import path from 'node:path';
import { createDecipheriv, createHash } from 'node:crypto';

// Decrypts into a new staging ZIP. It never overwrites live configuration files.
const [keyFile, output] = process.argv.slice(2);
if (!keyFile || !output) throw new Error('Usage: node scripts/decrypt-backup.mjs <recovery.key> <new-output.zip>');
if (fs.existsSync(output)) throw new Error('Output already exists');
const root = path.resolve(import.meta.dirname, '..', 'backup');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
const key = Buffer.from(fs.readFileSync(keyFile, 'utf8').trim(), 'hex');
if (key.length !== 32) throw new Error('Recovery key must be 32 bytes encoded as hex');
const all = [];
for (const item of manifest.parts) {
  if (path.basename(item.file) !== item.file) throw new Error('Invalid backup part name');
  const b = fs.readFileSync(path.join(root, item.file));
  if (b.length !== item.bytes || createHash('sha256').update(b).digest('hex') !== item.sha256) throw new Error('Backup part failed integrity check');
  all.push(b);
}
const encrypted = Buffer.concat(all);
if (encrypted.subarray(0, 8).toString() !== 'HSBKUP01') throw new Error('Unknown archive format');
const decipher = createDecipheriv('aes-256-gcm', key, encrypted.subarray(8, 20));
decipher.setAuthTag(encrypted.subarray(-16));
const plain = Buffer.concat([decipher.update(encrypted.subarray(20, -16)), decipher.final()]);
if (createHash('sha256').update(plain).digest('hex') !== manifest.source_sha256) throw new Error('Restored archive failed integrity check');
fs.writeFileSync(output, plain, { flag: 'wx', mode: 0o600 });
console.log('Verified original archive written to ' + path.resolve(output));
