// Estratto da HabboAirLauncher.deobf.js, riga 62142.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/hurlant/crypto/hash/MD5.as
// Nome offuscato: _i336c82acf32611

class a {
  static {
    n(this, "MD5");
  }
  static const_127 = 16;
  pad_size = 48;
  _r02236959299277() {
    return 64;
  }
  getHashSize() {
    return a.const_127;
  }
  _r17f02e8a2ec2c1() {
    return this.pad_size;
  }
  hash(e) {
    let r = Array.from(e.toUint8Array()),
      t = r.length * 8;
    for (; r.length % 4 !== 0;) r.push(0);
    let i = [];
    for (let d = 0; d < r.length; d += 4)
      i.push(
        ((r[d] ?? 0) | ((r[d + 1] ?? 0) << 8) | ((r[d + 2] ?? 0) << 16) | ((r[d + 3] ?? 0) << 24)) >>> 0,
      );
    let s = this._r2589cc9b3f14e1(i, t >>> 0),
      o = new re();
    for (let d = 0; d < 4; d++)
      (o.writeByte(s[d] ?? 0),
        o.writeByte((s[d] ?? 0) >>> 8),
        o.writeByte((s[d] ?? 0) >>> 16),
        o.writeByte((s[d] ?? 0) >>> 24));
    return ((o.position = 0), o);
  }
  toString() {
    return "md5";
  }
  _r2589cc9b3f14e1(e, r) {
    ((e[r >> 5] = (e[r >> 5] ?? 0) | (128 << (r % 32))), (e[(((r + 64) >>> 9) << 4) + 14] = r >>> 0));
    let t = 1732584193,
      i = 4023233417,
      s = 2562383102,
      o = 271733878;
    for (let d = 0; d < e.length; d += 16) {
      for (let _ = 0; _ < 16; _++) e[d + _] = e[d + _] ?? 0;
      let c = t,
        f = i,
        l = s,
        b = o;
      ((t = this.ff(t, i, s, o, e[d + 0] ?? 0, 7, 3614090360)),
        (o = this.ff(o, t, i, s, e[d + 1] ?? 0, 12, 3905402710)),
        (s = this.ff(s, o, t, i, e[d + 2] ?? 0, 17, 606105819)),
        (i = this.ff(i, s, o, t, e[d + 3] ?? 0, 22, 3250441966)),
        (t = this.ff(t, i, s, o, e[d + 4] ?? 0, 7, 4118548399)),
        (o = this.ff(o, t, i, s, e[d + 5] ?? 0, 12, 1200080426)),
        (s = this.ff(s, o, t, i, e[d + 6] ?? 0, 17, 2821735955)),
        (i = this.ff(i, s, o, t, e[d + 7] ?? 0, 22, 4249261313)),
        (t = this.ff(t, i, s, o, e[d + 8] ?? 0, 7, 1770035416)),
        (o = this.ff(o, t, i, s, e[d + 9] ?? 0, 12, 2336552879)),
        (s = this.ff(s, o, t, i, e[d + 10] ?? 0, 17, 4294925233)),
        (i = this.ff(i, s, o, t, e[d + 11] ?? 0, 22, 2304563134)),
        (t = this.ff(t, i, s, o, e[d + 12] ?? 0, 7, 1804603682)),
        (o = this.ff(o, t, i, s, e[d + 13] ?? 0, 12, 4254626195)),
        (s = this.ff(s, o, t, i, e[d + 14] ?? 0, 17, 2792965006)),
        (i = this.ff(i, s, o, t, e[d + 15] ?? 0, 22, 1236535329)),
        (t = this.gg(t, i, s, o, e[d + 1] ?? 0, 5, 4129170786)),
        (o = this.gg(o, t, i, s, e[d + 6] ?? 0, 9, 3225465664)),
        (s = this.gg(s, o, t, i, e[d + 11] ?? 0, 14, 643717713)),
        (i = this.gg(i, s, o, t, e[d + 0] ?? 0, 20, 3921069994)),
        (t = this.gg(t, i, s, o, e[d + 5] ?? 0, 5, 3593408605)),
        (o = this.gg(o, t, i, s, e[d + 10] ?? 0, 9, 38016083)),
        (s = this.gg(s, o, t, i, e[d + 15] ?? 0, 14, 3634488961)),
        (i = this.gg(i, s, o, t, e[d + 4] ?? 0, 20, 3889429448)),
        (t = this.gg(t, i, s, o, e[d + 9] ?? 0, 5, 568446438)),
        (o = this.gg(o, t, i, s, e[d + 14] ?? 0, 9, 3275163606)),
        (s = this.gg(s, o, t, i, e[d + 3] ?? 0, 14, 4107603335)),
        (i = this.gg(i, s, o, t, e[d + 8] ?? 0, 20, 1163531501)),
        (t = this.gg(t, i, s, o, e[d + 13] ?? 0, 5, 2850285829)),
        (o = this.gg(o, t, i, s, e[d + 2] ?? 0, 9, 4243563512)),
        (s = this.gg(s, o, t, i, e[d + 7] ?? 0, 14, 1735328473)),
        (i = this.gg(i, s, o, t, e[d + 12] ?? 0, 20, 2368359562)),
        (t = this.hh(t, i, s, o, e[d + 5] ?? 0, 4, 4294588738)),
        (o = this.hh(o, t, i, s, e[d + 8] ?? 0, 11, 2272392833)),
        (s = this.hh(s, o, t, i, e[d + 11] ?? 0, 16, 1839030562)),
        (i = this.hh(i, s, o, t, e[d + 14] ?? 0, 23, 4259657740)),
        (t = this.hh(t, i, s, o, e[d + 1] ?? 0, 4, 2763975236)),
        (o = this.hh(o, t, i, s, e[d + 4] ?? 0, 11, 1272893353)),
        (s = this.hh(s, o, t, i, e[d + 7] ?? 0, 16, 4139469664)),
        (i = this.hh(i, s, o, t, e[d + 10] ?? 0, 23, 3200236656)),
        (t = this.hh(t, i, s, o, e[d + 13] ?? 0, 4, 681279174)),
        (o = this.hh(o, t, i, s, e[d + 0] ?? 0, 11, 3936430074)),
        (s = this.hh(s, o, t, i, e[d + 3] ?? 0, 16, 3572445317)),
        (i = this.hh(i, s, o, t, e[d + 6] ?? 0, 23, 76029189)),
        (t = this.hh(t, i, s, o, e[d + 9] ?? 0, 4, 3654602809)),
        (o = this.hh(o, t, i, s, e[d + 12] ?? 0, 11, 3873151461)),
        (s = this.hh(s, o, t, i, e[d + 15] ?? 0, 16, 530742520)),
        (i = this.hh(i, s, o, t, e[d + 2] ?? 0, 23, 3299628645)),
        (t = this.ii(t, i, s, o, e[d + 0] ?? 0, 6, 4096336452)),
        (o = this.ii(o, t, i, s, e[d + 7] ?? 0, 10, 1126891415)),
        (s = this.ii(s, o, t, i, e[d + 14] ?? 0, 15, 2878612391)),
        (i = this.ii(i, s, o, t, e[d + 5] ?? 0, 21, 4237533241)),
        (t = this.ii(t, i, s, o, e[d + 12] ?? 0, 6, 1700485571)),
        (o = this.ii(o, t, i, s, e[d + 3] ?? 0, 10, 2399980690)),
        (s = this.ii(s, o, t, i, e[d + 10] ?? 0, 15, 4293915773)),
        (i = this.ii(i, s, o, t, e[d + 1] ?? 0, 21, 2240044497)),
        (t = this.ii(t, i, s, o, e[d + 8] ?? 0, 6, 1873313359)),
        (o = this.ii(o, t, i, s, e[d + 15] ?? 0, 10, 4264355552)),
        (s = this.ii(s, o, t, i, e[d + 6] ?? 0, 15, 2734768916)),
        (i = this.ii(i, s, o, t, e[d + 13] ?? 0, 21, 1309151649)),
        (t = this.ii(t, i, s, o, e[d + 4] ?? 0, 6, 4149444226)),
        (o = this.ii(o, t, i, s, e[d + 11] ?? 0, 10, 3174756917)),
        (s = this.ii(s, o, t, i, e[d + 2] ?? 0, 15, 718787259)),
        (i = this.ii(i, s, o, t, e[d + 9] ?? 0, 21, 3951481745)),
        (t = (t + c) >>> 0),
        (i = (i + f) >>> 0),
        (s = (s + l) >>> 0),
        (o = (o + b) >>> 0));
    }
    return [t, i, s, o];
  }
  rol(e, r) {
    return ((e << r) | (e >>> (32 - r))) >>> 0;
  }
  cmn(e, r, t, i, s, o) {
    return (this.rol((r + e + i + o) >>> 0, s) + t) >>> 0;
  }
  ff(e, r, t, i, s, o, d) {
    return this.cmn(((r & t) | (~r & i)) >>> 0, e, r, s, o, d);
  }
  gg(e, r, t, i, s, o, d) {
    return this.cmn(((r & i) | (t & ~i)) >>> 0, e, r, s, o, d);
  }
  hh(e, r, t, i, s, o, d) {
    return this.cmn((r ^ t ^ i) >>> 0, e, r, s, o, d);
  }
  ii(e, r, t, i, s, o, d) {
    return this.cmn((t ^ (r | ~i)) >>> 0, e, r, s, o, d);
  }
}
