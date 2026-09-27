// Extracted from HabboAirLauncher.deobf.js, line 131334.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/components/class_2116.as
// Obfuscated name: _i78f91090da4435

class extends BitmapDataController {
  static {
    n(this, "class_2116");
  }
  _rff1c068b87c1dd = !1;
  _r3e7f2d9124dd31 = "";
  get bitmap() {
    return this._bitmapData;
  }
  set bitmap(e) {
    (this._rff1c068b87c1dd &&
      this._bitmapData &&
      e !== this._bitmapData &&
      this._bitmapData.dispose(),
      (this._bitmapData = e),
      this.fitSize(),
      this._context.invalidate(this, null, class_2902.REDRAW));
  }
  get bitmapData() {
    return this.bitmap;
  }
  set bitmapData(e) {
    this.bitmap = e;
  }
  get bitmapAssetName() {
    return this._r3e7f2d9124dd31;
  }
  set bitmapAssetName(e) {
    this._r3e7f2d9124dd31 = e;
  }
  get disposesBitmap() {
    return this._rff1c068b87c1dd;
  }
  set disposesBitmap(e) {
    this._rff1c068b87c1dd = e;
  }
  constructWindow(e, r, t, i, s, o, d, c = null, f = null, l = null, b = 0, _ = "") {
    let h = s._rf5e87151b3d9ca().getThemeManager()._r421a2291c74c01(t);
    ((this._rff1c068b87c1dd = !!h.get(class_3436.HANDLE_BITMAP_DISPOSING).value),
      super.constructWindow(e, r, t, i, s, o, d, c, f, l, b, _));
  }
  clone() {
    let e = super.clone();
    return (
      (e._bitmapData =
        this._rff1c068b87c1dd && this._bitmapData
          ? this._bitmapData.clone()
          : this._bitmapData),
      (e._rff1c068b87c1dd = this._rff1c068b87c1dd),
      (e._r3e7f2d9124dd31 = this._r3e7f2d9124dd31),
      e
    );
  }
  dispose() {
    (this._bitmapData &&
      (this._rff1c068b87c1dd && this._bitmapData.dispose(), (this._bitmapData = null)),
      super.dispose());
  }
  get properties() {
    let e = [...super.properties];
    return (
      e.unshift(this.createProperty(class_3436.HANDLE_BITMAP_DISPOSING, this._rff1c068b87c1dd)),
      e.unshift(this.createProperty(class_3436.BITMAP_ASSET_NAME, this._r3e7f2d9124dd31)),
      e
    );
  }
  set properties(e) {
    for (let r of e)
      switch (r.key) {
        case class_3436.HANDLE_BITMAP_DISPOSING:
          this._rff1c068b87c1dd = r.value;
          break;
        case class_3436.BITMAP_ASSET_NAME:
          this._r3e7f2d9124dd31 = r.value;
          break;
      }
    super.properties = e;
  }
}
