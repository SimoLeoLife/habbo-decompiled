// Estratto da HabboAirLauncher.deobf.js, riga 73183.

class {
    static {
      n(this, "_i5c8b909e9d7d4f");
    }
    static {
      l5r(this, "_i5c8b909e9d7d4f");
    }
    state = 0;
    _r2ea352b1af7c09 = [];
    flush() {
      return ((this.state = 0), (this._r2ea352b1af7c09 = []), !0);
    }
    parse(e) {
      this.state = e.readInteger();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._r2ea352b1af7c09.push(new _i30c4d31547bd09(e));
      return !0;
    }
  }
