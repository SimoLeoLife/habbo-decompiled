// Extracted from HabboAirLauncher.deobf.js, line 61027.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5497c416442b2b

class {
  static {
    n(this, "UnkClass_5497c4");
  }
  static encode(e) {
    let r = Math.max(1, Math.floor(e.width)),
      t = Math.max(1, Math.floor(e.height)),
      i = new Uint8Array(r * t * 4),
      s = 0;
    for (let o = 0; o < t; o++)
      for (let d = 0; d < r; d++) {
        let c = e.getPixel32(d, o) >>> 0;
        ((i[s++] = (c >>> 16) & 255),
          (i[s++] = (c >>> 8) & 255),
          (i[s++] = c & 255),
          (i[s++] = (c >>> 24) & 255));
      }
    return re.compress(encodePng({ width: r, height: t, data: i }));
  }
}
