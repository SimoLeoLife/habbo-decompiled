// Extracted from HabboAirLauncher.deobf.js, line 209553.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/backgroundobjects/SpiralMovingBackgroundObject.as
// Obfuscated name: _ie8e405654db950

class extends BackgroundObject {
  static {
    n(this, "SpiralMovingBackgroundObject");
  }
  _startRadius;
  _r20155b41cb27ab;
  _posRadius;
  var_792;
  _speedRadius;
  var_5155;
  var_4955;
  var_4775;
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s);
    let o = s.split(";"),
      d = o[0] ?? "";
    ((this._startRadius = Number(o[2] ?? 0)),
      (this._r20155b41cb27ab = Number(o[3] ?? 0)),
      (this._speedRadius = Number(o[4] ?? 0)),
      (this.var_5155 = Number(o[5] ?? 0)),
      (this.var_4955 = Number(o[6] ?? 0)),
      (this.var_4775 = Number(o[7] ?? 0)),
      (this._posRadius = this._startRadius),
      (this.var_792 = this._r20155b41cb27ab),
      this.sprite != null &&
        (this.sprite.assetUri = `${i.getProperty("image.library.url")}reception/${d}.png`));
  }
  update(e) {
    let r = this.sprite;
    if (r == null) return;
    let t = this._posRadius === 0 ? 1e-4 : this._posRadius,
      i = this._startRadius / t,
      s = 1 + this._startRadius / t / 8;
    ((this._posRadius += e * this._speedRadius),
      (this.var_792 += e * this.var_5155 * i),
      r.bitmapData != null &&
        (this._posRadius <= 0 &&
          ((this._posRadius = this._startRadius),
          (r.width = r.bitmapData.width),
          (r.height = r.bitmapData.height),
          this.events.dispatchEvent(new E0(this.id))),
        this._posRadius > this._startRadius &&
          ((this._posRadius = 0),
          (r.width = 0),
          (r.height = 0),
          this.events.dispatchEvent(new E0(this.id)))),
      this.var_792 < 0 && (this.var_792 = Math.PI * 2),
      this.var_792 > Math.PI * 2 && (this.var_792 = 0),
      (r.x = this.var_4955 + Math.sin(this.var_792) * this._posRadius),
      (r.y = this.var_4775 + Math.cos(this.var_792) * this._posRadius),
      r.bitmapData != null && ((r.width = r.bitmapData.width / s), (r.height = r.bitmapData.height / s)));
  }
}
