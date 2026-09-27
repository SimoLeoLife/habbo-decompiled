// Extracted from HabboAirLauncher.deobf.js, line 122529.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i857159cb91dc97

class {
    static {
      n(this, "UnkMessageComposer_3args_857159");
    }
    static {
      M7t(this, "UnkMessageComposer_3args_857159");
    }
    static _rbb0e38da69244d = 0;
    static _r7bf38ef8bfda68 = 1;
    static _r06de8e1f8203ee = 2;
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
