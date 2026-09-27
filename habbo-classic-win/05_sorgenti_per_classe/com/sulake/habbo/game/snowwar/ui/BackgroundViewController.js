// Extracted from HabboAirLauncher.deobf.js, line 222345.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/ui/BackgroundViewController.as
// Obfuscated name: _ic04843316a0c4b

class {
  constructor(e) {
    this._rc48cb7ca67aee6 = e;
  }
  static {
    n(this, "BackgroundViewController");
  }
  _disposed = !1;
  _background = null;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    (this._background?.dispose(), (this._background = null), (this._disposed = !0));
  }
  get background() {
    return (this._background == null && this.createView(), this._background);
  }
  createView() {
    let e = this._rc48cb7ca67aee6.windowManager?.getDesktop(0);
    ((this._background = je.createWindow("snowwar_loading_background_xml", 1)),
      !(e == null || this._background == null) &&
        ((this._background.width = e.width),
        (this._background.height = e.height),
        e.addChildAt(this._background, 0),
        this.setBitmap("bg_sky", "sky", this._background),
        this.setBitmap("bg_sunshine", "sunshine", this._background),
        this.setBitmap("bg_vista_1", "vista_1", this._background, !0),
        this.setBitmap("bg_vista_2", "vista_2", this._background, !0),
        this.setBitmap("bg_vista_3", "vista_3", this._background, !0)));
  }
  setBitmap(e, r, t, i = !1) {
    let s = this._rc48cb7ca67aee6.assets?.getAssetByName(e),
      o = t.findChildByName(r),
      d = s?.content;
    if (!(o == null || d == null)) {
      if (i) {
        let c = new A(t.width, d.height, !0, 0);
        for (let f = 0; f < Math.floor(t.width / d.width) + 1; f++)
          c.copyPixels(d, d.rect, new E(f * d.width, 0));
        o.bitmap = c;
        return;
      }
      ((o.bitmap = d), (o.disposesBitmap = !1));
    }
  }
}
