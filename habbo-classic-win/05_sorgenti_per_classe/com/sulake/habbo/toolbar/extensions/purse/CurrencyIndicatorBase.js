// Extracted from HabboAirLauncher.deobf.js, line 342428.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/purse/CurrencyIndicatorBase.as
// Obfuscated name: _i7ec5bd3102cda2

class a {
  static {
    n(this, "CurrencyIndicatorBase");
  }
  static const_1401 = 0;
  static const_1410 = 1;
  static const_345 = 0.025;
  _window = null;
  _windowManager;
  _assets;
  _disposed = !1;
  _rdc5a4e088fc790 = null;
  _r731bf7097ad74c = 0;
  _rd588e1ed76e19b = 0;
  _rd61a6e49716f6d = "";
  _r6abfd093ceb4c9 = [];
  _r3ec4f4e70ae9e2 = 0;
  var_5064 = null;
  _rac1c6910fdc186 = a.const_1401;
  _r7b7d0e1fc49041 = 0;
  _rcaf99c2dce245b = null;
  _r67f329cb7abfe7;
  _r13e7d4c6f6240c = 0;
  _r6fe43f09947d01 = 0;
  _rad85ea85004aff = 0;
  set _r49d167ac2cb5e2(e) {
    this._r731bf7097ad74c = e;
  }
  set _r761b35156780ed(e) {
    this._rd588e1ed76e19b = e;
  }
  set textElementName(e) {
    this._rd61a6e49716f6d = e;
  }
  set iconAnimationDelay(e) {
    this._r3ec4f4e70ae9e2 = e;
  }
  set amountZeroText(e) {
    this.var_5064 = e;
  }
  get amountZeroText() {
    return this.var_5064;
  }
  set iconAnimationSequence(e) {
    this._r6abfd093ceb4c9 = [...e];
  }
  constructor(e, r) {
    ((this._windowManager = e),
      (this._assets = r),
      (this._r67f329cb7abfe7 = new UnkEventDispatcherWrapperSubclass_05394e(40)),
      this._r67f329cb7abfe7.addEventListener(DeBouncer.addEventListener, this._r9af2f3cef65336));
  }
  get window() {
    if (this._window == null) throw new Error("Currency indicator window is not available.");
    return this._window;
  }
  dispose() {
    this._disposed ||
      (this._r67f329cb7abfe7?.stop(),
      (this._r67f329cb7abfe7 = null),
      this._rcaf99c2dce245b?.stop(),
      (this._rcaf99c2dce245b = null),
      (this._r6abfd093ceb4c9 = []),
      this._window?.dispose(),
      (this._window = null),
      (this._windowManager = null),
      (this._assets = null),
      (this._disposed = !0));
  }
  registerUpdateEvents(e) {}
  _r924c497b99bcc8(e) {}
  createWindow(e, r) {
    let t = this._assets?.getAssetByName(e);
    if (
      t != null &&
      this._windowManager != null &&
      ((this._window = this._windowManager.buildFromXML(t.content, 1)),
      this._window != null)
    ) {
      (this._window.addEventListener(u.CLICK, this._r924c497b99bcc8),
        this._window.addEventListener(u.OVER, this._r866744f6c18eb9),
        this._window.addEventListener(u.OUT, this.onContainerMouseOut));
      let i = [];
      this._window.groupChildrenWithTag("ICON", i, -1) === 1 &&
        ((this._rdc5a4e088fc790 = i[0]), r != null && this._re0d48308335439(r));
    }
  }
  _r44660f36074c47(e) {
    ((this._rac1c6910fdc186 = e),
      this._rdc5a4e088fc790 != null &&
        this._r6abfd093ceb4c9.length > 0 &&
        ((this._r7b7d0e1fc49041 =
          this._rac1c6910fdc186 === a.const_1401 ? 0 : this._r6abfd093ceb4c9.length - 1),
        (this._rcaf99c2dce245b = new UnkEventDispatcherWrapperSubclass_05394e(this._r3ec4f4e70ae9e2, this._r6abfd093ceb4c9.length)),
        this._rcaf99c2dce245b.addEventListener(DeBouncer.addEventListener, this._r0c7da324149cb3),
        this._rcaf99c2dce245b.addEventListener(DeBouncer._rf33144eac61595, this._rb62b9bb802b1c4),
        this._rcaf99c2dce245b.start(),
        this._r0c7da324149cb3(null)));
  }
  setAmount(e, r = -1) {
    this.setText(e.toString());
  }
  setText(e) {
    let r = this._window?.findChildByName(this._rd61a6e49716f6d);
    r != null && (r.caption = e);
  }
  setTextUnderline(e) {
    let r = this._window?.findChildByName(this._rd61a6e49716f6d);
    r != null && (r.underline = e);
  }
  animateChange(e, r) {
    ((this._r13e7d4c6f6240c = 0), (this._r6fe43f09947d01 = e), (this._rad85ea85004aff = r));
    let t = this._window?.findChildByName("change");
    (t != null && (t.caption = `${r > e ? "+" : ""}${(r - e).toString()}`),
      this._r67f329cb7abfe7?.start(),
      this._r9af2f3cef65336(null));
  }
  _r0c7da324149cb3 = n((e) => {
    this._rdc5a4e088fc790 != null &&
      this._r6abfd093ceb4c9.length > 0 &&
      (this._re0d48308335439(this._r6abfd093ceb4c9[this._r7b7d0e1fc49041]),
      this._rac1c6910fdc186 === a.const_1401
        ? (this._r7b7d0e1fc49041 = Math.min(this._r7b7d0e1fc49041 + 1, this._r6abfd093ceb4c9.length - 1))
        : (this._r7b7d0e1fc49041 = Math.max(this._r7b7d0e1fc49041 - 1, 0)));
  }, "_r0c7da324149cb3");
  _rb62b9bb802b1c4 = n((e) => {
    this._r6abfd093ceb4c9.length > 0 && this._re0d48308335439(this._r6abfd093ceb4c9[0]);
  }, "_rb62b9bb802b1c4");
  _re0d48308335439(e) {
    this._rdc5a4e088fc790 != null && (this._rdc5a4e088fc790.assetUri = e);
  }
  _r866744f6c18eb9 = n((e) => {
    let r = this._window?.findChildByTag("BGCOLOR");
    r != null && (r.color = this._r731bf7097ad74c);
  }, "_r866744f6c18eb9");
  onContainerMouseOut = n((e) => {
    let r = this._window?.findChildByTag("BGCOLOR");
    r != null && (r.color = this._rd588e1ed76e19b);
  }, "onContainerMouseOut");
  _r9af2f3cef65336 = n((e) => {
    this.setAmount(
      Math.trunc(
        In.lerp(
          Math.max(0, this._r13e7d4c6f6240c * 2 - 1),
          this._r6fe43f09947d01,
          this._rad85ea85004aff,
        ),
      ),
    );
    let r = this._window?.findChildByName("change_overlay");
    if (r == null || this._window == null) return;
    let t = Math.pow(this._r13e7d4c6f6240c - 0.5, 3) * 4 + 0.5;
    ((r.visible = !0),
      (r.blend = 1 - Math.abs(0.5 - t) * 2),
      (r.x = In.lerp(t, 0, this._window.width - r.width)),
      (this._r13e7d4c6f6240c += a.const_345),
      this._r13e7d4c6f6240c >= 1 &&
        ((r.visible = !1), this._r67f329cb7abfe7?.stop(), this.setAmount(this._rad85ea85004aff)));
  }, "_r9af2f3cef65336");
}
