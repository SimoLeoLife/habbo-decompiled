// Estratto da HabboAirLauncher.deobf.js, riga 151478.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/RarityItemGridOverlayWidget.as
// Nome offuscato: _i9d2121157a7d8c

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("rarity_item_overlay_griditem_xml")?.content;
    ((this._rf8f9fc25599fa4 =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      this.var_220 != null &&
        (this.var_220.rootWindow = this._rf8f9fc25599fa4 ?? null));
  }
  static {
    n(this, "RarityItemGridOverlayWidget");
  }
  static TYPE = "rarity_item_overlay_grid";
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  var_4383 = 0;
  get disposed() {
    return this._disposed;
  }
  set rarityLevel(e) {
    this.var_4383 = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("rarity_item_overlay_plaque_number_bitmap");
    r != null &&
      this._windowManager != null &&
      (r.bitmap = Su.createBitmap(this._windowManager.assets, this.var_4383, r.width, r.height));
  }
  get rarityLevel() {
    return this.var_4383;
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  dispose() {
    this._disposed ||
      (this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get iterator() {
    return Lt.INSTANCE;
  }
}
