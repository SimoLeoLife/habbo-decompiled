// Estratto da HabboAirLauncher.deobf.js, riga 221582.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/utils/SnowWarAnimatedWindowElement.as
// Nome offuscato: _i96e0e29f3f6515

class {
  constructor(e, r, t, i, s = 100, o = !1) {
    this.fillRect = r;
    for (let d = 1; d <= i; d++)
      this._frames.push(e.getAssetByName(`${t}${d}`)?.content ?? new A(1, 1, !0, 0));
    if (o)
      for (let d = i - 1; d > 1; d--)
        this._frames.push(e.getAssetByName(`${t}${d}`)?.content ?? new A(1, 1, !0, 0));
    (this.update(),
      (this.var_382 = new _i05394ecc0c0c4d(s)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this._ra94988f96f2fa9),
      this.var_382.start());
  }
  static {
    n(this, "SnowWarAnimatedWindowElement");
  }
  _frames = [];
  _r3b84b259e210d9 = 0;
  var_382;
  _disposed = !1;
  dispose() {
    this._disposed ||
      (this.var_382?.removeEventListener(DeBouncer.addEventListener, this._ra94988f96f2fa9),
      this.var_382?.stop(),
      (this.var_382 = null),
      this.fillRect?.bitmap != null &&
        (this.fillRect.bitmap.fillRect(this.fillRect.bitmap.rect, 0),
        this.fillRect.invalidate()),
      (this.fillRect = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _ra94988f96f2fa9 = n((e) => {
    this.update();
  }, "_ra94988f96f2fa9");
  update() {
    if (this.fillRect == null || this._frames.length === 0) return;
    this._r3b84b259e210d9 = (this._r3b84b259e210d9 + 1) % this._frames.length;
    let e = this._frames[this._r3b84b259e210d9];
    ((this.fillRect.bitmap ??= new A(
      this.fillRect.width,
      this.fillRect.height,
      !0,
      0,
    )),
      this.fillRect.bitmap.fillRect(this.fillRect.bitmap.rect, 0),
      this.fillRect.bitmap.copyPixels(
        e,
        e.rect,
        new E((this.fillRect.width - e.width) / 2, (this.fillRect.height - e.height) / 2),
        null,
        null,
        !1,
      ),
      this.fillRect.invalidate());
  }
}
