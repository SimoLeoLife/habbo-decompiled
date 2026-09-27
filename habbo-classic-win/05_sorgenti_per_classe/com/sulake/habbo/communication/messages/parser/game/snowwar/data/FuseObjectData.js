// Estratto da HabboAirLauncher.deobf.js, riga 82951.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/communication/messages/parser/game/snowwar/data/FuseObjectData.as
// Nome offuscato: _i06b67b13bfe25d

class {
    static {
      n(this, "FuseObjectData");
    }
    static {
      Jwr(this, "FuseObjectData");
    }
    _name = "";
    _id = 0;
    _x = 0;
    _y = 0;
    var_4977 = 0;
    var_4967 = 0;
    _height = 0;
    var_81 = 0;
    var_5484 = 0;
    _r38282ce7e0da7e = !1;
    var_2364 = null;
    parse(e) {
      ((this._name = e.readString()),
        (this._id = e.readInteger()),
        (this._x = e.readInteger()),
        (this._y = e.readInteger()),
        (this.var_4977 = e.readInteger()),
        (this.var_4967 = e.readInteger()),
        (this._height = e.readInteger()),
        (this.var_81 = e.readInteger()),
        (this.var_5484 = e.readInteger()),
        (this._r38282ce7e0da7e = e.readBoolean()),
        (this.var_2364 = zs.parseStuffData(e)));
    }
    get name() {
      return this._name;
    }
    get id() {
      return this._id;
    }
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    get _rb628bd9e73c764() {
      return this.var_4977;
    }
    get _ra385894684883d() {
      return this.var_4967;
    }
    get height() {
      return this._height;
    }
    get direction() {
      return this.var_81;
    }
    get altitude() {
      return this.var_5484;
    }
    get canStandOn() {
      return this._r38282ce7e0da7e;
    }
    get stuffData() {
      return this.var_2364;
    }
  }
