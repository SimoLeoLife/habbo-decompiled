// Extracted from HabboAirLauncher.deobf.js, line 87907.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i67a76d9ddbe476

class {
    static {
      n(this, "UnkMessageParser_IIS_67a76d");
    }
    static {
      RWr(this, "UnkMessageParser_IIS_67a76d");
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
