// Extracted from HabboAirLauncher.deobf.js, line 117456.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _icbf4ea4986b279

class {
    static {
      n(this, "UnkMessageComposer_1args_cbf4ea");
    }
    static {
      Yut(this, "UnkMessageComposer_1args_cbf4ea");
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
