// Extracted from HabboAirLauncher.deobf.js, line 87994.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7a17c480796fc4

class {
    static {
      n(this, "UnkClass_7a17c4");
    }
    static {
      HWr(this, "UnkClass_7a17c4");
    }
    _userId;
    _userName;
    var_1129;
    constructor(e) {
      ((this._userId = e.readInteger()),
        (this._userName = e.readString()),
        (this.var_1129 = e.readString()));
    }
    get userId() {
      return this._userId;
    }
    get userName() {
      return this._userName;
    }
    get figure() {
      return this.var_1129;
    }
  }
