// Extracted from HabboAirLauncher.deobf.js, line 120243.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib7a2f8c19e1626

class {
    static {
      n(this, "UnkMessageComposer_3args_b7a2f8");
    }
    static {
      Y8t(this, "UnkMessageComposer_3args_b7a2f8");
    }
    _data;
    constructor(e, r, t) {
      ((this._data = [e, r]), this._data.push(t.length));
      for (let i = 0; i < t.length; i++) this._data.push(String(t[i]));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = null;
    }
  }
