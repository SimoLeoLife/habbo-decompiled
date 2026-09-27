// Extracted from HabboAirLauncher.deobf.js, line 95708.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_33/class_2495.as
// Obfuscated name: _i31c7b0ed5b8465

class {
    static {
      n(this, "class_2495");
    }
    static {
      kOr(this, "class_2495");
    }
    _flatId;
    var_5620;
    var_39;
    _caption;
    constructor(e) {
      ((this._flatId = e.readInteger()),
        (this.var_5620 = e.readInteger()),
        (this.var_39 = e.readString()),
        (this._caption = e.readString()));
    }
    get flatId() {
      return this._flatId;
    }
    get _rbf482ed39ceb45() {
      return this.var_5620;
    }
    get image() {
      return this.var_39;
    }
    get caption() {
      return this._caption;
    }
  }
