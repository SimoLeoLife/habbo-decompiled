// Extracted from HabboAirLauncher.deobf.js, line 172307.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/BundleProductContainer.as
// Obfuscated name: _i6956f9cc3a8fa9

class extends I0 {
  static {
    n(this, "BundleProductContainer");
  }
  var_2136;
  constructor(e, r, t) {
    super(e, r, t);
    let i = t.assets.getAssetByName("ctlg_pic_deal_icon_narrow");
    this.var_2136 = i?.content?.clone() ?? new A(1, 1, !0, 16777215);
  }
  dispose() {
    this.disposed || (this.var_2136.dispose(), super.dispose());
  }
  initProductIcon(e, r = null) {
    this.setIconImage(this.var_2136.clone(), !0);
  }
  populateItemGrid(e, r) {
    let t = this.catalog?.windowManager.buildFromXML(r);
    if (t != null)
      for (let i of this.offer._r10b16f6e9cda51?.products ?? []) {
        if (i.productType === class_1803.PRODUCT_TYPE_BADGE) continue;
        let s = t.clone(),
          o = s.findChildByName("clubLevelIcon");
        (o != null && (o.visible = !1),
          e.addGridItem(s),
          (i.view = s),
          i.initIcon(this)?.dispose(),
          (i.grid = this));
      }
  }
  setBundleCounter(e) {
    let r = this._view?.findChildByName("bundleCounter");
    r != null && (r.caption = e.toString());
  }
  select(e, r) {}
  startDragAndDrop(e) {
    return !1;
  }
  set view(e) {
    ((super.view = e), this.setBundleCounter(999));
  }
  get view() {
    return super.view;
  }
}
