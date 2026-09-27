// Extracted from HabboAirLauncher.deobf.js, line 74266.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_5/class_2281.as
// Obfuscated name: _ifc7b4b858e9f63

class a {
    static {
      n(this, "class_2281");
    }
    static {
      J2r(this, "class_2281");
    }
    static PRODUCT_TYPE_BADGE = "b";
    static const_1159 = "cl";
    static PRODUCT_TYPE_EFFECT = "e";
    static PRODUCT_TYPE_ITEM = "i";
    static PRODUCT_TYPE_STUFF = "s";
    productType;
    _r31d173d62fa550 = 0;
    extraParam;
    productCount;
    var_4154 = !1;
    _raba7e4532bd54d = 0;
    _r807decfd331c6c = 0;
    constructor(e) {
      switch (((this.productType = e.readString()), this.productType)) {
        case a.PRODUCT_TYPE_BADGE:
          ((this.extraParam = e.readString()), (this.productCount = 1));
          break;
        default:
          ((this._r31d173d62fa550 = e.readInteger()),
            (this.extraParam = e.readString()),
            (this.productCount = e.readInteger()),
            (this.var_4154 = e.readBoolean()),
            this.var_4154 &&
              ((this._raba7e4532bd54d = e.readInteger()),
              (this._r807decfd331c6c = e.readInteger())));
          break;
      }
    }
  }
