// Extracted from HabboAirLauncher.deobf.js, line 93983.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_60/class_4155.as
// Obfuscated name: _i69e0fc6336f811

class {
    static {
      n(this, "class_4155");
    }
    static {
      BLr(this, "class_4155");
    }
    _userName = null;
    parse(e) {
      return ((this._userName = e.readString()), !0);
    }
    flush() {
      return ((this._userName = null), !0);
    }
    get userName() {
      return this._userName;
    }
  }
