// Extracted from HabboAirLauncher.deobf.js, line 125333.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i61cf81490334cd

class {
    static {
      n(this, "UnkMessageComposer_2args_61cf81");
    }
    static {
      fwt(this, "UnkMessageComposer_2args_61cf81");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length));
      for (let t = 0; t < r.length; t++) this._data.push(r[t] | 0);
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
