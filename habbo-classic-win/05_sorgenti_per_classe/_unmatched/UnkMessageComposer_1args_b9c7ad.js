// Extracted from HabboAirLauncher.deobf.js, line 117366.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib9c7adb098da4a

class {
    static {
      n(this, "UnkMessageComposer_1args_b9c7ad");
    }
    static {
      Hut(this, "UnkMessageComposer_1args_b9c7ad");
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
