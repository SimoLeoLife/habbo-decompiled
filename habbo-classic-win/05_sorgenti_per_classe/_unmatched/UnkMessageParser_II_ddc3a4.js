// Extracted from HabboAirLauncher.deobf.js, line 112097.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iddc3a489f0d4d3

class {
    static {
      n(this, "UnkMessageParser_II_ddc3a4");
    }
    static {
      kst(this, "UnkMessageParser_II_ddc3a4");
    }
    userId = 0;
    furniCount = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.userId = e.readInteger()), (this.furniCount = e.readInteger()), !0);
    }
  }
