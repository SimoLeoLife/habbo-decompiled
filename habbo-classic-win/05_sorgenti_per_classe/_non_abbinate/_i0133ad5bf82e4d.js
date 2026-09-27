// Estratto da HabboAirLauncher.deobf.js, riga 111075.

class {
    static {
      n(this, "_i0133ad5bf82e4d");
    }
    static {
      ent(this, "_i0133ad5bf82e4d");
    }
    result = -1;
    _r549e697cdd257f = null;
    flush() {
      return ((this.result = -1), (this._r549e697cdd257f = null), !0);
    }
    parse(e) {
      return ((this.result = e.readInteger()), (this._r549e697cdd257f = e.readString()), !0);
    }
  }
