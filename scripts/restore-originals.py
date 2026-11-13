from pathlib import Path, PurePosixPath
import sys, json, zipfile, hashlib

if len(sys.argv) != 3:
    raise SystemExit('Usage: python scripts/restore-originals.py <decrypted.zip> <new-staging-directory>')
archive, destination = Path(sys.argv[1]), Path(sys.argv[2]).resolve()
if destination.exists(): raise SystemExit('Staging directory already exists; choose a new directory.')
with zipfile.ZipFile(archive) as z:
    manifest=json.loads(z.read('manifest.json'))
    for entry in manifest['entries']:
        rel=PurePosixPath(entry['path'])
        if rel.is_absolute() or '..' in rel.parts or any(':' in part or '\\' in part for part in rel.parts):
            raise SystemExit('Invalid path in backup manifest')
        data=z.read('objects/'+entry['sha256'])
        if hashlib.sha256(data).hexdigest()!=entry['sha256'] or len(data)!=entry['bytes']:
            raise SystemExit('Original content failed integrity check')
        output=destination.joinpath(*rel.parts)
        output.parent.mkdir(parents=True,exist_ok=True)
        output.write_bytes(data)
print(f"Restored {len(manifest['entries'])} original files into {destination}")
