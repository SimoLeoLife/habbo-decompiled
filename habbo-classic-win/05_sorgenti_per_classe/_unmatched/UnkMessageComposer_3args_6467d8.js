// Extracted from HabboAirLauncher.deobf.js, line 125394.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6467d87e5ba4d8

class {
    static {
      n(this, "UnkMessageComposer_3args_6467d8");
    }
    static {
      pwt(this, "UnkMessageComposer_3args_6467d8");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
