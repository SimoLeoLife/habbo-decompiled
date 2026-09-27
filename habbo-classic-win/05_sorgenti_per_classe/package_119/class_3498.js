// Extracted from HabboAirLauncher.deobf.js, line 91089.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_119/class_3498.as
// Obfuscated name: _icdd371660e9115

class {
    static {
      n(this, "class_3498");
    }
    static {
      MRr(this, "class_3498");
    }
    static const_1280 = 1;
    var_2731 = 0;
    _userId = 0;
    flush() {
      return !0;
    }
    parse(e) {
      return ((this._userId = e.readInteger()), (this.var_2731 = e.readInteger()), !0);
    }
    get userID() {
      return this._userId;
    }
    get reason() {
      return this.var_2731;
    }
  }
