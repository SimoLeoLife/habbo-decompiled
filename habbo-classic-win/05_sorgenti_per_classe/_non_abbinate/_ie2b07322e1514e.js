// Estratto da HabboAirLauncher.deobf.js, riga 98520.

class {
    static {
      n(this, "_ie2b07322e1514e");
    }
    static {
      CUr(this, "_ie2b07322e1514e");
    }
    _rfdda35a463a125 = !1;
    var_142 = null;
    get expired() {
      return this._rfdda35a463a125;
    }
    get quest() {
      return this.var_142;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._rfdda35a463a125 = e.readBoolean()), (this.var_142 = new Jc(e)), !0);
    }
  }
