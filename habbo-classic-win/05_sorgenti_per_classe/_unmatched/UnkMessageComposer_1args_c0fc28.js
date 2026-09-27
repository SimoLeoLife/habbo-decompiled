// Extracted from HabboAirLauncher.deobf.js, line 124441.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic0fc284a263b4f

class {
    static {
      n(this, "UnkMessageComposer_1args_c0fc28");
    }
    static {
      Bgt(this, "UnkMessageComposer_1args_c0fc28");
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
