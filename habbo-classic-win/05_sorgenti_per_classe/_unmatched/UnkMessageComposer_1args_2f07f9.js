// Extracted from HabboAirLauncher.deobf.js, line 118547.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i2f07f95651d352

class {
    static {
      n(this, "UnkMessageComposer_1args_2f07f9");
    }
    static {
      t1t(this, "UnkMessageComposer_1args_2f07f9");
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
