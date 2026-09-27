// Extracted from HabboAirLauncher.deobf.js, line 219705.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/gameobjects/TreeGameObject.as
// Obfuscated name: _i851790281e147f

class a extends SnowWarGameObject {
  static {
    n(this, "TreeGameObject");
  }
  static _ra3a1c72a8c1f7d = [0];
  static BOUNDING_DATA = [ti.TILE_WIDTH - wf.BOUNDING_DATA[0] - 1];
  _rdb14348f8757f4;
  x;
  _r35845fb2e92459;
  _r3e5cb83a14f324;
  _height;
  var_1752;
  _hits;
  constructor(e, r) {
    (super(e.id, !1),
      (this.isActive = !0),
      (this.x = r.getTileAt(
        ti.convertToTileX(e.locationX3D),
        ti.convertToTileY(e.locationY3D),
      )),
      (this._r35845fb2e92459 = ns.getDirection8(e.direction)),
      (this._r3e5cb83a14f324 = new ri(ri._r5f2b4969f78a6f(this._r35845fb2e92459))),
      (this._rdb14348f8757f4 = e.fuseObjectId),
      (this._height = e.height),
      (this._hits = e.hits),
      (this.var_1752 = e.maxHits),
      this._hits < this.var_1752 && r.addGameObjectToTile(this),
      this.x._r63fae3dcdff101(-this._height),
      (this.x.blocked = !0));
  }
  get _r4bc6d443f1bcb2() {
    return lq.const_38;
  }
  getVariable(e) {
    switch (e) {
      case 0:
        return Xa._rda17b815462e6f;
      case 1:
        return this._r8f79a04a0ab07b;
      case 2:
        return this.x.location.x;
      case 3:
        return this.x.location.y;
      case 4:
        return this._r35845fb2e92459.intValue();
      case 5:
        return this._height;
      case 6:
        return this._rdb14348f8757f4;
      case 7:
        return this.var_1752;
      case 8:
        return this._hits;
      default:
        throw new Error(`No such variable:${String(e)}`);
    }
  }
  get _r24b48ffa5796a4() {
    return M0._r4967436389a7cc;
  }
  subturn(e) {}
  get _r2651fdcb0df06e() {
    return this._hits < this.var_1752 ? a.BOUNDING_DATA : a._ra3a1c72a8c1f7d;
  }
  get _r502e71c4c81659() {
    return this.x.location;
  }
  get _r07a29a11e88a0f() {
    return this._r3e5cb83a14f324;
  }
  onSnowBallHit(e, r) {
    (this._hits < this.var_1752 && this._hits++,
      this._hits >= this.var_1752 && this.x._tile());
  }
  get maxHits() {
    return this.var_1752;
  }
  get hits() {
    return this._hits;
  }
  get fuseObjectId() {
    return this._rdb14348f8757f4;
  }
  get _r770408bc5f2523() {
    return this._height;
  }
}
