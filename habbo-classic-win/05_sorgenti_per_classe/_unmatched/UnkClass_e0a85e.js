// Extracted from HabboAirLauncher.deobf.js, line 76341.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie0a85ec37dd829

class {
    static {
      n(this, "UnkClass_e0a85e");
    }
    static {
      Wpr(this, "UnkClass_e0a85e");
    }
    claimId;
    status;
    claimedAmount;
    claimLimit;
    validFrom;
    validTo;
    createdAt;
    _r4e70e7cf4e0337;
    collection;
    _raeb033db5aa083;
    wallet;
    _rd3a34cf4b5105c;
    constructor(e) {
      ((this.claimId = e.readString()),
        (this.status = e.readInteger()),
        (this.claimedAmount = e.readInteger()),
        (this.claimLimit = e.readInteger()),
        (this.validFrom = e.readLong()),
        (this.validTo = e.readLong()),
        (this.createdAt = e.readLong()),
        (this._r4e70e7cf4e0337 = e.readLong()),
        (this.collection = e.readString()),
        (this._raeb033db5aa083 = e.readString()),
        (this.wallet = e.readString()),
        (this._rd3a34cf4b5105c = new UnkSubclassOf_class_2508_889878(e)));
    }
  }
