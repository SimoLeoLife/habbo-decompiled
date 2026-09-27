// Extracted from HabboAirLauncher.deobf.js, line 77950.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_238/class_4111.as
// Obfuscated name: _i72a9e670a23629

class {
    static {
      n(this, "class_4111");
    }
    static {
      Kgr(this, "class_4111");
    }
    _stuffId = -1;
    get stuffId() {
      return this._stuffId;
    }
    flush() {
      return ((this._stuffId = -1), !0);
    }
    parse(e) {
      return ((this._stuffId = e.readInteger()), !0);
    }
  }
