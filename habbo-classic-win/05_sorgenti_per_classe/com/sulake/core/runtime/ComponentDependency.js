// Extracted from HabboAirLauncher.deobf.js, line 60736.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/ComponentDependency.as
// Obfuscated name: _i1b32e9b8d55bd4

class {
  constructor(e, r, t = !0, i = null) {
    this.var_3234 = e;
    this.var_4787 = r;
    this.var_5495 = t;
    this._eventListeners = i;
  }
  static {
    n(this, "ComponentDependency");
  }
  get identifier() {
    return this.var_3234;
  }
  get dependencySetter() {
    return this.var_4787;
  }
  get isRequired() {
    return this.var_5495;
  }
  get eventListeners() {
    return this._eventListeners;
  }
}
