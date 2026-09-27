// Extracted from HabboAirLauncher.deobf.js, line 125127.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7c06f8e9d30b13

class {
    static {
      n(this, "UnkMessageComposer_2args_7c06f8");
    }
    static {
      jvt(this, "UnkMessageComposer_2args_7c06f8");
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
