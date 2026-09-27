// Extracted from HabboAirLauncher.deobf.js, line 125267.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8e8810e8ce9a4c

class {
    static {
      n(this, "UnkMessageComposer_2args_8e8810");
    }
    static {
      iwt(this, "UnkMessageComposer_2args_8e8810");
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
