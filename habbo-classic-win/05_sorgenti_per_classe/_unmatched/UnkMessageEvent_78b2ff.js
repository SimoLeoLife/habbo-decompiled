// Extracted from HabboAirLauncher.deobf.js, line 91421.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i78b2ff4ad9002b

class extends MessageEvent {
    static {
      n(this, "UnkMessageEvent_78b2ff");
    }
    static {
      qRr(this, "UnkMessageEvent_78b2ff");
    }
    constructor(e, r = UnkMessageParser_IIII_e2a6e0) {
      super(e, r);
    }
    get userID() {
      return this.getParser().userID;
    }
    get _r13aa4ef3e884a4() {
      return this.getParser()._r13aa4ef3e884a4;
    }
    get _r2189f3bd1771f1() {
      return this.getParser()._r2189f3bd1771f1;
    }
    get _r2311c23a1ce5db() {
      return this.getParser()._r2311c23a1ce5db;
    }
    getParser() {
      return this.var_15;
    }
  }
