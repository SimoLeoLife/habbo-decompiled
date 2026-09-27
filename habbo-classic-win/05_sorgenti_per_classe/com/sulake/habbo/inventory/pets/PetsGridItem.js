// Estratto da HabboAirLauncher.deobf.js, riga 242534.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/pets/PetsGridItem.as
// Nome offuscato: _ic9081651d99fa7

class a {
  constructor(e, r, t, i, s) {
    this.var_2609 = e;
    this._r7982e3490a9f12 = r;
    this._assets = t;
    this._isUnseen = s;
    if (this.var_2609 == null || this._r7982e3490a9f12 == null || this._assets == null || i == null)
      return;
    let d = this._assets.getAssetByName("inventory_thumb_xml")?.content;
    if (d == null || ((this._window = i.buildFromXML(d)), this._window == null)) return;
    this._window.procedure = (...h) => this.eventHandler(h[0], h[1]);
    let c = 64,
      f = 3,
      l = !1,
      b = null;
    this._r7982e3490a9f12.typeId === class_3447.const_862
      ? ((c = 32), (f = 2), (l = !0))
      : this._r7982e3490a9f12.typeId === class_3447.COW
        ? ((c = 64), (f = 3), (l = !0))
        : this._r7982e3490a9f12.typeId === class_3447.GNOME ||
            this._r7982e3490a9f12.typeId === class_3447.const_461
          ? ((c = 32), (f = 3), (l = !0))
          : this._r7982e3490a9f12.typeId === class_3447.MONSTERPLANT &&
            ((c = 32),
            (f = 2),
            (l = !0),
            (b = this._r7982e3490a9f12.level >= 7 ? "std" : `grw${this._r7982e3490a9f12.level}`));
    let _ = this.var_2609.getPetImage(this._r7982e3490a9f12, f, l, this, c, b);
    (this.setPetImage(_), this.updateRarityOverlay(), this.updateStatusGraphics());
  }
  static {
    n(this, "PetsGridItem");
  }
  static THUMB_COLOR_NORMAL = 13421772;
  static THUMB_COLOR_UNSEEN = 10275685;
  _window = null;
  var_989 = null;
  var_2619 = !1;
  var_3573 = -1;
  _rf67f51f0ae8060 = !1;
  get window() {
    return this._window;
  }
  get pet() {
    return this._r7982e3490a9f12;
  }
  get imageDownloadId() {
    return this.var_3573;
  }
  set imageDownloadId(e) {
    this.var_3573 = e;
  }
  dispose() {
    ((this._assets = null),
      (this.var_2609 = null),
      (this._r7982e3490a9f12 = null),
      (this.var_989 = null),
      (this.var_3573 = -1),
      this._window != null && (this._window.dispose(), (this._window = null)));
  }
  setPetImage(e) {
    let r = this._window?.findChildByName("bitmap");
    if (r == null || e == null) return;
    let t = new A(r.width, r.height, !0, 0);
    (t.copyPixels(e, e.rect, new E(t.width / 2 - e.width / 2, t.height / 2 - e.height / 2)),
      r.bitmap?.dispose(),
      (r.bitmap = t));
  }
  setUnseen(e) {
    this._isUnseen !== e && ((this._isUnseen = e), this.updateStatusGraphics());
  }
  setSelected(e) {
    if (this.var_2619 !== e) {
      if (((this.var_2619 = e), this._window == null)) return;
      this.updateStatusGraphics();
    }
  }
  eventHandler(e, r) {
    switch (e?.type) {
      case u.DOWN:
        (this.var_2609?._r940649254ab9e3(this), (this._rf67f51f0ae8060 = !0));
        break;
      case u.UP:
        this._rf67f51f0ae8060 = !1;
        break;
      case u.OUT:
        this._rf67f51f0ae8060 &&
          ((this._rf67f51f0ae8060 = !1),
          this.var_2609?._re99ec0cc74990e(this._r7982e3490a9f12?.id ?? 0, !0));
        break;
    }
  }
  updateStatusGraphics() {
    let e = this._window?.findChildByName("outline");
    (e != null && (e.visible = this.var_2619),
      this.var_989 == null &&
        (this.var_989 = this._window?.findChildByTag("BG_COLOR") ?? null),
      this.var_989 != null &&
        (this.var_989.color = this._isUnseen ? a.THUMB_COLOR_UNSEEN : a.THUMB_COLOR_NORMAL));
  }
  updateRarityOverlay() {
    if (this._window == null) return;
    let e = this._window.findChildByName("rarity_item_overlay_container");
    if (e != null)
      if (this._r7982e3490a9f12 != null && this._r7982e3490a9f12.rarityLevel >= 0) {
        let r = e.widget;
        (r != null && (r.rarityLevel = this._r7982e3490a9f12.rarityLevel), (e.visible = !0));
      } else e.visible = !1;
  }
}
