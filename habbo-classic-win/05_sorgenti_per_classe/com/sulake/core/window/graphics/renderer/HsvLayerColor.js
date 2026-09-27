// Extracted from HabboAirLauncher.deobf.js, line 137789.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/HsvLayerColor.as
// Obfuscated name: _i320ddba428c1bd

class {
  static {
    n(this, "HsvLayerColor");
  }
  static _rac172262d7313d(e, r, t) {
    let i = this.deriveColor(r, t);
    ((e.redMultiplier = ((i & 16711680) >> 16) / 255),
      (e.greenMultiplier = ((i & 65280) >> 8) / 255),
      (e.blueMultiplier = (i & 255) / 255),
      (e.alphaMultiplier = 1),
      (e.redOffset = 0),
      (e.greenOffset = 0),
      (e.blueOffset = 0),
      (e.alphaOffset = 0));
  }
  static deriveColor(e, r) {
    Number.isNaN(r) && (r = 0);
    let t = ((e & 16711680) >> 16) / 255,
      i = ((e & 65280) >> 8) / 255,
      s = (e & 255) / 255,
      o = this.rgbToHsv(t, i, s);
    return (
      o.s === 0
        ? ((o.s = 0), (o.v -= r))
        : ((o.s = this.clamp01(o.s + r)), (o.v = this.clamp01(o.v - r / 2))),
      this.hsvToRgb(o.h, o.s, o.v)
    );
  }
  static rgbToHsv(e, r, t) {
    let i = Math.max(e, r, t),
      s = Math.min(e, r, t),
      o = i - s,
      d = 0,
      c = i === 0 ? 0 : o / i;
    return (
      o !== 0 &&
        (i === e
          ? ((d = (r - t) / o), r < t && (d += 6))
          : i === r
            ? (d = (t - e) / o + 2)
            : (d = (e - r) / o + 4),
        (d /= 6)),
      { h: d, s: c, v: i }
    );
  }
  static hsvToRgb(e, r, t) {
    if (((e -= Math.floor(e)), r === 0)) return this._rc34b3c00c5ccec(t, t, t);
    let i = e * 6,
      s = Math.trunc(Math.floor(i)),
      o = i - s,
      d = t * (1 - r),
      c = t * (1 - r * o),
      f = t * (1 - r * (1 - o));
    switch (s % 6) {
      case 0:
        return this._rc34b3c00c5ccec(t, f, d);
      case 1:
        return this._rc34b3c00c5ccec(c, t, d);
      case 2:
        return this._rc34b3c00c5ccec(d, t, f);
      case 3:
        return this._rc34b3c00c5ccec(d, c, t);
      case 4:
        return this._rc34b3c00c5ccec(f, d, t);
      default:
        return this._rc34b3c00c5ccec(t, d, c);
    }
  }
  static _rc34b3c00c5ccec(e, r, t) {
    return (
      ((this._r325265e129aa50(e) << 16) | (this._r325265e129aa50(r) << 8) | this._r325265e129aa50(t)) >>> 0
    );
  }
  static _r325265e129aa50(e) {
    return Math.round(this.clamp01(e) * 255) >>> 0;
  }
  static clamp01(e) {
    return Number.isNaN(e) || e < 0 ? 0 : e > 1 ? 1 : e;
  }
}
