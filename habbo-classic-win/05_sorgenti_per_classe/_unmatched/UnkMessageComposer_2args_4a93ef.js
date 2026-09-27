// Extracted from HabboAirLauncher.deobf.js, line 120853.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4a93efd1b68d0b

class {
    static {
      n(this, "UnkMessageComposer_2args_4a93ef");
    }
    static {
      i2t(this, "UnkMessageComposer_2args_4a93ef");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(r), this._data.push(e));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
