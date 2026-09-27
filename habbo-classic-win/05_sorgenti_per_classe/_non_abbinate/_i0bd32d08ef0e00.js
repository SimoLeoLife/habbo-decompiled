// Estratto da HabboAirLauncher.deobf.js, riga 74882.

class {
    static {
      n(this, "_i0bd32d08ef0e00");
    }
    static {
      X9r(this, "_i0bd32d08ef0e00");
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
