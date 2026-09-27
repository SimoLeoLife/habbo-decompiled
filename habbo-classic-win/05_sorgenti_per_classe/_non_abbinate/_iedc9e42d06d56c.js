// Estratto da HabboAirLauncher.deobf.js, riga 89135.

class {
    static {
      n(this, "_iedc9e42d06d56c");
    }
    static {
      kAr(this, "_iedc9e42d06d56c");
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
