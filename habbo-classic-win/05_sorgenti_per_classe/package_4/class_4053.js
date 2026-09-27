// Estratto da HabboAirLauncher.deobf.js, riga 74985.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_4053.as
// Nome offuscato: _icb4706815baca0

class {
    static {
      n(this, "class_4053");
    }
    static {
      n4r(this, "class_4053");
    }
    _r5d703086ca3460 = -1;
    pageId = -1;
    offerId = -1;
    productType = "";
    flush() {
      return (
        (this._r5d703086ca3460 = -1),
        (this.pageId = -1),
        (this.offerId = -1),
        (this.productType = ""),
        !0
      );
    }
    parse(e) {
      return (
        (this._r5d703086ca3460 = e.readInteger()),
        (this.pageId = e.readInteger()),
        (this.offerId = e.readInteger()),
        (this.productType = e.readString()),
        !0
      );
    }
  }
