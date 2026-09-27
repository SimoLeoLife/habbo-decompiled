// Extracted from HabboAirLauncher.deobf.js, line 208868.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/NextLimitedRareCountdownWidget.as
// Obfuscated name: _i994f2e99c17bd8

class a {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "NextLimitedRareCountdownWidget");
  }
  static REFRESH_PERIOD_IN_MILLIS = 30 * 1e3;
  _container = null;
  _r558791a238d0f9 = 0;
  var_2762 = -1;
  _offerId = -1;
  var_422 = "";
  _lastRequestTime = null;
  _r1b76e803eb876e = null;
  get container() {
    return this._container;
  }
  get disposed() {
    return this._container == null;
  }
  dispose() {
    this.disposed ||
      (this._r1b76e803eb876e?.stop(),
      (this._r1b76e803eb876e = null),
      (this._landingView = null),
      (this._container = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("next_ltd_available")),
      this._container != null &&
        ((this._container.findChildByName("get").procedure = this._rcf384904514453),
        (this._container.findChildByName("catalogue_button").procedure = this._rcf384904514453),
        (this._container.visible = !1),
        this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
          new class_2894((e) => {
            this._r03b2939026a844(e);
          }),
        ),
        this._rd2b477367fa56c(null)));
  }
  refresh() {
    (this._lastRequestTime == null || this._lastRequestTime.getTime() + a.REFRESH_PERIOD_IN_MILLIS < Date.now()) &&
      (this._rd2b477367fa56c(null), (this._lastRequestTime = new Date()));
  }
  productDataReady() {
    this.refreshContent();
  }
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  _rd2b477367fa56c = n((e) => {
    (this._landingView?.getBoolean("next.limited.rare.countdown.widget.disabled") ?? !1) ||
      this._landingView?._rf3db13932bfb60?.connection.send(new UnkMessageComposer_0args_7baf13());
  }, "_rd2b477367fa56c");
  refreshContent() {
    if (this.disposed || this._container == null) return;
    let e = this._landingView?.getProductData(this.var_422, this) ?? null;
    (e != null && (this._container.findChildByName("get").caption = e.name),
      this.var_2762 >= 0
        ? ((this._container.visible = !0),
          (this._container.findChildByName("get").visible = !0),
          (this._container.findChildByName("countdown").visible = !1))
        : this._r558791a238d0f9 > 0
          ? ((this._container.visible = !0),
            (this._container.findChildByName("get").visible = !1),
            (this._container.findChildByName("countdown").visible = !0))
          : (this._container.visible = !1),
      this.refreshTimer());
  }
  refreshTimer() {
    let r = this._container?.findChildByName("countdown")?.widget;
    r != null && ((r.seconds = this._r558791a238d0f9), (r.running = !0));
  }
  _rcc601b2adde9c2(e) {
    e <= 0 ||
      (this._r1b76e803eb876e?.stop(),
      (this._r1b76e803eb876e = new UnkEventDispatcherWrapperSubclass_05394e((e + 1) * 1e3, 1)),
      this._r1b76e803eb876e.addEventListener(DeBouncer.addEventListener, this._rd2b477367fa56c),
      this._r1b76e803eb876e.start());
  }
  _r03b2939026a844(e) {
    let r = e.getParser();
    ((this._r558791a238d0f9 = r?._r5d703086ca3460 ?? 0),
      (this.var_2762 = r?.pageId ?? -1),
      (this._offerId = r?.offerId ?? -1),
      (this.var_422 = r?.productType ?? ""),
      this.refreshContent(),
      this._rcc601b2adde9c2(this._r558791a238d0f9));
  }
  _rcf384904514453 = n((e) => {
    e.type === u.CLICK &&
      this.var_2762 >= 0 &&
      (this._landingView?.catalog?._rb54f79cedd3062(
        this.var_2762,
        this._offerId,
        CatalogType.NORMAL,
      ),
      this._landingView?.tracking?.trackGoogle("landingView", "click_goToNextLimitedCatalogPage"));
  }, "_rcf384904514453");
}
