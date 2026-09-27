// Extracted from HabboAirLauncher.deobf.js, line 156818.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ie651c9eb502c8d

class extends Sprite {
  static {
    n(this, "UnkSpriteSubclass_e651c9");
  }
  _r802e8e2670aef1 = null;
  var_798 = null;
  _rb05f8efcb8abe7 = null;
  var_1271 = !1;
  constructor() {
    (super(),
      this.addEventListener(M._scrollBar, this.ChatHistoryScrollBar),
      this.addEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996));
  }
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    if (!this.var_1271) {
      for (
        this.var_1271 = !0,
          this.removeEventListener(M._scrollBar, this.ChatHistoryScrollBar),
          this.removeEventListener(M._r4b0396f57c9367, this._r8ab2e311a50996);
        this.numChildren > 0;
      )
        this.removeChildAt(0);
      (this._r802e8e2670aef1?.dispose(),
        (this._r802e8e2670aef1 = null),
        (this.var_798 = null),
        (this._rb05f8efcb8abe7 = null));
    }
  }
  resize() {
    if (this.stage == null || this.var_798 == null || this._rb05f8efcb8abe7 == null) return;
    let e = Math.max(1, Math.ceil(this.stage.stageWidth)),
      r = Math.max(1, Math.ceil(this.stage._rcc0ac91bd808af));
    ((this.var_798.bitmapData = _iadff9b85a91cfe(e, r, 809599, 801381)),
      (this._rb05f8efcb8abe7.bitmapData =
        this._r802e8e2670aef1 != null ? _ia1bb8c9834aabe(e, r, this._r802e8e2670aef1) : null));
  }
  ChatHistoryScrollBar = n((e) => {
    this.var_798 == null &&
      ((this._r802e8e2670aef1 = _i4406f2f280a16f("hitchTile_png")),
      (this.var_798 = new UnkClass_3a5c6f()),
      (this._rb05f8efcb8abe7 = new UnkClass_3a5c6f()),
      this.addChild(this.var_798),
      this.addChild(this._rb05f8efcb8abe7),
      this.resize());
  }, "ChatHistoryScrollBar");
  _r8ab2e311a50996 = n((e) => {}, "_r8ab2e311a50996");
}
