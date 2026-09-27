// Estratto da HabboAirLauncher.deobf.js, riga 77475.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_207/class_3380.as
// Nome offuscato: _i3f7a00f4e9fff3

class {
    static {
      n(this, "class_3380");
    }
    static {
      ogr(this, "class_3380");
    }
    _recipeCode;
    _productCode;
    var_3747;
    constructor(e) {
      ((this._recipeCode = e.readString()),
        (this._productCode = e.readString()),
        (this.var_3747 = e.readString()));
    }
    get _rdb4fd02ec6f839() {
      return this._recipeCode;
    }
    get _raeb033db5aa083() {
      return this._productCode;
    }
    get furnitureClassName() {
      return this.var_3747;
    }
  }
