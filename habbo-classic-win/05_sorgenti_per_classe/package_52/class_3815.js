// Extracted from HabboAirLauncher.deobf.js, line 95264.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_52/class_3815.as
// Obfuscated name: _i7d2d4466766867

class {
    static {
      n(this, "class_3815");
    }
    static {
      jNr(this, "class_3815");
    }
    var_598 = [];
    _disposed = !1;
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_598.push(new class_3942(e));
    }
    get disposed() {
      return this._disposed;
    }
    get tags() {
      return this.var_598;
    }
    dispose() {
      this._disposed || ((this._disposed = !0), (this.var_598 = null));
    }
  }
