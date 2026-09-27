// Estratto da HabboAirLauncher.deobf.js, riga 74611.

class {
    static {
      n(this, "_i8d8b7c35d0b3fc");
    }
    static {
      x9r(this, "_i8d8b7c35d0b3fc");
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
