// Extracted from HabboAirLauncher.deobf.js, line 112275.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic97e7f7b1dab3d

class {
    static {
      n(this, "UnkMessageParser_I_c97e7f");
    }
    static {
      $st(this, "UnkMessageParser_I_c97e7f");
    }
    guilds = [];
    flush() {
      return ((this.guilds = []), !0);
    }
    parse(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.guilds.push(new class_3487(e));
      return !0;
    }
  }
