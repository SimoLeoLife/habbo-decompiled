// Estratto da HabboAirLauncher.deobf.js, riga 111836.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_1843.as
// Nome offuscato: _id25245feab468d

class {
    static {
      n(this, "class_1843");
    }
    static {
      bst(this, "class_1843");
    }
    class_2912 = [];
    isOwner;
    groupId;
    groupName;
    _rc7d9c89cfbc1c4;
    baseRoomId;
    _rd4fc3f07ad4d04;
    _r95ee941642047f;
    guildType;
    guildRightsLevel;
    locked;
    url;
    class_2482 = [];
    _rc9fc89e7eb27a7;
    _r25bd5f5a9273b2;
    constructor(e) {
      let r = e.readInteger();
      for (let t = 0; t < r; t++)
        this.class_2912.push(new class_2912(e.readInteger(), e.readString(), e.readBoolean()));
      ((this.isOwner = e.readBoolean()),
        (this.groupId = e.readInteger()),
        (this.groupName = e.readString()),
        (this._rc7d9c89cfbc1c4 = e.readString()),
        (this.baseRoomId = e.readInteger()),
        (this._rd4fc3f07ad4d04 = e.readInteger()),
        (this._r95ee941642047f = e.readInteger()),
        (this.guildType = e.readInteger()),
        (this.guildRightsLevel = e.readInteger()),
        (this.locked = e.readBoolean()),
        (this.url = e.readString()),
        (r = e.readInteger()));
      for (let t = 0; t < r; t++) this.class_2482.push(new class_2482(e));
      ((this._rc9fc89e7eb27a7 = e.readString()), (this._r25bd5f5a9273b2 = e.readInteger()));
    }
    get exists() {
      return !0;
    }
  }
