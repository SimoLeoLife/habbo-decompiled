// Extracted from HabboAirLauncher.deobf.js, line 106334.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_85/class_2354.as
// Obfuscated name: _i2b6b8719e9b8fa

class {
    static {
      n(this, "class_2354");
    }
    static {
      Bqr(this, "class_2354");
    }
    var_3076;
    var_4161;
    _songName;
    var_4089;
    var_5054 = 0;
    constructor(e, r, t, i) {
      ((this.var_3076 = e),
        (this.var_4161 = r),
        (this._songName = t),
        (this.var_4089 = i));
    }
    get id() {
      return this.var_3076;
    }
    get length() {
      return this.var_4161;
    }
    get name() {
      return this._songName;
    }
    get creator() {
      return this.var_4089;
    }
    get startPlayHeadPos() {
      return this.var_5054;
    }
    set startPlayHeadPos(e) {
      this.var_5054 = e;
    }
  }
