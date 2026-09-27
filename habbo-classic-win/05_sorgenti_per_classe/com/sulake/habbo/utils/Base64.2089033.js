// Extracted from HabboAirLauncher.deobf.js, line 64575.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/Base64.as
// Obfuscated name: _iba5608088cdb59

class a {
  static {
    n(this, "Base64");
  }
  static _r446422666ccd49 = a._initEncoreChar();
  static _r5e55e406bdd7b3 = a._initDecodeChar();
  static encode(e) {
    return a._r5f5a1398cefe97(re._r2e42fd51a500c0(e));
  }
  static decode(e) {
    let r = a.decodeToByteArray(e);
    return r.readUTFBytes(r.length);
  }
  static _r5f5a1398cefe97(e) {
    let r = e.toUint8Array(),
      t = "",
      i = 0,
      s = r.length % 3,
      o = r.length - s;
    for (; i < o;) {
      let d = ((r[i++] ?? 0) << 16) | ((r[i++] ?? 0) << 8) | (r[i++] ?? 0);
      t += String.fromCharCode(
        a._r446422666ccd49[(d >>> 18) & 63] ?? 0,
        a._r446422666ccd49[(d >>> 12) & 63] ?? 0,
        a._r446422666ccd49[(d >>> 6) & 63] ?? 0,
        a._r446422666ccd49[d & 63] ?? 0,
      );
    }
    if (s === 1) {
      let d = r[i] ?? 0;
      t += String.fromCharCode(
        a._r446422666ccd49[(d >>> 2) & 63] ?? 0,
        a._r446422666ccd49[(d & 3) << 4] ?? 0,
        61,
        61,
      );
    } else if (s === 2) {
      let d = ((r[i++] ?? 0) << 8) | (r[i] ?? 0);
      t += String.fromCharCode(
        a._r446422666ccd49[(d >>> 10) & 63] ?? 0,
        a._r446422666ccd49[(d >>> 4) & 63] ?? 0,
        a._r446422666ccd49[(d & 15) << 2] ?? 0,
        61,
      );
    }
    return t;
  }
  static decodeToByteArray(e) {
    let r = 0,
      t = e.length,
      i = new re();
    for (; r < t;) {
      let s = a._r5e55e406bdd7b3[e.charCodeAt(r++) ?? 0] ?? -1;
      if (s === -1) break;
      let o = a._r5e55e406bdd7b3[e.charCodeAt(r++) ?? 0] ?? -1;
      if (o === -1) break;
      i.writeByte((s << 2) | ((o & 48) >> 4));
      let d = e.charCodeAt(r++) ?? 0;
      if (d === 61 || ((d = a._r5e55e406bdd7b3[d] ?? -1), d === -1)) break;
      i.writeByte(((o & 15) << 4) | ((d & 60) >> 2));
      let c = e.charCodeAt(r++) ?? 0;
      if (c === 61 || ((c = a._r5e55e406bdd7b3[c] ?? -1), c === -1)) break;
      i.writeByte(((d & 3) << 6) | c);
    }
    return ((i.position = 0), i);
  }
  static _r7054b1532491d2(e) {
    return a.decodeToByteArray(e);
  }
  static _initEncoreChar() {
    let e = new Array(64),
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (let t = 0; t < 64; t++) e[t] = r.charCodeAt(t);
    return e;
  }
  static _initDecodeChar() {
    return [
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55,
      56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
      15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34,
      35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
      -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    ];
  }
}
