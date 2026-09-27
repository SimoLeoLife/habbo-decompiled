// Estratto da HabboAirLauncher.deobf.js, riga 75493.

class {
    static {
      n(this, "_i46fc968c99e4c7");
    }
    static {
      a7r(this, "_i46fc968c99e4c7");
    }
    offers = [];
    flush() {
      return ((this.offers = []), !0);
    }
    parse(e) {
      this.offers = [];
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.offers.push(new _i29cd448f0b9de8(e));
      return !0;
    }
  }
