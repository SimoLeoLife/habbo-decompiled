// Extracted from HabboAirLauncher.deobf.js, line 291158.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/utils/class_1778.as
// Obfuscated name: _ifa11931d95ed3c

class {
  static {
    n(this, "class_1778");
  }
  var_977;
  var_2856;
  var_2083;
  _width = 0;
  _height = 0;
  constructor(e, r) {
    ((this._width = e),
      (this._height = r),
      (this.var_977 = new Array(e * r).fill(0)),
      (this.var_2856 = new Array(e * r).fill(!1)),
      (this.var_2083 = new Array(e * r).fill(!1)));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  dispose() {
    ((this.var_977 = []),
      (this.var_2856 = []),
      (this.var_2083 = []),
      (this._width = 0),
      (this._height = 0));
  }
  validPosition(e, r) {
    return e >= 0 && e < this._width && r >= 0 && r < this._height;
  }
  getTileHeight(e, r) {
    return this.validPosition(e, r) ? this.var_977[r * this._width + e] : 0;
  }
  setTileHeight(e, r, t) {
    this.validPosition(e, r) && (this.var_977[r * this._width + e] = t);
  }
  _r1c17919275b66f(e, r, t) {
    this.validPosition(e, r) && (this.var_2856[r * this._width + e] = t);
  }
  _r14f6fa45984c2a(e, r, t) {
    this.validPosition(e, r) && (this.var_2083[r * this._width + e] = t);
  }
  validateLocation(e, r, t, i, s, o, d, c, f, l = -1) {
    if (!this.validPosition(e, r) || !this.validPosition(e + t - 1, r + i - 1)) return !1;
    ((s < 0 || s >= this._width) && (s = 0),
      (o < 0 || o >= this._height) && (o = 0),
      (d = Math.min(d, this._width - s)),
      (c = Math.min(c, this._height - o)),
      l === -1 && (l = this.getTileHeight(e, r)));
    for (let b = r; b < r + i; b++)
      for (let _ = e; _ < e + t; _++)
        if (_ < s || _ >= s + d || b < o || b >= o + c) {
          let h = b * this._width + _;
          if (f) {
            if (!this.var_2083[h]) return !1;
          } else if (
            this.var_2856[h] ||
            !this.var_2083[h] ||
            Math.abs(this.var_977[h] - l) > 0.01
          )
            return !1;
        }
    return !0;
  }
}
