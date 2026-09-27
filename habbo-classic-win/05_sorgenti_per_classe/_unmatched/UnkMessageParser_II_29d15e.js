// Extracted from HabboAirLauncher.deobf.js, line 112204.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i29d15ef5c6c06f

class {
    static {
      n(this, "UnkMessageParser_II_29d15e");
    }
    static {
      Ust(this, "UnkMessageParser_II_29d15e");
    }
    guildId = 0;
    userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.guildId = e.readInteger()), (this.userId = e.readInteger()), !0);
    }
  }
