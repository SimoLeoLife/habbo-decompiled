// Estratto da HabboAirLauncher.deobf.js, riga 256282.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/mainview/OfficialRoomImageLoader.as
// Nome offuscato: _i90836f060e0e4a

class {
  constructor(e, r, t) {
    this._navigator = e;
    this.var_2050 = r;
    this.var_1088 = t;
    let i = this._navigator?.getProperty("image.library.url") ?? "";
    this._url = `${i}${this.var_2050}`;
  }
  static {
    n(this, "OfficialRoomImageLoader");
  }
  _url;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  startLoad() {
    if (this._navigator == null) return;
    if (this._navigator.assets.hasAsset(this.var_2050)) {
      this.setImage();
      return;
    }
    let e = new _i636490202c0f9a(this._url),
      r = this._navigator.assets.loadAssetFromFile(this.var_2050, e, "image/gif");
    (r.addEventListener(Le.ASSET_LOADER_EVENT_COMPLETE, this._r66fc9d14f8c9e3),
      r.addEventListener(Le.ASSET_LOADER_EVENT_ERROR, this._rc20eaa46649236));
  }
  dispose() {
    this._disposed || ((this._disposed = !0), (this.var_1088 = null), (this._navigator = null));
  }
  _r66fc9d14f8c9e3 = n((...e) => {
    this._disposed || e[0].target == null || this.setImage();
  }, "_r66fc9d14f8c9e3");
  setImage() {
    if (
      this._navigator != null &&
      !this._navigator.disposed &&
      this.var_1088 != null &&
      !this.var_1088.disposed
    ) {
      let e = this._navigator._r6bd8f6d6bfdbb5(this.var_2050, "");
      e != null &&
        ((this.var_1088.disposesBitmap = !1),
        (this.var_1088.bitmap = e),
        (this.var_1088.width = e.width),
        (this.var_1088.height = e.height),
        (this.var_1088.visible = !0));
    }
    this.dispose();
  }
  _rc20eaa46649236 = n((...e) => {
    let r = e[0];
    this.dispose();
  }, "_rc20eaa46649236");
}
