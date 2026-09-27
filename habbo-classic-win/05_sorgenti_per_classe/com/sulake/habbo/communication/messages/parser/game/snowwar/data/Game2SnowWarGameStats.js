// Estratto da HabboAirLauncher.deobf.js, riga 83190.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/Game2SnowWarGameStats.as
// Nome offuscato: _ic1e762f4102beb

class {
    static {
      n(this, "Game2SnowWarGameStats");
    }
    static {
      _yr(this, "Game2SnowWarGameStats");
    }
    var_4622;
    var_5216;
    constructor(e) {
      ((this.var_4622 = e.readInteger()), (this.var_5216 = e.readInteger()));
    }
    get playerWithMostKills() {
      return this.var_4622;
    }
    get playerWithMostHits() {
      return this.var_5216;
    }
  }
