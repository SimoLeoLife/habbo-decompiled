// Extracted from HabboAirLauncher.deobf.js, line 209151.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/SafetyQuizPromoWidget.as
// Obfuscated name: _i0115def2a60883

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "SafetyQuizPromoWidget");
  }
  _container = null;
  _disposed = !1;
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("safety_quiz_promo")),
      this._container?.addEventListener(u.CLICK, this._r20ea11924b9f0f),
      this.refresh());
  }
  refresh() {
    if (this._container != null) {
      let r = this._container.findChildByName("avatar")?.widget;
      r != null && (r.figure = this._landingView?.sessionDataManager?.figure ?? "");
    }
  }
  get container() {
    return this._container;
  }
  dispose() {
    this._disposed ||
      (this._container?.dispose(),
      (this._container = null),
      (this._landingView = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _r20ea11924b9f0f = n((e) => {
    e.type === u.CLICK && this._landingView?.habboHelp?._r572a5ffd9c1afd();
  }, "_r20ea11924b9f0f");
}
