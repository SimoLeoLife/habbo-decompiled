// Extracted from HabboAirLauncher.deobf.js, line 83799.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_234/Game2AccountGameStatusMessageParser.as
// Obfuscated name: _icb5db5382c20c1

class {
    static {
      n(this, "Game2AccountGameStatusMessageParser");
    }
    static {
      oIr(this, "Game2AccountGameStatusMessageParser");
    }
    var_3330 = 0;
    var_4138 = 0;
    var_4395 = 0;
    get _rf036dafd6acd66() {
      return this.var_3330;
    }
    get _r3da1b12a009155() {
      return this.var_4138;
    }
    get _r5baad52c59d1e5() {
      return this.var_4395;
    }
    get _rd31af608f83beb() {
      return this.var_4138 === -1;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3330 = e.readInteger()),
        (this.var_4138 = e.readInteger()),
        (this.var_4395 = e.readInteger()),
        !0
      );
    }
  }
