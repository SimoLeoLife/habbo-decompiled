// Extracted from HabboAirLauncher.deobf.js, line 62316.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/crypto/hash/SHA1.as
// Obfuscated name: _i70acda92c9464d

class a extends SHABase {
  static {
    n(this, "SHA1");
  }
  static const_127 = 20;
  getHashSize() {
    return a.const_127;
  }
  core(e, r) {
    ((e[r >> 5] = (e[r >> 5] ?? 0) | (128 << (24 - (r % 32)))), (e[(((r + 64) >> 9) << 4) + 15] = r >>> 0));
    let t = new Array(80).fill(0),
      i = 1732584193,
      s = 4023233417,
      o = 2562383102,
      d = 271733878,
      c = 3285377520;
    for (let f = 0; f < e.length; f += 16) {
      let l = i,
        b = s,
        _ = o,
        h = d,
        p = c;
      for (let m = 0; m < 80; m++) {
        m < 16
          ? (t[m] = e[f + m] ?? 0)
          : (t[m] = this.rol(
              (t[m - 3] ?? 0) ^ (t[m - 8] ?? 0) ^ (t[m - 14] ?? 0) ^ (t[m - 16] ?? 0),
              1,
            ));
        let v =
          (this.rol(i, 5) + this.ft(m, s, o, d) + c + (t[m] ?? 0) + this.kt(m)) >>>
          0;
        ((c = d), (d = o), (o = this.rol(s, 30)), (s = i), (i = v));
      }
      ((i = (i + l) >>> 0),
        (s = (s + b) >>> 0),
        (o = (o + _) >>> 0),
        (d = (d + h) >>> 0),
        (c = (c + p) >>> 0));
    }
    return [i, s, o, d, c];
  }
  toString() {
    return "sha1";
  }
  rol(e, r) {
    return ((e << r) | (e >>> (32 - r))) >>> 0;
  }
  ft(e, r, t, i) {
    return e < 20
      ? ((r & t) | (~r & i)) >>> 0
      : e < 40
        ? (r ^ t ^ i) >>> 0
        : e < 60
          ? ((r & t) | (r & i) | (t & i)) >>> 0
          : (r ^ t ^ i) >>> 0;
  }
  kt(e) {
    return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? 2400959708 : 3395469782;
  }
}
