// Extracted from HabboAirLauncher.deobf.js, line 188939.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/bundlepurchaseinfodisplay/ExtraInfoViewManager.as
// Obfuscated name: _i80599614188089

class a {
  constructor(e, r) {
    this.var_17 = e;
    this._catalog = r;
    this._catalog.registerUpdateReceiver(this, 10);
  }
  static {
    n(this, "ExtraInfoViewManager");
  }
  static SLIDE_ANIMATION_LENGTH = 0.5;
  static MAX_ANIM_Y_OFFSET = 28;
  _items = new Map();
  var_4733 = 0;
  _disposed = !1;
  _r6df1b9618ad816 = 0;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._catalog.removeUpdateReceiver(this);
      for (let e of this._items.values()) e.dispose();
      (this._items.clear(), (this._disposed = !0));
    }
  }
  clear() {
    for (; (this.var_17.window?.numChildren ?? 0) > 0;)
      this.var_17.window?.removeChildAt(0);
    for (let e of this._items.values()) e.dispose();
    (this._items.clear(), this.render());
  }
  addItem(e) {
    let r = this.var_4733++,
      t = null;
    switch (e.type) {
      case ExtraInfoItemData.TYPE_PROMO:
        t = new x5e(this.var_17, r, e, this._catalog);
        break;
      case ExtraInfoItemData.TYPE_BUNDLES_INFO_SCREEN:
        t = new ExtraInfoBundlesInfoItem(this.var_17, r, e, this._catalog);
        break;
      case ExtraInfoItemData.const_1007:
        t = new I5e(r, e, this._catalog);
        break;
      case ExtraInfoItemData.TYPE_BONUS_BADGE:
        t = new UnkClass_22efa9(r, e, this._catalog);
        break;
      case ExtraInfoItemData.const_1373:
        t = new UnkClass_b7a5b3(r, e, this._catalog);
        break;
    }
    if (t == null) return -1;
    ((t.creationSeconds = this._r6df1b9618ad816), this._items.set(r, t));
    let i = t._rda4cde3b8bef4b();
    return (
      i != null &&
        this.var_17.window != null &&
        ((i.width = this.var_17.window.width),
        this.var_17.window.addChild(i),
        this.sortWindows()),
      this.render(),
      t.id
    );
  }
  removeItem(e) {
    let r = this.getItem(e);
    r != null &&
      ((r.removalSeconds = this._r6df1b9618ad816),
      r.alignment === bo.ALIGN_OVERLAY && this.reallyRemoveItem(r.id),
      this.render());
  }
  getItem(e) {
    return this._items.get(e) ?? null;
  }
  update(e) {
    ((this._r6df1b9618ad816 += e / 1e3), this.render());
  }
  reallyRemoveItem(e) {
    let t = this.getItem(e)?._rda4cde3b8bef4b();
    (t != null && this.var_17.window?.removeChild(t), this._items.delete(e));
  }
  calculateBounce(e, r = !1) {
    return r
      ? 1 - Math.abs(Math.cos(((this._r6df1b9618ad816 - e) / a.SLIDE_ANIMATION_LENGTH) * (Math.PI / 2)))
      : 1 - Math.abs(Math.sin(((this._r6df1b9618ad816 - e) / a.SLIDE_ANIMATION_LENGTH) * (Math.PI / 2)));
  }
  render() {
    let e = 0,
      r = this.var_17.window?.height ?? 0;
    for (let t of this._items.values()) {
      let i = t._rda4cde3b8bef4b();
      if (i == null) continue;
      let s = 0;
      if (
        (this._r6df1b9618ad816 - a.SLIDE_ANIMATION_LENGTH <= t.creationSeconds &&
          (s = this.calculateBounce(t.creationSeconds)),
        t.isItemRemoved &&
          ((s = this.calculateBounce(t.removalSeconds, !0)),
          this._r6df1b9618ad816 > t.removalSeconds + a.SLIDE_ANIMATION_LENGTH))
      ) {
        this.reallyRemoveItem(t.id);
        break;
      }
      t.alignment === bo.ALIGN_TOP
        ? ((i.y = e), (i.y -= s * Math.min(i.height, a.MAX_ANIM_Y_OFFSET)), (e += i.height))
        : t.alignment === bo.ALIGN_BOTTOM
          ? ((i.y = r - i.height), (i.y += s * Math.min(i.height, a.MAX_ANIM_Y_OFFSET)), (r -= i.height))
          : t.alignment === bo.ALIGN_OVERLAY && (i.y = 0);
    }
  }
  sortWindows() {
    let e = (this.var_17.window?.numChildren ?? 1) - 1;
    for (let r of this._items.values())
      if (r._r75fd1af189c9ad) {
        let t = r._rda4cde3b8bef4b();
        t != null && this.var_17.window?.setChildIndex(t, e);
      }
  }
}
