// Extracted from HabboAirLauncher.deobf.js, line 117411.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie52ad3675cef64

class {
    static {
      n(this, "UnkMessageComposer_1args_e52ad3");
    }
    static {
      jut(this, "UnkMessageComposer_1args_e52ad3");
    }
    _data = [];
    _disposed = !1;
    constructor(e) {
      this._data.push(e);
    }
    get disposed() {
      return this._disposed;
    }
    getMessageArray() {
      return this._data ?? [];
    }
    dispose() {
      ((this._data = null), (this._disposed = !0));
    }
  }
