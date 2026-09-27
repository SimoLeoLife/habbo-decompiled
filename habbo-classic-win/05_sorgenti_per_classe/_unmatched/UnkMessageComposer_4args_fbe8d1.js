// Extracted from HabboAirLauncher.deobf.js, line 117504.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ifbe8d1f78e21ac

class {
    static {
      n(this, "UnkMessageComposer_4args_fbe8d1");
    }
    static {
      qut(this, "UnkMessageComposer_4args_fbe8d1");
    }
    _data = [];
    _disposed = !1;
    constructor(e, r, t, i) {
      this._data = [e, r, t, i];
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
