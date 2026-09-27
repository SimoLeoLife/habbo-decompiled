// Extracted from HabboAirLauncher.deobf.js, line 75469.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i29cd448f0b9de8

class {
    static {
      n(this, "UnkClass_29cd44");
    }
    static {
      r7r(this, "UnkClass_29cd44");
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
