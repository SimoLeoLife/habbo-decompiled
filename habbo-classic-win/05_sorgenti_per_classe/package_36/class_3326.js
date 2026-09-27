// Extracted from HabboAirLauncher.deobf.js, line 117342.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_36/class_3326.as
// Obfuscated name: _i7ffaea7ce81ce5

class {
    static {
      n(this, "class_3326");
    }
    static {
      Out(this, "class_3326");
    }
    _data = [];
    _disposed = !1;
    constructor(e, r) {
      (this._data.push(e), this._data.push(r));
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
