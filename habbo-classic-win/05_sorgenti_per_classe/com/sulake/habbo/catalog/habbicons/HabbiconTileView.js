// Estratto da HabboAirLauncher.deobf.js, riga 178027.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconTileView.as
// Nome offuscato: _i89a85e8e42538d

class a {
  static {
    n(this, "HabbiconTileView");
  }
  static _rb1116efacfe5f6 = [];
  static const_268 = 12833703;
  static OWNED_BASE_HOVER = 13492146;
  static OWNED_BASE_ACTIVE = 13952185;
  static const_668 = 10076534;
  static OWNED_OUTLINE_HOVER = 12376223;
  static OWNED_OUTLINE_ACTIVE = 13887677;
  static NOT_OWNED_BASE_IDLE = 14735042;
  static NOT_OWNED_BASE_HOVER = 15261385;
  static NOT_OWNED_BASE_ACTIVE = 15458251;
  static NOT_OWNED_OUTLINE_IDLE = 13944493;
  static NOT_OWNED_OUTLINE_HOVER = 15129800;
  static NOT_OWNED_OUTLINE_ACTIVE = 15392717;
  static _r5320adcb04e0c5 = new _i4210dc3239901d(0.35, 0.35, 0.35, 0.65, 90, 85, 80, 0);
  _window;
  var_63 = null;
  var_183 = null;
  _onClick = null;
  var_1463 = !1;
  _active = !1;
  _disposed = !1;
  constructor(e) {
    ((this._window = e.clone()),
      this._window.addEventListener(u.CLICK, this._rd74da87157b7a9),
      this._window.addEventListener(u.OVER, this._r72cc92f0c72db9),
      this._window.addEventListener(u.OUT, this._r479c354def12d1));
  }
  static claim(e) {
    return this._rb1116efacfe5f6.length > 0 ? this._rb1116efacfe5f6.pop() : new a(e);
  }
  static release(e) {
    (e.recycle(), this._rb1116efacfe5f6.push(e));
  }
  initialize(e, r, t) {
    ((this.var_63 = e), (this._onClick = t), (this._window.visible = !0), this.refresh(r));
  }
  recycle() {
    (this._window.parent != null && this._window.parent.removeChild(this._window),
      this.clearBitmap(),
      (this.var_63 = null),
      (this.var_183 = null),
      (this._onClick = null),
      (this.var_1463 = !1),
      (this._active = !1),
      (this._window.visible = !1),
      (this.favoriteIcon.visible = !1),
      (this.claimableIcon.visible = !1),
      (this.lockedOverlay.visible = !1),
      this.updateLook());
  }
  refresh(e) {
    this.var_183 = e;
    let r = Dr.getPreviewBitmap(e.habbiconId, !1),
      t = r != null ? r.clone() : new A(40, 40, !0, 0);
    (this.clearBitmap(),
      !e.owned && !e.claimable && t.colorTransform(t.rect, a._r5320adcb04e0c5),
      (this.bitmap.bitmap = t),
      this.bitmap.invalidate(),
      (this.favoriteIcon.visible = e.owned && e.favorite),
      (this.claimableIcon.visible = e.claimable && !e.owned),
      (this.lockedOverlay.visible = !e.owned && !e.claimable),
      this.updateLook());
  }
  setActive(e) {
    ((this._active = e), this.updateLook());
  }
  get window() {
    return this._window;
  }
  get item() {
    return this.var_183;
  }
  dispose() {
    this._disposed ||
      (this._window.parent != null &&
        this._window.parent.removeChild(this._window),
      this._window.removeEventListener(u.CLICK, this._rd74da87157b7a9),
      this._window.removeEventListener(u.OVER, this._r72cc92f0c72db9),
      this._window.removeEventListener(u.OUT, this._r479c354def12d1),
      this.clearBitmap(),
      this._window.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this.var_183 = null),
      (this._onClick = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  clearBitmap() {
    this.bitmap.bitmap != null && (this.bitmap.bitmap.dispose(), (this.bitmap.bitmap = null));
  }
  updateLook() {
    let e = this.var_183 != null && this.var_183.owned,
      r = e ? a.const_268 : a.NOT_OWNED_BASE_IDLE,
      t = e ? a.OWNED_BASE_HOVER : a.NOT_OWNED_BASE_HOVER,
      i = e ? a.OWNED_BASE_ACTIVE : a.NOT_OWNED_BASE_ACTIVE,
      s = e ? a.const_668 : a.NOT_OWNED_OUTLINE_IDLE,
      o = e ? a.OWNED_OUTLINE_HOVER : a.NOT_OWNED_OUTLINE_HOVER,
      d = e ? a.OWNED_OUTLINE_ACTIVE : a.NOT_OWNED_OUTLINE_ACTIVE;
    ((this.tileBackground.color =
      (4278190080 | (this._active ? i : this.var_1463 ? t : r)) >>> 0),
      (this.tileBorder.color =
        (4278190080 | (this._active ? d : this.var_1463 ? o : s)) >>> 0));
  }
  _rd74da87157b7a9 = n((e) => {
    this._onClick?.(this);
  }, "_rd74da87157b7a9");
  _r72cc92f0c72db9 = n((e) => {
    ((this.var_1463 = !0), this.updateLook());
  }, "_r72cc92f0c72db9");
  _r479c354def12d1 = n((e) => {
    ((this.var_1463 = !1), this.updateLook());
  }, "_r479c354def12d1");
  get bitmap() {
    return this._window.findChildByName("bitmap");
  }
  get favoriteIcon() {
    return this._window.findChildByName("favorite_icon");
  }
  get claimableIcon() {
    return this._window.findChildByName("claimable_icon");
  }
  get lockedOverlay() {
    return this._window.findChildByName("locked_overlay");
  }
  get tileBackground() {
    return this._window.findChildByName("tile_background");
  }
  get tileBorder() {
    return this._window.findChildByName("tile_border");
  }
}
