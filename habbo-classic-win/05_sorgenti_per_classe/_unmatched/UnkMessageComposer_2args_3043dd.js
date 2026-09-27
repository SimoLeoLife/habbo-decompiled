// Extracted from HabboAirLauncher.deobf.js, line 124964.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3043ddc0e64aa0

class {
    static {
      n(this, "UnkMessageComposer_2args_3043dd");
    }
    static {
      Bvt(this, "UnkMessageComposer_2args_3043dd");
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
