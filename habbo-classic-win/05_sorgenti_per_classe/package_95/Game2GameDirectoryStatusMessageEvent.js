// Extracted from HabboAirLauncher.deobf.js, line 84081.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_95/Game2GameDirectoryStatusMessageEvent.as
// Obfuscated name: _i972eabd3489125

class extends MessageEvent {
    static {
      n(this, "Game2GameDirectoryStatusMessageEvent");
    }
    static {
      CIr(this, "Game2GameDirectoryStatusMessageEvent");
    }
    constructor(e) {
      super(e, Game2GameDirectoryStatusMessageParser);
    }
    getParser() {
      return this.var_15;
    }
  }
