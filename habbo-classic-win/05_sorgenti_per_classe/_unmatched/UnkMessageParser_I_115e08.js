// Extracted from HabboAirLauncher.deobf.js, line 83488.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i115e0878bad0d3

class {
    static {
      n(this, "UnkMessageParser_I_115e08");
    }
    static {
      Pyr(this, "UnkMessageParser_I_115e08");
    }
    _userId = 0;
    get userId() {
      return this._userId;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), !0);
    }
  }
