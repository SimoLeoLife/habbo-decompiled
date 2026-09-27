// Estratto da HabboAirLauncher.deobf.js, riga 84339.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_95/Game2StartingGameFailedMessageEvent.as
// Nome offuscato: _i1a3d335c882fc1

class extends MessageEvent {
    static {
      n(this, "Game2StartingGameFailedMessageEvent");
    }
    static {
      qIr(this, "Game2StartingGameFailedMessageEvent");
    }
    constructor(e) {
      super(e, Game2StartingGameFailedMessageParser);
    }
    getParser() {
      return this.var_15;
    }
  }
