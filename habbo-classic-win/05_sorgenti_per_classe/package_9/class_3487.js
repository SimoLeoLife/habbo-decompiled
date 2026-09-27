// Estratto da HabboAirLauncher.deobf.js, riga 111424.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_3487.as
// Nome offuscato: _i45d7405a2c6f36

class {
    static {
      n(this, "class_3487");
    }
    static {
      Snt(this, "class_3487");
    }
    groupId;
    groupName;
    _rc9fc89e7eb27a7;
    primaryColor;
    secondaryColor;
    favourite;
    ownerId;
    _r2bc4b797ee5b8d;
    constructor(e) {
      ((this.groupId = e.readInteger()),
        (this.groupName = e.readString()),
        (this._rc9fc89e7eb27a7 = e.readString()),
        (this.primaryColor = e.readString()),
        (this.secondaryColor = e.readString()),
        (this.favourite = e.readBoolean()),
        (this.ownerId = e.readInteger()),
        (this._r2bc4b797ee5b8d = e.readBoolean()));
    }
  }
