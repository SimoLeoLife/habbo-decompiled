// Estratto da HabboAirLauncher.deobf.js, riga 268019.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/premium/RewardTrackPremiumPurchaseConfirmationView.as
// Nome offuscato: _i0518797a9eca25

class a {
  constructor(e, r) {
    this.var_63 = e;
    this.var_292 = r;
    ((this._window = this.var_63.windowManager.buildFromXML(
      rr(
        this.var_63.assets.getAssetByName("reward_track_premium_purchase_confirmation_xml").content,
      ),
      th.DESKTOP_WINDOW_LAYER,
    )),
      this._window.enableLookupCache(),
      this.closeButton.addEventListener(u.CLICK, this._r91d64548efff8e),
      this.cancelButton.addEventListener(u.CLICK, this._r91d64548efff8e),
      this.confirmButton.addEventListener(u.CLICK, this.onConfirmClicked),
      this.initializeUI());
  }
  static {
    n(this, "RewardTrackPremiumPurchaseConfirmationView");
  }
  static RETRY_ENABLE_DELAY_MS = 500;
  _window;
  var_512 = null;
  _r4622624f98333e = !1;
  _disposed = !1;
  initializeUI() {
    ((this.boostBenefitText.text = this.var_63.localizationManager.getLocalizationWithParams(
      "reward_track.premium.confirm.benefit.boost",
      "",
      "percent",
      String(Math.round((this.var_292.taskPointsBoost - 1) * 100)),
    )),
      (this.instantPointsBenefitText.text = this.var_63.localizationManager.getLocalizationWithParams(
        "reward_track.premium.confirm.benefit.instant_points",
        "",
        "points",
        String(this.var_292.instantPoints),
      )),
      (this.boostBenefitRow.visible = this.var_292.taskPointsBoost > 1),
      (this.rewardsBenefitRow.visible = this.var_292._r776e2254f1de68),
      (this.instantPointsBenefitRow.visible = this.var_292.instantPoints > 0),
      (this.tasksBenefitRow.visible = this.var_292._rb0aa96ab9d9788),
      (this.levelsBenefitRow.visible = this.var_292._r0b0accb7e3023d),
      (this.priceCreditsText.text = String(this.var_292.costCredits)),
      (this.priceDiamondsText.text = String(this.var_292.costDiamonds)),
      (this.priceCreditsText.visible = this.var_292.costCredits > 0),
      (this.creditsIcon.visible = this.var_292.costCredits > 0),
      (this.priceDiamondsText.visible = this.var_292.costDiamonds > 0),
      (this.diamondsIcon.visible = this.var_292.costDiamonds > 0),
      (this.pricePlusText.visible =
        this.var_292.costCredits > 0 && this.var_292.costDiamonds > 0));
  }
  show() {
    if (this._window.parent === null) {
      let e = this.var_63.windowManager.getDesktop(th.DESKTOP_WINDOW_LAYER);
      e !== null && e.addChild(this._window);
    }
    (this._window.center(), this._window.activate());
  }
  purchaseFailed() {
    (this.var_512 !== null &&
      (this.var_512.stop(),
      this.var_512.removeEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f)),
      (this.var_512 = new _i05394ecc0c0c4d(a.RETRY_ENABLE_DELAY_MS, 1)),
      this.var_512.addEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f),
      this.var_512.start());
  }
  onConfirmClicked = n(() => {
    (this._rc8e4cde60efbe4(!0), this.var_63._r5f3759470c78bf(this.var_292.id));
  }, "onConfirmClicked");
  _rb5487cd997da9f = n(() => {
    (this.var_512.removeEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f),
      (this.var_512 = null),
      this._rc8e4cde60efbe4(!1));
  }, "_rb5487cd997da9f");
  _r91d64548efff8e = n((e) => {
    e.type !== u.CLICK || this._r4622624f98333e || this.var_63.closePremiumPurchaseConfirmation();
  }, "_r91d64548efff8e");
  _rc8e4cde60efbe4(e) {
    if (((this._r4622624f98333e = e), this._r4622624f98333e)) {
      (this.confirmButton.disable(), this.cancelButton.disable(), this.closeButton.disable());
      return;
    }
    (this.confirmButton.enable(), this.cancelButton.enable(), this.closeButton.enable());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.var_512 !== null &&
        (this.var_512.stop(),
        this.var_512.removeEventListener(DeBouncer._rf33144eac61595, this._rb5487cd997da9f),
        (this.var_512 = null)),
      this.closeButton.removeEventListener(u.CLICK, this._r91d64548efff8e),
      this.cancelButton.removeEventListener(u.CLICK, this._r91d64548efff8e),
      this.confirmButton.removeEventListener(u.CLICK, this.onConfirmClicked),
      this._window.parent !== null &&
        this._window.parent.removeChild(this._window),
      this._window.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this.var_292 = null));
  }
  get disposed() {
    return this._disposed;
  }
  get closeButton() {
    return this._window.findChildByName("header_button_close");
  }
  get benefitsList() {
    return this._window.findChildByName("benefits");
  }
  get boostBenefitRow() {
    return this.benefitsList.findChildByName("benefit_boost_row");
  }
  get boostBenefitText() {
    return this.benefitsList.findChildByName("benefit_boost_txt");
  }
  get rewardsBenefitRow() {
    return this.benefitsList.findChildByName("benefit_rewards_row");
  }
  get rewardsBenefitText() {
    return this.benefitsList.findChildByName("benefit_rewards_txt");
  }
  get instantPointsBenefitRow() {
    return this.benefitsList.findChildByName("benefit_instant_points_row");
  }
  get instantPointsBenefitText() {
    return this.benefitsList.findChildByName("benefit_instant_points_txt");
  }
  get tasksBenefitRow() {
    return this.benefitsList.findChildByName("benefit_tasks_row");
  }
  get tasksBenefitText() {
    return this.benefitsList.findChildByName("benefit_tasks_txt");
  }
  get levelsBenefitRow() {
    return this.benefitsList.findChildByName("benefit_levels_row");
  }
  get levelsBenefitText() {
    return this.benefitsList.findChildByName("benefit_levels_txt");
  }
  get priceCreditsText() {
    return this._window.findChildByName("price_credits");
  }
  get pricePlusText() {
    return this._window.findChildByName("plus_txt");
  }
  get priceDiamondsText() {
    return this._window.findChildByName("price_diamonds");
  }
  get creditsIcon() {
    return this._window.findChildByName("credits_icon");
  }
  get diamondsIcon() {
    return this._window.findChildByName("diamonds_icon");
  }
  get cancelButton() {
    return this._window.findChildByName("cancel_button");
  }
  get confirmButton() {
    return this._window.findChildByName("confirm_button");
  }
}
