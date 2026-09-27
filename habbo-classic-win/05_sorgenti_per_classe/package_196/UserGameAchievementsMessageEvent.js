// Estratto da HabboAirLauncher.deobf.js, riga 85066.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_196/UserGameAchievementsMessageEvent.as
// Nome offuscato: _ic909ad7273decb

class extends MessageEvent {
    static {
      n(this, "UserGameAchievementsMessageEvent");
    }
    static {
      $xr(this, "UserGameAchievementsMessageEvent");
    }
    constructor(e) {
      super(e, UserGameAchievementsMessageParser);
    }
    getParser() {
      return this.var_15;
    }
  }
