// Estratto da HabboAirLauncher.deobf.js, riga 150080.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/LimitedItemPreviewOverlayWidget.as
// Nome offuscato: _i6bb171179d9dab

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("unique_item_overlay_preview_xml")?.content;
    ((this._rf8f9fc25599fa4 =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      this.var_220 != null &&
        (this.var_220.rootWindow = this._rf8f9fc25599fa4 ?? null));
  }
  static {
    n(this, "LimitedItemPreviewOverlayWidget");
  }
  static TYPE = "limited_item_overlay_preview";
  _rf8f9fc25599fa4 = null;
  _r8c4bbca2c8f266 = 0;
  _r29b82ef38bc106 = 0;
  _r92e329f6af1936 = !1;
  set serialNumber(e) {
    this._r8c4bbca2c8f266 = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("unique_item_serial_number_bitmap");
    r != null &&
      this._windowManager != null &&
      (r.bitmap = Su.createBitmap(this._windowManager.assets, this._r8c4bbca2c8f266, r.width, r.height));
  }
  set seriesSize(e) {
    this._r29b82ef38bc106 = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("unique_item_edition_size_bitmap");
    r != null &&
      this._windowManager != null &&
      (r.bitmap = Su.createBitmap(this._windowManager.assets, this._r29b82ef38bc106, r.width, r.height));
  }
  get serialNumber() {
    return this._r8c4bbca2c8f266;
  }
  get seriesSize() {
    return this._r29b82ef38bc106;
  }
  get animated() {
    return this._r92e329f6af1936;
  }
  set animated(e) {
    this._r92e329f6af1936 = e;
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  dispose() {
    (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null));
  }
  get disposed() {
    return this._rf8f9fc25599fa4 == null;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
}
