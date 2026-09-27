// Extracted from HabboAirLauncher.deobf.js, line 84339.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_95/Game2StartingGameFailedMessageEvent.as
// Obfuscated name: _i1a3d335c882fc1

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
