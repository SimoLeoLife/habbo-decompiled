// Extracted from HabboAirLauncher.deobf.js, line 91114.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1285515765b0f7

class extends MessageEvent {
    static {
      n(this, "UnkMessageEvent_128551");
    }
    static {
      BRr(this, "UnkMessageEvent_128551");
    }
    constructor(e, r = class_3498) {
      super(e, r);
    }
    get userID() {
      return this.getParser().userID;
    }
    getParser() {
      return this.var_15;
    }
  }
