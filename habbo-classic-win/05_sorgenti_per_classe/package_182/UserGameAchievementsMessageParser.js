// Extracted from HabboAirLauncher.deobf.js, line 85034.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_182/UserGameAchievementsMessageParser.as
// Obfuscated name: _idf78bdd9daa4f7

class {
    static {
      n(this, "UserGameAchievementsMessageParser");
    }
    static {
      Yxr(this, "UserGameAchievementsMessageParser");
    }
    var_3330 = 0;
    var_1625 = null;
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3330 = e.readInteger()),
        (this.var_1625 = new UnkMessageParser_IS_0e323a()),
        this.var_1625.parse(e),
        !0
      );
    }
    get _rf036dafd6acd66() {
      return this.var_3330;
    }
    get achievements() {
      return this.var_1625?.achievements ?? [];
    }
    get _r5f6cc9592ea239() {
      return this.var_1625?._r5f6cc9592ea239 ?? "";
    }
  }
