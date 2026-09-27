// Extracted from HabboAirLauncher.deobf.js, line 117552.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id8a83c8e155fd7

class {
    static {
      n(this, "UnkMessageComposer_0args_d8a83c");
    }
    static {
      tht(this, "UnkMessageComposer_0args_d8a83c");
    }
    _data = [];
    _disposed = !1;
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
