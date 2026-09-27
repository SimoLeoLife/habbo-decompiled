// Estratto da HabboAirLauncher.deobf.js, riga 77549.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_207/class_3746.as
// Nome offuscato: _i6db169a1221688

class {
    static {
      n(this, "class_3746");
    }
    static {
      _gr(this, "class_3746");
    }
    _count;
    var_3747;
    constructor(e) {
      ((this._count = e.readInteger()), (this.var_3747 = e.readString()));
    }
    get count() {
      return this._count;
    }
    get furnitureClassName() {
      return this.var_3747;
    }
  }
