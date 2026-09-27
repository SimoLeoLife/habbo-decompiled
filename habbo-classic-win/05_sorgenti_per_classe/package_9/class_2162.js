// Extracted from HabboAirLauncher.deobf.js, line 112386.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_9/class_2162.as
// Obfuscated name: _ic8c9af3e30148f

class a {
    static {
      n(this, "class_2162");
    }
    static {
      dot(this, "class_2162");
    }
    static _r0c2f6e840546db = 0;
    static _r9d4bf4a4d75660 = 1;
    static const_104 = 2;
    static TYPE_LARGE = 3;
    static const_96 = 4;
    static _r2ee7656552bce6 = 0;
    static _r622628c9f01b9f = 1;
    static name_10 = 2;
    groupId;
    var_4111;
    type;
    groupName;
    description;
    _rc9fc89e7eb27a7;
    roomId;
    roomName;
    status;
    totalMembers;
    favourite;
    creationDate;
    isOwner;
    isAdmin;
    ownerName;
    openDetails;
    var_5042;
    var_5196;
    var_4496;
    constructor(e) {
      ((this.groupId = e.readInteger()),
        (this.var_4111 = e.readBoolean()),
        (this.type = e.readInteger()),
        (this.groupName = e.readString()),
        (this.description = e.readString()),
        (this._rc9fc89e7eb27a7 = e.readString()),
        (this.roomId = e.readInteger()),
        (this.roomName = e.readString()),
        (this.status = e.readInteger()),
        (this.totalMembers = e.readInteger()),
        (this.favourite = e.readBoolean()),
        (this.creationDate = e.readString()),
        (this.isOwner = e.readBoolean()),
        (this.isAdmin = e.readBoolean()),
        (this.ownerName = e.readString()),
        (this.openDetails = e.readBoolean()),
        (this.var_5042 = e.readBoolean()),
        (this.var_5196 = e.readInteger()),
        (this.var_4496 = e.readBoolean()));
    }
    get joiningAllowed() {
      return (
        this.status === a._r2ee7656552bce6 &&
        (this.type === a._r0c2f6e840546db || this.type === a.const_96)
      );
    }
    get _rfe67451f34d46b() {
      return this.status === a._r2ee7656552bce6 && this.type === a._r9d4bf4a4d75660;
    }
    get _rac4ed10fd6c363() {
      return this.var_4111 && !this.isOwner && this.status === a._r622628c9f01b9f;
    }
  }
