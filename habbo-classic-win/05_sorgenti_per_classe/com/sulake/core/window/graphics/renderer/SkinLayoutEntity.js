// Extracted from HabboAirLauncher.deobf.js, line 137410.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/graphics/renderer/SkinLayoutEntity.as
// Obfuscated name: _i40d16acb24349e

class a {
  static {
    n(this, "SkinLayoutEntity");
  }
  static _r264712cf719eec = 0;
  static _r87aebea4b0c9b6 = 1;
  static SCALE_TYPE_STRECH = 2;
  static SCALE_TYPE_TILED = 4;
  static SCALE_TYPE_CENTER = 8;
  static _r7df1d3fd01c3c8 = "multiply";
  static COLORIZE_METHOD_HSV_LAYER = "hsv_layer";
  color = 0;
  blend = 1;
  scaleH = a._r264712cf719eec;
  scaleV = a._r264712cf719eec;
  region = null;
  colorize = !1;
  colorizeMethod = a._r7df1d3fd01c3c8;
  shade = 0;
  _id;
  _name;
  constructor(e, r) {
    ((this._id = e), (this._name = r));
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get tags() {
    return null;
  }
  dispose() {
    this.region = null;
  }
}
