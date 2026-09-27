// Extracted from HabboAirLauncher.deobf.js, line 115958.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7e7c592b72dcca

class {
    static {
      n(this, "UnkMessageComposer_2args_7e7c59");
    }
    static {
      f_t(this, "UnkMessageComposer_2args_7e7c59");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data;
    }
    dispose() {
      this._data = [];
    }
  }
