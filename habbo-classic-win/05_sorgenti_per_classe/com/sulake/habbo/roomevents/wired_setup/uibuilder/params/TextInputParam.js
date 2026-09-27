// Extracted from HabboAirLauncher.deobf.js, line 349790.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/TextInputParam.as
// Obfuscated name: _ib5a01094bc9ef7

class a {
  constructor(e = "", r = 1e3, t = null, i = -1, s = null, o = !0, d = null) {
    this.var_4374 = e;
    this._maxCharacters = r;
    this.var_525 = t;
    this._width = i;
    this.var_5267 = s;
    this.var_2160 = o;
    this.var_4411 = d;
  }
  static {
    n(this, "TextInputParam");
  }
  static DEFAULT = new a();
  get _r314331cd566bfb() {
    return this.var_4374;
  }
  get _r980f40d20ca2e7() {
    return this._maxCharacters;
  }
  get placeholder() {
    return this.var_525;
  }
  get width() {
    return this._width;
  }
  get restrict() {
    return this.var_5267;
  }
  get editable() {
    return this.var_2160;
  }
  get tooltip() {
    return this.var_4411;
  }
}
