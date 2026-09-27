// Extracted from HabboAirLauncher.deobf.js, line 75180.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i9bad5fa502981e

class {
    static {
      n(this, "UnkMessageParser_I_9bad5f");
    }
    static {
      E4r(this, "UnkMessageParser_I_9bad5f");
    }
    errorCode = 0;
    flush() {
      return ((this.errorCode = 0), !0);
    }
    parse(e) {
      return ((this.errorCode = e.readInteger()), !0);
    }
  }
