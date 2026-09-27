// Extracted from HabboAirLauncher.deobf.js, line 117911.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i67b3718f8d8fe2

class {
    static {
      n(this, "UnkMessageComposer_4args_67b371");
    }
    static {
      Uht(this, "UnkMessageComposer_4args_67b371");
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
