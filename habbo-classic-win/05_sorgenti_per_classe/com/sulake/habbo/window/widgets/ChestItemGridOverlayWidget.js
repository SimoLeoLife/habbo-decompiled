// Estratto da HabboAirLauncher.deobf.js, riga 148530.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/ChestItemGridOverlayWidget.as
// Nome offuscato: _i6efc2bd98d8c0b

class {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("chest_overlay_griditem_xml")?.content;
    ((this._rf8f9fc25599fa4 =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      this.var_220 != null &&
        (this.var_220.rootWindow = this._rf8f9fc25599fa4 ?? null));
  }
  static {
    n(this, "ChestItemGridOverlayWidget");
  }
  static TYPE = "chest_overlay_grid";
  static COLOR_SILVER = "silver";
  static COLOR_GOLD = "gold";
  static COLOR_BROWN = "brown";
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _re0a12c2a0f6f65 = 0;
  _color = "";
  get disposed() {
    return this._disposed;
  }
  get properties() {
    return [];
  }
  set properties(e) {}
  get iterator() {
    return Lt.INSTANCE;
  }
  set contentsCount(e) {
    this._re0a12c2a0f6f65 = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("chest_plaque_number_bitmap");
    r != null &&
      this._windowManager != null &&
      (r.bitmap = Su.createBitmap(this._windowManager.assets, this._re0a12c2a0f6f65, r.width, r.height));
  }
  get contentsCount() {
    return this._re0a12c2a0f6f65;
  }
  set color(e) {
    this._color = e;
    let r = this._rf8f9fc25599fa4?.findChildByName("chest_plaque_bitmap");
    r != null && (r.assetUri = `chest_overlay_${e}_plaque`);
  }
  get color() {
    return this._color;
  }
  dispose() {
    this._disposed ||
      (this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      (this._windowManager = null),
      (this._disposed = !0));
  }
}
