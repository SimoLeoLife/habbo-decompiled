// Estratto da HabboAirLauncher.deobf.js, riga 219600.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/SnowballMachineGameObject.as
// Nome offuscato: _idaa0523987c70f

class a extends SnowballGivingGameObject {
  static {
    n(this, "SnowballMachineGameObject");
  }
  static BOUNDING_DATA = [1200];
  _maxSnowballs;
  _currentDirection;
  constructor(e, r) {
    (super(
      e.id,
      e.snowballCount,
      r.getTileAt(ti.convertToTileX(e.locationX3D), ti.convertToTileY(e.locationY3D)),
      e.fuseObjectId,
    ),
      (this._maxSnowballs = e.maxSnowballs),
      (this._currentDirection = ns.getDirection8(e.direction)),
      r.addGameObjectToTile(this));
  }
  dispose() {
    (super.dispose(), (this._currentDirection = null));
  }
  get _r4bc6d443f1bcb2() {
    return cq.const_38;
  }
  getVariable(e) {
    switch (e) {
      case 0:
        return Xa._rab39575fec3191;
      case 1:
        return this.var_686;
      case 2:
        return this.var_120.location.x;
      case 3:
        return this.var_120.location.y;
      case 4:
        return this._currentDirection.intValue();
      case 5:
        return this._maxSnowballs;
      case 6:
        return this.var_243;
      case 7:
        return this._rdb14348f8757f4;
      default:
        throw new Error(`No such variable:${String(e)}`);
    }
  }
  get _r2651fdcb0df06e() {
    return a.BOUNDING_DATA;
  }
  createSnowball() {
    this.var_243 < this._maxSnowballs && this.var_243++;
  }
}
