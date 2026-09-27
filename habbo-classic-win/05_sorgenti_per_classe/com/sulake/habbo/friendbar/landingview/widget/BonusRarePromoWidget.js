// Estratto da HabboAirLauncher.deobf.js, riga 206747.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/BonusRarePromoWidget.as
// Nome offuscato: _i9f2dc93aa21f58

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "BonusRarePromoWidget");
  }
  _container = null;
  var_422 = "";
  var_3117 = -1;
  _totalCoinsForBonus = 0;
  var_3770 = 0;
  get container() {
    return this._container;
  }
  get disposed() {
    return this._container == null;
  }
  dispose() {
    this.disposed ||
      (this._landingView?.roomEngine?.events.removeEventListener?.(
        RoomEngineEvent.ROOM_ENGINE_INITIALIZED,
        this.onRoomEngineInitialized,
      ),
      (this._landingView = null),
      (this._container = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("bonus_rare_promo")),
      this._container != null &&
        ((this._container.findChildByName("buy_button").procedure = this._r783110b2c95158),
        (this._container.visible = !1),
        this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
          new class_1841((e) => {
            this.communicationManager(e);
          }),
        ),
        this._landingView?.roomEngine?.events.addEventListener?.(
          RoomEngineEvent.ROOM_ENGINE_INITIALIZED,
          this.onRoomEngineInitialized,
        ),
        this.requestBonusRareInfo()));
  }
  refresh() {
    this.requestBonusRareInfo();
  }
  productDataReady() {
    this.refreshContent();
  }
  imageReady(e, r) {
    this.refreshContent();
  }
  imageFailed(e) {}
  set settings(e) {
    ko.applyCommonWidgetSettings(this._container, e);
  }
  requestBonusRareInfo() {
    this._landingView?._rf3db13932bfb60?.connection?.send(new _i303a4dae2d2a9a());
  }
  onRoomEngineInitialized = n((e) => {
    this.refreshContent();
  }, "onRoomEngineInitialized");
  refreshContent() {
    if (this.disposed || this._container == null) return;
    this._container.visible = this.var_3117 !== -1;
    let e = this._landingView?.getProductData(this.var_422, this) ?? null;
    if (e != null) {
      let r = this._container.findChildByName("promo_image");
      (r != null &&
        (r.assetUri = this._landingView?.getProperty("landing.view.bonus.rare.image.uri") ?? ""),
        (this._container.findChildByName("header").caption =
          this._landingView?.localizationManager?.getLocalizationWithParams(
            "landing.view.bonus.rare.header",
            "",
            "rarename",
            e.name,
            "amount",
            String(this._totalCoinsForBonus),
          ) ?? ""),
        (this._container.findChildByName("status").caption =
          this._landingView?.localizationManager?.getLocalizationWithParams(
            "landing.view.bonus.rare.status",
            "",
            "amount",
            String(this.var_3770),
            "total",
            String(this._totalCoinsForBonus),
          ) ?? ""),
        this.setProgress(this._totalCoinsForBonus - this.var_3770, this._totalCoinsForBonus));
    }
  }
  communicationManager(e) {
    let r = e.getParser();
    ((this.var_422 = r?.productType ?? ""),
      (this.var_3117 = r?.productClassId ?? -1),
      (this._totalCoinsForBonus = r?._r2afa48fbf51a60 ?? 0),
      (this.var_3770 = r?._red9302b82fe887 ?? 0),
      this.refreshContent());
  }
  _r783110b2c95158 = n((e) => {
    e.type === u.CLICK &&
      (this._landingView?.tracking?.trackGoogle("landingView", "click_bonusRarePromoOpenCreditsPage"),
      this._landingView?.catalog?._r6e81894a74658f?.());
  }, "_r783110b2c95158");
  setProgress(e, r) {
    if (this._container == null || r <= 0) return;
    let t = this._container.findChildByName("bar_a_bkg").width,
      i = this._container.findChildByName("bar_a_bkg").x,
      s = (e / r) * t;
    ((this._container.findChildByName("bar_a_c").width = s),
      (this._container.findChildByName("bar_a_r").x = s + i));
  }
}
