// Extracted from HabboAirLauncher.deobf.js, line 118967.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iaab880822b368e

class {
    static {
      n(this, "UnkMessageComposer_1args_aab880");
    }
    static {
      L1t(this, "UnkMessageComposer_1args_aab880");
    }
    _data = [];
    constructor(e) {
      this._data.push(e.length);
      for (let r of e) this._data.push(r);
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
