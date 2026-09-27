// Extracted from HabboAirLauncher.deobf.js, line 200296.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/ChatViewController.as
// Obfuscated name: _i2fa0866e7d5ae4

class {
  constructor(e, r, t) {
    this.var_82 = e;
    this._pulldownDisplayObject = r;
    this._r4e8aa4b57a9156 = t;
    ((this._r09cbb15112ada9 = this._pulldownDisplayObject.rootDisplayObject),
      (this._pulldown = this._r4e8aa4b57a9156.rootDisplayObject),
      (this._rootDisplayObject = new Sprite()),
      (this._rootDisplayObject.usesExclusiveLauncherDisplayMouseBridge = () => !0),
      (this._rootDisplayObject.shouldPropagateExclusiveLauncherDisplayMouseEvent = (i, s, o) =>
        this._rfa15a758742b4d(s, o)),
      this._rootDisplayObject.addChild(this._r09cbb15112ada9),
      this._rootDisplayObject.addChild(this._pulldown),
      this._rootDisplayObject.addEventListener(M._scrollBar, this.onAddedToStage));
  }
  static {
    n(this, "ChatViewController");
  }
  _rootDisplayObject;
  _r34b9dbda39b609 = null;
  _r09cbb15112ada9;
  _pulldown;
  onAddedToStage = n((e) => {
    this._rootDisplayObject?.stage != null &&
      ((this._r34b9dbda39b609 = this._rootDisplayObject.stage),
      this._r34b9dbda39b609.addEventListener(M.RESIZE, this._r19531548fe469e),
      this._r4e8aa4b57a9156.resize(
        this._r34b9dbda39b609.stageWidth,
        this._r34b9dbda39b609._rcc0ac91bd808af,
      ),
      this.var_82.registerUpdateReceiver(this._r4e8aa4b57a9156, 200));
  }, "onAddedToStage");
  _r19531548fe469e = n((e) => {
    this._r34b9dbda39b609 != null &&
      (this._r4e8aa4b57a9156.resize(
        this._r34b9dbda39b609.stageWidth,
        this._r34b9dbda39b609._rcc0ac91bd808af,
      ),
      this._pulldownDisplayObject.resize(
        this._r34b9dbda39b609.stageWidth,
        this._r34b9dbda39b609._rcc0ac91bd808af,
      ));
  }, "_r19531548fe469e");
  dispose() {
    this._rootDisplayObject != null &&
      (this.var_82.removeUpdateReceiver(this._r4e8aa4b57a9156),
      this._r34b9dbda39b609?.removeEventListener(M.RESIZE, this._r19531548fe469e),
      this._pulldown?.parent === this._rootDisplayObject &&
        this._rootDisplayObject.removeChild(this._pulldown),
      this._r09cbb15112ada9?.parent === this._rootDisplayObject &&
        this._rootDisplayObject.removeChild(this._r09cbb15112ada9),
      this._rootDisplayObject.removeEventListener(M._scrollBar, this.onAddedToStage),
      (this._rootDisplayObject = null),
      (this._pulldown = null),
      (this._r09cbb15112ada9 = null),
      (this._r34b9dbda39b609 = null));
  }
  get disposed() {
    return this._rootDisplayObject == null;
  }
  get rootDisplayObject() {
    return this._rootDisplayObject;
  }
  _rfa15a758742b4d(e, r) {
    return _i362ae199666cfb(this.var_82.windowManager, e, r, Utr);
  }
}
