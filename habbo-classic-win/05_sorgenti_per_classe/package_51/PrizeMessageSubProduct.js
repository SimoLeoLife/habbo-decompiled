// Estratto da HabboAirLauncher.deobf.js, riga 99018.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_51/PrizeMessageSubProduct.as
// Nome offuscato: _i83e1c312352d67

class {
    static {
      n(this, "PrizeMessageSubProduct");
    }
    static {
      fGr(this, "PrizeMessageSubProduct");
    }
    var_3394;
    var_3967;
    constructor(e) {
      ((this.var_3394 = e.readString()), (this.var_3967 = e.readInteger()));
    }
    get productItemType() {
      return this.var_3394;
    }
    get productItemTypeId() {
      return this.var_3967;
    }
  }
