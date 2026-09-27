// Extracted from HabboAirLauncher.deobf.js, line 183911.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/CatalogNodeRenderable.as
// Obfuscated name: _i9d8230d8919913

class a extends wz {
  static {
    n(this, "CatalogNodeRenderable");
  }
  static ITEM_SELECTION_COLOR = 4294967295;
  _window = null;
  var_130 = null;
  _isOpen = !1;
  _active = !1;
  _itemNormalColor = 0;
  _itemSelectedEtchingColor = 0;
  _re5fa92982ce18a = -1;
  constructor(e, r, t, i) {
    super(e, r, t, i);
  }
  get window() {
    return this._window;
  }
  get isOpen() {
    return this._isOpen;
  }
  get visible() {
    return !0;
  }
  dispose() {
    (this._isOpen && (this.close(), this.deactivate()),
      (this._window = null),
      (this.var_130 = null),
      super.dispose());
  }
  _r8a6680301dc7fe(e) {
    ((this._window == null || this._re5fa92982ce18a !== this.depth) &&
      (this.createWindow(this.depth), this.setInactiveLook()),
      this._window != null &&
        (e.addListItem(this._window),
        this._rdf76326858d5b4 &&
          (this.var_130 == null && this._r7f03e5085f0dbf(),
          this.var_130 != null && (e.addListItem(this.var_130), this._r390774011b5ecc())),
        e.arrangeListItems()));
  }
  _r53143082f18ea9(e, r) {
    ((this._window == null || this._re5fa92982ce18a !== r) &&
      (this.createWindow(r), this.setInactiveLook()),
      this._window != null && (e.addListItem(this._window), e.arrangeListItems()));
  }
  _rfe5e3d9d2a394f(e) {
    (this._window != null && e.removeListItem(this._window),
      this.var_130 != null && this._rdf76326858d5b4 && e.removeListItem(this.var_130));
  }
  activate() {
    (this.setActiveLook(), (this._active = !0));
  }
  deactivate() {
    (this.setInactiveLook(), (this._active = !1));
  }
  open() {
    if (
      (this.showChildren(),
      (this._isOpen = !0),
      this._rdf76326858d5b4 && this._window != null)
    ) {
      let e = this._window.findChildByTag("DOWNBTN");
      e != null && (e.style = HabboIconType.TRIANGLE_DOWN);
    }
  }
  close() {
    if (
      (this.removeChildren(),
      (this._isOpen = !1),
      this._rdf76326858d5b4 && this._window != null)
    ) {
      let e = this._window.findChildByTag("DOWNBTN");
      e != null && (e.style = HabboIconType.TRIANGLE_RIGHT);
    }
  }
  _r108d2c8adcf02b() {
    if (this.var_130 == null) return;
    this.var_130.height = 0;
    for (let r = 0; r < this.var_130.numListItems; r++) {
      let t = this.var_130.getListItemAt(r);
      t?.visible && (this.var_130.height += t.height);
    }
    (this.parent instanceof a ? this.parent : null)?._r108d2c8adcf02b();
  }
  get offsetV() {
    return (this._window?.y ?? 0) + 21;
  }
  _r390774011b5ecc() {
    if (this.var_130 != null) {
      this.var_130.removeListItems();
      for (let e of this.children) {
        let r = e instanceof a ? e : null;
        r != null && r.visible && (r._r8a6680301dc7fe(this.var_130), r.setInactiveLook());
      }
      this.var_130.arrangeListItems();
    }
  }
  showChildren() {
    if ((this.var_130 == null && this._r7f03e5085f0dbf(), this.var_130 == null)) return;
    for (let r of this.children) r.visible && r instanceof a && r._r8a6680301dc7fe(this.var_130);
    this.var_130.visible = !0;
    let e = 0;
    for (let r = 0; r < this.var_130.numListItems; r++)
      this.var_130.getListItemAt(r)?.visible && e++;
    this.var_130.height = e * 21;
  }
  removeChildren() {
    this.var_130 != null &&
      (this.var_130.removeListItems(),
      (this.var_130.height = 0),
      (this.var_130.visible = !1),
      (this.var_130.x = 0));
  }
  _r7f03e5085f0dbf() {
    let e = this.navigator.listTemplate;
    ((this.var_130 = e?.clone()), this.removeChildren());
  }
  createWindow(e) {
    let r = this.navigator;
    if (
      (this._window?.dispose(),
      (this._window = null),
      (this._re5fa92982ce18a = e),
      (this._window = r.getItemTemplate(e)?.clone()),
      this._window == null)
    )
      return;
    let t = this._window.findChildByTag("ITEM_TITLE"),
      i = this._window.findChildByTag("DOWNBTN");
    t != null &&
      ((t.caption = this.localization),
      (this._itemNormalColor = t.textColor),
      (this._itemSelectedEtchingColor = t.etchingColor));
    let s = this._window.findChildByTag("SELECTION_HILIGHT");
    (s != null && (s.visible = !1), i != null && (i.visible = !this._r9d9fd2f1956d60));
    let o = this._window.findChildByName("icon");
    if (
      (o != null && (o.assetUri = `${r.catalog.imageGalleryHost}${this.iconName}.png`),
      r.isDeepHierarchy &&
        (this.depth === 1 &&
          (o != null && (o.visible = !1),
          this._window.findChildByTag("ITEM_TITLE") &&
            (this._window.findChildByTag("ITEM_TITLE").x = 0)),
        this.depth > 3))
    ) {
      o != null && ((o.visible = !0), (o.x = 15 + 6 * (this.depth - 3)));
      let d = this._window.findChildByTag("ITEM_TITLE");
      d != null && (d.x = 42 + 6 * (this.depth - 3));
    }
    (this._window.addEventListener(u.CLICK, this.onButtonClicked),
      this._window.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._window.addEventListener(u.OUT, this._rc963a69957f690),
      i?.addEventListener(u.CLICK, this.onButtonClicked));
  }
  _rc963a69957f690 = n(() => {
    this._active || this.setInactiveLook();
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n(() => {
    this._active || this.setActiveLook();
  }, "_rb2fb7964bb4ade");
  setInactiveLook() {
    if (this._window == null) return;
    let e = this._window.findChildByTag("SELECTION_COLOR");
    e != null && ((e.textColor = this._itemNormalColor), (e.etchingColor = 0));
    let r = this._window.findChildByTag("SELECTION_HILIGHT");
    r != null && (r.visible = !1);
  }
  setActiveLook() {
    if (this._window == null) return;
    let e = this._window.findChildByTag("SELECTION_COLOR");
    e != null && ((e.textColor = a.ITEM_SELECTION_COLOR), (e.etchingColor = this._itemSelectedEtchingColor));
    let r = this._window.findChildByTag("SELECTION_HILIGHT");
    r != null && (r.visible = !0);
  }
  onButtonClicked = n(() => {
    this.navigator._r7e72b123bb13a9(this);
  }, "onButtonClicked");
}
