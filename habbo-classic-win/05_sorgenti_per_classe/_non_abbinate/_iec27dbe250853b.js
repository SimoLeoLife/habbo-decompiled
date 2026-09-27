// Estratto da HabboAirLauncher.deobf.js, riga 105388.

class {
    static {
      n(this, "_iec27dbe250853b");
    }
    static {
      gZr(this, "_iec27dbe250853b");
    }
    _userId;
    _userName;
    _selected = !1;
    constructor(e) {
      ((this._userId = e.readInteger()), (this._userName = e.readString()));
    }
    get userId() {
      return this._userId;
    }
    get userName() {
      return this._userName;
    }
    get selected() {
      return this._selected;
    }
    set selected(e) {
      this._selected = e;
    }
  }
