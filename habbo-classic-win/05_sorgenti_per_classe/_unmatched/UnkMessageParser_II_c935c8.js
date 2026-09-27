// Extracted from HabboAirLauncher.deobf.js, line 112134.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic935c86dbd7ba3

class {
    static {
      n(this, "UnkMessageParser_II_c935c8");
    }
    static {
      Sst(this, "UnkMessageParser_II_c935c8");
    }
    guildId = 0;
    reason = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.guildId = e.readInteger()), (this.reason = e.readInteger()), !0);
    }
  }
