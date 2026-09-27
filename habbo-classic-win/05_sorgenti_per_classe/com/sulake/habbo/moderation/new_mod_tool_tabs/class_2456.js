// Estratto da HabboAirLauncher.deobf.js, riga 250676.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/new_mod_tool_tabs/class_2456.as
// Nome offuscato: _i8013ad14712710

class {
  constructor(e, r) {
    this.var_3229 = e;
    this._window = r;
    this._window.visible = !1;
  }
  static {
    n(this, "class_2456");
  }
  var_679 = !1;
  var_1271 = !1;
  set visible(e) {
    this.var_679 !== e && ((this.var_679 = e), (this._window.visible = e));
  }
  get tool() {
    return this.var_3229;
  }
  get window() {
    return this._window;
  }
  get visible() {
    return this.var_679;
  }
  get disposed() {
    return this.var_1271;
  }
  onOpen() {}
  dispose() {
    this.var_1271 ||
      ((this._window = null), (this.var_3229 = null), (this.var_1271 = !0));
  }
}
