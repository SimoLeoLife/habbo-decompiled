// Extracted from HabboAirLauncher.deobf.js, line 66484.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i67c9fd08696d20

class extends UnkMotionSubclass_c2a614 {
  static {
    n(this, "UnkClass_67c9fd");
  }
  var_3993 = 0;
  var_3995 = 0;
  _r1b398fe6160d5e;
  _r72369572413bfd;
  var_2203 = 0;
  var_2327 = 0;
  constructor(e, r, t, i) {
    (super(e, r), (this._r1b398fe6160d5e = t), (this._r72369572413bfd = i));
  }
  start() {
    (super.start(),
      this.target &&
        ((this.var_3993 = this.target.x),
        (this.var_3995 = this.target.y),
        (this.var_2203 = this._r1b398fe6160d5e - this.var_3993),
        (this.var_2327 = this._r72369572413bfd - this.var_3995)));
  }
  update(e) {
    this.target &&
      ((this.target.x = this.var_3993 + this.var_2203 * e),
      (this.target.y = this.var_3995 + this.var_2327 * e));
  }
}
