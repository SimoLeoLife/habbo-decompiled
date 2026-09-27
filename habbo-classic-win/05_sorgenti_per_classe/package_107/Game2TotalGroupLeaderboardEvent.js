// Extracted from HabboAirLauncher.deobf.js, line 85221.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_107/Game2TotalGroupLeaderboardEvent.as
// Obfuscated name: _if827dff373e2e9

class extends MessageEvent {
    static {
      n(this, "Game2TotalGroupLeaderboardEvent");
    }
    static {
      sCr(this, "Game2TotalGroupLeaderboardEvent");
    }
    constructor(e) {
      super(e, Game2GroupLeaderboardParser);
    }
    getParser() {
      return this.var_15;
    }
  }
