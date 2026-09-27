// Extracted from HabboAirLauncher.deobf.js, line 121810.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i825701823414ca

class {
    static {
      n(this, "UnkMessageComposer_2args_825701");
    }
    static {
      i4t(this, "UnkMessageComposer_2args_825701");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r.length * 2));
      for (let t of r.getKeys()) (this._data.push(t), this._data.push(r.getValue(t)));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
