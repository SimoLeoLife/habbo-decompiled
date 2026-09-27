// Extracted from HabboAirLauncher.deobf.js, line 83018.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/GameLevelData.as
// Obfuscated name: _i05131fd9912eac

class {
    static {
      n(this, "GameLevelData");
    }
    static {
      ryr(this, "GameLevelData");
    }
    _width = 0;
    _height = 0;
    var_977 = "";
    FuseObjectData = [];
    constructor(e) {
      this.parse(e);
    }
    get width() {
      return this._width;
    }
    get height() {
      return this._height;
    }
    get _rc2520f98de1273() {
      return this.var_977;
    }
    get fuseObjects() {
      return this.FuseObjectData;
    }
    parse(e) {
      ((this._width = e.readInteger()),
        (this._height = e.readInteger()),
        (this.var_977 = e.readString()));
      let r = e.readInteger();
      this.FuseObjectData = [];
      for (let t = 0; t < r; t++) {
        let i = new FuseObjectData();
        (i.parse(e), this.FuseObjectData.push(i));
      }
    }
  }
