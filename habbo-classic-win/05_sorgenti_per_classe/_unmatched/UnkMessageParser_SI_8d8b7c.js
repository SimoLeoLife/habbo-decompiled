// Extracted from HabboAirLauncher.deobf.js, line 74611.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8d8b7c35d0b3fc

class {
    static {
      n(this, "UnkMessageParser_SI_8d8b7c");
    }
    static {
      x9r(this, "UnkMessageParser_SI_8d8b7c");
    }
    _raeb033db5aa083 = "";
    products = [];
    flush() {
      return ((this.products = []), !0);
    }
    parse(e) {
      ((this.products = []), (this._raeb033db5aa083 = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.products.push(new ps(e));
      return !0;
    }
  }
