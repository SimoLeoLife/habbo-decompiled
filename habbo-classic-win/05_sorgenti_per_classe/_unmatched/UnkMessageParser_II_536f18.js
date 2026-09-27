// Extracted from HabboAirLauncher.deobf.js, line 83448.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i536f187f7277f8

class {
    static {
      n(this, "UnkMessageParser_II_536f18");
    }
    static {
      Ayr(this, "UnkMessageParser_II_536f18");
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
