// Estratto da HabboAirLauncher.deobf.js, riga 352461.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/presets/menu/elements/MenuItem.as
// Nome offuscato: _ibdaa08d0b75d60

class {
  constructor(e, r, t = "", i = !1, s = null) {
    this._name = e;
    this._onClick = r;
    this.var_4411 = t;
    this._hasCheckbox = i;
    this.var_5570 = s;
  }
  static {
    n(this, "MenuItem");
  }
  get name() {
    return this._name;
  }
  get onClick() {
    return this._onClick;
  }
  get tooltip() {
    return this.var_4411;
  }
  get _rafe4f95a65fec3() {
    return this._hasCheckbox;
  }
  get _r14ef6da94aebbf() {
    return this.var_5570;
  }
}
