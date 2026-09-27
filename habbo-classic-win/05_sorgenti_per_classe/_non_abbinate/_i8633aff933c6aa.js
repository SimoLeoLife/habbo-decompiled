// Estratto da HabboAirLauncher.deobf.js, riga 84201.

class {
    static {
      n(this, "_i8633aff933c6aa");
    }
    static {
      OIr(this, "_i8633aff933c6aa");
    }
    _position = 0;
    get position() {
      return this._position;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._position = e.readInteger()), !0);
    }
  }
