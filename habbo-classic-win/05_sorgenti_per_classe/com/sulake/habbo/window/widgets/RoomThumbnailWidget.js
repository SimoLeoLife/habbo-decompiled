// Estratto da HabboAirLauncher.deobf.js, riga 151745.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/RoomThumbnailWidget.as
// Nome offuscato: _ic1bbe24340ab1b

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("room_thumbnail_xml")?.content,
    )),
      (this.var_4118 = this._rf8f9fc25599fa4?.findChildByName("room_thumbnail")),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this._rf8f9fc25599fa4 != null &&
          ((this._rf8f9fc25599fa4.width = this.var_220.width),
          (this._rf8f9fc25599fa4.height = this.var_220.height))),
      this.reset());
  }
  static {
    n(this, "RoomThumbnailWidget");
  }
  static TYPE = "room_thumbnail";
  static _r5d1437599b0238 = `${a.TYPE}:flat_id`;
  static _r4943adc016d42e = new ne(a._r5d1437599b0238, 0, ne.INT, !1);
  static _r2f3608c64f9ce9 = "newnavigator_default_room";
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  var_4118 = null;
  _flatId = Number(a._r4943adc016d42e.value);
  reset() {
    ((this._flatId = Number(a._r4943adc016d42e.value)),
      this.var_4118 != null &&
        ((this.var_4118.assetUri = a._r2f3608c64f9ce9), this.var_4118.invalidate()));
  }
  get flatId() {
    return this._flatId;
  }
  set flatId(e) {
    this._flatId = Math.trunc(e);
  }
  get properties() {
    return this._disposed ? [] : [a._r4943adc016d42e.withValue(this._flatId)];
  }
  set properties(e) {
    for (let r of e) r.key === a._r5d1437599b0238 && (this.flatId = Number(r.value));
  }
  dispose() {
    this._disposed ||
      ((this.var_4118 = null),
      this._rf8f9fc25599fa4?.dispose(),
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
}
