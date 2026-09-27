// Estratto da HabboAirLauncher.deobf.js, riga 99821.

class {
    static {
      n(this, "_i152516ea58647e");
    }
    static {
      Cjr(this, "_i152516ea58647e");
    }
    _r1487ea2942e195 = 0;
    get seconds() {
      return this._r1487ea2942e195;
    }
    flush() {
      return ((this._r1487ea2942e195 = 0), !0);
    }
    parse(e) {
      return e ? ((this._r1487ea2942e195 = e.readInteger()), !0) : !1;
    }
  }
