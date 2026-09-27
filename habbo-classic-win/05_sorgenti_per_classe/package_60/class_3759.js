// Estratto da HabboAirLauncher.deobf.js, riga 94046.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_3759.as
// Nome offuscato: _i1cb33346da7da1

class {
    static {
      n(this, "class_3759");
    }
    static {
      SLr(this, "class_3759");
    }
    _flatId = 0;
    var_3644 = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), (this.var_3644 = e.readBoolean()), !0);
    }
    get flatId() {
      return this._flatId;
    }
    get added() {
      return this.var_3644;
    }
  }
