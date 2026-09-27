// Extracted from HabboAirLauncher.deobf.js, line 85534.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iea9e9676f7d36d

class {
    static {
      n(this, "UnkMessageParser_II_ea9e96");
    }
    static {
      kCr(this, "UnkMessageParser_II_ea9e96");
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
