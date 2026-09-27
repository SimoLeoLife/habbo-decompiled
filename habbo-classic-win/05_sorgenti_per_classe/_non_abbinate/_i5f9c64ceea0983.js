// Estratto da HabboAirLauncher.deobf.js, riga 105456.

class {
    static {
      n(this, "_i5f9c64ceea0983");
    }
    static {
      CZr(this, "_i5f9c64ceea0983");
    }
    _flatId = 0;
    _userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._flatId = e.readInteger()), (this._userId = e.readInteger()), !0);
    }
    get flatId() {
      return this._flatId;
    }
    get userId() {
      return this._userId;
    }
  }
