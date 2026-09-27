// Extracted from HabboAirLauncher.deobf.js, line 84201.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8633aff933c6aa

class {
    static {
      n(this, "UnkMessageParser_I_8633af");
    }
    static {
      OIr(this, "UnkMessageParser_I_8633af");
    }
    _position = 0;
    get position() {
      return this._position;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._position = e.readInteger()), !0);
    }
  }
