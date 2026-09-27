// Estratto da HabboAirLauncher.deobf.js, riga 84265.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_95/Game2JoiningGameFailedMessageEvent.as
// Nome offuscato: _id639bcf8146784

class extends MessageEvent {
    static {
      n(this, "Game2JoiningGameFailedMessageEvent");
    }
    static {
      jIr(this, "Game2JoiningGameFailedMessageEvent");
    }
    constructor(e) {
      super(e, Game2JoiningGameFailedMessageParser);
    }
    getParser() {
      return this.var_15;
    }
  }
