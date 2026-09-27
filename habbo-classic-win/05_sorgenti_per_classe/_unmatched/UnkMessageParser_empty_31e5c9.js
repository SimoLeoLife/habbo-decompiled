// Extracted from HabboAirLauncher.deobf.js, line 73850.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i31e5c9a3ccc3e8

class {
    static {
      n(this, "UnkMessageParser_empty_31e5c9");
    }
    static {
      h2r(this, "UnkMessageParser_empty_31e5c9");
    }
    _data = null;
    parse(e) {
      return ((this._data = new Jne()), this._data.parse(e), !0);
    }
    flush() {
      return ((this._data = null), !0);
    }
    _r2e647e5b70f771() {
      return this._data ? this._data.clone() : null;
    }
  }
