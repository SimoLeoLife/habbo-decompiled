// Extracted from HabboAirLauncher.deobf.js, line 174211.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/renderer/collections/CollectionsNavigationNodeRenderer.as
// Obfuscated name: _i41dcf9e111c0f4

class {
  constructor(e, r) {
    this.var_374 = e;
    this._r4eb39feb7f70c0 = r;
    this.createWindow();
  }
  static {
    n(this, "CollectionsNavigationNodeRenderer");
  }
  _window = null;
  _active = !1;
  _itemNormalColor = 0;
  _itemSelectedEtchingColor = 0;
  var_1463 = !1;
  get nftCollection() {
    return this._r4eb39feb7f70c0;
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this._window == null;
  }
  activate() {
    ((this._active = !0), this.updateLook());
  }
  deactivate() {
    ((this._active = !1), this.updateLook());
  }
  dispose() {
    (this._window?.dispose(), (this._window = null));
  }
  createWindow() {
    this._window = this.var_374._r590f6e2a9cf144?.clone();
    let e = this._window?.findChildByTag("ITEM_TITLE");
    e != null &&
      ((e.caption = this.var_374.controller.localizationManager.getLocalization(
        `collectibles.set.${this._r4eb39feb7f70c0.collectionId}`,
        this._r4eb39feb7f70c0.collectionName,
      )),
      (this._itemNormalColor = e.textColor),
      (this._itemSelectedEtchingColor = e.etchingColor));
    let r = this._window?.findChildByTag("SELECTION_HILIGHT");
    (r != null && (r.visible = !1),
      this.setProgressLook(!1),
      this._window?.addEventListener(u.CLICK, this.onButtonClicked),
      this._window?.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._window?.addEventListener(u.OUT, this._rc963a69957f690));
  }
  setProgressLook(e = !1) {
    let r = this._r4eb39feb7f70c0._rc084fcd9702b88,
      t = this._r4eb39feb7f70c0._rf1e0cb0f5d01d9;
    if (
      (this.progressContainer != null && (this.progressContainer.visible = r > 0 && e),
      this.progressColorHint != null && (this.progressColorHint.visible = r > 0),
      r <= 0)
    )
      return;
    let i = Jj.getColor(r, t);
    if ((this.progressColorHint != null && (this.progressColorHint.color = (i | 4278190080) >>> 0), e)) {
      let s = Math.floor(
        (this._r4eb39feb7f70c0._rc084fcd9702b88 * 100) / this._r4eb39feb7f70c0._rf1e0cb0f5d01d9,
      );
      (this.progressColor != null && (this.progressColor.color = i),
        this.progressText != null && (this.progressText.caption = `${s}%`));
    }
  }
  _rc963a69957f690 = n((e) => {
    ((this.var_1463 = !1), this.updateLook());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((e) => {
    ((this.var_1463 = !0), this.updateLook());
  }, "_rb2fb7964bb4ade");
  updateLook() {
    (this._active || this.var_1463 ? this.setActiveLook() : this.setInactiveLook(),
      this.setProgressLook(this.var_1463));
  }
  setInactiveLook() {
    let e = this._window?.findChildByTag("SELECTION_COLOR");
    e != null && ((e.textColor = this._itemNormalColor), (e.etchingColor = 0));
    let r = this._window?.findChildByTag("SELECTION_HILIGHT");
    r != null && (r.visible = !1);
  }
  setActiveLook() {
    let e = this._window?.findChildByTag("SELECTION_COLOR");
    e != null && ((e.textColor = 4294967295), (e.etchingColor = this._itemSelectedEtchingColor));
    let r = this._window?.findChildByTag("SELECTION_HILIGHT");
    r != null && (r.visible = !0);
  }
  get progressContainer() {
    return this._window?.findChildByName("progress_container");
  }
  get progressColor() {
    return this.progressContainer?.getChildByName("progress_color");
  }
  get progressText() {
    return this.progressContainer?.getChildByName("progress_text");
  }
  get progressColorHint() {
    return this._window?.findChildByName("progress_color_hint");
  }
  onButtonClicked = n((e) => {
    this.var_374._r373e7f2643c08c(this);
  }, "onButtonClicked");
}
