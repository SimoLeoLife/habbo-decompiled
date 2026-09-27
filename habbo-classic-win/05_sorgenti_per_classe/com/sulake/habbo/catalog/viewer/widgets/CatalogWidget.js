// Extracted from HabboAirLauncher.deobf.js, line 187946.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/CatalogWidget.as
// Obfuscated name: _i4f7cb1a99e3abf

class {
  constructor(e) {
    this._window = e;
    this._r3ea9859d0525ee = this._window?.tags.indexOf("EMBEDDED") !== -1;
  }
  static {
    n(this, "CatalogWidget");
  }
  _events = null;
  var_225 = null;
  var_1271 = !1;
  _r3ea9859d0525ee = !1;
  set page(e) {
    this.var_225 = e;
  }
  get page() {
    return this.var_225;
  }
  set events(e) {
    this._events = e;
  }
  get events() {
    return this._events;
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    ((this._events = null),
      (this.var_225 = null),
      (this._window = null),
      (this.var_1271 = !0));
  }
  init() {
    return !0;
  }
  closed() {}
  _ra9cbaacb6b51fb(e) {
    let t = this.page?.viewer.catalog?.assets.getAssetByName(e) ?? null;
    if (!(t instanceof Df)) return null;
    let i = t.content;
    return i instanceof rr ? i : null;
  }
  _rd7318259311b4b(e) {
    if (this._r3ea9859d0525ee || this._window == null) return;
    let r = this._ra9cbaacb6b51fb(e);
    if (r == null || this.page == null) return;
    let i = this.page.viewer.catalog.windowManager.buildFromXML(r);
    i != null && (this._window.removeChildAt(0), this._window.addChild(i));
  }
  getAssetBitmapData(e) {
    let t = this.page?.viewer.catalog?.assets.getAssetByName(e) ?? null;
    if (!(t instanceof Qt)) return null;
    let i = t.content;
    return i instanceof A ? i : null;
  }
}
