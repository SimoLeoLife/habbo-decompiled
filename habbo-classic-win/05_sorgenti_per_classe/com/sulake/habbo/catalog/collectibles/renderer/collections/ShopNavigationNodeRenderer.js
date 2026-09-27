// Estratto da HabboAirLauncher.deobf.js, riga 176231.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/renderer/collections/ShopNavigationNodeRenderer.as
// Nome offuscato: _i345395b49b24c6

class {
  constructor(e, r) {
    this.var_2931 = e;
    this.var_163 = r;
    this.createWindow();
  }
  static {
    n(this, "ShopNavigationNodeRenderer");
  }
  _window = null;
  _active = !1;
  _itemNormalColor = 0;
  _itemSelectedEtchingColor = 0;
  var_1463 = !1;
  get window() {
    return this._window;
  }
  get category() {
    return this.var_163;
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
    this._window = this.var_2931._r590f6e2a9cf144?.clone();
    let e = this._window?.findChildByTag("ITEM_TITLE");
    e != null &&
      ((e.caption = this.var_163),
      (this._itemNormalColor = e.textColor),
      (this._itemSelectedEtchingColor = e.etchingColor));
    let r = this._window?.findChildByTag("SELECTION_HILIGHT");
    (r != null && (r.visible = !1),
      this._window?.addEventListener(u.CLICK, this.onButtonClicked),
      this._window?.addEventListener(u.OVER, this._rb2fb7964bb4ade),
      this._window?.addEventListener(u.OUT, this._rc963a69957f690));
  }
  _rc963a69957f690 = n((e) => {
    ((this.var_1463 = !1), this.updateLook());
  }, "_rc963a69957f690");
  _rb2fb7964bb4ade = n((e) => {
    ((this.var_1463 = !0), this.updateLook());
  }, "_rb2fb7964bb4ade");
  updateLook() {
    this._active || this.var_1463 ? this.setActiveLook() : this.setInactiveLook();
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
  onButtonClicked = n((e) => {
    this.var_2931._r5415e1b9ed2b71(this);
  }, "onButtonClicked");
}
