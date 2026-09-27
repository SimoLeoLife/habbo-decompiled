// Estratto da HabboAirLauncher.deobf.js, riga 219500.

class extends _i31f5752efff6cb {
  constructor(r, t, i, s) {
    super();
    this._r79ce012f564afd = r;
    this.var_1447 = t;
    this.var_1425 = i;
    this.var_307 = s;
  }
  static {
    n(this, "_i1251b5128da168");
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
