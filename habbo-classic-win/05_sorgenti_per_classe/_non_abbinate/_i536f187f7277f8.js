// Estratto da HabboAirLauncher.deobf.js, riga 83448.

class {
    static {
      n(this, "_i536f187f7277f8");
    }
    static {
      Ayr(this, "_i536f187f7277f8");
    }
    _userId = NaN;
    _rfc9999993e0624 = NaN;
    flush() {
      return ((this._userId = NaN), (this._rfc9999993e0624 = NaN), !0);
    }
    parse(e) {
      return ((this._userId = e.readInteger()), (this._rfc9999993e0624 = e.readInteger()), !0);
    }
    get userId() {
      return this._userId;
    }
    get _rf2fa5427f4c4ff() {
      return this._rfc9999993e0624;
    }
  }
