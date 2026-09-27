// Estratto da HabboAirLauncher.deobf.js, riga 106937.

class {
    static {
      n(this, "_ic88079c8b8ede5");
    }
    static {
      pJr(this, "_ic88079c8b8ede5");
    }
    _requestId = -1;
    get requestId() {
      return this._requestId;
    }
    flush() {
      return ((this._requestId = -1), !0);
    }
    parse(e) {
      return ((this._requestId = e.readInteger()), !0);
    }
  }
