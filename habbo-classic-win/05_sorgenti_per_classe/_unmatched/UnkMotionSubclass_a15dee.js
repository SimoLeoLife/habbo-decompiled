// Extracted from HabboAirLauncher.deobf.js, line 66590.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia15deea422b46b

class extends Motion {
  static {
    n(this, "UnkMotionSubclass_a15dee");
  }
  var_2562 = 0;
  _r5436f3b7c08e24;
  constructor(e) {
    (super(null), (this._r5436f3b7c08e24 = e));
  }
  get running() {
    return this.var_894;
  }
  start() {
    (super.start(), (this._complete = !1), (this.var_2562 = _ia411d8d8194a3a()));
  }
  tick(e) {
    ((this._complete = e - this.var_2562 >= this._r5436f3b7c08e24),
      this._complete && this.stop(),
      super.tick(e));
  }
}
