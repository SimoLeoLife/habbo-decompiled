// Extracted from HabboAirLauncher.deobf.js, line 77986.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_238/class_4244.as
// Obfuscated name: _i01fe13bdab042e

class {
    static {
      n(this, "class_4244");
    }
    static {
      Jgr(this, "class_4244");
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
