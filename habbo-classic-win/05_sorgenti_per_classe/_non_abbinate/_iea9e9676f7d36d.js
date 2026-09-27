// Estratto da HabboAirLauncher.deobf.js, riga 85534.

class {
    static {
      n(this, "_iea9e9676f7d36d");
    }
    static {
      kCr(this, "_iea9e9676f7d36d");
    }
    var_3330 = -1;
    _r86aac9f4ce9409 = [];
    get _rf036dafd6acd66() {
      return this.var_3330;
    }
    get _r63370bfacede28() {
      return this._r86aac9f4ce9409;
    }
    flush() {
      return ((this.var_3330 = -1), (this._r86aac9f4ce9409 = []), !0);
    }
    parse(e) {
      this.var_3330 = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; ++t) this._r86aac9f4ce9409.push(new class_4349(e));
      return !0;
    }
  }
