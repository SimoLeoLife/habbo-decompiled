// Extracted from HabboAirLauncher.deobf.js, line 66216.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic903bebd8997c3

class extends Motion {
  static {
    n(this, "UnkMotionSubclass_c903be");
  }
  _callback;
  constructor(e) {
    (super(null), (this._callback = e));
  }
  get running() {
    return this.var_894 && this._callback != null;
  }
  tick(e) {
    if ((super.tick(e), !this._callback)) return;
    let r = this._callback;
    ((this._callback = null), r(this));
  }
}
