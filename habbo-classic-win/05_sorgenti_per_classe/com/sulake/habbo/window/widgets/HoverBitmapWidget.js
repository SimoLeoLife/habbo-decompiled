// Estratto da HabboAirLauncher.deobf.js, riga 148926.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/HoverBitmapWidget.as
// Nome offuscato: _if289f7c7d518e9

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    let t = this._windowManager?.assets.getAssetByName("hover_bitmap_xml")?.content;
    ((this._bitmap =
      t != null && this._windowManager != null ? this._windowManager.buildFromXML(t) : null),
      this._bitmap?.addEventListener(u.OVER, this._rd7f9b139aa246e),
      this._bitmap?.addEventListener(u.OUT, this.onMouseOut),
      this.var_220 != null && (this.var_220.rootWindow = this._bitmap),
      this._bitmap != null &&
        this.var_220 != null &&
        ((this._bitmap.width = this.var_220.width),
        (this._bitmap.height = this.var_220.height),
        this._bitmap.invalidate()));
  }
  static {
    n(this, "HoverBitmapWidget");
  }
  static TYPE = "hover_bitmap";
  static _r02dfa650050f07 = `${a.TYPE}:hover_asset`;
  static _r7aa6fdf5e85efc = `${a.TYPE}:normal_asset`;
  static _r9c4589a899cf1a = new ne(a._r02dfa650050f07, null, ne.STRING);
  static _r52a42dca623c3e = new ne(a._r7aa6fdf5e85efc, null, ne.STRING);
  _disposed = !1;
  _bitmap;
  _r021c4e4264af90 = "";
  _rfded967242d9f4 = "";
  _r21b979033d9489 = !1;
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get properties() {
    let e = [];
    if (this._disposed) return e;
    if (
      (e.push(a._r52a42dca623c3e.withValue(this._r021c4e4264af90)),
      e.push(a._r9c4589a899cf1a.withValue(this._rfded967242d9f4)),
      this._bitmap != null)
    )
      for (let r of this._bitmap.properties) r.key !== class_3436.ASSET_URI && e.push(r);
    return e;
  }
  set properties(e) {
    if (!this._disposed) {
      for (let r of e)
        switch (r.key) {
          case a._r7aa6fdf5e85efc:
            this._rc2a22a4b65f87e = String(r.value ?? "");
            break;
          case a._r02dfa650050f07:
            this._r55cd3f0dae6f51 = String(r.value ?? "");
            break;
        }
      this._bitmap != null &&
        ((this._bitmap.properties = e), this._bitmap.invalidate());
    }
  }
  get _rc2a22a4b65f87e() {
    return this._r021c4e4264af90;
  }
  set _rc2a22a4b65f87e(e) {
    ((this._r021c4e4264af90 = e),
      !this._r21b979033d9489 &&
        this._bitmap != null &&
        (this._bitmap.assetUri = this._r021c4e4264af90));
  }
  get _r55cd3f0dae6f51() {
    return this._rfded967242d9f4;
  }
  set _r55cd3f0dae6f51(e) {
    ((this._rfded967242d9f4 = e),
      this._r21b979033d9489 &&
        this._bitmap != null &&
        (this._bitmap.assetUri = this._rfded967242d9f4));
  }
  get _r7e7dcf5b91981d() {
    return this._bitmap;
  }
  dispose() {
    this._disposed ||
      (this._bitmap?.removeEventListener(u.OVER, this._rd7f9b139aa246e),
      this._bitmap?.removeEventListener(u.OUT, this.onMouseOut),
      this._bitmap?.dispose(),
      (this._bitmap = null),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  _rd7f9b139aa246e = n((e) => {
    ((this._r21b979033d9489 = !0),
      this._bitmap != null && (this._bitmap.assetUri = this._rfded967242d9f4));
  }, "_rd7f9b139aa246e");
  onMouseOut = n((e) => {
    ((this._r21b979033d9489 = !1),
      this._bitmap != null && (this._bitmap.assetUri = this._r021c4e4264af90));
  }, "onMouseOut");
}
