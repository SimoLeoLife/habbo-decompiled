// Extracted from HabboAirLauncher.deobf.js, line 287337.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/rendering/VariableFxColorUtils.as
// Obfuscated name: _i5770a10ad51569

class {
  static {
    n(this, "VariableFxColorUtils");
  }
  static _r07ede42d2c7c28(e, r) {
    let t = this._rd9ede5c9f25bf6(e, 16) / 255,
      i = this._rd9ede5c9f25bf6(e, 8) / 255,
      s = this._rd9ede5c9f25bf6(e, 0) / 255,
      o = Math.max(t, i, s),
      d = Math.min(t, i, s),
      c = o - d,
      f = ((this.resolveHue(t, i, s, o, c) % 360) + 360) % 360,
      l = o === 0 ? 0 : c / o,
      b = Math.max(0, Math.min(1, o * r)),
      _ = b * l,
      h = f / 60,
      p = _ * (1 - Math.abs((h % 2) - 1)),
      m = b - _,
      v = this._rabc6caf18d7ef3(h, _, p);
    return this._rbd582c75e88ac8(
      Math.floor((v[0] + m) * 255),
      Math.floor((v[1] + m) * 255),
      Math.floor((v[2] + m) * 255),
    );
  }
  static blendVariableFxPixel(e, r, t, i) {
    let s = (e >>> 24) & 255,
      o = (e >>> 16) & 255,
      d = (e >>> 8) & 255,
      c = e & 255,
      f = (r >>> 24) & 255,
      l = (r >>> 16) & 255,
      b = (r >>> 8) & 255,
      _ = r & 255,
      h = (f * this.clampByte(i)) / 255,
      p = l,
      m = b,
      v = _;
    if (h <= 0) return e >>> 0;
    let w = h / 255,
      I = s / 255,
      C = w + I * (1 - w);
    if (C <= 0) return 0;
    t === ie.MULTIPLY
      ? ((p = this._r1a283c1573d21e(l, o)),
        (m = this._r1a283c1573d21e(b, d)),
        (v = this._r1a283c1573d21e(_, c)))
      : t === ie.ADD && ((p = Math.min(255, l + o)), (m = Math.min(255, b + d)), (v = Math.min(255, _ + c)));
    let W = I * (1 - w);
    return (
      ((this.clampByte(Math.round(C * 255)) << 24) |
        (this.clampByte(Math.round((p * w + o * W) / C)) << 16) |
        (this.clampByte(Math.round((m * w + d * W) / C)) << 8) |
        this.clampByte(Math.round((v * w + c * W) / C))) >>>
      0
    );
  }
  static _r1a283c1573d21e(e, r) {
    return this.clampByte(Math.round((this.clampByte(e) * this.clampByte(r)) / 255));
  }
  static clampByte(e) {
    return e <= 0 ? 0 : e >= 255 ? 255 : e | 0;
  }
  static _rd9ede5c9f25bf6(e, r) {
    return (e >>> r) & 255;
  }
  static _rbd582c75e88ac8(e, r, t) {
    return ((this.clampByte(e) << 16) | (this.clampByte(r) << 8) | this.clampByte(t)) >>> 0;
  }
  static resolveHue(e, r, t, i, s) {
    return s === 0
      ? 0
      : i === e
        ? 60 * (((r - t) / s) % 6)
        : i === r
          ? 60 * ((t - e) / s + 2)
          : 60 * ((e - r) / s + 4);
  }
  static _rabc6caf18d7ef3(e, r, t) {
    return e < 1
      ? [r, t, 0]
      : e < 2
        ? [t, r, 0]
        : e < 3
          ? [0, r, t]
          : e < 4
            ? [0, t, r]
            : e < 5
              ? [t, 0, r]
              : [r, 0, t];
  }
}
