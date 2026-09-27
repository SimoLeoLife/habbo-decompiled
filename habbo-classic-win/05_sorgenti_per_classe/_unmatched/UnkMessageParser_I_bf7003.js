// Extracted from HabboAirLauncher.deobf.js, line 112238.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibf7003a044de02

class {
    static {
      n(this, "UnkMessageParser_I_bf7003");
    }
    static {
      Qst(this, "UnkMessageParser_I_bf7003");
    }
    guildId = 0;
    data = null;
    flush() {
      return ((this.data = null), !0);
    }
    parse(e) {
      return ((this.guildId = e.readInteger()), (this.data = new M7(e)), !0);
    }
  }
