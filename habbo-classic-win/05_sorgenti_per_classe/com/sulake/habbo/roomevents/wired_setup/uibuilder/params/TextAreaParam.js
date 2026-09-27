// Extracted from HabboAirLauncher.deobf.js, line 351132.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/TextAreaParam.as
// Obfuscated name: _ib245694b064b38

class {
  constructor(e, r = -1, t = -1, i = -1, s = 1e3, o = "", d = null, c = null, f = !0, l = !1, b = null) {
    this._height = e;
    this._width = r;
    this._maxLines = t;
    this.var_5260 = i;
    this._maxCharacters = s;
    this.var_4374 = o;
    this.var_525 = d;
    this.var_5267 = c;
    this.var_2160 = f;
    this.var_5147 = l;
    this.var_4411 = b;
  }
  static {
    n(this, "TextAreaParam");
  }
  get height() {
    return this._height;
  }
  get width() {
    return this._width;
  }
  get _r79e0cd188e1c70() {
    return this._maxLines;
  }
  get _rd2becf41475d53() {
    return this.var_5260;
  }
  get _r980f40d20ca2e7() {
    return this._maxCharacters;
  }
  get _r314331cd566bfb() {
    return this.var_4374;
  }
  get placeholder() {
    return this.var_525;
  }
  get editable() {
    return this.var_2160;
  }
  get restrict() {
    return this.var_5267;
  }
  get _r5182e5b6814bdf() {
    return this.var_5147;
  }
  get tooltip() {
    return this.var_4411;
  }
}
