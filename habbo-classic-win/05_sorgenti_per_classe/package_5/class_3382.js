// Extracted from HabboAirLauncher.deobf.js, line 75529.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_5/class_3382.as
// Obfuscated name: _i33bdecbfe07f0b

class {
    static {
      n(this, "class_3382");
    }
    static {
      o7r(this, "class_3382");
    }
    id = 0;
    identifier = "";
    type = 0;
    title = "";
    description = "";
    imageUrl = "";
    _r208659c203d13d = "";
    _raeb033db5aa083 = "";
    _r12cb3a063dbb1e = 0;
    expirationTime = 0;
    priceInCredits = 0;
    priceInActivityPoints = 0;
    activityPointType = 0;
    _r2353151204914f = [];
    trackingState = 0;
    constructor(e = null) {
      e != null &&
        ((this.id = e.id),
        (this.identifier = e.identifier),
        (this.type = e.type),
        (this.title = e.title),
        (this.description = e.description),
        (this.imageUrl = e.imageUrl),
        (this._r208659c203d13d = e._r208659c203d13d),
        (this._raeb033db5aa083 = e._raeb033db5aa083),
        (this._r12cb3a063dbb1e = e._r12cb3a063dbb1e),
        (this.expirationTime = e.expirationTime),
        (this.priceInCredits = e.priceInCredits),
        (this.priceInActivityPoints = e.priceInActivityPoints),
        (this.activityPointType = e.activityPointType),
        (this._r2353151204914f = e._r2353151204914f),
        (this.trackingState = e.trackingState));
    }
    parse(e) {
      ((this.trackingState = e.readInteger()),
        (this.id = e.readInteger()),
        (this.identifier = e.readString()),
        (this._raeb033db5aa083 = e.readString()),
        (this.priceInCredits = e.readInteger()),
        (this.priceInActivityPoints = e.readInteger()),
        (this.activityPointType = e.readInteger()),
        (this._r12cb3a063dbb1e = e.readInteger()));
      let r = e.readInteger();
      ((this.expirationTime = r > 0 ? r * 1e3 + _ia411d8d8194a3a() : 0),
        (this.title = e.readString()),
        (this.description = e.readString()),
        (this.imageUrl = e.readString()),
        (this._r208659c203d13d = e.readString()),
        (this.type = e.readInteger()),
        (this._r2353151204914f = []));
      let t = e.readInteger();
      for (let i = 0; i < t; i++) this._r2353151204914f.push(e.readString());
      return this;
    }
    purchased(e) {
      this._r12cb3a063dbb1e -= e;
    }
  }
