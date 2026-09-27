// Extracted from HabboAirLauncher.deobf.js, line 75213.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie6ae0048418105

class {
    static {
      n(this, "UnkMessageParser_I_e6ae00");
    }
    static {
      A4r(this, "UnkMessageParser_I_e6ae00");
    }
    errorCode = 0;
    flush() {
      return ((this.errorCode = 0), !0);
    }
    parse(e) {
      return ((this.errorCode = e.readInteger()), !0);
    }
  }
