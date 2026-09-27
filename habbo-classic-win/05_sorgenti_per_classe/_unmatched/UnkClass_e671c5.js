// Extracted from HabboAirLauncher.deobf.js, line 74304.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie671c5da796359

class {
    static {
      n(this, "UnkClass_e671c5");
    }
    static {
      r9r(this, "UnkClass_e671c5");
    }
    offerId;
    localizationId;
    _r9d17cb68dc4d9c;
    priceInCredits;
    priceInActivityPoints;
    priceInSilver;
    activityPointType;
    giftable;
    products;
    clubLevel;
    bundlePurchaseAllowed;
    previewImage;
    constructor(e) {
      ((this.offerId = e.readInteger()),
        (this.localizationId = e.readString()),
        (this._r9d17cb68dc4d9c = e.readBoolean()),
        (this.priceInCredits = e.readInteger()),
        (this.priceInActivityPoints = e.readInteger()),
        (this.activityPointType = e.readInteger()),
        (this.priceInSilver = e.readInteger()),
        (this.giftable = e.readBoolean()));
      let r = e.readInteger();
      this.products = [];
      for (let t = 0; t < r; t++) this.products.push(new ps(e));
      ((this.clubLevel = e.readInteger()),
        (this.bundlePurchaseAllowed = e.readBoolean()),
        e.readBoolean(),
        (this.previewImage = e.readString()));
    }
  }
