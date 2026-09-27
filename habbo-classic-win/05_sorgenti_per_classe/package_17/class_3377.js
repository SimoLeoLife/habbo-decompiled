// Extracted from HabboAirLauncher.deobf.js, line 73270.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_17/class_3377.as
// Obfuscated name: _i39480e3fd7aa81

class {
    static {
      n(this, "class_3377");
    }
    static {
      v5r(this, "class_3377");
    }
    name;
    sanctionLengthInHours;
    avatarOnly;
    tradeLockInfo;
    _r1e4925451a85d4;
    constructor(e) {
      ((this.name = e.readString()),
        (this.sanctionLengthInHours = e.readInteger()),
        e.readInteger(),
        (this.avatarOnly = e.readBoolean()),
        (this.tradeLockInfo = e.bytesAvailable ? e.readString() : ""),
        (this._r1e4925451a85d4 = e.bytesAvailable ? e.readString() : ""));
    }
  }
