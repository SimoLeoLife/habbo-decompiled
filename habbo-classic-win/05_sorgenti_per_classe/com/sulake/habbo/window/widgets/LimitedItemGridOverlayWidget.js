// Estratto da HabboAirLauncher.deobf.js, riga 149985.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/LimitedItemGridOverlayWidget.as
// Nome offuscato: _i99093f8b77b10e

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._r60106d9077a6ac =
      this._windowManager?.assets.getAssetByName("unique_item_label_plaque_metal")?.content?.clone() ?? null),
      (this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
        this._windowManager.assets.getAssetByName("unique_item_overlay_griditem_xml")?.content,
      )),
      (this.var_1175 = this._rf8f9fc25599fa4?.findChildByName(
        "unique_item_overlay_plaque_background_bitmap",
      )),
      this.var_1175 != null && (this.var_1175.bitmap = this._r60106d9077a6ac),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4));
  }
  static {
    n(this, "LimitedItemGridOverlayWidget");
  }
  static TYPE = "limited_item_overlay_grid";
  SHINE_INTERVAL_MS = 1e4;
  SHINE_LENGTH_MS = 250;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _r60106d9077a6ac = null;
  var_1175 = null;
  _r8c4bbca2c8f266 = 0;
  _rebfbbf5bdc44f0 = _ia411d8d8194a3a();
  _r3f58453a2b8366 = this._rebfbbf5bdc44f0;
  _r92e329f6af1936 = !1;
  dispose() {
    this._disposed ||
      (this._r92e329f6af1936 && this._windowManager?.removeUpdateReceiver(this),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      (this._r60106d9077a6ac = null),
      (this.var_1175 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  set serialNumber(e) {
    this._r8c4bbca2c8f266 = Math.trunc(e);
    let r = this._rf8f9fc25599fa4?.findChildByName("unique_item_overlay_plaque_number_bitmap");
    r != null &&
      this._windowManager != null &&
      (r.bitmap = Su.createBitmap(this._windowManager.assets, this._r8c4bbca2c8f266, r.width, r.height));
  }
  get serialNumber() {
    return this._r8c4bbca2c8f266;
  }
  set seriesSize(e) {}
  get seriesSize() {
    return 0;
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  get iterator() {
    return Lt.INSTANCE;
  }
  get animated() {
    return this._r92e329f6af1936;
  }
  set animated(e) {
    ((this._r92e329f6af1936 = e),
      this._r92e329f6af1936
        ? this._windowManager?.registerUpdateReceiver(this, 5)
        : this._windowManager?.removeUpdateReceiver(this));
  }
  update(e) {
    if (
      !(this._disposed || this.var_1175 == null || this._r60106d9077a6ac == null) &&
      ((this._rebfbbf5bdc44f0 += e), this._rebfbbf5bdc44f0 - this._r3f58453a2b8366 > this.SHINE_INTERVAL_MS)
    ) {
      let r = new A(this.var_1175.width, this.var_1175.height, !1),
        t = (this._rebfbbf5bdc44f0 - this._r3f58453a2b8366 - this.SHINE_INTERVAL_MS) / this.SHINE_LENGTH_MS;
      if (t < 1) {
        let i = Math.trunc((this._r60106d9077a6ac.height - this.var_1175.height) * t);
        (r.copyPixels(
          this._r60106d9077a6ac,
          new D(0, i, this.var_1175.width, this.var_1175.height),
          new E(0, 0),
        ),
          (this.var_1175.bitmap = r));
      } else
        ((this.var_1175.bitmap = this._r60106d9077a6ac),
          (this._r3f58453a2b8366 = this._rebfbbf5bdc44f0));
    }
  }
}
