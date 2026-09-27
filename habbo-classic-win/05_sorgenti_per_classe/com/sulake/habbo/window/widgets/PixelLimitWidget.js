// Estratto da HabboAirLauncher.deobf.js, riga 150426.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/PixelLimitWidget.as
// Nome offuscato: _i4f79d3ef333a5e

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("pixel_limit_xml")?.content,
    )),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        ((this._rf8f9fc25599fa4.width = this.var_220.width),
        (this._rf8f9fc25599fa4.height = this.var_220.height)));
  }
  static {
    n(this, "PixelLimitWidget");
  }
  static TYPE = "pixel_limit";
  static _r7d501041352ff1 = `${a.TYPE}:limit`;
  static _rc247def759e044 = new ne(a._r7d501041352ff1, 0, ne.STRING, !1, null);
  _disposed = !1;
  var_1341 = !1;
  _rf8f9fc25599fa4 = null;
  _limit = Number(a._rc247def759e044.value);
  get limit() {
    return this._limit;
  }
  set limit(e) {
    ((this._limit = Math.max(0, Math.min(100, Math.trunc(e)))), this.refresh());
  }
  dispose() {
    this._disposed ||
      (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
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
  get properties() {
    if (this._disposed || this._rf8f9fc25599fa4 == null) return [];
    let e = [a._rc247def759e044.withValue(this._limit)];
    for (let r of this._rf8f9fc25599fa4.properties)
      r.key !== class_3436.ASSET_URI && e.push(r.withNameSpace(a.TYPE));
    return e;
  }
  set properties(e) {
    this.var_1341 = !0;
    let r = [];
    for (let t of e)
      (t.key === a._r7d501041352ff1 && (this.limit = Number(t.value)),
        t.key !== `${a.TYPE}:${class_3436.ASSET_URI}` && r.push(t.withoutNameSpace()));
    (this._rf8f9fc25599fa4 != null && (this._rf8f9fc25599fa4.properties = r),
      (this.var_1341 = !1),
      this.refresh());
  }
  get bitmapData() {
    return this._rf8f9fc25599fa4?.bitmapData ?? null;
  }
  set bitmapData(e) {
    this._rf8f9fc25599fa4 != null && (this._rf8f9fc25599fa4.bitmapData = e);
  }
  get _rc42ef752c39ce9() {
    return this._rf8f9fc25599fa4?._rc42ef752c39ce9 ?? Vt.CENTER;
  }
  set _rc42ef752c39ce9(e) {
    this._rf8f9fc25599fa4 != null &&
      ((this._rf8f9fc25599fa4._rc42ef752c39ce9 = e), this._rf8f9fc25599fa4.invalidate());
  }
  get _r9d5f7918ae45e9() {
    return this._rf8f9fc25599fa4?._r9d5f7918ae45e9 ?? !1;
  }
  set _r9d5f7918ae45e9(e) {
    this._rf8f9fc25599fa4 != null &&
      ((this._rf8f9fc25599fa4._r9d5f7918ae45e9 = e), this._rf8f9fc25599fa4.invalidate());
  }
  get _r1b6896589e83da() {
    return this._rf8f9fc25599fa4?._r1b6896589e83da ?? !1;
  }
  set _r1b6896589e83da(e) {
    this._rf8f9fc25599fa4 != null &&
      ((this._rf8f9fc25599fa4._r1b6896589e83da = e), this._rf8f9fc25599fa4.invalidate());
  }
  get zoomX() {
    return this._rf8f9fc25599fa4?.zoomX ?? 1;
  }
  set zoomX(e) {
    this._rf8f9fc25599fa4 != null && ((this._rf8f9fc25599fa4.zoomX = e), this._rf8f9fc25599fa4.invalidate());
  }
  get zoomY() {
    return this._rf8f9fc25599fa4?.zoomY ?? 1;
  }
  set zoomY(e) {
    this._rf8f9fc25599fa4 != null && ((this._rf8f9fc25599fa4.zoomY = e), this._rf8f9fc25599fa4.invalidate());
  }
  get greyscale() {
    return this._rf8f9fc25599fa4?.greyscale ?? !1;
  }
  set greyscale(e) {
    this._rf8f9fc25599fa4 != null &&
      ((this._rf8f9fc25599fa4.greyscale = e), this._rf8f9fc25599fa4.invalidate());
  }
  get etchingColor() {
    return this._rf8f9fc25599fa4?.etchingColor ?? 0;
  }
  set etchingColor(e) {
    this._rf8f9fc25599fa4 != null &&
      ((this._rf8f9fc25599fa4.etchingColor = e), this._rf8f9fc25599fa4.invalidate());
  }
  get fitSizeToContents() {
    return this._rf8f9fc25599fa4?.fitSizeToContents ?? !1;
  }
  set fitSizeToContents(e) {
    this._rf8f9fc25599fa4 != null &&
      ((this._rf8f9fc25599fa4.fitSizeToContents = e), this._rf8f9fc25599fa4.invalidate());
  }
  get etchingPoint() {
    return new E(0, 1);
  }
  get _r2eecf82f5b04f2() {
    return !1;
  }
  set _r2eecf82f5b04f2(e) {}
  get _r738070fc30728d() {
    return !1;
  }
  set _r738070fc30728d(e) {}
  get flipX() {
    return this._rf8f9fc25599fa4?.flipX ?? !1;
  }
  set flipX(e) {
    this._rf8f9fc25599fa4 != null && ((this._rf8f9fc25599fa4.flipX = e), this._rf8f9fc25599fa4.invalidate());
  }
  get flipY() {
    return this._rf8f9fc25599fa4?.flipY ?? !1;
  }
  set flipY(e) {
    this._rf8f9fc25599fa4 != null && ((this._rf8f9fc25599fa4.flipY = e), this._rf8f9fc25599fa4.invalidate());
  }
  get rotation() {
    return 0;
  }
  set rotation(e) {}
  refresh() {
    this.var_1341 ||
      this._rf8f9fc25599fa4 == null ||
      ((this._rf8f9fc25599fa4.assetUri = this.assetUri), this._rf8f9fc25599fa4.invalidate());
  }
  get assetUri() {
    return `\${image.library.url}reception/challenge_meter_${Math.max(Math.trunc(this._limit / 20) * 20, 20)}.png`;
  }
}
