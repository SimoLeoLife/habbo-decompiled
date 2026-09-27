// Extracted from HabboAirLauncher.deobf.js, line 354230.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/DropdownParam.as
// Obfuscated name: _if9efaf470b34d0

class {
  constructor(e, r = null, t = null, i = "", s = -1) {
    this._caption = e;
    this._options = r;
    this._onChangeCallback = t;
    this.var_3897 = i;
    this._staticWidth = s;
  }
  static {
    n(this, "DropdownParam");
  }
  get _r9560516d063ff2() {
    return this._onChangeCallback;
  }
  get caption() {
    return this._caption;
  }
  get options() {
    return this._options;
  }
  get _r103991862f2899() {
    return this.var_3897;
  }
  get staticWidth() {
    return this._staticWidth;
  }
}
