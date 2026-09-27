// Estratto da HabboAirLauncher.deobf.js, riga 87994.

class {
    static {
      n(this, "_i7a17c480796fc4");
    }
    static {
      HWr(this, "_i7a17c480796fc4");
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
