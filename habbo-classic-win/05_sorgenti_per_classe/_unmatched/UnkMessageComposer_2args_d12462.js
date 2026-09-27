// Extracted from HabboAirLauncher.deobf.js, line 123845.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id12462c0dbfe2d

class {
    static {
      n(this, "UnkMessageComposer_2args_d12462");
    }
    static {
      Rmt(this, "UnkMessageComposer_2args_d12462");
    }
    _data = [];
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
