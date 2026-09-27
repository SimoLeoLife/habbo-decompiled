// Extracted from HabboAirLauncher.deobf.js, line 73246.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_17/class_1989.as
// Obfuscated name: _i833c5cbeb65c65

class {
    static {
      n(this, "class_1989");
    }
    static {
      m5r(this, "class_1989");
    }
    name;
    _rddb8305acca679 = [];
    _disposed = !1;
    constructor(e) {
      this.name = e.readString();
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this._rddb8305acca679.push(new UnkClass_772b30(e));
    }
    get disposed() {
      return this._disposed;
    }
    dispose() {
      this._disposed || ((this._disposed = !0), (this._rddb8305acca679.length = 0));
    }
  }
