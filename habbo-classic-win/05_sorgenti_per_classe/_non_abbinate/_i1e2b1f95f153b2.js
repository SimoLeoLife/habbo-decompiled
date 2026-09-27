// Estratto da HabboAirLauncher.deobf.js, riga 376323.

class {
  static {
    n(this, "_i1e2b1f95f153b2");
  }
  _rc865968c2c0d60 = new B();
  _r8358cd089f83d0 = 0;
  _r57b2128e19f190 = 0;
  _raa10aea3766c63 = 0;
  _rb137ea6a8444aa = 0;
  _r924fee20753fd9 = !0;
  _ra70be88ec19669 = n(() => {
    this._r924fee20753fd9 = !0;
  }, "_ra70be88ec19669");
  constructor(e, r, t = 1) {
    ((this._r57b2128e19f190 = e * 1024 * 1024),
      (this._raa10aea3766c63 = r * 1024 * 1024),
      (this._rb137ea6a8444aa = Math.max(0, t * 1024 * 1024)));
  }
  get _rad93e8fcc134d5() {
    return this._r8358cd089f83d0;
  }
  get _r21d8755ff55d63() {
    return this._r57b2128e19f190;
  }
  dispose() {
    let e = this._rc865968c2c0d60.getKeys();
    for (let r of e) (this._rc865968c2c0d60.getValue(r)?._r05a175021ffa66(), this.removeItem(r));
    this._rc865968c2c0d60.dispose();
  }
  compress() {
    if (this._rad93e8fcc134d5 <= this._r21d8755ff55d63) return;
    if (!this._r924fee20753fd9) {
      this._rbe3a2b737c12da();
      return;
    }
    this._r924fee20753fd9 = !1;
    let e = this._rc865968c2c0d60.getValues();
    e.sort((r, t) => t._ra310f172cb4435 - r._ra310f172cb4435);
    for (let r = e.length - 1; r >= 0; r--) {
      let t = e[r];
      if (t._ra310f172cb4435 <= 1) this.removeItem(t.name);
      else break;
    }
    this._rbe3a2b737c12da();
  }
  _r198ea9f0f21815(e) {
    let r = this._rc865968c2c0d60.getValue(e) ?? null;
    if (r == null) return null;
    let t = r.bitmapData;
    return t != null && t.disposed
      ? (this._rc865968c2c0d60.remove(r.name),
        (this._r8358cd089f83d0 -= r._rad93e8fcc134d5),
        r.dispose(),
        null)
      : t;
  }
  _bitmapDataCache(e, r) {
    if (r == null || r.width <= 0 || r.height <= 0 || r.disposed) return;
    let t = this._rc865968c2c0d60.getValue(e) ?? null;
    if (t != null) {
      if (t.bitmapData === r) return;
      let i = t.bitmapData;
      (i != null && (this._r8358cd089f83d0 -= i.width * i.height * 4), (t.bitmapData = r));
    } else this._rc865968c2c0d60.add(e, new NineSplitSprite(r, e, this._ra70be88ec19669));
    ((this._r8358cd089f83d0 += r.width * r.height * 4), (this._r924fee20753fd9 = !0));
  }
  _rbe3a2b737c12da() {
    this._r57b2128e19f190 = Math.min(this._raa10aea3766c63, this._r57b2128e19f190 + this._rb137ea6a8444aa);
  }
  removeItem(e) {
    let r = this._rc865968c2c0d60.getValue(e) ?? null;
    return r == null || r._ra310f172cb4435 > 1
      ? !1
      : (this._rc865968c2c0d60.remove(r.name),
        (this._r8358cd089f83d0 -= r._rad93e8fcc134d5),
        r.dispose(),
        !0);
  }
}
