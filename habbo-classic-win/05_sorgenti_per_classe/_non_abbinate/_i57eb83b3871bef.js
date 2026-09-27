// Estratto da HabboAirLauncher.deobf.js, riga 72846.

class {
    static {
      n(this, "_i57eb83b3871bef");
    }
    static {
      T8r(this, "_i57eb83b3871bef");
    }
    isOpen = !1;
    _r0a1a3a8752e558 = 0;
    flush() {
      return ((this.isOpen = !1), (this._r0a1a3a8752e558 = 0), !0);
    }
    parse(e) {
      return ((this.isOpen = e.readInteger() > 0), (this._r0a1a3a8752e558 = e.readInteger()), !0);
    }
  }
