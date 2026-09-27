// Extracted from HabboAirLauncher.deobf.js, line 122423.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7fc65cf3ba69f7

class {
    static {
      n(this, "UnkMessageComposer_2args_7fc65c");
    }
    static {
      u7t(this, "UnkMessageComposer_2args_7fc65c");
    }
    _data;
    constructor(e, r) {
      this._data = [e, r];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
