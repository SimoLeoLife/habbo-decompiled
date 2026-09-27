// Extracted from HabboAirLauncher.deobf.js, line 75246.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i486f84b052c03b

class {
    static {
      n(this, "UnkClass_486f84");
    }
    static {
      P4r(this, "UnkClass_486f84");
    }
    offerId;
    localizationId;
    _r9d17cb68dc4d9c;
    priceInCredits;
    priceInActivityPoints;
    activityPointType;
    giftable;
    products;
    clubLevel;
    bundlePurchaseAllowed;
    constructor(e) {
      ((this.offerId = e.readInteger()),
        (this.localizationId = e.readString()),
        (this._r9d17cb68dc4d9c = e.readBoolean()),
        (this.priceInCredits = e.readInteger()),
        (this.priceInActivityPoints = e.readInteger()),
        (this.activityPointType = e.readInteger()),
        (this.giftable = e.readBoolean()));
      let r = e.readInteger();
      this.products = [];
      for (let t = 0; t < r; t++) this.products.push(new ps(e));
      ((this.clubLevel = e.readInteger()), (this.bundlePurchaseAllowed = e.readBoolean()));
    }
  }
