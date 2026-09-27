// Estratto da HabboAirLauncher.deobf.js, riga 87907.

class {
    static {
      n(this, "_i67a76d9ddbe476");
    }
    static {
      RWr(this, "_i67a76d9ddbe476");
    }
    _data = null;
    flush() {
      return (this._data && this._data.dispose(), (this._data = null), !0);
    }
    parse(e) {
      this._data = new B();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) {
        let i = e.readInteger(),
          s = e.readString();
        this._data.add(i, s);
      }
      return !0;
    }
    get data() {
      return this._data;
    }
  }
