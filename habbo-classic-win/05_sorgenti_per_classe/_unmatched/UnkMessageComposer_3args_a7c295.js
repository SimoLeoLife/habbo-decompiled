// Extracted from HabboAirLauncher.deobf.js, line 121597.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ia7c2952eebca15

class {
    static {
      n(this, "UnkMessageComposer_3args_a7c295");
    }
    static {
      L9t(this, "UnkMessageComposer_3args_a7c295");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
