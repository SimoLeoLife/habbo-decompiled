// Estratto da HabboAirLauncher.deobf.js, riga 92043.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_45/class_2371.as
// Nome offuscato: _ie61fabd0656dee

class {
    static {
      n(this, "class_2371");
    }
    static {
      UPr(this, "class_2371");
    }
    _offerId = 0;
    var_2561 = !1;
    get success() {
      return this.var_2561;
    }
    get offerId() {
      return this._offerId;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._offerId = e.readInteger()), (this.var_2561 = e.readBoolean()), !0);
    }
  }
