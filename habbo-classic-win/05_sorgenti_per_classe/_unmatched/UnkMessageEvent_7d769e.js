// Extracted from HabboAirLauncher.deobf.js, line 91067.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7d769ef2e2262e

class extends MessageEvent {
    static {
      n(this, "UnkMessageEvent_7d769e");
    }
    static {
      CRr(this, "UnkMessageEvent_7d769e");
    }
    constructor(e, r = UnkMessageParser_II_bf261a) {
      super(e, r);
    }
    get userID() {
      return this.getParser().userID;
    }
    get _r22db0312772e45() {
      return this.getParser()._r22db0312772e45;
    }
    getParser() {
      return this.var_15;
    }
  }
