// Extracted from HabboAirLauncher.deobf.js, line 118662.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i38d88376f52afe

class {
    static {
      n(this, "UnkMessageComposer_1args_38d883");
    }
    static {
      b1t(this, "UnkMessageComposer_1args_38d883");
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
