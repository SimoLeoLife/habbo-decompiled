// Extracted from HabboAirLauncher.deobf.js, line 103622.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_100/class_2606.as
// Obfuscated name: _i40a014dab857d4

class {
    static {
      n(this, "class_2606");
    }
    static {
      UYr(this, "class_2606");
    }
    _id;
    _type = 0;
    _color = 0;
    var_1803 = 0;
    var_126 = !1;
    constructor(e) {
      this._id = e;
    }
    setReadOnly() {
      this.var_126 = !0;
    }
    get id() {
      return this._id;
    }
    get type() {
      return this._type;
    }
    set type(e) {
      this.var_126 || (this._type = e);
    }
    get color() {
      return this._color;
    }
    set color(e) {
      this.var_126 || (this._color = e);
    }
    get light() {
      return this.var_1803;
    }
    set light(e) {
      this.var_126 || (this.var_1803 = e);
    }
  }
