// Estratto da HabboAirLauncher.deobf.js, riga 105324.

class {
    static {
      n(this, "_i0e41126f9bd2e3");
    }
    static {
      bZr(this, "_i0e41126f9bd2e3");
    }
    _userId;
    _userName;
    constructor(e) {
      ((this._userId = e.readInteger()), (this._userName = e.readString()));
    }
    get userId() {
      return this._userId;
    }
    get userName() {
      return this._userName;
    }
  }
