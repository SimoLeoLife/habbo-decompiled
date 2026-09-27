// Extracted from HabboAirLauncher.deobf.js, line 117573.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i1f252eaa5e02e0

class {
    static {
      n(this, "UnkMessageComposer_0args_1f252e");
    }
    static {
      iht(this, "UnkMessageComposer_0args_1f252e");
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
