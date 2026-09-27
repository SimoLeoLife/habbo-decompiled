// Extracted from HabboAirLauncher.deobf.js, line 85066.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_196/UserGameAchievementsMessageEvent.as
// Obfuscated name: _ic909ad7273decb

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
