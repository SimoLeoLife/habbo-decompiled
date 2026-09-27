// Extracted from HabboAirLauncher.deobf.js, line 75385.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9bce940520b924

class extends MessageEvent {
    static {
      n(this, "UnkMessageEvent_9bce94");
    }
    static {
      X4r(this, "UnkMessageEvent_9bce94");
    }
    constructor(e) {
      super(e, UnkMessageParser_I_f03fa1);
    }
    getParser() {
      return this.var_15;
    }
    get offer() {
      return this.getParser()._r71cca206cb0123;
    }
    get pageId() {
      return this.getParser().pageId;
    }
  }
