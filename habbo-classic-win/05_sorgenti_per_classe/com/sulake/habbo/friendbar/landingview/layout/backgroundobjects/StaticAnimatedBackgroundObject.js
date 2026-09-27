// Estratto da HabboAirLauncher.deobf.js, riga 209606.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/layout/backgroundobjects/StaticAnimatedBackgroundObject.as
// Nome offuscato: _i1288b4165a60f6

class extends BackgroundObject {
  static {
    n(this, "StaticAnimatedBackgroundObject");
  }
  var_2934 = 0;
  _imageBaseUri;
  var_939;
  _r819ec1365728d8;
  var_1886;
  var_1676;
  _rd9c590a12bf77c;
  var_5027 = 0;
  constructor(e, r, t, i, s) {
    super(e, r, t, i, s);
    let o = s.split(";");
    ((this._imageBaseUri = `${i.getProperty("image.library.url")}reception/${o[0] ?? ""}`),
      (this.var_939 = Number(o[2] ?? 0)),
      (this._r819ec1365728d8 = Number(o[3] ?? 1)),
      (this.var_1886 = Number(o[4] ?? 0)),
      (this.var_1676 = Number(o[5] ?? 0)),
      (this._rd9c590a12bf77c = String(o[6] ?? "").split(",")),
      this.events.addEventListener(E0.MOVING_OBJECT_PATH_RESET, this._ra9469aca2c28c0),
      this.sprite != null &&
        ((this.sprite.x = this.var_1886), (this.sprite.y = this.var_1676)));
  }
  dispose() {
    (this.events.removeEventListener(E0.MOVING_OBJECT_PATH_RESET, this._ra9469aca2c28c0), super.dispose());
  }
  update(e) {
    let r = this.sprite;
    if (r == null || this._r819ec1365728d8 <= 0 || this.var_939 <= 0) return;
    let t = 1e3 / this._r819ec1365728d8,
      i = this.var_2934 - this.var_5027,
      s = this.var_939 - 1;
    (this._rd9c590a12bf77c.length > 0
      ? i < this.var_939 * t && (s = Math.trunc(i / t))
      : (s = Math.trunc(this.var_2934 / t) % this.var_939),
      (r.assetUri = `${this._imageBaseUri}${s + 1}.png`),
      (this.var_2934 += e));
  }
  _ra9469aca2c28c0 = n((e) => {
    this._rd9c590a12bf77c.includes(String(e.objectId)) && (this.var_5027 = this.var_2934);
  }, "_ra9469aca2c28c0");
}
