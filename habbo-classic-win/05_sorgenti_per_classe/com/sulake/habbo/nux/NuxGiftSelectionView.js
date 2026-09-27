// Estratto da HabboAirLauncher.deobf.js, riga 339813.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/nux/NuxGiftSelectionView.as
// Nome offuscato: _i438aa56552b2e3

class {
  static {
    n(this, "NuxGiftSelectionView");
  }
  _frame = null;
  var_82;
  var_752 = null;
  var_1439;
  var_110;
  var_3938;
  constructor(e, r) {
    ((this.var_82 = e),
      (this.var_1439 = r),
      (this.var_110 = 0),
      (this.var_3938 = []),
      this.var_82.sessionDataManager.loadProductData(this) && this.show());
  }
  get disposed() {
    return this.var_82 == null;
  }
  productDataReady() {
    this.show();
  }
  dispose() {
    (this._frame?.dispose(),
      (this._frame = null),
      (this.var_82 = null),
      (this.var_752 = null));
  }
  hide() {
    this.var_82?._r523c87ecb4d389();
  }
  show() {
    this._frame != null && this._frame.dispose();
    let e = this.var_82?.assets.getAssetByName("nux_gift_selection_xml");
    if (((this._frame = this.var_82?.windowManager.buildFromXML(e?.content)), this._frame == null))
      throw new Error("Failed to construct window from XML!");
    let r = this._frame.findChildByTag("close");
    (r != null && (r.visible = !1), this.populateStep());
  }
  populateStep() {
    if (this._frame == null || this.var_82 == null || this.var_1439.length === 0) return;
    let e = this.var_1439[this.var_110],
      r = this._frame.findChildByName("nux_gift_selection_list");
    if (r == null) return;
    (this.var_752 == null && (this.var_752 = r.getListItemAt(0)), r.removeListItems());
    let t = decodeURI(
      this.var_82.localizationManager.getLocalization("nux.gift.selection.separator", ", "),
    );
    for (let i = 0; i < e.options.length; i++) {
      let s = e.options[i],
        o = this.var_752?.clone();
      if (o == null) continue;
      let d = o.getChildByName("option_heading"),
        c = o.getChildByName("option_button"),
        l = o.getChildByName("option_thumbnail")?.getChildByName("option_bitmap"),
        b = "";
      if (s.productOfferList.length > 0)
        for (let _ = 0; _ < s.productOfferList.length; _++) {
          let h = s.productOfferList[_];
          ((b += this.getProductName(h)), _ < s.productOfferList.length - 1 && (b += t));
        }
      (s._r198cfd70edb3c1 != null &&
        l != null &&
        (l.assetUri = `${this.var_82.configuration.getProperty("image.library.url")}${s._r198cfd70edb3c1}`),
        d != null && (d.text = b),
        c != null && ((c.name = i.toString()), (c.procedure = this.onSelectOption)),
        r.addListItem(o));
    }
    (r.arrangeListItems(),
      this.var_1439.length > 1 &&
        (this._frame.caption = `${this.var_82.localizationManager.getLocalization("nux.gift.selection.title")} ${this.var_110 + 1}/${this.var_1439.length}`),
      this._frame.center());
  }
  getProductName(e) {
    if (this.var_82 == null) return "";
    if (e.localizationKey != null)
      return this.var_82.localizationManager.getLocalization(e.localizationKey, e.localizationKey);
    let r = this.var_82.catalog.getProductData(e._raeb033db5aa083);
    return r != null && r.name !== ""
      ? r.name
      : this.var_82.localizationManager.getLocalization(
          `product_${e._raeb033db5aa083}_name`,
          `product_${e._raeb033db5aa083}_name`,
        );
  }
  onSelectOption = n((e, r) => {
    if (e.type !== u.CLICK || this._frame == null || this.var_82 == null) return;
    let t = this.var_1439[this.var_110],
      i = this._frame.findChildByName("nux_gift_selection_list"),
      s = r.parent,
      o = i != null && s != null ? i.getListItemIndex(s) : -1;
    o !== -1 &&
      (this.var_3938.push(new class_2887(t._r9f51ec9c1833f1, t._rbd5af088bd7422, o)),
      (this.var_110 += 1),
      this.var_110 === this.var_1439.length
        ? this.var_82._r6ade54c31a1b86(this.var_3938)
        : this.show());
  }, "onSelectOption");
  onClose = n((e) => {
    this.hide();
  }, "onClose");
}
