// Extracted from HabboAirLauncher.deobf.js, line 109715.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_193/ChestStorage.as
// Obfuscated name: _i47ed806b47f00f

class {
    static {
      n(this, "ChestStorage");
    }
    static {
      uat(this, "ChestStorage");
    }
    static var_5955 = 0;
    static var_5950 = 1;
    static var_5952 = 2;
    static var_5960 = 3;
    var_2106;
    var_4378;
    var_4663;
    _type;
    var_3430;
    var_5573;
    var_2364;
    var_3191;
    constructor(e) {
      ((this.var_2106 = e.readInteger()),
        (this.var_4378 = e.readInteger()),
        (this.var_4663 = e.readLong()),
        (this._type = Vb.readFromMessage(e)),
        (this.var_3430 = e.readBoolean()),
        (this.var_5573 = e.readInteger()),
        (this.var_2364 = zs.parseStuffData(e)),
        (this.var_3191 = this._type.isWallItem ? 0 : e.readInteger()));
    }
    get inventoryId() {
      return this.var_2106;
    }
    get _r2dde40cbc18287() {
      return this.var_4378;
    }
    get transactionId() {
      return this.var_4663;
    }
    get type() {
      return this._type;
    }
    get groupable() {
      return this.var_3430;
    }
    get specialType() {
      return this.var_5573;
    }
    get stuffData() {
      return this.var_2364;
    }
    get extra() {
      return this.var_3191;
    }
  }
