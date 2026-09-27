// Extracted from HabboAirLauncher.deobf.js, line 75493.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i46fc968c99e4c7

class {
    static {
      n(this, "UnkMessageParser_I_46fc96");
    }
    static {
      a7r(this, "UnkMessageParser_I_46fc96");
    }
    offers = [];
    flush() {
      return ((this.offers = []), !0);
    }
    parse(e) {
      this.offers = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.offers.push(new UnkClass_29cd44(e));
      return !0;
    }
  }
