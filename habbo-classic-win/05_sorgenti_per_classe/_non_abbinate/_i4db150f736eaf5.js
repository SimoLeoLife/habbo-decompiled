// Estratto da HabboAirLauncher.deobf.js, riga 219464.

class extends _i31f5752efff6cb {
  constructor(r, t, i) {
    super();
    this._r79ce012f564afd = r;
    this._r7affa69635b07b = t;
    this.var_307 = i;
  }
  static {
    n(this, "_i4db150f736eaf5");
  }
  dispose() {
    (super.dispose(),
      (this._r79ce012f564afd = null),
      (this._r7affa69635b07b = null),
      (this.var_307 = 0));
  }
  apply(r) {
    this._r79ce012f564afd == null ||
      this._r7affa69635b07b == null ||
      (this._r79ce012f564afd._rb7ed976997a0d9(
        this._r7affa69635b07b._re4f88bac64d340.x,
        this._r7affa69635b07b._re4f88bac64d340.y,
      ),
      this._r79ce012f564afd._r5061b965d73920(),
      xs.playSound(HabboSoundTypesEnum.GAMES_SW_THROW));
  }
  get human() {
    return this._r79ce012f564afd;
  }
  get _r6baf3066fc181d() {
    return this._r7affa69635b07b;
  }
  get trajectory() {
    return this.var_307;
  }
}
