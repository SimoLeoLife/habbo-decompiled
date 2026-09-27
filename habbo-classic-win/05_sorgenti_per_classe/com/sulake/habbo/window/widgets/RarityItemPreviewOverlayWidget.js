// Extracted from HabboAirLauncher.deobf.js, line 151525.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/RarityItemPreviewOverlayWidget.as
// Obfuscated name: _i82e6317239d141

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("rarity_item_overlay_preview_xml")?.content;
    ((this._rf8f9fc25599fa4 =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      (this._r21aed4f376194f = this._rf8f9fc25599fa4?.findChildByName("level")),
      this.var_220 != null &&
        (this.var_220.rootWindow = this._rf8f9fc25599fa4 ?? null));
  }
  static {
    n(this, "RarityItemPreviewOverlayWidget");
  }
  static TYPE = "rarity_item_overlay_preview";
  static var_4772 = `${a.TYPE}:level`;
  static _rd61ba6ed77dcb7 = new ne(a.var_4772, 0, ne.INT);
  var_4383 = 0;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _r21aed4f376194f = null;
  set rarityLevel(e) {
    ((this.var_4383 = e),
      this._r21aed4f376194f != null && (this._r21aed4f376194f.caption = String(e)));
  }
  get rarityLevel() {
    return this.var_4383;
  }
  get properties() {
    let e = [];
    return (this._disposed || e.push(a._rd61ba6ed77dcb7.withValue(this.rarityLevel)), e);
  }
  set properties(e) {
    for (let r of e) r.key === a.var_4772 && (this.rarityLevel = Number(r.value));
  }
  dispose() {
    this._disposed ||
      (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      (this._r21aed4f376194f = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
}
