// Extracted from HabboAirLauncher.deobf.js, line 112908.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia98fa13ea26e4a

class {
    static {
      n(this, "UnkMessageParser_II_a98fa1");
    }
    static {
      tdt(this, "UnkMessageParser_II_a98fa1");
    }
    userId = 0;
    respectTotal = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.userId = e.readInteger()), (this.respectTotal = e.readInteger()), !0);
    }
  }
