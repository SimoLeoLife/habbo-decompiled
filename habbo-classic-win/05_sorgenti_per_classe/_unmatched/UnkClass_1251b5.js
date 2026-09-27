// Extracted from HabboAirLauncher.deobf.js, line 219500.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1251b5128da168

class extends UnkClass_31f575 {
  constructor(r, t, i, s) {
    super();
    this._r79ce012f564afd = r;
    this.var_1447 = t;
    this.var_1425 = i;
    this.var_307 = s;
  }
  static {
    n(this, "UnkClass_1251b5");
  }
  dispose() {
    (super.dispose(), (this._r79ce012f564afd = null));
  }
  apply(r) {
    this._r79ce012f564afd != null &&
      (this._r79ce012f564afd._rb7ed976997a0d9(this.var_1447, this.var_1425),
      this._r79ce012f564afd._r5061b965d73920(),
      xs.playSound(HabboSoundTypesEnum.GAMES_SW_THROW));
  }
  get human() {
    return this._r79ce012f564afd;
  }
  get targetX() {
    return this.var_1447;
  }
  get targetY() {
    return this.var_1425;
  }
  get trajectory() {
    return this.var_307;
  }
}
