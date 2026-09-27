// Estratto da HabboAirLauncher.deobf.js, riga 75246.

class {
    static {
      n(this, "_i486f84b052c03b");
    }
    static {
      P4r(this, "_i486f84b052c03b");
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
