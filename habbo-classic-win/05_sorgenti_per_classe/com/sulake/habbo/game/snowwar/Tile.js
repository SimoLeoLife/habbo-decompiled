// Estratto da HabboAirLauncher.deobf.js, riga 218209.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/Tile.as
// Nome offuscato: _i468b5ff7ac08d9

class a extends AbstractAStarNode {
  static {
    n(this, "Tile");
  }
  static TILE_WIDTH = 3200;
  static _rb96eee65b59f44 = class_4083.javaDiv(a.TILE_WIDTH / 2);
  static _r14b7cf0af9464b = a.TILE_WIDTH + a._rb96eee65b59f44;
  static _rc99b4a3abad562 = Math.trunc(
    Math.sqrt(a.TILE_WIDTH * a.TILE_WIDTH + a.TILE_WIDTH * a.TILE_WIDTH),
  );
  _location;
  _r64d47256853d8b = [];
  _ra2d9f60e485a98 = null;
  _rd8196fb3ed5ead;
  FuseObjectData = [];
  var_3155 = !1;
  _height = 0;
  constructor(e, r) {
    (super(),
      (this._rd8196fb3ed5ead = [e, r, 0]),
      (this._location = new Is(e * a.TILE_WIDTH, r * a.TILE_WIDTH, 0)));
  }
  dispose() {
    (super.dispose(),
      this._location?.dispose(),
      (this._location = null),
      (this._r64d47256853d8b = []),
      (this._ra2d9f60e485a98 = null),
      (this._rd8196fb3ed5ead = []),
      (this.FuseObjectData = []),
      (this.var_3155 = !1));
  }
  get fuseObjects() {
    return this.FuseObjectData;
  }
  _r9202b5520a2546(e) {
    (this.fuseObjects.push(e), this._r63fae3dcdff101(e.height));
  }
  _r63fae3dcdff101(e) {
    ((this._height += e), this._height < 0 && (this._height = 0));
  }
  get fuseLocation() {
    return this._rd8196fb3ed5ead;
  }
  get location() {
    return this._location;
  }
  _r42d36e72195cde(e) {
    let r = this._location.x - e.x;
    r < 0 && (r = -r);
    let t = this._location.y - e.y;
    return (t < 0 && (t = -t), r < a._rb96eee65b59f44 && t < a._rb96eee65b59f44);
  }
  _r3febaf5359e7c2(e, r) {
    (this._r22bb4684fba9af(e, r), e._r22bb4684fba9af(this, r._rc182b5cb7d10dc()));
  }
  _r22bb4684fba9af(e, r) {
    this._r64d47256853d8b[r.intValue()] = e;
  }
  _r5f5473929168c6(e) {
    return this._r64d47256853d8b[e.intValue()] ?? null;
  }
  _r2838700b17d923(e) {
    let r =
        e != null &&
        this._r7bd2f517b4abf8 != null &&
        e._rba12f0325cedd5 &&
        this._r7bd2f517b4abf8._r206e239acb0d5c === e._r8f79a04a0ab07b,
      t = !1;
    return (
      this.fuseObjects.length === 1
        ? (t = !this.fuseObjects[0].canStandOn)
        : this.fuseObjects.length > 1 && (t = !0),
      !t && (this._ra2d9f60e485a98 == null || r) && !this.var_3155
    );
  }
  _r29463a5878c079(e) {
    let r = !1;
    return (this._ra2d9f60e485a98 == null && ((this._ra2d9f60e485a98 = e), (r = !0)), r);
  }
  _tile() {
    let e = null;
    return (
      this._ra2d9f60e485a98 != null && ((e = this._ra2d9f60e485a98), (this._ra2d9f60e485a98 = null)),
      e
    );
  }
  get _rc8aff72414e7ca() {
    return this._ra2d9f60e485a98;
  }
  get _r7bd2f517b4abf8() {
    return this._ra2d9f60e485a98 instanceof _l ? this._ra2d9f60e485a98 : null;
  }
  occupyingHuman() {
    let e = this._r7bd2f517b4abf8;
    return (e != null && (this._ra2d9f60e485a98 = null), e);
  }
  _r70ba8723ae7eed(e) {
    let r = e;
    return this._location._r70ba8723ae7eed(r.location);
  }
  _r771d9d1ed3d827(e) {
    let r = e;
    return this._location._r771d9d1ed3d827(r.location);
  }
  _rb8c5250777d2ba(e) {
    return this._r64d47256853d8b[e.intValue()] ?? null;
  }
  _ra70cfe9ecf7f0e(e, r) {
    return this._r2838700b17d923(r);
  }
  _r3c933782527e15(e, r) {
    return e._r50c27a3cd8bba6() ? a.TILE_WIDTH : a._rc99b4a3abad562;
  }
  get height() {
    return this._height;
  }
  toString() {
    return ` X:${String(this._location?.x)} Y:${String(this._location?.y)} Z:${String(this._location?.z)}`;
  }
  static convertToTileX(e) {
    return class_4083.javaDiv((e + a._rb96eee65b59f44) / a.TILE_WIDTH);
  }
  static convertToTileY(e) {
    return class_4083.javaDiv((e + a._rb96eee65b59f44) / a.TILE_WIDTH);
  }
  static _rfeacb7d3c9a081(e) {
    return e * a.TILE_WIDTH;
  }
  static _rb5bff4fc8f1b92(e) {
    return e * a.TILE_WIDTH;
  }
  set blocked(e) {
    this.var_3155 = e;
  }
}
