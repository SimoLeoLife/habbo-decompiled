// Extracted from HabboAirLauncher.deobf.js, line 103024.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_168/class_4235.as
// Obfuscated name: _ie60d8b28e311c3

class {
    static {
      n(this, "class_4235");
    }
    static {
      YXr(this, "class_4235");
    }
    _code = 0;
    get code() {
      return this._code;
    }
    flush() {
      return !0;
    }
    parse(e) {
      return e ? ((this._code = e.readInteger()), !0) : !1;
    }
  }
