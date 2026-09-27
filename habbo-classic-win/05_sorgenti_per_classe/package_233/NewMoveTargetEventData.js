// Estratto da HabboAirLauncher.deobf.js, riga 125727.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_233/NewMoveTargetEventData.as
// Nome offuscato: _i35fd2ef3530f8d

class extends Ma {
    static {
      n(this, "NewMoveTargetEventData");
    }
    static {
      jwt(this, "NewMoveTargetEventData");
    }
    var_4389 = 0;
    _x = 0;
    _y = 0;
    get humanGameObjectId() {
      return this.var_4389;
    }
    get x() {
      return this._x;
    }
    get y() {
      return this._y;
    }
    constructor(e) {
      super(e);
    }
    parse(e) {
      ((this.var_4389 = e.readInteger()),
        (this._x = e.readInteger()),
        (this._y = e.readInteger()));
    }
  }
