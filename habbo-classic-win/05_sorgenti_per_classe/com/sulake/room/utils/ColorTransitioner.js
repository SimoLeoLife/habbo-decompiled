// Extracted from HabboAirLauncher.deobf.js, line 79848.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/ColorTransitioner.as
// Obfuscated name: _id7d64f91cbaa45

class {
  static {
    n(this, "ColorTransitioner");
  }
  _color = 16777215;
  var_1803 = 255;
  _originalColor = 16777215;
  var_3050 = 255;
  _targetColor = 16777215;
  var_2815 = 255;
  _colorChangedTime = 0;
  _colorTransitionLength = 0;
  constructor(e = 16777215, r = 255) {
    ((this._color = e),
      (this.var_1803 = r),
      (this._originalColor = e),
      (this.var_3050 = r),
      (this._targetColor = e),
      (this.var_2815 = r));
  }
  startTransition(e, r, t, i = 1500) {
    ((this._originalColor = this._color),
      (this.var_3050 = this.var_1803),
      (this._targetColor = e),
      (this.var_2815 = r),
      (this._colorChangedTime = t),
      (this._colorTransitionLength = i));
  }
  updateColor(e) {
    if (!this._colorChangedTime) return !1;
    if (e - this._colorChangedTime >= this._colorTransitionLength)
      ((this._color = this._targetColor),
        (this.var_1803 = this.var_2815),
        (this._colorChangedTime = 0));
    else {
      let r = (this._originalColor >> 16) & 255,
        t = (this._originalColor >> 8) & 255,
        i = this._originalColor & 255,
        s = (this._targetColor >> 16) & 255,
        o = (this._targetColor >> 8) & 255,
        d = this._targetColor & 255,
        c = (e - this._colorChangedTime) / this._colorTransitionLength;
      ((r = r + (s - r) * c),
        (t = t + (o - t) * c),
        (i = i + (d - i) * c),
        (this._color = ((r << 16) + (t << 8) + i) >>> 0),
        (this.var_1803 =
          this.var_3050 + (this.var_2815 - this.var_3050) * c));
    }
    return !0;
  }
  get color() {
    let e = qn._r6ca1d657712155(this._color);
    return ((e = (e & 16776960) + this.var_1803), qn.hslToRGB(e));
  }
}
