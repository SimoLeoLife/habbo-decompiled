// Extracted from HabboAirLauncher.deobf.js, line 117046.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7d43746c1cd8c8

class {
    static {
      n(this, "UnkMessageComposer_5args_7d4374");
    }
    static {
      sut(this, "UnkMessageComposer_5args_7d4374");
    }
    _data = [];
    constructor(e, r, t, i, s) {
      this._data = [e, r, t, i, s];
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
