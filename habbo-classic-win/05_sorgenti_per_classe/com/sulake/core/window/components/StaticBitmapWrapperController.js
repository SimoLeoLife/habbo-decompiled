// Estratto da HabboAirLauncher.deobf.js, riga 131165.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/StaticBitmapWrapperController.as
// Nome offuscato: _i88e9260aca344f

class extends BitmapDataController {
  static {
    n(this, "StaticBitmapWrapperController");
  }
  _r003bfb217aa89a = "";
  _bitmapDataOwned = !1;
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    ((this._r003bfb217aa89a = ""),
      (this._bitmapDataOwned = !1),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  dispose() {
    this._disposed || (this._bitmapDataOwned && this._bitmapData?.dispose(), super.dispose());
  }
  get assetUri() {
    return this._r003bfb217aa89a;
  }
  set assetUri(e) {
    if (this._r003bfb217aa89a !== e) {
      if (((this._r003bfb217aa89a = e), e == null || e.length <= 0)) {
        (this._bitmapDataOwned && this._bitmapData?.dispose(),
          (this._bitmapData = null),
          (this._bitmapDataOwned = !1),
          this._context.invalidate(this, null, class_2902.REDRAW));
        return;
      }
      this._context._r2a8cd2fcc65663().retrieveAsset(this._r003bfb217aa89a, this);
    }
  }
  receiveAsset(e, r) {
    if (
      this._disposed ||
      !this._context._r2a8cd2fcc65663().isSameAsset(this._r003bfb217aa89a, r) ||
      !(e instanceof Qt)
    )
      return;
    let t = e,
      i = t.content;
    if (i instanceof A) {
      if (this._bitmapData !== i) {
        (this._bitmapDataOwned && this._bitmapData?.dispose(), (this._bitmapDataOwned = !1));
        let s = t.rectangle;
        (i.width === s.width && i.height === s.height
          ? (this._bitmapData = i)
          : ((this._bitmapData = new A(s.width, s.height)),
            this._bitmapData.copyPixels(i, s, new E(0, 0)),
            (this._bitmapDataOwned = !0)),
          this._context.invalidate(this, null, class_2902.REDRAW));
      }
      this.fitSize();
    }
  }
  clone() {
    let e = super.clone();
    return (
      (e._bitmapData = this._bitmapDataOwned
        ? (this._bitmapData?.clone() ?? null)
        : this._bitmapData),
      (e._r003bfb217aa89a = this._r003bfb217aa89a),
      (e._bitmapDataOwned = this._bitmapDataOwned),
      e
    );
  }
  get properties() {
    let e = [...super.properties];
    return (e.unshift(this.createProperty(class_3436.ASSET_URI, this._r003bfb217aa89a)), e);
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436.ASSET_URI:
          this.assetUri = r.value;
          break;
      }
    super.properties = e;
  }
}
