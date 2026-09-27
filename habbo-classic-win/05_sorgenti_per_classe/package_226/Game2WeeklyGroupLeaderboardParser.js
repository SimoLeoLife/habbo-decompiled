// Extracted from HabboAirLauncher.deobf.js, line 85319.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_226/Game2WeeklyGroupLeaderboardParser.as
// Obfuscated name: _idf9767702f5162

class extends Game2LeaderboardParser {
    static {
      n(this, "Game2WeeklyGroupLeaderboardParser");
    }
    static {
      uCr(this, "Game2WeeklyGroupLeaderboardParser");
    }
    var_3325 = -1;
    var_3617 = -1;
    var_3593 = -1;
    var_3636 = -1;
    var_3365 = -1;
    var_3206 = -1;
    get year() {
      return this.var_3325;
    }
    get week() {
      return this.var_3617;
    }
    get maxOffset() {
      return this.var_3593;
    }
    get _r33077a2908278a() {
      return this.var_3636;
    }
    get _r722f12af9003b8() {
      return this.var_3365;
    }
    get favouriteGroupId() {
      return this.var_3206;
    }
    flush() {
      return (
        (this.var_3325 = -1),
        (this.var_3617 = -1),
        (this.var_3593 = -1),
        (this.var_3636 = -1),
        (this.var_3365 = -1),
        (this.var_3206 = -1),
        super.flush()
      );
    }
    parse(e) {
      return (
        (this.var_3325 = e.readInteger()),
        (this.var_3617 = e.readInteger()),
        (this.var_3593 = e.readInteger()),
        (this.var_3636 = e.readInteger()),
        (this.var_3365 = e.readInteger()),
        super.parse(e),
        (this.var_3206 = e.readInteger()),
        !0
      );
    }
  }
