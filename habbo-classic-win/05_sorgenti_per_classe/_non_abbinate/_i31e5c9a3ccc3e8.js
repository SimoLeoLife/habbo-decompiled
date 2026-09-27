// Estratto da HabboAirLauncher.deobf.js, riga 73850.

class {
    static {
      n(this, "_i31e5c9a3ccc3e8");
    }
    static {
      h2r(this, "_i31e5c9a3ccc3e8");
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
