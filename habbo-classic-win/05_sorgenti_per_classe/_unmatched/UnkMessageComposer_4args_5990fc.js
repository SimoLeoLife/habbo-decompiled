// Extracted from HabboAirLauncher.deobf.js, line 124159.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5990fcb8a7a3e8

class {
    static {
      n(this, "UnkMessageComposer_4args_5990fc");
    }
    static {
      igt(this, "UnkMessageComposer_4args_5990fc");
    }
    _data = [];
    constructor(e, r, t, i) {
      (this._data.push(e), this._data.push(r), this._data.push(t), this._data.push(i));
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
