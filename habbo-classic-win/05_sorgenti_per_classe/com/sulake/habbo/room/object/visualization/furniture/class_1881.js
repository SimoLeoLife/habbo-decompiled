// Estratto da HabboAirLauncher.deobf.js, riga 277827.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/class_1881.as
// Nome offuscato: _i69a55e47af5570

class a extends Pa {
  static {
    n(this, "class_1881");
  }
  static THUMBNAIL_SPRITE_TAG = "THUMBNAIL";
  _radab824dbd0057 = null;
  _r3805cf29a530b1 = null;
  var_5556 = !1;
  _ra2f931f64e5593 = null;
  _thumbnailImageNormal = null;
  _r302ae0943df357 = 0;
  _r11e467bddfa2b4 = !1;
  set hasOutline(e) {
    this.var_5556 = e;
  }
  get hasThumbnailImage() {
    return this._thumbnailImageNormal != null;
  }
  _r779052eba46805(e, r = null) {
    ((this._thumbnailImageNormal = e), (this._ra2f931f64e5593 = r ?? e), (this._r11e467bddfa2b4 = !0));
  }
  updateModel(e) {
    let r = super.updateModel(e);
    return this.object == null || (!this._r11e467bddfa2b4 && this._r302ae0943df357 === this.direction)
      ? r
      : (this._r1722b7bf7d3434(), !0);
  }
  getSpriteAssetName(e, r) {
    return this._thumbnailImageNormal == null || this.getSpriteTag(e, this.direction, r) !== a.THUMBNAIL_SPRITE_TAG
      ? super.getSpriteAssetName(e, r)
      : this._r369cf29b4b0411(e);
  }
  _r369cf29b4b0411(e) {
    return (
      this._radab824dbd0057 == null &&
        this.object != null &&
        ((this._radab824dbd0057 = this.getFullThumbnailAssetName(this.object.getId(), 32)),
        (this._r3805cf29a530b1 = this.getFullThumbnailAssetName(this.object.getId(), 64))),
      e === 32 ? (this._radab824dbd0057 ?? "") : (this._r3805cf29a530b1 ?? "")
    );
  }
  getFullThumbnailAssetName(e, r) {
    return [this.type, e, "thumb", r].join("_");
  }
  _r1722b7bf7d3434() {
    this.assetCollection != null &&
      (this._thumbnailImageNormal != null
        ? (this._rd9d9e286512dfb(this._thumbnailImageNormal, 64),
          this._ra2f931f64e5593 != null && this._rd9d9e286512dfb(this._ra2f931f64e5593, 32))
        : (this._r4a75599034173b(),
          this.assetCollection._rc7a583ce343c02(this._r369cf29b4b0411(64)),
          this.assetCollection._rc7a583ce343c02(this._r369cf29b4b0411(32))),
      (this._r11e467bddfa2b4 = !1),
      (this._r302ae0943df357 = this.direction));
  }
  _rd9d9e286512dfb(e, r) {
    for (let t = 0; t < this._r07cfc8b3f013c3; t++) {
      if (this.getSpriteTag(r, this.direction, t) !== a.THUMBNAIL_SPRITE_TAG) continue;
      let i = `${this._rb43c6cc5c4899b(r, t, !1)}${this.getFrameNumber(r, t)}`,
        s = this.getAsset(i, t);
      if (s == null) return;
      let o = this._rf052cb704e079f(e, s),
        d = this._r369cf29b4b0411(r);
      (this._r4a75599034173b(),
        this.assetCollection?._rc7a583ce343c02(d),
        this.assetCollection?.addAsset(d, o, !0, s.offsetX, s.offsetY));
      return;
    }
  }
  _r4a75599034173b() {
    for (let e = 0; e < this._r07cfc8b3f013c3; e++) {
      let r = this.getSprite(e);
      r != null && r.tag === a.THUMBNAIL_SPRITE_TAG && (r.asset = null);
    }
  }
  _rf052cb704e079f(e, r) {
    let i = new Pe(),
      s = r.width / e.width;
    switch (this.direction) {
      case 2:
        ((i.a = s), (i.b = -0.5 * s), (i.c = 0), (i.d = s * 1.1), (i.ty = 0.5 * s * e.width));
        break;
      case 0:
      case 4:
        ((i.a = s), (i.b = 0.5 * s), (i.c = 0), (i.d = s * 1.1));
        break;
      default:
        ((i.a = s), (i.d = s));
        break;
    }
    if (this.var_5556) {
      let d = new A(r.width + 2, r.height + 2, !0, 0),
        c = new _i4210dc3239901d(0, 0, 0, 1);
      return (
        d.draw(e, i, c),
        (i.tx += 1),
        (i.ty -= 1),
        d.draw(e, i, c),
        (i.ty += 2),
        d.draw(e, i, c),
        (i.tx += 1),
        (i.ty -= 1),
        d.draw(e, i, c),
        (i.tx -= 1),
        d.draw(e, i),
        d
      );
    }
    let o = new A(r.width, r.height, !0, 0);
    return (o.draw(e, i), o);
  }
}
