// Extracted from HabboAirLauncher.deobf.js, line 117528.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if95bdecb9283fe

class {
    static {
      n(this, "UnkMessageComposer_1args_f95bde");
    }
    static {
      eht(this, "UnkMessageComposer_1args_f95bde");
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
