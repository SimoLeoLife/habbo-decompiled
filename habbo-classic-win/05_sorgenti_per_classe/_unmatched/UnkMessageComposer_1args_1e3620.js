// Extracted from HabboAirLauncher.deobf.js, line 125041.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1e3620b98ed6ac

class {
    static {
      n(this, "UnkMessageComposer_1args_1e3620");
    }
    static {
      Lvt(this, "UnkMessageComposer_1args_1e3620");
    }
    _data = [];
    constructor(e) {
      (this._data.push(e), this._data.push(1));
    }
    get disposed() {
      return this._data === null;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      this._data = null;
    }
  }
