// Extracted from HabboAirLauncher.deobf.js, line 279481.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureRoomBrandingVisualization.as
// Obfuscated name: _i7516a4400c4aac

class a extends Pc {
  static {
    n(this, "FurnitureRoomBrandingVisualization");
  }
  static BRANDED_IMAGE_SPRITE_TAG = "branded_image";
  static _rdac12a14a0ec7b = 0;
  static OBJECT_STATE_FLIPH = 1;
  static const_323 = 2;
  static const_462 = 3;
  static _rd77e2c96c6fa5d = new Map();
  static _r338032f5b84902 = new Map();
  imageUrl = null;
  _r447ea2980ce9bf = !1;
  _rf6c61bdb1bbdff = 0;
  _r28ff61a56eaebe = 0;
  _r8eadcd81fae7c5 = 0;
  _r6a04691eeefc15 = null;
  static _r77fd2f56361565(e) {
    let r = String(e),
      t = this._rd77e2c96c6fa5d.get(r);
    if (t != null) {
      this._rd77e2c96c6fa5d.delete(r);
      for (let [i, s] of t) {
        let o = this._r338032f5b84902.get(i);
        if (o != null) {
          for (let d of s) {
            let c = o.get(d);
            c != null && (c.delete(r), !(c.size > 0) && (o.delete(d), i._rc7a583ce343c02(d)));
          }
          o.size === 0 && this._r338032f5b84902.delete(i);
        }
      }
    }
  }
  dispose() {
    (this._r6a04691eeefc15 != null &&
      this.assetCollection != null &&
      (this._r295e8ddabb5398(), (this._r6a04691eeefc15 = null)),
      super.dispose(),
      (this.imageUrl = null));
  }
  updateObject(e, r) {
    return super.updateObject(e, r) ? (this._r447ea2980ce9bf && this.checkAndCreateImageForCurrentState(e), !0) : !1;
  }
  updateModel(e) {
    let r = super.updateModel(e);
    if (r) {
      let t = this.object?.getStringToStringMap();
      t != null &&
        ((this._rf6c61bdb1bbdff = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_225)),
        (this._r28ff61a56eaebe = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_406)),
        (this._r8eadcd81fae7c5 = t._ra3dc9a405b5c73(RoomObjectVariableEnum.const_359)));
    }
    if (this._r447ea2980ce9bf) {
      if (this._r41ce091c651945()) return ((this._r447ea2980ce9bf = !1), (this.imageUrl = null), !0);
    } else if (((this._r447ea2980ce9bf = this._ra58b8329ad51d8()), this._r447ea2980ce9bf))
      return (this.checkAndCreateImageForCurrentState(e), !0);
    return r;
  }
  _r41ce091c651945() {
    let e = this.object?.getStringToStringMap();
    if (e == null) return !1;
    let r = e.getString(RoomObjectVariableEnum.const_888);
    return r != null && r !== this.imageUrl;
  }
  _ra58b8329ad51d8() {
    let e = this.object?.getStringToStringMap();
    if (e == null) return !1;
    let r = e.getString(RoomObjectVariableEnum.const_888);
    if (
      r == null ||
      (this.imageUrl != null && this.imageUrl === r) ||
      e._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_BRANDING_IMAGE_STATUS) !== 1
    )
      return !1;
    let i = (this.assetCollection?.getAsset(r) ?? null)?.asset?.content;
    return i == null ? !1 : (this.imageReady(i, r), !0);
  }
  imageReady(e, r) {
    this.imageUrl = e != null ? r : null;
  }
  getSpriteAssetName(e, r) {
    let t = super.getSpriteAssetName(e, r),
      i = this.getSpriteTag(e, this.direction, r);
    return this.imageUrl != null && i === a.BRANDED_IMAGE_SPRITE_TAG
      ? `${this.imageUrl}_${this.getSize(e)}_${this.object?.getState(0) ?? 0}`
      : t;
  }
  getLibraryAssetNameForSprite(e, r) {
    if (r.tag !== a.BRANDED_IMAGE_SPRITE_TAG) return super.getLibraryAssetNameForSprite(e, r);
    let t = this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.const_888);
    return t != null && t.length > 0 ? t : super.getLibraryAssetNameForSprite(e, r);
  }
  getAdClickUrl(e) {
    return super.getAdClickUrl(e);
  }
  checkAndCreateImageForCurrentState(e) {
    if (this.object == null || this.imageUrl == null || this.assetCollection == null) return;
    let r = this.assetCollection.getAsset(this.imageUrl);
    if (r == null) return;
    let t = this.object.getState(0),
      i = this.getSize(e),
      s = `${this.imageUrl}_${i}_${t}`;
    if (this.assetCollection.getAsset(s) != null) {
      (this._r6a04691eeefc15 !== s && this._r295e8ddabb5398(),
        (this._r6a04691eeefc15 = s),
        this._r4fc7bdaa70aefd(s));
      return;
    }
    let o = r.asset?.content;
    if (o == null) return;
    let d = !0;
    (this.imageUrl.includes("noscale") && (d = !1), this.imageUrl.includes("force32") && (i = 32));
    let c;
    if (i === 32 && d) {
      let h = new Pe();
      (h.scale(0.5, 0.5), (c = new A(o.width / 2, o.height / 2, !0, 16777215)), c.draw(o, h));
    } else c = o.clone();
    let f = 0,
      l = 0,
      b = !1,
      _ = !1;
    switch (t) {
      case a._rdac12a14a0ec7b:
        break;
      case a.OBJECT_STATE_FLIPH:
        ((f = -c.width), (b = !0));
        break;
      case a.const_323:
        ((f = -c.width), (l = -c.height), (b = !0), (_ = !0));
        break;
      case a.const_462:
        ((l = -c.height), (_ = !0));
        break;
      default:
        break;
    }
    (this._r6a04691eeefc15 !== s && this._r295e8ddabb5398(),
      this.assetCollection.addAsset(s, c, !0, f, l, b, _) &&
        ((this._r6a04691eeefc15 = s), this._r4fc7bdaa70aefd(s)));
  }
  _r295e8ddabb5398() {
    for (let e = 0; e < this._r07cfc8b3f013c3; e++) {
      let r = this.getSprite(e);
      r != null && r.tag === a.BRANDED_IMAGE_SPRITE_TAG && (r.asset = null);
    }
  }
  static _r8b53e92674494a(e, r, t) {
    let i = this._rd77e2c96c6fa5d.get(e);
    i == null && ((i = new Map()), this._rd77e2c96c6fa5d.set(e, i));
    let s = i.get(r);
    (s == null && ((s = new Set()), i.set(r, s)), s.add(t));
    let o = this._r338032f5b84902.get(r);
    o == null && ((o = new Map()), this._r338032f5b84902.set(r, o));
    let d = o.get(t);
    (d == null && ((d = new Set()), o.set(t, d)), d.add(e));
  }
  _r9bf502fda037f6() {
    return this.object?.getStringToStringMap()?.getString(RoomObjectVariableEnum.const_236) ?? null;
  }
  _r4fc7bdaa70aefd(e) {
    let r = this._r9bf502fda037f6();
    r == null ||
      r.length === 0 ||
      this.assetCollection == null ||
      a._r8b53e92674494a(r, this.assetCollection, e);
  }
}
