// Extracted from HabboAirLauncher.deobf.js, line 117480.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i241f2a71dc6d05

class {
    static {
      n(this, "UnkMessageComposer_1args_241f2a");
    }
    static {
      $ut(this, "UnkMessageComposer_1args_241f2a");
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
