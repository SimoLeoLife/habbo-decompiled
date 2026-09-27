// Estratto da HabboAirLauncher.deobf.js, riga 376528.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/cache/class_4259.as
// Nome offuscato: _ifb58d2608be75e

class a {
  constructor(e) {
    this.var_4412 = e;
  }
  static {
    n(this, "class_4259");
  }
  static MAX_SIZE_FOR_AVG_COLOR = 200;
  _data = new Map();
  dispose() {
    for (let e of this._data.values()) e.dispose();
    this._data.clear();
  }
  _r245af30f81f0ec(e) {
    let r = this._data.get(e) ?? null;
    return (r == null && ((r = new class_4287(this.var_4412)), this._data.set(e, r)), r);
  }
  _r3f87f99454fb57(e) {
    let r = this._data.get(e) ?? null;
    r != null && (r.dispose(), this._data.delete(e));
  }
  getSortableSpriteList() {
    let e = [];
    for (let r of this._data.values())
      for (let t of r.sprites.sprites) {
        let i = t.sprite;
        if (i == null || i.spriteType === RoomObjectSpriteType.ROOM_PLANE || i.libraryAssetName === "") continue;
        let s = new RoomObjectSpriteData();
        ((s.objectId = r.objectId),
          (s.x = Math.round(t.x)),
          (s.y = Math.round(t.y)),
          (s.z = t.z),
          (s.name = ua._rec62c08ba337fc(i.libraryAssetName)),
          (s.flipH = i.flipH),
          (s.alpha = i.alpha),
          (s.color = i.color.toString()),
          (s.blendMode = i.blendMode),
          (s.width = i.width),
          (s.height = i.height),
          (s.objectType = i.objectType),
          (s.posture = i._r74223fbabfd8b0));
        let o = this.isSkewedSprite(i);
        (o && (s.skew = i.direction % 4 === 0 ? -0.5 : 0.5),
          (o || s.name.includes("%image.library.url%") || s.name.includes("%group.badge.url%")) &&
            s.width <= a.MAX_SIZE_FOR_AVG_COLOR &&
            s.height <= a.MAX_SIZE_FOR_AVG_COLOR &&
            ((s.color = DC.averageColor(i.asset).toString()),
            i.objectType.startsWith("external_image_wallitem") && (s.frame = !0)),
          e.push(s));
      }
    return e;
  }
  getPlaneSortableSprites() {
    let e = [];
    for (let r of this._data.values())
      for (let t of r.sprites.sprites) t.sprite?.spriteType === RoomObjectSpriteType.ROOM_PLANE && e.push(t);
    return e;
  }
  isSkewedSprite(e) {
    return e.objectType.length === 0
      ? !1
      : (e.objectType.startsWith("external_image_wallitem") && e.tag === "THUMBNAIL") ||
          (e.objectType.startsWith("guild_forum") && e.tag === "THUMBNAIL");
  }
}
