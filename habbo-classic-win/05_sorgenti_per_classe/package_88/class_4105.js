// Extracted from HabboAirLauncher.deobf.js, line 99620.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_88/class_4105.as
// Obfuscated name: _i560b7f816f48b0

class {
    static {
      n(this, "class_4105");
    }
    static {
      fjr(this, "class_4105");
    }
    _id = 0;
    _data = "";
    constructor(e) {
      this.parse(e);
    }
    parse(e) {
      ((this._id = e.readInteger()), (this._data = e.readString()));
    }
    get id() {
      return this._id;
    }
    get data() {
      return this._data;
    }
  }
