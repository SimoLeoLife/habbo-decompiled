// Extracted from HabboAirLauncher.deobf.js, line 99821.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i152516ea58647e

class {
    static {
      n(this, "UnkMessageParser_I_152516");
    }
    static {
      Cjr(this, "UnkMessageParser_I_152516");
    }
    _r1487ea2942e195 = 0;
    get seconds() {
      return this._r1487ea2942e195;
    }
    flush() {
      return ((this._r1487ea2942e195 = 0), !0);
    }
    parse(e) {
      return e ? ((this._r1487ea2942e195 = e.readInteger()), !0) : !1;
    }
  }
