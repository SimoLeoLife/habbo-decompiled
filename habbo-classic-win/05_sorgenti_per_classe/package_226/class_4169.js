// Extracted from HabboAirLauncher.deobf.js, line 85082.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_226/class_4169.as
// Obfuscated name: _i06d1b48515b0f0

class {
    static {
      n(this, "class_4169");
    }
    static {
      qxr(this, "class_4169");
    }
    _userId;
    var_971;
    var_4526;
    _name;
    var_1129;
    var_106;
    constructor(e) {
      ((this._userId = e.readInteger()),
        (this.var_971 = e.readInteger()),
        (this.var_4526 = e.readInteger()),
        (this._name = e.readString()),
        (this.var_1129 = e.readString()),
        (this.var_106 = e.readString()));
    }
    get userId() {
      return this._userId;
    }
    get score() {
      return this.var_971;
    }
    get rank() {
      return this.var_4526;
    }
    get figure() {
      return this.var_1129;
    }
    get gender() {
      return this.var_106;
    }
    get name() {
      return this._name;
    }
  }
