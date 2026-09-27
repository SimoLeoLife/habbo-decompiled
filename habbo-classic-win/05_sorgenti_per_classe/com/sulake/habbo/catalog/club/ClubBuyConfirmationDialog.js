// Estratto da HabboAirLauncher.deobf.js, riga 171790.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubBuyConfirmationDialog.as
// Nome offuscato: _i0e36a18c4a460a

class {
  constructor(e, r, t) {
    this.var_63 = e;
    this._offer = r;
    this.var_2762 = t;
    this.showConfirmation();
  }
  static {
    n(this, "ClubBuyConfirmationDialog");
  }
  _view = null;
  dispose() {
    ((this.var_63 = null),
      (this._offer = null),
      this._view?.dispose(),
      (this._view = null));
  }
  showConfirmation() {
    if (
      this._offer == null ||
      this.var_63?.catalog == null ||
      ((this._view = this.var_63.catalog.utils.createWindow("club_buy_confirmation")),
      this._view == null)
    )
      return;
    ((this._view.procedure = this._r4d2fcea4870df2),
      this._view.center(),
      this.var_63.catalog.getBoolean("disclaimer.credit_spending.enabled")
        ? this.setDisclaimerAccepted(!1)
        : (this._view.findChildByName("disclaimer")?.dispose(), this.setDisclaimerAccepted(!0)));
    let e = this.var_63.localization,
      r = this.var_63.getPurse(),
      t = (r?.isVIP ?? !1) && r?._ra6c4481543acf2 ? "extension." : "subscription.",
      i = this._offer.months === 0 ? "days" : "months",
      s = `catalog.vip.buy.confirm.${t}${i}`,
      o =
        this._offer.months === 0
          ? this._offer._rbf1116149613a0
          : this._offer.months;
    e?._r43eae9731f5b27(s, `num_${i}`, String(o));
    let d = this._view.findChildByName("subscription_name");
    (d != null && (d.caption = e?.getLocalization(s) ?? ""),
      e?._r43eae9731f5b27("catalog.vip.buy.confirm.end_date", "day", String(this._offer.day)),
      e?._r43eae9731f5b27("catalog.vip.buy.confirm.end_date", "month", String(this._offer.month)),
      e?._r43eae9731f5b27("catalog.vip.buy.confirm.end_date", "year", String(this._offer.year)));
    let c = this._view.findChildByName("purchase_cost_box");
    c != null && this.var_63.catalog.utils._ra10ac9ff6556f3(c, this._offer);
  }
  setDisclaimerAccepted(e) {
    let r = this._view?.findChildByName("select_button");
    r != null && (e ? r.enable() : r.disable());
  }
  _r4d2fcea4870df2 = n((e, r) => {
    let t = e,
      i = r;
    if (!(
      t == null ||
      i == null ||
      this.var_63 == null ||
      this._offer == null ||
      (t.type !== u.CLICK && t.type !== u.DOUBLE_CLICK)
    ))
      switch (i.name) {
        case "spending_disclaimer":
          this.setDisclaimerAccepted(i.isSelected);
          break;
        case "select_button":
          (this.var_63.catalog?._rf3e49d325a9f04(),
            this.var_63._r538a2965d7ce36(this._offer, this.var_2762));
          break;
        case "header_button_close":
        case "cancel_button":
          (this.var_63.catalog?._re166ac4009e847(), this.var_63.closeConfirmation());
          break;
        default:
          break;
      }
  }, "_r4d2fcea4870df2");
}
