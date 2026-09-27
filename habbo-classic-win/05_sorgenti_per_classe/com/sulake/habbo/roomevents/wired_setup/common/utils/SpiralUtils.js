// Extracted from HabboAirLauncher.deobf.js, line 367614.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/utils/SpiralUtils.as
// Obfuscated name: _i5ce346815e5157

class a {
  static {
    n(this, "SpiralUtils");
  }
  static parseSpiralVector(e, r) {
    let t = a._r0af997fc8830c4(e),
      i = r * 2 + 1,
      s = [];
    for (let d = 0; d < i; d++) {
      s[d] = [];
      for (let c = 0; c < i; c++) s[d][c] = !1;
    }
    let o = a._r2c98dd003d3d7c(r);
    for (let d of o) d.rank < t.length && t[d.rank] && (s[d.x + r][d.y + r] = !0);
    return s;
  }
  static _rd218278419de58(e, r) {
    let t = r * 2 + 1,
      i = t * t,
      s = new Array(i).fill(!1),
      o = a._r2c98dd003d3d7c(r);
    for (let d of o) e[d.x + r]?.[d.y + r] && (s[d.rank] = !0);
    return a._r391eafb8a50e40(s);
  }
  static _r2c98dd003d3d7c(e) {
    let r = e * 2 + 1,
      t = r * r,
      i = [],
      s = 0,
      o = 0,
      d = 0,
      c = [1, 0];
    for (let f = 1; f <= r; f++)
      for (let l = 0; l < 2; l++) {
        for (let b = 0; b < f; b++)
          if ((i.push({ rank: s, x: o, y: d }), (o += c[0]), (d += c[1]), (s += 1), s === t)) return i;
        c = a._rb20a6628f97871(c);
      }
    return i;
  }
  static _rb20a6628f97871(e) {
    return e[0] === 0 && e[1] === -1
      ? [-1, 0]
      : e[0] === 1 && e[1] === 0
        ? [0, -1]
        : e[0] === 0 && e[1] === 1
          ? [1, 0]
          : [0, 1];
  }
  static _r0af997fc8830c4(e) {
    let r = new Uint8Array(e.length * 4),
      t = new DataView(r.buffer);
    for (let s = 0; s < e.length; s++) t.setInt32(s * 4, e[s], !0);
    let i = [];
    for (let s of r) for (let o = 0; o < 8; o++) i.push((s & (1 << o)) > 0);
    return i;
  }
  static _r391eafb8a50e40(e) {
    let r = Math.ceil(e.length / 8),
      t = Math.ceil(r / 4) * 4,
      i = new Uint8Array(t),
      s = 0,
      o = 0;
    for (; s < e.length;) {
      let f = 0;
      for (let l = 0; l < 8; l++) (s < e.length && e[s] && (f |= 1 << l), (s += 1));
      ((i[o] = f), (o += 1));
    }
    let d = new DataView(i.buffer),
      c = [];
    for (let f = 0; f + 4 <= i.byteLength; f += 4) c.push(d.getInt32(f, !0));
    return c;
  }
}
