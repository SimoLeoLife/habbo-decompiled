// Estratto da HabboAirLauncher.deobf.js, riga 221336.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/class_2527.as
// Nome offuscato: _i063eadf76af6a8

class a extends class_2526 {
  static {
    n(this, "class_2527");
  }
  static _r70c56333c35a94 = 25;
  static _r06c088a5c3e96f = 25;
  static INFINITE_HEIGHT = 1e5;
  _tiles = [];
  dispose() {
    if ((super.dispose(), this._tiles.length > 0))
      for (let e = 0; e < this._tiles.length; e++)
        for (let r = 0; r < this._tiles[0].length; r++) this._tiles[e][r]?.dispose();
    this._tiles = [];
  }
  initialize(e, r) {
    (super.initialize(e, r),
      this.var_215 != null && (this.linkTiles(r), this.addFuseObjectsAndHeights(r.fuseObjects)));
  }
  addFuseObjectsAndHeights(e) {
    for (let r of e) {
      let t = this.getTileAt(r.x, r.y);
      t != null && (t._r9202b5520a2546(r), this._rb46653fa8229e9(r));
    }
  }
  _rb46653fa8229e9(e) {
    let r = e.direction,
      t = e._rb628bd9e73c764,
      i = e._ra385894684883d;
    if (r === ns.E.intValue() || r === ns.W.intValue()) {
      let s = t;
      ((t = i), (i = s));
    }
    for (let s = 1; s < t; s++) {
      let o = this.getTileAt(e.x + s, e.y);
      o != null && (o._r63fae3dcdff101(e.height), e.canStandOn || (o.blocked = !0));
    }
    for (let s = 1; s < i; s++) {
      let o = this.getTileAt(e.x, e.y + s);
      o != null && (o._r63fae3dcdff101(e.height), e.canStandOn || (o.blocked = !0));
    }
  }
  addGameObjectToTile(e) {
    let r = e._r502e71c4c81659;
    if (r == null) return;
    this.getTileAt(ti.convertToTileX(r.x), ti.convertToTileY(r.y))?._r29463a5878c079(e);
  }
  linkTiles(e) {
    let r = this.parseHeightMap(e._rc2520f98de1273, e.width, e.height),
      t = e.height,
      i = e.width;
    this._tiles = [];
    for (let s = 0; s < t; s++) {
      this._tiles[s] = [];
      for (let o = 0; o < i; o++) {
        if (((this._tiles[s][o] = null), r[s][o] === a.INFINITE_HEIGHT)) continue;
        let d = new ti(o, s);
        this._tiles[s][o] = d;
        let c = this.getTileAt(o + 1, s - 1);
        c != null && d._r3febaf5359e7c2(c, ns.NE);
        let f = this.getTileAt(o, s - 1);
        f != null && d._r3febaf5359e7c2(f, ns.N);
        let l = this.getTileAt(o - 1, s - 1);
        l != null && d._r3febaf5359e7c2(l, ns.NW);
        let b = this.getTileAt(o - 1, s);
        b != null && d._r3febaf5359e7c2(b, ns.W);
      }
    }
  }
  getTiles() {
    return this._tiles;
  }
  static calculateDirectionTowardsCenter(e) {
    return ri.direction360ValueToDirection8(
      ri.getAngleFromComponents(
        a._r70c56333c35a94 - e.fuseLocation[0],
        a._r06c088a5c3e96f - e.fuseLocation[1],
      ),
    );
  }
  testCollisionWithGround(e) {
    if ((e._r502e71c4c81659?.z ?? 0) < 1) return !0;
    let r = ti.convertToTileX(e._r502e71c4c81659.x),
      t = ti.convertToTileY(e._r502e71c4c81659.y),
      i = this.getTileAt(r, t);
    return i != null ? (e._r502e71c4c81659?.z ?? 0) < i.height : !1;
  }
  _r4aa3922258186d(e, r) {
    let t = ti.convertToTileX(e),
      i = ti.convertToTileY(r),
      s = this.getTileAt(t, i);
    return s != null ? s._r2838700b17d923(null) : !1;
  }
  getTileAt(e, r) {
    return this._tiles.length === 0 ||
      e < 0 ||
      r < 0 ||
      r >= this._tiles.length ||
      e >= this._tiles[0].length
      ? null
      : (this._tiles[r][e] ?? null);
  }
  parseHeightMap(e, r, t) {
    let i = 0,
      s = e.split("\r"),
      o = [];
    for (let d = 0; d < s.length; d++) {
      let c = s[d];
      o[d] = [];
      for (let f = c.length - 1; f >= 0; f--) {
        let l = c.charAt(f),
          b = Number.parseInt(l, 10);
        (Number.isNaN(b)
          ? l === "x"
            ? (o[d][f] = a.INFINITE_HEIGHT)
            : (o[d][f] = 10 + (l.charCodeAt(0) - 97))
          : (o[d][f] = b),
          o[d][f] > i && o[d][f] !== a.INFINITE_HEIGHT && (i = o[d][f]));
      }
    }
    return o;
  }
  resetTiles() {
    if (this._tiles.length > 0)
      for (let e = 0; e < this._tiles.length; e++)
        for (let r = 0; r < this._tiles[0].length; r++)
          this._tiles[e][r]?._tile();
  }
}
