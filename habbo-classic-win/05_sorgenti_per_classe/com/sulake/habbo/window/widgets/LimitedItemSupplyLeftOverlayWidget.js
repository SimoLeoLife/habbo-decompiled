// Estratto da HabboAirLauncher.deobf.js, riga 150142.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/LimitedItemSupplyLeftOverlayWidget.as
// Nome offuscato: _i977166746ce1f5

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("unique_item_overlay_supply_xml")?.content;
    ((this._rf8f9fc25599fa4 =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      this.var_220 != null &&
        (this.var_220.rootWindow = this._rf8f9fc25599fa4 ?? null));
  }
  static {
    n(this, "LimitedItemSupplyLeftOverlayWidget");
  }
  static TYPE = "limited_item_overlay_supply";
  _rf8f9fc25599fa4 = null;
  _r7dd2b7acb9561e = 0;
  _r29b82ef38bc106 = 0;
  _r92e329f6af1936 = !1;
  set supplyLeft(e) {
    this._r7dd2b7acb9561e = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("items_left_count");
    r != null && (r.text = String(e));
    let t = this._rf8f9fc25599fa4?.findChildByName("unique_item_sold_out_bitmap");
    t != null && (t.visible = !1);
  }
  get supplyLeft() {
    return this._r7dd2b7acb9561e;
  }
  set serialNumber(e) {}
  set seriesSize(e) {
    this._r29b82ef38bc106 = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("items_total_count");
    r != null && (r.text = String(e));
  }
  get serialNumber() {
    return 0;
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
