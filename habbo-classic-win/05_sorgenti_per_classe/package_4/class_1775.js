// Estratto da HabboAirLauncher.deobf.js, riga 74392.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_4/class_1775.as
// Nome offuscato: _i60e83df179016e

class {
    static {
      n(this, "class_1775");
    }
    static {
      n9r(this, "class_1775");
    }
    pageId = -1;
    _r28a444d88bee4d = "";
    _rf3871e54af1151 = "";
    localization = null;
    offers = [];
    offerId = -1;
    var_3503 = !1;
    class_2157 = [];
    flush() {
      return (
        (this.pageId = -1),
        (this._r28a444d88bee4d = ""),
        (this._rf3871e54af1151 = ""),
        (this.localization = null),
        (this.offers = []),
        (this.offerId = -1),
        (this.var_3503 = !1),
        (this.class_2157 = []),
        !0
      );
    }
    parse(e) {
      ((this.pageId = e.readInteger()),
        (this._r28a444d88bee4d = e.readString()),
        (this._rf3871e54af1151 = e.readString()),
        (this.localization = new _i011a963010836c(e)),
        (this.offers = []));
      let r = e.readInteger();
      for (let t = 0; t < r; t++) this.offers.push(new _ie671c5da796359(e));
      if (
        ((this.offerId = e.readInteger()),
        (this.var_3503 = e.readBoolean()),
        e.bytesAvailable)
      ) {
        ((this.class_2157 = []), (r = e.readInteger()));
        for (let t = 0; t < r; t++) this.class_2157.push(new Zv(e));
      }
      return !0;
    }
  }
