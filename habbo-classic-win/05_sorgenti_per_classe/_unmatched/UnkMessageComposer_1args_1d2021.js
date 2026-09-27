// Extracted from HabboAirLauncher.deobf.js, line 118639.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1d202138ce76cd

class {
    static {
      n(this, "UnkMessageComposer_1args_1d2021");
    }
    static {
      f1t(this, "UnkMessageComposer_1args_1d2021");
    }
    _data = [];
    constructor(e) {
      this._data.push(e);
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
