// Extracted from HabboAirLauncher.deobf.js, line 89171.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iaca387e3233fdb

class {
    static {
      n(this, "UnkMessageParser_I_aca387");
    }
    static {
      SAr(this, "UnkMessageParser_I_aca387");
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
