// Extracted from HabboAirLauncher.deobf.js, line 358078.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/WiredMenuTabConfig.as
// Obfuscated name: _i74a191edfafe6b

class {
  constructor(e, r, t = !0, i = !0, s = !0) {
    this._id = e;
    this.var_4141 = r;
    this.var_4960 = t;
    this.var_4546 = i;
    this.var_3915 = s;
  }
  static {
    n(this, "WiredMenuTabConfig");
  }
  get id() {
    return this._id;
  }
  get tabButtonName() {
    return `top_view_${this._id}_button`;
  }
  get containerName() {
    return `${this._id}_container`;
  }
  get titleLocalizationKey() {
    return `wiredmenu.${this._id}.title`;
  }
  createTab(e, r) {
    return new this.var_4141(e, r);
  }
  get _r7a153f1d282a18() {
    return this.var_4960;
  }
  get _r4a62ba90efa000() {
    return this.var_4546;
  }
  get isEnabled() {
    return this.var_3915;
  }
}
