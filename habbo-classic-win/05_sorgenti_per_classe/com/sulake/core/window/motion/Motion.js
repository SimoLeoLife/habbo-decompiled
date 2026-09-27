// Extracted from HabboAirLauncher.deobf.js, line 66178.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/motion/Motion.as
// Obfuscated name: _ic14d10cddd8a7d

class {
  static {
    n(this, "Motion");
  }
  var_203;
  var_894 = !1;
  _complete = !0;
  var_4265 = "";
  constructor(e) {
    this.var_203 = e;
  }
  get running() {
    return this.var_894 && this.var_203 != null && !this.var_203.disposed;
  }
  get complete() {
    return this._complete;
  }
  set target(e) {
    this.var_203 = e;
  }
  get target() {
    return this.var_203;
  }
  set tag(e) {
    this.var_4265 = e;
  }
  get tag() {
    return this.var_4265;
  }
  start() {
    this.var_894 = !0;
  }
  update(e) {}
  stop() {
    ((this.var_203 = null), (this.var_894 = !1));
  }
  tick(e) {}
}
