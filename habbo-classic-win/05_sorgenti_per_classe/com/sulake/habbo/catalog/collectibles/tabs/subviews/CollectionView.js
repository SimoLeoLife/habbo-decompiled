// Estratto da HabboAirLauncher.deobf.js, riga 174630.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/tabs/subviews/CollectionView.as
// Nome offuscato: _i447617a98b2453

class a {
  constructor(e, r, t) {
    this.var_374 = e;
    this._container = r;
    this._r4eb39feb7f70c0 = t;
    ((this.var_2033 = new CollectibleProductPreviewer(
      this.productPreviewBitmap,
      this.badgeImageWidget,
      this.petImageWidget,
      this.unknownImageWindow,
      this.avatarImageWidget,
      this.placeholderImage,
      this.effectImageWidget,
      this.var_374.controller._rf0eb5f07c94cfb,
    )),
      this.initHeader(),
      this.initCollectionPreview(),
      this._r9928861dec4ed8(),
      this.productNameContainer?.addEventListener(u.OVER, this._r54f11761f606f7),
      this.productNameContainer?.addEventListener(u.OUT, this._rbb5a09eb185d2d),
      this.claimButton?.addEventListener(u.CLICK, this.onClickClaim));
  }
  static {
    n(this, "CollectionView");
  }
  static PREVIEW_STATUS_NONE = 0;
  static PREVIEW_STATUS_BONUS = 1;
  static PREVIEW_STATUS_REWARD = 2;
  static PREVIEW_STATUS_COLLECTION = 3;
  static PREVIEW_STATUS_ITEM = 4;
  static PROGRESS_BAR_UPDATE_THRESHOLD = 1e3;
  static BONUS_PROGRESS_ACTIVE_TOP_COLOR = 37130;
  static BONUS_PROGRESS_ACTIVE_BOTTOM_COLOR = 228352;
  static BONUS_PROGRESS_EXPIRED_TOP_COLOR = 4294913325;
  static BONUS_PROGRESS_EXPIRED_BOTTOM_COLOR = 4289724416;
  _r9cb5f682dfdc11 = [];
  var_154 = null;
  var_2033;
  _previewStatus = a.PREVIEW_STATUS_NONE;
  var_2505 = 0;
  _disposed = !1;
  _rc723103f2308f8 = !1;
  get disposed() {
    return this._disposed;
  }
  get nftCollection() {
    return this._r4eb39feb7f70c0;
  }
  _rfb113a5fc45e65(e, r) {
    (this._previewStatus === a.PREVIEW_STATUS_REWARD || this._previewStatus === a.PREVIEW_STATUS_BONUS) &&
      this.initCollectionPreview();
  }
  _rb8433e661126ff(e = !0, r = 0) {
    if (((this.var_2505 += r), this._previewStatus !== a.PREVIEW_STATUS_BONUS)) return;
    let t = this._r4eb39feb7f70c0._r1a2d2587cdde99,
      i = this._r4eb39feb7f70c0._r7c9b52260772bb,
      s = Date.now();
    if (
      e ||
      this.var_2505 >= a.PROGRESS_BAR_UPDATE_THRESHOLD ||
      (this._r011d1b77cf67f6(t, i) && s >= i && !this._rc723103f2308f8)
    ) {
      if (((this.var_2505 = 0), !this._r011d1b77cf67f6(t, i))) {
        ((this._rc723103f2308f8 = !1),
          this.completionProgressBar != null && (this.completionProgressBar.visible = !1),
          this.completionHeaderContainer != null && (this.completionHeaderContainer.height = 38));
        return;
      }
      if (
        (this.completionProgressBar != null && (this.completionProgressBar.visible = !0),
        this.completionHeaderContainer != null && (this.completionHeaderContainer.height = 60),
        s >= i)
      ) {
        (this.showExpiredBonusClaimState(i), (this._rc723103f2308f8 = !0));
        return;
      }
      ((this._rc723103f2308f8 = !1), this.showActiveBonusClaimTimer(t, i, s));
    }
  }
  _r011d1b77cf67f6(e, r) {
    return !Number.isNaN(e) && !Number.isNaN(r) && e !== -1 && r !== -1;
  }
  showActiveBonusClaimTimer(e, r, t) {
    (this.completionProgressBarTop != null && (this.completionProgressBarTop.color = a.BONUS_PROGRESS_ACTIVE_TOP_COLOR),
      this.completionProgressBarBottom != null && (this.completionProgressBarBottom.color = a.BONUS_PROGRESS_ACTIVE_BOTTOM_COLOR));
    let i = Math.max(0, r - t),
      s = r - e,
      o = s <= 0 ? 1 : Math.min(1, Math.max(0, i / s)),
      d = this.completionProgressBarPadded?.width ?? 0,
      c = Math.trunc(d * o);
    if (
      (this.completionProgressBarTop != null &&
        ((this.completionProgressBarTop.width = c), this.completionProgressBarTop.invalidate()),
      this.completionProgressBarBottom != null &&
        ((this.completionProgressBarBottom.width = c), this.completionProgressBarBottom.invalidate()),
      this.completionProgressBarText != null)
    ) {
      let f = ra.getFriendlyTime(this.localization, i / 1e3);
      this.completionProgressBarText.caption = `${this.localization.getLocalizationWithParams("collectibles.preview.time_left", "")}: ${f}`;
    }
  }
  showExpiredBonusClaimState(e) {
    let r = this.completionProgressBarPadded?.width ?? 0;
    (this.completionProgressBarTop != null &&
      ((this.completionProgressBarTop.color = a.BONUS_PROGRESS_EXPIRED_TOP_COLOR),
      (this.completionProgressBarTop.width = r),
      this.completionProgressBarTop.invalidate()),
      this.completionProgressBarBottom != null &&
        ((this.completionProgressBarBottom.color = a.BONUS_PROGRESS_EXPIRED_BOTTOM_COLOR),
        (this.completionProgressBarBottom.width = r),
        this.completionProgressBarBottom.invalidate()));
    let t = new Date(e),
      i = `${String(t.getDate()).padStart(2, "0")}/${String(t.getMonth() + 1).padStart(2, "0")}/${String(t.getFullYear()).padStart(4, "0")}`;
    this.completionProgressBarText != null &&
      (this.completionProgressBarText.caption = this.localization.getLocalizationWithParams(
        "collectibles.preview.bonus_claim_ended",
        "Bonus item claim period ended - %date%",
        "date",
        i,
      ));
  }
  _r669989230c0ae2(e) {
    if (this.var_154 === e) {
      (this.var_154.deactivate(), (this.var_154 = null), this.initCollectionPreview());
      return;
    }
    if (
      (this.var_154?.deactivate(),
      (this.var_154 = e ?? null),
      this.var_154 != null)
    ) {
      (this.var_154.activate(), this.initMintedItemPreview(this.var_154.item));
      return;
    }
    this.initCollectionPreview();
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this.var_2033.clearPreviewer(),
      this.var_2033.dispose(),
      this.clearInfoEntries(),
      this._rabdf6c72b858d2(),
      this.productNameContainer?.removeEventListener(u.OVER, this._r54f11761f606f7),
      this.productNameContainer?.removeEventListener(u.OUT, this._rbb5a09eb185d2d),
      this.claimButton?.removeEventListener(u.CLICK, this.onClickClaim));
  }
  initHeader() {
    this.titleText != null &&
      (this.titleText.caption = this.localization.getLocalization(
        `collectibles.set.${this._r4eb39feb7f70c0.collectionId}`,
        this._r4eb39feb7f70c0.collectionName,
      ));
    let e = this._r4eb39feb7f70c0._rc084fcd9702b88,
      r = this._r4eb39feb7f70c0._rf1e0cb0f5d01d9;
    (this.progressText != null && (this.progressText.caption = `${e}/${r}`),
      this.progressColorContainer != null && (this.progressColorContainer.color = Jj.getColor(e, r)));
  }
  initCollectionPreview() {
    let e = this.initRewardClaim(),
      r = this._r4eb39feb7f70c0._rc084fcd9702b88 === this._r4eb39feb7f70c0._rf1e0cb0f5d01d9;
    (this.collectionProgressContainer != null && (this.collectionProgressContainer.visible = !0),
      this.collectionProgressScoreText != null &&
        (this.collectionProgressScoreText.caption = this.localization.getLocalizationWithParams(
          "collectibles.preview.score",
          "",
          "progress",
          `<font color="#00FF12">${this._r4eb39feb7f70c0._r3cbd2d77df46f7}</font>`,
          "goal",
          `${this._r4eb39feb7f70c0._r4a14459846740e}`,
        )),
      this.collectionProgressRewardText != null &&
        (this.collectionProgressRewardText.caption = this.localization.getLocalizationWithParams(
          r ? "collectibles.preview.reward_collected" : "collectibles.preview.reward",
          "",
          "amount",
          `<font color="#FFC800">${this._r4eb39feb7f70c0._rab93b4377b8d93}</font>`,
        )),
      this.productNameContainer != null && (this.productNameContainer.visible = !1),
      this.productProgressContainer != null && (this.productProgressContainer.visible = !1),
      this._r4e622c49c40b94(!1),
      e == null
        ? this.var_2033.avatarRenderManager()
        : this.var_374.controller.previewImage(new CollectionItemWrapper(e), this.var_2033));
  }
  initRewardClaim() {
    return this._r4eb39feb7f70c0._r607ec521dda587 && this._r4eb39feb7f70c0._ra933d24a1000b7 != null
      ? (this.initRewardItem(this._r4eb39feb7f70c0._ra933d24a1000b7, !0, !0),
        this._r4eb39feb7f70c0._ra933d24a1000b7)
      : this._r4eb39feb7f70c0._rf87788999b6261 && this._r4eb39feb7f70c0._r6e7c4e23e82084 != null
        ? (this.initRewardItem(this._r4eb39feb7f70c0._r6e7c4e23e82084, !0, !1),
          this._r4eb39feb7f70c0._r6e7c4e23e82084)
        : this._r4eb39feb7f70c0._r8d537e63595adf &&
            !this._r4eb39feb7f70c0._r68a31923021ad7 &&
            this._r4eb39feb7f70c0._ra933d24a1000b7 != null
          ? (this.initRewardItem(this._r4eb39feb7f70c0._ra933d24a1000b7, !1, !0),
            this._r4eb39feb7f70c0._ra933d24a1000b7)
          : this._r4eb39feb7f70c0._r1d01b5e51f6fc6 &&
              !this._r4eb39feb7f70c0._r5371210fb0dedc &&
              this._r4eb39feb7f70c0._r6e7c4e23e82084 != null
            ? (this.initRewardItem(this._r4eb39feb7f70c0._r6e7c4e23e82084, !1, !1),
              this._r4eb39feb7f70c0._r6e7c4e23e82084)
            : ((this._previewStatus = a.PREVIEW_STATUS_COLLECTION),
              this.completionContainer != null && (this.completionContainer.visible = !1),
              null);
  }
  initRewardItem(e, r, t) {
    ((this._previewStatus = t ? a.PREVIEW_STATUS_BONUS : a.PREVIEW_STATUS_REWARD),
      this.completionContainer != null && (this.completionContainer.visible = !0),
      this.completionRewardNameText != null &&
        (this.completionRewardNameText.caption = this.var_374.controller.getProductName(new CollectionItemWrapper(e))),
      this.completionProgressBar != null && (this.completionProgressBar.visible = t),
      this.completionHeaderContainer != null && (this.completionHeaderContainer.height = t ? 60 : 38),
      t && this._rb8433e661126ff());
    let i = t ? this._r4eb39feb7f70c0._rb2a4e069133c15 : this._r4eb39feb7f70c0._raa06a886974683;
    this.claimButton != null &&
      ((this.claimButton.visible = r),
      i === MM._r912997882afa85 ? this.claimButton.enable() : this.claimButton.disable());
  }
  onClickClaim = n((e) => {
    if (this.var_374.activeWallet != null) {
      if (this._previewStatus === a.PREVIEW_STATUS_BONUS)
        (this._r4eb39feb7f70c0._r64b9f0f252ae91(),
          this.var_374.controller.send(
            new _i31311e8950de32(this._r4eb39feb7f70c0.collectionId, this.var_374.activeWallet),
          ),
          this.var_374._r036314013a3102());
      else if (this._previewStatus === a.PREVIEW_STATUS_REWARD)
        (this._r4eb39feb7f70c0._r342ef8f77cd3b9(),
          this.var_374.controller.send(
            new _i9ca1638af6efb8(this._r4eb39feb7f70c0.collectionId, this.var_374.activeWallet),
          ),
          this.var_374._r036314013a3102());
      else return;
      this.claimButton?.disable();
    }
  }, "onClickClaim");
  initMintedItemPreview(e) {
    ((this._previewStatus = a.PREVIEW_STATUS_ITEM),
      this.completionContainer != null && (this.completionContainer.visible = !1),
      this.collectionProgressContainer != null && (this.collectionProgressContainer.visible = !1),
      this.var_2033.clearPreviewer());
    let r = new CollectionItemWrapper(e);
    (this.var_374.controller.previewImage(r, this.var_2033),
      this.productNameContainer != null && (this.productNameContainer.visible = !0),
      this.productNameText != null &&
        (this.productNameText.caption = this.var_374.controller.getProductName(r)),
      this.productProgressContainer != null && (this.productProgressContainer.visible = !0),
      this.productProgressScoreText != null &&
        (this.productProgressScoreText.caption = this.localization.getLocalizationWithParams(
          e.amount > 0 ? "collectibles.preview.product.complete" : "collectibles.preview.product.incomplete",
          "",
          "amount",
          `<font color="#FFC800">${e.score}</font>`,
        )),
      this.initInfoEntries(e));
  }
  initInfoEntries(e) {
    (this.clearInfoEntries(),
      this.addInfoEntry(
        this.localization.getLocalization("collectibles.item.type"),
        this.var_374.controller.getProductType(new CollectionItemWrapper(e)),
      ),
      this.addInfoEntry(this.localization.getLocalization("collectibles.item.rarity"), e.rarity),
      this.addInfoEntry(this.localization.getLocalization("collectibles.item.xp"), `${e.score}`));
  }
  addInfoEntry(e, r) {
    let t = this.var_374._rb5f1bf2b6db118?.clone();
    if (t == null) return;
    let i = t.findChildByName("product_info_key"),
      s = t.findChildByName("product_info_value");
    (i != null && (i.caption = e), s != null && (s.caption = r), this.productInfoList?.addListItem(t));
  }
  clearInfoEntries() {
    this.productInfoList?.removeListItems();
  }
  _r4e622c49c40b94(e) {
    this.productInfoContainer != null && (this.productInfoContainer.visible = e);
  }
  _rbb5a09eb185d2d = n((e) => {
    this._r4e622c49c40b94(!1);
  }, "_rbb5a09eb185d2d");
  _r54f11761f606f7 = n((e) => {
    this._r4e622c49c40b94(!0);
  }, "_r54f11761f606f7");
  _r9928861dec4ed8() {
    this._rabdf6c72b858d2();
    let e = this.var_374._r9fe4703edef6d2;
    for (let r of this._r4eb39feb7f70c0.items) {
      let t = e?.clone();
      if (t == null) continue;
      let i = new _i00239fd41288f9(this.var_374.controller, r, t, this);
      (this.itemGrid?.addGridItem(t), this._r9cb5f682dfdc11.push(i));
    }
  }
  _rabdf6c72b858d2() {
    for (let e of this._r9cb5f682dfdc11) e.dispose();
    ((this._r9cb5f682dfdc11 = []), this.itemGrid?._rbb4c26d068856f());
  }
  get localization() {
    return this.var_374.controller.localizationManager;
  }
  get titleText() {
    return this._container.findChildByName("collection_name");
  }
  get progressColorContainer() {
    return this._container.findChildByName("progress_color");
  }
  get progressText() {
    return this._container.findChildByName("progress_text");
  }
  get completionContainer() {
    return this._container.findChildByName("bonus_or_reward_container");
  }
  get completionHeaderContainer() {
    return this._container.findChildByName("completion_header_container");
  }
  get completionRewardNameText() {
    return this._container.findChildByName("reward_furni_name");
  }
  get completionProgressBar() {
    return this._container.findChildByName("progress_bar");
  }
  get completionProgressBarPadded() {
    return this._container.findChildByName("progress_padded_bar");
  }
  get completionProgressBarTop() {
    return this._container.findChildByName("progress_bar_top");
  }
  get completionProgressBarBottom() {
    return this._container.findChildByName("progress_bar_bottom");
  }
  get completionProgressBarText() {
    return this._container.findChildByName("progress_bar_text");
  }
  get claimButton() {
    return this._container.findChildByName("claim_button");
  }
  get collectionProgressContainer() {
    return this._container.findChildByName("collection_progress_container");
  }
  get collectionProgressScoreText() {
    return this._container.findChildByName("preview_score_text");
  }
  get collectionProgressRewardText() {
    return this._container.findChildByName("preview_reward_text");
  }
  get placeholderImage() {
    return this._container.findChildByName("placeholder_image");
  }
  get productPreviewBitmap() {
    return this._container.findChildByName("product_preview");
  }
  get productNameContainer() {
    return this._container.findChildByName("product_name_container");
  }
  get productNameText() {
    return this._container.findChildByName("preview_furni_name");
  }
  get productInfoContainer() {
    return this._container.findChildByName("product_info_container");
  }
  get productInfoList() {
    return this._container.findChildByName("product_info_list");
  }
  get productProgressContainer() {
    return this._container.findChildByName("product_progress_container");
  }
  get productProgressScoreText() {
    return this._container.findChildByName("procuct_score_text");
  }
  get itemGrid() {
    return this._container.findChildByName("itemgrid_collection");
  }
  get avatarImageWidget() {
    return this._container.findChildByName("avatar_image_widget");
  }
  get badgeImageWidget() {
    return this._container.findChildByName("badge_image_widget");
  }
  get petImageWidget() {
    return this._container.findChildByName("pet_image_widget");
  }
  get effectImageWidget() {
    return this._container.findChildByName("effect_image_widget");
  }
  get unknownImageWindow() {
    return this._container.findChildByName("unknown_image");
  }
}
