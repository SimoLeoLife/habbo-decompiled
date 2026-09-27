// Extracted from HabboAirLauncher.deobf.js, line 117390.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ib9e29bb5d8d15c

class {
    static {
      n(this, "UnkMessageComposer_0args_b9e29b");
    }
    static {
      Uut(this, "UnkMessageComposer_0args_b9e29b");
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
