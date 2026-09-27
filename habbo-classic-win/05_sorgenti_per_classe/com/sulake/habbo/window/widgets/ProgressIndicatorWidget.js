// Estratto da HabboAirLauncher.deobf.js, riga 151106.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/ProgressIndicatorWidget.as
// Nome offuscato: _ica529aca8b30ef

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("progress_indicator_xml")?.content,
    )),
      this.var_220?.setParamFlag(N._r22d1ec858797ca),
      this.var_220 != null && (this.var_220.rootWindow = this._rf8f9fc25599fa4));
  }
  static {
    n(this, "ProgressIndicatorWidget");
  }
  static TYPE = "progress_indicator";
  static _re1eba8636a1972 = `${a.TYPE}:style`;
  static _r02c64c37a903c7 = `${a.TYPE}:size`;
  static _rce862eb4eb2ec1 = `${a.TYPE}:position`;
  static _rcb17e55e74367a = `${a.TYPE}:mode`;
  static UbuntuWiredStyle = new ne(a._re1eba8636a1972, wq.FLAT, ne.STRING, !1, wq.ALL);
  static _r1016bb4a35852e = new ne(a._r02c64c37a903c7, 1, ne.const_77);
  static _r28bf060460360a = new ne(a._rce862eb4eb2ec1, 0, ne.const_77);
  static _r870b5e5ed57059 = new ne(a._rcb17e55e74367a, Ly.const_1394, ne.STRING, !1, Ly.ALL);
  static MAXIMUM_SIZE = 1e3;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _position = Number(a._r28bf060460360a.value);
  _style = String(a.UbuntuWiredStyle.value);
  _mode = String(a._r870b5e5ed57059.value);
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
    return this._disposed
      ? []
      : [
          a.UbuntuWiredStyle.withValue(this._style),
          a._r1016bb4a35852e.withValue(this.size),
          a._r28bf060460360a.withValue(this._position),
          a._r870b5e5ed57059.withValue(this._mode),
        ];
  }
  set properties(e) {
    if (!this._disposed)
      for (let r of e)
        switch (r.key) {
          case a._re1eba8636a1972:
            this.style = String(r.value);
            break;
          case a._r02c64c37a903c7:
            this.size = Number(r.value);
            break;
          case a._rce862eb4eb2ec1:
            this.position = Number(r.value);
            break;
          case a._rcb17e55e74367a:
            this.mode = String(r.value);
            break;
        }
  }
  get style() {
    return this._style;
  }
  set style(e) {
    ((this._style = e), this.refresh());
  }
  get size() {
    return this._rf8f9fc25599fa4?.numListItems ?? 0;
  }
  set size(e) {
    let r = Math.min(Math.max(Math.trunc(e), 1), a.MAXIMUM_SIZE);
    if (!(r === this.size || this._rf8f9fc25599fa4 == null)) {
      for (; r < this.size;) this._rf8f9fc25599fa4.removeListItemAt(this.size - 1);
      for (; r > this.size;) {
        let t = this._rf8f9fc25599fa4.getListItemAt(0);
        if (t == null) break;
        this._rf8f9fc25599fa4.addListItem(t.clone());
      }
      this.refresh();
    }
  }
  get position() {
    return this._position;
  }
  set position(e) {
    ((this._position = Math.max(0, Math.trunc(e))), this.refresh());
  }
  get mode() {
    return this._mode;
  }
  set mode(e) {
    ((this._mode = e), this.refresh());
  }
  refresh() {
    if (this._rf8f9fc25599fa4 != null)
      for (let e = 0; e < this.size; e++) {
        let r = this._rf8f9fc25599fa4.getListItemAt(e);
        if (r == null) continue;
        let t = !1;
        switch (this._mode) {
          case Ly.const_1394:
            t = e + 1 === this._position;
            break;
          case Ly.PROGRESS:
            t = e < this._position;
            break;
        }
        r.assetUri = `progress_disk_${this._style}${t ? "_on" : "_off"}`;
        let i = r.bitmapData;
        i != null && ((r.width = i.width), (r.height = i.height), (this._rf8f9fc25599fa4.height = i.height));
      }
  }
}
