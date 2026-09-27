// Extracted from HabboAirLauncher.deobf.js, line 89135.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iedc9e42d06d56c

class {
    static {
      n(this, "UnkMessageParser_I_edc9e4");
    }
    static {
      kAr(this, "UnkMessageParser_I_edc9e4");
    }
    _type = 0;
    flush() {
      return ((this._type = 0), !0);
    }
    parse(e) {
      return ((this._type = e.readInteger()), !0);
    }
    get type() {
      return this._type;
    }
  }
