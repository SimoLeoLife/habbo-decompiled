// Estratto da HabboAirLauncher.deobf.js, riga 85175.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_226/Game2GroupLeaderboardParser.as
// Nome offuscato: _i167851b147426a

class {
    static {
      n(this, "Game2GroupLeaderboardParser");
    }
    static {
      iCr(this, "Game2GroupLeaderboardParser");
    }
    var_3330 = -1;
    var_2886 = null;
    var_1841 = -1;
    var_3206 = -1;
    flush() {
      return (
        (this.var_3330 = -1),
        (this.var_2886 = null),
        (this.var_1841 = -1),
        (this.var_3206 = -1),
        !0
      );
    }
    parse(e) {
      this.var_2886 = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_2886.push(new class_4169(e));
      return (
        (this.var_1841 = e.readInteger()),
        (this.var_3330 = e.readInteger()),
        (this.var_3206 = e.readInteger()),
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
    get favouriteGroupId() {
      return this.var_3206;
    }
  }
