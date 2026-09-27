// Extracted from HabboAirLauncher.deobf.js, line 111075.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0133ad5bf82e4d

class {
    static {
      n(this, "UnkMessageParser_IS_0133ad");
    }
    static {
      ent(this, "UnkMessageParser_IS_0133ad");
    }
    result = -1;
    _r549e697cdd257f = null;
    flush() {
      return ((this.result = -1), (this._r549e697cdd257f = null), !0);
    }
    parse(e) {
      return ((this.result = e.readInteger()), (this._r549e697cdd257f = e.readString()), !0);
    }
  }
