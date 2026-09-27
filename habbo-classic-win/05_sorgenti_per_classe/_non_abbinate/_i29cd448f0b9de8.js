// Estratto da HabboAirLauncher.deobf.js, riga 75469.

class {
    static {
      n(this, "_i29cd448f0b9de8");
    }
    static {
      r7r(this, "_i29cd448f0b9de8");
    }
    offerId;
    localizationId;
    priceInCredits;
    priceInActivityPoints;
    activityPointType;
    clubLevel = 0;
    giftable = !1;
    constructor(e) {
      ((this.offerId = e.readInteger()),
        (this.localizationId = e.readString()),
        (this.priceInCredits = e.readInteger()),
        (this.priceInActivityPoints = e.readInteger()),
        (this.activityPointType = e.readInteger()));
    }
  }
