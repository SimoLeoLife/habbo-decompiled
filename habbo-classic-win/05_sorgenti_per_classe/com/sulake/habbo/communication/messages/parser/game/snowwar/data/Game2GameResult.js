// Estratto da HabboAirLauncher.deobf.js, riga 83160.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/Game2GameResult.as
// Nome offuscato: _ie7cc28f4dc7426

class {
    static {
      n(this, "Game2GameResult");
    }
    static {
      lyr(this, "Game2GameResult");
    }
    static const_851 = 1;
    static const_355 = 2;
    static const_258 = 0;
    var_5509;
    var_3407;
    var_5088;
    constructor(e) {
      ((this.var_5509 = e.readBoolean()),
        (this.var_3407 = e.readInteger()),
        (this.var_5088 = e.readInteger()));
    }
    get isDeathMatch() {
      return this.var_5509;
    }
    get resultType() {
      return this.var_3407;
    }
    get winnerId() {
      return this.var_5088;
    }
  }
