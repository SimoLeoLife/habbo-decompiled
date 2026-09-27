// Estratto da HabboAirLauncher.deobf.js, riga 178165.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconRewardPanelView.as
// Nome offuscato: _ib4754dfcb17f97

class {
  constructor(e, r, t) {
    this.var_63 = e;
    this._window = r;
    this.var_2376 = t;
    ((this.rewardHabbicon.disposesBitmap = !0),
      this.rewardActionButton.addEventListener(u.CLICK, this._r370da35111cede),
      this.rewardBuyButton?.addEventListener(u.CLICK, this._r6bac604148ebe6),
      this.var_2376 != null &&
        this.rewardTile != null &&
        ((this._r31b0b58ccb35d4 =
          this.rewardHabbiconFrame != null ? this.rewardHabbiconFrame : this.rewardHabbicon),
        this._r31b0b58ccb35d4.addEventListener(u.CLICK, this._re07cdec0054145)));
  }
  static {
    n(this, "HabbiconRewardPanelView");
  }
  var_304 = null;
  _r31b0b58ccb35d4 = null;
  _disposed = !1;
  refresh(e, r) {
    if (
      ((this.var_304 = e),
      this.var_304 == null || this.var_304.rewardHabbicon == null)
    ) {
      ((this.rewardPanel.visible = !1),
        this.rewardBuyContainer != null && (this.rewardBuyContainer.visible = !1),
        (this.rewardActionButton.visible = !1),
        (this.rewardActionButton.caption = "${habbicon_reward.claim}"),
        WindowUtils.disableSection(this.rewardActionButton, !0),
        this.clearRewardBitmap());
      return;
    }
    let t = this.var_304.rewardHabbicon,
      i = this._r4c9dffa8125986(t),
      s = this._r5372943ff485a3(t),
      o = this.isRewardBuyable(this.var_304, t),
      d = s
        ? this.var_63.localizationManager.getLocalization(
            "habbicon_book.reward.claimable",
            "Reward ready to claim.",
          )
        : i
          ? this.var_63.localizationManager.getLocalization(
              "habbicon_book.reward.claimed",
              "Reward claimed.",
            )
          : this.var_63.localizationManager.getLocalization(
              "habbicon_book.reward.locked",
              "Complete this set to unlock the reward.",
            );
    ((this.rewardPanel.visible = !0),
      this._r211e4ed956b200(t),
      (this.rewardTitle.text = "${habbicon_book.reward.title}"),
      (this.rewardDescription.text = d),
      (this.rewardActionButton.visible = !0),
      (this.rewardActionButton.caption = i ? "${habbicon_reward.claimed}" : "${habbicon_reward.claim}"),
      WindowUtils.disableSection(this.rewardActionButton, !s),
      this.rewardBuyContainer != null && (this.rewardBuyContainer.visible = o),
      o &&
        ((this.rewardBuyPrice.text = this.formatPrice(
          this.var_304.priceCredits,
          this.var_304.priceActivityPoints,
        )),
        (this.rewardBuyCurrencyIcon.style = this.getPriceIconStyle(
          this.var_304.priceCredits,
          this.var_304.priceActivityPoints,
          this.var_304.activityPointType,
        )),
        this.rewardBuyCurrencyIcon.fitToSize()));
  }
  dispose() {
    this._disposed ||
      (this.rewardActionButton.removeEventListener(u.CLICK, this._r370da35111cede),
      this.rewardBuyButton?.removeEventListener(u.CLICK, this._r6bac604148ebe6),
      this._r31b0b58ccb35d4 != null &&
        (this._r31b0b58ccb35d4.removeEventListener(u.CLICK, this._re07cdec0054145),
        (this._r31b0b58ccb35d4 = null)),
      this.clearRewardBitmap(),
      (this.var_63 = null),
      (this._window = null),
      (this.var_304 = null),
      (this.var_2376 = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get rewardTile() {
    return null;
  }
  update(e) {}
  _r211e4ed956b200(e) {
    let r = Dr.getPreviewBitmap(e.habbiconId, !1);
    (this.clearRewardBitmap(),
      (this.rewardHabbicon.bitmap = r != null ? r.clone() : new A(40, 40, !1, 9408399)),
      (this.rewardHabbicon.visible = !0),
      this.rewardHabbicon.invalidate());
  }
  clearRewardBitmap() {
    this.rewardHabbicon.bitmap != null &&
      ((this.rewardHabbicon.bitmap = null), this.rewardHabbicon.invalidate());
  }
  _r4c9dffa8125986(e) {
    return e != null && (e.owned || e.favorite);
  }
  _r5372943ff485a3(e) {
    return e != null && e.claimable && !this._r4c9dffa8125986(e);
  }
  isRewardBuyable(e, r) {
    return e != null && e.canBuy && r != null && !r.owned && !r.favorite && !r.claimable;
  }
  formatPrice(e, r) {
    return e > 0 && r > 0 ? e + "c + " + r : e > 0 ? e.toString() : Math.max(0, r).toString();
  }
  getPriceIconStyle(e, r, t) {
    return et.getIconStyleFor(r > 0 ? t : et.CREDITS, this.var_63.configuration, !1);
  }
  _r370da35111cede = n((e) => {
    let r = this.var_304 != null ? this.var_304.rewardHabbicon : null;
    this._r5372943ff485a3(r) && this.var_63._r3834000326cc68(r.habbiconId);
  }, "_r370da35111cede");
  _r6bac604148ebe6 = n((e) => {
    let r = this.var_304 != null ? this.var_304.rewardHabbicon : null;
    this.isRewardBuyable(this.var_304, r) &&
      this.var_63._r29efef02e94b62(this.var_304);
  }, "_r6bac604148ebe6");
  _re07cdec0054145 = n((e) => {
    this.var_2376 != null &&
      this.rewardTile != null &&
      this.var_2376(this.rewardTile);
  }, "_re07cdec0054145");
  get rewardPanel() {
    return this._window.findChildByName("reward_panel");
  }
  get rewardTitle() {
    return this._window.findChildByName("reward_title");
  }
  get rewardHabbiconFrame() {
    return this._window.findChildByName("reward_habbicon_frame");
  }
  get rewardHabbicon() {
    return this._window.findChildByName("reward_habbicon");
  }
  get rewardDescription() {
    return this._window.findChildByName("reward_description");
  }
  get rewardActionButton() {
    return this._window.findChildByName("reward_action_button");
  }
  get rewardBuyContainer() {
    return this._window.findChildByName("reward_buy_container");
  }
  get rewardBuyPrice() {
    return this._window.findChildByName("reward_buy_price");
  }
  get rewardBuyCurrencyIcon() {
    return this._window.findChildByName("reward_buy_currency_icon");
  }
  get rewardBuyButton() {
    return this._window.findChildByName("reward_buy_button");
  }
}
