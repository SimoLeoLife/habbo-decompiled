// Extracted from HabboAirLauncher.deobf.js, line 85376.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_107/Game2WeeklyGroupLeaderboardEvent.as
// Obfuscated name: _iaf523dd9a17676

class extends MessageEvent {
    static {
      n(this, "Game2WeeklyGroupLeaderboardEvent");
    }
    static {
      pCr(this, "Game2WeeklyGroupLeaderboardEvent");
    }
    constructor(e) {
      super(e, Game2WeeklyGroupLeaderboardParser);
    }
    getParser() {
      return this.var_15;
    }
  }
