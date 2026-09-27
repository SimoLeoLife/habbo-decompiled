// Estratto da HabboAirLauncher.deobf.js, riga 83488.

class {
    static {
      n(this, "_i115e0878bad0d3");
    }
    static {
      Pyr(this, "_i115e0878bad0d3");
    }
    _userId = 0;
    get userId() {
      return this._userId;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), !0);
    }
  }
