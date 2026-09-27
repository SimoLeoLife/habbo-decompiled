// Extracted from HabboAirLauncher.deobf.js, line 174364.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/subviews/CollectibleProductPreviewer.as
// Obfuscated name: _i2ebfc4cefa1528

class {
  constructor(e, r, t, i, s = null, o = null, d = null, c = null) {
    this._rbfdf9ffb0853b2 = e;
    this._rb9df81e2dd6c41 = r;
    this._rf03fab276b27b9 = t;
    this._r55c902b1196505 = i;
    this.var_2244 = s;
    this._r2765fcd3b05779 = o;
    (d != null && c != null && (this._r507e47cbf50e4c = new r8e(d, c)), this.clearPreviewer());
  }
  static {
    n(this, "CollectibleProductPreviewer");
  }
  var_2128 = -1;
  _r507e47cbf50e4c = null;
  _disposed = !1;
  clearPreviewer() {
    ((this.var_2128 = -1),
      this.var_2244 != null && (this.var_2244.visible = !1),
      this._rbfdf9ffb0853b2 != null && (this._rbfdf9ffb0853b2.visible = !1),
      this._rb9df81e2dd6c41 != null && (this._rb9df81e2dd6c41.visible = !1),
      this._r2765fcd3b05779 != null && (this._r2765fcd3b05779.visible = !1),
      this._rf03fab276b27b9 != null && (this._rf03fab276b27b9.visible = !1),
      this._r507e47cbf50e4c != null && (this._r507e47cbf50e4c.visible = !1),
      this._r55c902b1196505 != null && (this._r55c902b1196505.visible = !1));
  }
  set imageResult(e) {
    (this.clearPreviewer(),
      this._rbfdf9ffb0853b2 != null &&
        e != null &&
        ((this.var_2128 = e.id), this.setPreviewImage(e.data)));
  }
  set _rafdbd40a6f2399(e) {
    this.clearPreviewer();
    let r = this.var_2244?.widget;
    this.var_2244 == null || r == null || ((this.var_2244.visible = !0), (r.figure = e));
  }
  set _r79242dc896c7f5(e) {
    this.clearPreviewer();
    let r = this._rb9df81e2dd6c41?.widget;
    this._rb9df81e2dd6c41 == null || r == null || ((this._rb9df81e2dd6c41.visible = !0), (r.badgeId = e));
  }
  set _r44ea08ed7186b6(e) {
    this.clearPreviewer();
    let r = this._rf03fab276b27b9?.widget;
    this._rf03fab276b27b9 == null || r == null || ((this._rf03fab276b27b9.visible = !0), (r.figure = e));
  }
  _rd7fde06780d033(e, r) {
    (this.clearPreviewer(),
      this._r507e47cbf50e4c != null &&
        ((this._r507e47cbf50e4c.visible = !0), this._r507e47cbf50e4c.update(e, r)));
  }
  setUnknownImage() {
    (this.clearPreviewer(), this._r55c902b1196505 != null && (this._r55c902b1196505.visible = !0));
  }
  avatarRenderManager() {
    (this.clearPreviewer(), this._r2765fcd3b05779 != null && (this._r2765fcd3b05779.visible = !0));
  }
  imageReady(e, r) {
    this.var_2128 === e && this._rbfdf9ffb0853b2 != null && this.setPreviewImage(r);
  }
  imageFailed(e) {}
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._r507e47cbf50e4c?.dispose(),
      (this._r507e47cbf50e4c = null),
      (this.var_2128 = -1),
      (this._rbfdf9ffb0853b2 = null),
      (this._rb9df81e2dd6c41 = null),
      (this._rf03fab276b27b9 = null),
      (this._r55c902b1196505 = null),
      (this.var_2244 = null),
      (this._r2765fcd3b05779 = null));
  }
  get disposed() {
    return this._disposed;
  }
  setPreviewImage(e) {
    if (this._rbfdf9ffb0853b2 != null) {
      if (e == null) {
        this._rbfdf9ffb0853b2.visible = !1;
        return;
      }
      ((this._rbfdf9ffb0853b2.bitmap = e.clone()), (this._rbfdf9ffb0853b2.visible = !0));
    }
  }
}
