// Extracted from HabboAirLauncher.deobf.js, line 219653.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/SnowballPileGameObject.as
// Obfuscated name: _i4ba81d678b4546

class a extends SnowballGivingGameObject {
  static {
    n(this, "SnowballPileGameObject");
  }
  static BOUNDING_DATA_PER_SNOWBALL = 100;
  _rab61cf76208f1b;
  _maxSnowballs;
  constructor(e, r) {
    (super(
      e.id,
      e.snowballCount,
      r.getTileAt(ti.convertToTileX(e.locationX3D), ti.convertToTileY(e.locationY3D)),
      e.fuseObjectId,
    ),
      (this._maxSnowballs = e.maxSnowballs),
      this.var_243 > 0 && r.addGameObjectToTile(this),
      (this._rab61cf76208f1b = [this.var_243 * a.BOUNDING_DATA_PER_SNOWBALL]));
  }
  get _r4bc6d443f1bcb2() {
    return fq.const_38;
  }
  getVariable(e) {
    switch (e) {
      case 0:
        return Xa._r192fa0a9c3bebe;
      case 1:
        return this.var_686;
      case 2:
        return this.var_120.location.x;
      case 3:
        return this.var_120.location.y;
      case 4:
        return this._maxSnowballs;
      case 5:
        return this.var_243;
      case 6:
        return this._rdb14348f8757f4;
      default:
        throw new Error(`No such variable:${String(e)}`);
    }
  }
  get _r2651fdcb0df06e() {
    return this._rab61cf76208f1b;
  }
  onSnowballPickup() {
    ((this._rab61cf76208f1b = [this.var_243 * a.BOUNDING_DATA_PER_SNOWBALL]),
      this.var_243 <= 0 && this.var_120?._tile());
  }
  get maxSnowballs() {
    return this._maxSnowballs;
  }
}
