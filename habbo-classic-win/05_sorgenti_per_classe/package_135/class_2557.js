// Extracted from HabboAirLauncher.deobf.js, line 110829.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_135/class_2557.as
// Obfuscated name: _i8d2f78c84b9dc5

class {
    static {
      n(this, "class_2557");
    }
    static {
      Sit(this, "class_2557");
    }
    _details = null;
    flush() {
      return ((this._details = null), !0);
    }
    parse(e) {
      return ((this._details = new WiredTransactionDetails(e)), !0);
    }
    get details() {
      return this._details;
    }
  }
