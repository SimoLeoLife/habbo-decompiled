// Estrae un bundle HAB: header 20 byte (magic "HAB\0", u16 versione, u16 flag,
// u32 indice compresso, u32 indice decompresso, u32 dati), indice JSON zlib, poi i dati.
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { inflateSync } from 'node:zlib';
import path from 'node:path';

const EXT = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/gif': '.gif', 'text/xml': '.xml', 'application/xml': '.xml', 'text/plain': '.txt', 'application/json': '.json', 'font/ttf': '.ttf', 'application/x-font-ttf': '.ttf', 'audio/mpeg': '.mp3', 'application/octet-stream': '.bin', 'application/x-font-truetype': '.ttf', 'sound/mp3': '.mp3' };

function extract(file, outDir) {
  const b = readFileSync(file);
  if (b.subarray(0, 4).toString('latin1') !== 'HAB\0') throw new Error('magic');
  const idxLen = b.readUInt32LE(8), idxRaw = b.readUInt32LE(12), dataLen = b.readUInt32LE(16);
  if (20 + idxLen + dataLen !== b.length) throw new Error('length');
  const idx = JSON.parse(inflateSync(b.subarray(20, 20 + idxLen)).toString('utf8'));
  if (inflateSync(b.subarray(20, 20 + idxLen)).length !== idxRaw) throw new Error('idx');
  const data = b.subarray(20 + idxLen);
  mkdirSync(outDir, { recursive: true });
  const { entries, ...meta } = idx;
  writeFileSync(path.join(outDir, '_index.json'), JSON.stringify({ ...meta, entries }, null, 2));
  for (const e of entries) {
    let c = data.subarray(e.offset, e.offset + e.storedLength);
    if (e.compression === 'deflate') c = inflateSync(c);
    if (c.length !== e.originalLength) throw new Error(`entry ${e.name}`);
    const safe = e.name.replace(/[<>:"|?*\\]/g, '_').replace(/^\/+/, '');
    const ext = EXT[e.mimeType] ?? '';
    const out = path.join(outDir, 'files', path.extname(safe) ? safe : safe + ext);
    mkdirSync(path.dirname(out), { recursive: true });
    writeFileSync(out, c);
  }
  return entries.length;
}

const [src, dst] = process.argv.slice(2);
let tot = 0;
for (const sub of ['generated', 'local_include'])
  for (const f of readdirSync(path.join(src, sub)).filter(f => f.endsWith('.hab'))) {
    const n = extract(path.join(src, sub, f), path.join(dst, sub, f.replace(/\.hab$/, '')));
    console.log(`${sub}/${f}\t${n}`); tot += n;
  }
console.log('TOTALE', tot);
