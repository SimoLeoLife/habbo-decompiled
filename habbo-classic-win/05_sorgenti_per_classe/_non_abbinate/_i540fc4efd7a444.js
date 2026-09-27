// Estratto da HabboAirLauncher.deobf.js, riga 74919.

class {
    static {
      n(this, "_i540fc4efd7a444");
    }
    static {
      Z9r(this, "_i540fc4efd7a444");
    }
    offerId = 0;
    _r05039e0a50515a = !1;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this.offerId = e.readInteger()), (this._r05039e0a50515a = e.readBoolean()), !0);
    }
  }
