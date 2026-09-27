// Estratto da HabboAirLauncher.deobf.js, riga 89171.

class {
    static {
      n(this, "_iaca387e3233fdb");
    }
    static {
      SAr(this, "_iaca387e3233fdb");
    }
    _type = 0;
    flush() {
      return ((this._type = 0), !0);
    }
    parse(e) {
      return ((this._type = e.readInteger()), !0);
    }
    get type() {
      return this._type;
    }
  }
