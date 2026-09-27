// Extracted from HabboAirLauncher.deobf.js, line 74882.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0bd32d08ef0e00

class {
    static {
      n(this, "UnkMessageParser_II_0bd32d");
    }
    static {
      X9r(this, "UnkMessageParser_II_0bd32d");
    }
    offers = [];
    source = 0;
    flush() {
      return ((this.offers = []), !0);
    }
    parse(e) {
      this.offers = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.offers.push(new class_3142(e));
      return ((this.source = e.readInteger()), !0);
    }
  }
