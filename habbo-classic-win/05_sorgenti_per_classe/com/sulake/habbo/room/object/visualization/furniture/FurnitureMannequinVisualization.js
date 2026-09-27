// Estratto da HabboAirLauncher.deobf.js, riga 279100.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureMannequinVisualization.as
// Nome offuscato: _i7bf54cca43cb0a

class a extends Pc {
  static {
    n(this, "FurnitureMannequinVisualization");
  }
  static AVATAR_IMAGE_SPRITE_TAG = "avatar_image";
  static MANNEQUIN_BODY = "hd-99999-99998";
  static _r01b6be8846e737 = new Map();
  static _r5170ccc0d4260d = 0;
  var_1129 = null;
  var_106 = null;
  _r25dab78e12ac4d = 0;
  _r7f7c1903421678 = !1;
  _r6a04691eeefc15 = null;
  _r388861066f80e6 = null;
  _disposed = !1;
  constructor() {
    (super(), a._r5170ccc0d4260d++);
  }
  get disposed() {
    return this._disposed;
  }
  dispose() {
    if (
      !this._disposed &&
      ((this._r388861066f80e6 = null),
      (this._disposed = !0),
      this._r6a04691eeefc15 != null &&
        this.assetCollection != null &&
        (this._r4e3221ff2e6a78(),
        this.assetCollection._rc7a583ce343c02(this._r6a04691eeefc15),
        (this._r6a04691eeefc15 = null)),
      super.dispose(),
      a._r5170ccc0d4260d--,
      a._r5170ccc0d4260d === 0)
    ) {
      for (let e of a._r01b6be8846e737.values()) e.dispose();
      a._r01b6be8846e737.clear();
    }
  }
  initialize(e) {
    return ((this._r388861066f80e6 = e instanceof AvatarFurnitureVisualizationData ? e : null), super.initialize(e));
  }
  getSpriteList() {
    let e =
      this._r388861066f80e6?.getAvatar(
        this.var_1129,
        this._r25dab78e12ac4d,
        this.var_106,
        this,
      ) ?? null;
    return e == null
      ? super.getSpriteList()
      : (e.setDirection(class_2123.const_252, this.direction), e._r3c8bfbd447e55f());
  }
  avatarImageReady(e) {
    e === this.var_1129 && this._r139b826d94bc9c(!0);
  }
  updateObject(e, r) {
    let t = super.updateObject(e, r);
    return (t && this._r25dab78e12ac4d !== e && ((this._r25dab78e12ac4d = e), this._r139b826d94bc9c()), t);
  }
  updateModel(e) {
    let r = super.updateModel(e);
    if (r) {
      let t = this.object?.getStringToStringMap();
      if (t != null) {
        let i = t.getString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_FIGURE);
        i != null &&
          i.length > 0 &&
          ((this.var_106 = t.getString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_GENDER)),
          (this.var_1129 = `${i}.${a.MANNEQUIN_BODY}`),
          this._r139b826d94bc9c());
      }
    }
    return ((r ||= this._r7f7c1903421678), (this._r7f7c1903421678 = !1), r);
  }
  getSpriteAssetName(e, r) {
    let t = this.getSpriteTag(e, this.direction, r);
    return this.var_1129 != null && t === a.AVATAR_IMAGE_SPRITE_TAG && this._r60cb0ea79b4506()
      ? (this.getAvatarAssetName() ?? "")
      : super.getSpriteAssetName(e, r);
  }
  getSpriteXOffset(e, r, t) {
    return this.getSpriteTag(e, r, t) === a.AVATAR_IMAGE_SPRITE_TAG && this._r60cb0ea79b4506()
      ? -Math.trunc((this.getSprite(t)?.width ?? 0) / 2)
      : super.getSpriteXOffset(e, r, t);
  }
  getSpriteYOffset(e, r, t) {
    return this.getSpriteTag(e, r, t) === a.AVATAR_IMAGE_SPRITE_TAG && this._r60cb0ea79b4506()
      ? -(this.getSprite(t)?.height ?? 0)
      : super.getSpriteYOffset(e, r, t);
  }
  _r139b826d94bc9c(e = !1) {
    if (this._r388861066f80e6 == null || this.var_1129 == null || (this._r60cb0ea79b4506() && !e))
      return;
    let r = this._r388861066f80e6.getAvatar(
      this.var_1129,
      this._r25dab78e12ac4d,
      this.var_106,
      this,
    );
    if (r == null) return;
    if (r._re9580ee607591e()) {
      r.dispose();
      let s = this._r00f6810c9a0b81(this._r25dab78e12ac4d);
      s.setDirection(class_2123.const_252, this.direction);
      let o = s._rb09602dca8db26(class_2123.const_252, !0);
      (o != null && this.assetCollection?.addAsset(this.getAvatarAssetName() ?? "", o, !0),
        (this._r7f7c1903421678 = !0));
      return;
    }
    (r.setDirection(class_2123.const_252, this.direction),
      this._r6a04691eeefc15 != null &&
        this.assetCollection != null &&
        (this._r4e3221ff2e6a78(), this.assetCollection._rc7a583ce343c02(this._r6a04691eeefc15)));
    let t = this.getAvatarAssetName(),
      i = r._rb09602dca8db26(class_2123.const_252, !0);
    (t != null &&
      i != null &&
      (this.assetCollection?.addAsset(t, i, !0),
      (this._r6a04691eeefc15 = t),
      (this._r7f7c1903421678 = !0)),
      r.dispose());
  }
  _r4e3221ff2e6a78() {
    for (let e = 0; e < this._r07cfc8b3f013c3; e++) {
      let r = this.getSprite(e);
      r != null && r.assetName === this._r6a04691eeefc15 && (r.asset = null);
    }
  }
  _r00f6810c9a0b81(e) {
    let r = a._r01b6be8846e737.get(e) ?? null;
    if (r == null) {
      if (
        ((r = this._r388861066f80e6?.getAvatar(a.MANNEQUIN_BODY, e, null, null) ?? null), r == null)
      )
        throw new Error("Failed to create mannequin placeholder avatar image.");
      a._r01b6be8846e737.set(e, r);
    }
    return r;
  }
  _r60cb0ea79b4506() {
    return this.var_1129 != null && this.getAsset(this.getAvatarAssetName() ?? "") != null;
  }
  getAvatarAssetName() {
    let e = this.object;
    return e == null || this.var_1129 == null
      ? null
      : `mannequin_${this.var_1129}_${this._r25dab78e12ac4d}_${this.direction}_${e.getId()}`;
  }
}
