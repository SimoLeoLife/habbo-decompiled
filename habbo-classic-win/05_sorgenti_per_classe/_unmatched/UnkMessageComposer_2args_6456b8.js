// Extracted from HabboAirLauncher.deobf.js, line 121479.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6456b87e910ff5

class {
    static {
      n(this, "UnkMessageComposer_2args_6456b8");
    }
    static {
      I9t(this, "UnkMessageComposer_2args_6456b8");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
