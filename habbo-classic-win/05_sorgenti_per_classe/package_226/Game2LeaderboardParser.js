// Extracted from HabboAirLauncher.deobf.js, line 85124.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_226/Game2LeaderboardParser.as
// Obfuscated name: _ieaa4be448fce8f

class {
    static {
      n(this, "Game2LeaderboardParser");
    }
    static {
      eCr(this, "Game2LeaderboardParser");
    }
    var_3330 = -1;
    var_2886 = null;
    var_1841 = -1;
    flush() {
      return ((this.var_3330 = -1), (this.var_2886 = null), (this.var_1841 = -1), !0);
    }
    parse(e) {
      this.var_2886 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2886.push(new class_4169(e));
      return (
        (this.var_1841 = e.readInteger()),
        (this.var_3330 = e.readInteger()),
        !0
      );
    }
    get _rf036dafd6acd66() {
      return this.var_3330;
    }
    get leaderboard() {
      return this.var_2886;
    }
    get _r27f871b645f5bf() {
      return this.var_1841;
    }
  }
