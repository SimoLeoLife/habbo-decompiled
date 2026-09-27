// Estratto da HabboAirLauncher.deobf.js, riga 84317.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_234/Game2StartingGameFailedMessageParser.as
// Nome offuscato: _i185d67141c4ff2

class {
    static {
      n(this, "Game2StartingGameFailedMessageParser");
    }
    static {
      $Ir(this, "Game2StartingGameFailedMessageParser");
    }
    static const_577 = 2;
    static const_1185 = 1;
    var_2731 = 0;
    get reason() {
      return this.var_2731;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.var_2731 = e.readInteger()), !0);
    }
  }
