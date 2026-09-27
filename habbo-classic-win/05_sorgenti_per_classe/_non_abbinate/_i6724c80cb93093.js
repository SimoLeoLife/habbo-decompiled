// Estratto da HabboAirLauncher.deobf.js, riga 84463.

class {
    static {
      n(this, "_i6724c80cb93093");
    }
    static {
      bxr(this, "_i6724c80cb93093");
    }
    _userId = 0;
    flush() {
      return !1;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), !0);
    }
    get userId() {
      return this._userId;
    }
  }
