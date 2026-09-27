// Extracted from HabboAirLauncher.deobf.js, line 114140.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib0ef4c8a91ae1c

class {
    static {
      n(this, "UnkMessageComposer_3args_b0ef4c");
    }
    static {
      Oct(this, "UnkMessageComposer_3args_b0ef4c");
    }
    _data = [];
    constructor(e, r, t) {
      this._data = [e, r, t];
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
