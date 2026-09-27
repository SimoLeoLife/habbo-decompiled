// Extracted from HabboAirLauncher.deobf.js, line 93085.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_50/class_1862.as
// Obfuscated name: _i5be196442bdc66

class {
    static {
      n(this, "class_1862");
    }
    static {
      tDr(this, "class_1862");
    }
    var_4777;
    _name = "";
    _desc = "";
    var_598 = [];
    _disposed = !1;
    constructor(e) {
      if (((this.var_4777 = e.readBoolean()), !this.exists)) return;
      ((this._name = e.readString()), (this._desc = e.readString()));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.var_598.push(e.readString());
    }
    get name() {
      return this._name;
    }
    get desc() {
      return this._desc;
    }
    get tags() {
      return this.var_598;
    }
    get exists() {
      return this.var_4777;
    }
    get disposed() {
      return this._disposed;
    }
    dispose() {
      this._disposed || ((this._disposed = !0), (this.var_598 = []));
    }
  }
