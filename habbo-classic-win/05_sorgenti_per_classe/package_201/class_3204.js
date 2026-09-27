// Estratto da HabboAirLauncher.deobf.js, riga 73886.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_201/class_3204.as
// Nome offuscato: _ief544942703559

class {
    static {
      n(this, "class_3204");
    }
    static {
      v2r(this, "class_3204");
    }
    var_3628 = !1;
    _productName = null;
    var_3765 = null;
    var_3747 = null;
    parse(e) {
      return (
        (this.var_3628 = e.readBoolean()),
        (this._productName = e.readString()),
        (this.var_3765 = e.readString()),
        (this.var_3747 = e.readString()),
        !0
      );
    }
    flush() {
      return (
        (this.var_3628 = !1),
        (this._productName = null),
        (this.var_3765 = null),
        (this.var_3747 = null),
        !0
      );
    }
    get _r2685a5c0b25116() {
      return this.var_3628;
    }
    get productName() {
      return this._productName;
    }
    get customImage() {
      return this.var_3765;
    }
    get furnitureClassName() {
      return this.var_3747;
    }
  }
