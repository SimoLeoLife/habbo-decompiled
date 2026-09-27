// Extracted from HabboAirLauncher.deobf.js, line 76150.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i7e0d9e648ea358

class {
    static {
      n(this, "UnkMessageParser_I_7e0d9e");
    }
    static {
      lpr(this, "UnkMessageParser_I_7e0d9e");
    }
    _rb8b6ff23484682 = 0;
    get _r5f1a30114e44a8() {
      return this._rb8b6ff23484682;
    }
    flush() {
      return ((this._rb8b6ff23484682 = 0), !0);
    }
    parse(e) {
      return ((this._rb8b6ff23484682 = e.readInteger()), !0);
    }
  }
