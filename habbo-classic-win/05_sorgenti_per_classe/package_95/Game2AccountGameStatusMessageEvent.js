// Extracted from HabboAirLauncher.deobf.js, line 83835.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_95/Game2AccountGameStatusMessageEvent.as
// Obfuscated name: _i222f1288271984

class extends MessageEvent {
    static {
      n(this, "Game2AccountGameStatusMessageEvent");
    }
    static {
      cIr(this, "Game2AccountGameStatusMessageEvent");
    }
    constructor(e) {
      super(e, Game2AccountGameStatusMessageParser);
    }
    getParser() {
      return this.var_15;
    }
  }
