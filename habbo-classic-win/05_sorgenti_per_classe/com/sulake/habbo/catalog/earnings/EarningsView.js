// Extracted from HabboAirLauncher.deobf.js, line 180261.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/earnings/EarningsView.as
// Obfuscated name: _i6946992fde5ee2

class a {
  static {
    n(this, "EarningsView");
  }
  static ALL_CATEGORIES = -1;
  var_63;
  _window;
  _rewardCategories = [
    "tutorial",
    "dailygift",
    "achievements",
    "marketplace",
    "habboclub",
    "levelprogression",
    "roombundlesales",
    "bonusbag",
    "donation",
    "surprise",
    "snowstorm",
    "games",
    "wiredchest",
    "agency",
  ];
  constructor(e, r) {
    this.var_63 = e;
    let i = e.assets?.getAssetByName("vault_view_xml")?.content ?? null;
    if (((this._window = i != null ? r.buildFromXML(i) : null), this._window == null))
      return;
    ((this._window.procedure = this.windowProcedure), this._window.center());
    let s = this._window.findChildByName("scrolling_earnings_list");
    if (s == null) return;
    let o = s.findChildByName("snowstorm_container"),
      d = s.findChildByName("games_container"),
      c = s.findChildByName("agency_container"),
      f = s.findChildByName("wiredchest_container");
    (!e.getBoolean("games_icon_enabled") && o != null && (o.visible = !1),
      e.getBoolean("wired.game_earnings") || (d != null && (d.visible = !1), c != null && (c.visible = !1)),
      f != null && (f.visible = !1));
  }
  onIncomeRewardClaimResponse(e, r) {
    if (!r) {
      e !== a.ALL_CATEGORIES
        ? this.setElementEnabled(`${this._rewardCategories[e]}_claim_button`, !0)
        : this.setElementEnabled("claim_all_btn", !0);
      return;
    }
    if (e === a.ALL_CATEGORIES) {
      for (let t = 0; t < this._rewardCategories.length; t++)
        (this.updateRewardsForCategory(t, 0, 0),
          this.setElementEnabled(`${this._rewardCategories[t]}_claim_button`, !1));
      return;
    }
    this.updateRewardsForCategory(e, 0, 0);
  }
  onIncomeRewardDataReceived(e) {
    let r = [];
    for (let i of a.getDistinctRewardCategories(e)) {
      let s = 0,
        o = 0,
        d = 0;
      for (let c of e)
        i === c.rewardCategory &&
          (c.rewardType === 0 && (s += c.amount),
          c.rewardType === 1 && (o += c.amount),
          c._raeb033db5aa083 != null && c._raeb033db5aa083.length > 0 && d++);
      (this.updateRewardsForCategory(i, o, s, d), (o > 0 || s > 0 || d > 0) && r.push(this._rewardCategories[i]));
    }
    let t = !1;
    for (let i of this._rewardCategories) {
      let s = r.indexOf(i) >= 0;
      if (s && i === "wiredchest") {
        let o = this._window?.findChildByName("wiredchest_container");
        o != null && (o.visible = !0);
      }
      (s && (t = !0), this.setElementEnabled(`${i}_claim_button`, s));
    }
    this.setElementEnabled("claim_all_btn", t);
  }
  dispose() {
    (this._window?.dispose(), (this._window = null), (this.var_63 = null));
  }
  get disposed() {
    return this.var_63 == null;
  }
  static getDistinctRewardCategories(e) {
    let r = [];
    for (let t of e) r.indexOf(t.rewardCategory) === -1 && r.push(t.rewardCategory);
    return r;
  }
  getTotalDucketsToClaim() {
    let e = 0;
    for (let r = 0; r < this._rewardCategories.length; r++) e += this.ducketValueForCategory(r);
    return e;
  }
  ducketValueForCategory(e) {
    if (e === a.ALL_CATEGORIES) return this.getTotalDucketsToClaim();
    let r = this._rewardCategories[e],
      t = this._window?.findChildByName(`${r}DucketValue`);
    return (t != null && Number.parseInt(t.caption || "0", 10)) || 0;
  }
  updateRewardsForCategory(e, r, t, i = 0) {
    let s = this._rewardCategories[e],
      o = this._window?.findChildByName(`${s}CreditValue`),
      d = this._window?.findChildByName(`${s}DucketValue`);
    if ((o != null && (o.caption = String(r)), d != null && (d.caption = String(t)), i > 0)) {
      let c = this._window?.findChildByName(`${s}ProductValue`);
      c != null && (c.caption = String(i));
    }
  }
  setElementEnabled(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (r ? t.enable() : t.disable());
  }
  windowProcedure = n((e, r) => {
    if (e.type !== u.CLICK) return;
    let t = !1,
      i = 0;
    switch (r.name) {
      case "vaultWithdraw_button":
      case "vaultWithdrawAll_button":
        this.var_63?._r5a1d9e28f2672e();
        return;
      case "vaultOpenShop_button":
        this.var_63?.openCatalogue();
        return;
      case "header_button_close":
        this.dispose();
        return;
      case "dailygift_claim_button":
        ((t = !0), (i = 1));
        break;
      case "achievements_claim_button":
        ((t = !0), (i = 2));
        break;
      case "marketplace_claim_button":
        ((t = !0), (i = 3));
        break;
      case "habboclub_claim_button":
        ((t = !0), (i = 4));
        break;
      case "levelprogression_claim_button":
        ((t = !0), (i = 5));
        break;
      case "bonusbag_claim_button":
        ((t = !0), (i = 7));
        break;
      case "donation_claim_button":
        ((t = !0), (i = 8));
        break;
      case "surprise_claim_button":
        ((t = !0), (i = 9));
        break;
      case "snowstorm_claim_button":
        ((t = !0), (i = 10));
        break;
      case "games_claim_button":
        ((t = !0), (i = 11));
        break;
      case "wiredchest_claim_button":
        ((t = !0), (i = 12));
        break;
      case "agency_claim_button":
        ((t = !0), (i = 13));
        break;
      case "claim_all_btn":
        ((t = !0), (i = a.ALL_CATEGORIES));
        break;
    }
    if (!t || this.var_63 == null) return;
    let s = this.ducketValueForCategory(i),
      o = this.var_63.catalog?.getPurse().getActivityPointsForType(et.DUCKET) ?? 0,
      d = this.var_63.getInteger("duckets.soft_limit", Number.MAX_SAFE_INTEGER);
    if (s > 0 && s + o > d) {
      this.var_63.windowManager?.confirm(
        "${generic.alert.title}",
        "${earning.exceeding_limit}",
        0,
        (c, f) => {
          (c.dispose(), f.type === y.const_1300 && this._r91635a865a25a1(r.name, i));
        },
      );
      return;
    }
    this._r91635a865a25a1(r.name, i);
  }, "windowProcedure");
  _r91635a865a25a1(e, r) {
    this._window == null ||
      this.var_63 == null ||
      (this.setElementEnabled(e, !1), this.var_63.claimReward(r));
  }
}
