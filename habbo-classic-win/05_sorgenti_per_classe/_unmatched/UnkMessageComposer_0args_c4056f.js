// Extracted from HabboAirLauncher.deobf.js, line 117435.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic4056f39ab9d5a

class {
    static {
      n(this, "UnkMessageComposer_0args_c4056f");
    }
    static {
      Qut(this, "UnkMessageComposer_0args_c4056f");
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
