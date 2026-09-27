// Extracted from HabboAirLauncher.deobf.js, line 106937.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ic88079c8b8ede5

class {
    static {
      n(this, "UnkMessageParser_I_c88079");
    }
    static {
      pJr(this, "UnkMessageParser_I_c88079");
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
