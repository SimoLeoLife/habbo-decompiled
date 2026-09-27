// Estratto da HabboAirLauncher.deobf.js, riga 266733.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/prizes/RewardTrackPrizeView.as
// Nome offuscato: _i10c01de1628146

class a {
  static {
    n(this, "RewardTrackPrizeView");
  }
  static const_1067 = 3;
  var_63 = null;
  var_292 = null;
  _rab287109183752 = null;
  _window;
  _r1fcd26ff9ea676;
  _disposed = !1;
  constructor(e) {
    ((this._window = e.clone()),
      (this._r1fcd26ff9ea676 = Math.trunc(this.productIcon.y)),
      this.clickRegion.addEventListener(u.CLICK, this._onClick));
  }
  initialize(e, r, t) {
    ((this.var_63 = e), (this.var_292 = r), (this._rab287109183752 = t), this.refresh());
  }
  refresh() {
    ((this.productIcon.widget.productInfo = new _i4a83021938f554(this._rab287109183752)),
      (this.quantityContainer.visible = this._rab287109183752.rewardAmount > 1),
      (this._r7a92be0108a816.text = String(this._rab287109183752.rewardAmount)),
      (this.productIcon.y =
        this._rab287109183752.rewardAmount > 1
          ? this._r1fcd26ff9ea676 - a.const_1067
          : this._r1fcd26ff9ea676),
      this.refreshState());
  }
  refreshState() {
    ((this.claimedIcon.visible = this._rab287109183752.claimed),
      (this.lockedIcon.visible = this._rab287109183752._r3aa162c43def03(this.var_292)),
      this._rab287109183752.claimed
        ? (this.clickRegion.toolTipCaption = "${reward_track.rewards.reward_tooltip.claimed}")
        : this._rab287109183752._r3aa162c43def03(this.var_292)
          ? (this.clickRegion.toolTipCaption = "${reward_track.rewards.reward_tooltip.premium}")
          : this._rab287109183752._rf5dc3b59920e24(this.var_292)
            ? (this.clickRegion.toolTipCaption = "${reward_track.rewards.reward_tooltip.claim}")
            : (this.clickRegion.toolTipCaption =
                "${reward_track.rewards.reward_tooltip.not_enough_points}"),
      WindowUtils.disableSection(
        this._window,
        !this._rab287109183752._rc9b659c7203ef1(this.var_292),
        0.75,
      ));
  }
  clear() {
    ((this.var_63 = null),
      (this.var_292 = null),
      (this._rab287109183752 = null),
      (this._window.visible = !1));
  }
  _onClick = n(() => {
    if (!(this._rab287109183752 === null || this._rab287109183752.claimed)) {
      if (this._rab287109183752._r3aa162c43def03(this.var_292)) {
        this.var_63._rc3b63e1ff6bba2(this.var_292);
        return;
      }
      this._rab287109183752._r4cb1003f91383f(this.var_292) &&
        this.var_63._rdac072a48a0313(this.var_292.id, this._rab287109183752.id);
    }
  }, "_onClick");
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window.parent !== null &&
        this._window.parent.removeChild(this._window),
      this.clickRegion.removeEventListener(u.CLICK, this._onClick),
      this._window.dispose(),
      (this._window = null),
      (this.var_63 = null),
      (this.var_292 = null),
      (this._rab287109183752 = null));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get _r881e49e8dab487() {
    return this._rab287109183752;
  }
  get clickRegion() {
    return this._window.findChildByName("click_region");
  }
  get productIcon() {
    return this._window.findChildByName("product_icon");
  }
  get quantityContainer() {
    return this._window.findChildByName("quantity_container");
  }
  get _r7a92be0108a816() {
    return this.quantityContainer.getChildAt(0);
  }
  get lockedIcon() {
    return this._window.findChildByName("locked_icon");
  }
  get claimedIcon() {
    return this._window.findChildByName("claimed_icon");
  }
}
