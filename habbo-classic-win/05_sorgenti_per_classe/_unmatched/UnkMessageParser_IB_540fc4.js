// Extracted from HabboAirLauncher.deobf.js, line 74919.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i540fc4efd7a444

class {
    static {
      n(this, "UnkMessageParser_IB_540fc4");
    }
    static {
      Z9r(this, "UnkMessageParser_IB_540fc4");
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
