// Extracted from HabboAirLauncher.deobf.js, line 118838.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0195104c8c3160

class {
    static {
      n(this, "UnkMessageComposer_3args_019510");
    }
    static {
      M1t(this, "UnkMessageComposer_3args_019510");
    }
    _data = [];
    constructor(e, r, t) {
      (this._data.push(e), this._data.push(r), this._data.push(t));
    }
    get disposed() {
      return !1;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
