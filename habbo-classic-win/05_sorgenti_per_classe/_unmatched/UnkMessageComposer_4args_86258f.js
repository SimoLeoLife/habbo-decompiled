// Extracted from HabboAirLauncher.deobf.js, line 124944.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i86258ff7bd9dc1

class {
    static {
      n(this, "UnkMessageComposer_4args_86258f");
    }
    static {
      Mvt(this, "UnkMessageComposer_4args_86258f");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
