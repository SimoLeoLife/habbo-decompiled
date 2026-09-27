// Estratto da HabboAirLauncher.deobf.js, riga 93124.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_50/class_3956.as
// Nome offuscato: _if9d4f679b83bb9

class {
    static {
      n(this, "class_3956");
    }
    static {
      iDr(this, "class_3956");
    }
    _flatId;
    var_3576;
    var_5107;
    var_1514;
    _ownerName;
    var_218;
    _disposed = !1;
    constructor(e) {
      ((this._flatId = e.readInteger()),
        (this.var_3576 = e.readInteger()),
        (this.var_5107 = e.readBoolean()),
        (this.var_1514 = e.readInteger()),
        (this._ownerName = e.readString()),
        (this.var_218 = new class_1862(e)));
    }
    get flatId() {
      return this._flatId;
    }
    get userCount() {
      return this.var_3576;
    }
    get _r743819c51e73a0() {
      return this.var_5107;
    }
    get ownerId() {
      return this.var_1514;
    }
    get ownerName() {
      return this._ownerName;
    }
    get room() {
      return this.var_218;
    }
    get disposed() {
      return this._disposed;
    }
    dispose() {
      this._disposed ||
        ((this._disposed = !0), this.var_218?.dispose(), (this.var_218 = null));
    }
  }
