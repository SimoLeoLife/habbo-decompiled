// Estratto da HabboAirLauncher.deobf.js, riga 103100.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_3565.as
// Nome offuscato: _i0c6ac466bcfa41

class {
    static {
      n(this, "class_3565");
    }
    static {
      tYr(this, "class_3565");
    }
    var_3170 = !1;
    _furniTypeName = "";
    var_5358 = !1;
    var_2215 = 0;
    var_2384 = 0;
    var_2772 = 0;
    get isWallItem() {
      return this.var_3170;
    }
    get furniTypeName() {
      return this._furniTypeName;
    }
    get buyout() {
      return this.var_5358;
    }
    get priceInCredits() {
      return this.var_2215;
    }
    get priceInActivityPoints() {
      return this.var_2384;
    }
    get activityPointType() {
      return this.var_2772;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return (
        (this.var_3170 = e.readBoolean()),
        (this._furniTypeName = e.readString()),
        (this.var_5358 = e.readBoolean()),
        (this.var_2215 = e.readInteger()),
        (this.var_2384 = e.readInteger()),
        (this.var_2772 = e.readInteger()),
        !0
      );
    }
  }
