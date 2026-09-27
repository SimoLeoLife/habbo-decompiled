// Extracted from HabboAirLauncher.deobf.js, line 91513.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_170/class_4338.as
// Obfuscated name: _i9408ca8cb9dff4

class {
    static {
      n(this, "class_4338");
    }
    static {
      dPr(this, "class_4338");
    }
    static const_1101 = 0;
    static const_933 = 1;
    static const_787 = 2;
    _id;
    var_606;
    var_4667;
    var_5565;
    var_5707;
    var_5163;
    var_363;
    constructor(e) {
      ((this._id = e.readInteger()),
        (this.var_606 = e.readString()),
        (this.var_4667 = e.readString()),
        (this.var_5565 = e.readString()),
        (this.var_5707 = e.readInteger()),
        (this.var_5163 = e.readString()),
        (this.var_363 = e.readString()));
    }
    get id() {
      return this._id;
    }
    get title() {
      return this.var_606;
    }
    get _ra86d5cf8832596() {
      return this.var_4667;
    }
    get buttonText() {
      return this.var_5565;
    }
    get _r69631150086ab0() {
      return this.var_5707;
    }
    get _r08367207a2897d() {
      return this.var_5163;
    }
    get imageUrl() {
      return this.var_363;
    }
  }
