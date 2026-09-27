// Extracted from HabboAirLauncher.deobf.js, line 219403.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2a10f01de2414e

class extends UnkClass_31f575 {
  constructor(r, t) {
    super();
    this._r79ce012f564afd = r;
    this._rda3dedf6a49a3d = t;
  }
  static {
    n(this, "UnkClass_2a10f0");
  }
  dispose() {
    (super.dispose(), (this._r79ce012f564afd = null), (this._rda3dedf6a49a3d = null));
  }
  apply(r) {
    if (this._r79ce012f564afd == null || this._rda3dedf6a49a3d == null) return;
    if (this._r79ce012f564afd._r075592df573313() > 0) {
      let i = this._rda3dedf6a49a3d._r8369db85d616c0(1);
      if (i > 0) {
        this._r79ce012f564afd._r64bf332f18b131(i);
        let s = r._rec3357f35c151d(this._r79ce012f564afd._r206e239acb0d5c);
        (s instanceof _l && s._r64bf332f18b131(i), xs.playSound(HabboSoundTypesEnum.GAMES_SW_GET_SNOWBALL));
      }
    }
  }
  get human() {
    return this._r79ce012f564afd;
  }
}
