// Extracted from HabboAirLauncher.deobf.js, line 33564.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3a5c6f457acdad

class extends Uc {
  static {
    n(this, "UnkClass_3a5c6f");
  }
  _ra8ca9027c7f249;
  _r0ed1f38fce0795 = null;
  _r2dca5e7a2d4a8b = !1;
  _r6c5b4840fd8a96 = "always";
  constructor(e = null) {
    let r = new Jt();
    (super(r), (this._ra8ca9027c7f249 = r), (this._ra8ca9027c7f249.roundPixels = !0), (this.bitmapData = e));
  }
  get bitmapData() {
    return this._r0ed1f38fce0795;
  }
  set bitmapData(e) {
    ((this._r0ed1f38fce0795 = e),
      (this._ra8ca9027c7f249.texture = e?.texture ?? Texture.EMPTY),
      this._rf0440bc21355f5());
  }
  get smoothing() {
    return this._r2dca5e7a2d4a8b;
  }
  set smoothing(e) {
    ((this._r2dca5e7a2d4a8b = e), this._rf0440bc21355f5());
  }
  _rf0440bc21355f5() {
    let e = this._ra8ca9027c7f249.texture.source;
    e != null && (e.scaleMode = this._r2dca5e7a2d4a8b ? "linear" : "nearest");
  }
}
