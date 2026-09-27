// Extracted from HabboAirLauncher.deobf.js, line 75661.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i036bbf7d577060

class {
    static {
      n(this, "UnkMessageParser_S_036bbf");
    }
    static {
      m7r(this, "UnkMessageParser_S_036bbf");
    }
    errorCode = "";
    flush() {
      return ((this.errorCode = ""), !0);
    }
    parse(e) {
      return ((this.errorCode = e.readString()), !0);
    }
  }
