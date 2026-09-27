// Extracted from HabboAirLauncher.deobf.js, line 172806.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubBuyController.as
// Obfuscated name: _icd4a8314baf91f

class {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "ClubBuyController");
  }
  _visualization = null;
  _offers = [];
  var_69 = null;
  _disposed = !1;
  dispose() {
    this._disposed ||
      (this._visualization?.dispose(),
      (this._visualization = null),
      this.reset(),
      this.closeConfirmation(),
      (this._catalog = null),
      (this._disposed = !0));
  }
  get catalog() {
    return this._catalog;
  }
  reset() {
    for (let e of this._offers) e.dispose();
    this._offers = [];
  }
  _r5891395098af12(e) {
    if (this._disposed) return;
    this.reset();
    let r = 0,
      t = null;
    for (let s of e.offers) {
      let o = new Em(
        s.offerId,
        s._raeb033db5aa083,
        s.priceCredits,
        s.priceActivityPoints,
        s._rafadbfae59e758,
        s.vip,
        s.months,
        s._rbf1116149613a0,
        s._r9e47f6a0e6d2f5,
        s.year,
        s.month,
        s.day,
        s._r05039e0a50515a,
      );
      (this._offers.push(o), s.vip && (r++, (t = o)));
    }
    if (
      (r === 1 && t != null && (t._r0ccb2b01c7fb02 = !0),
      this._offers.sort((s, o) => s.months - o.months),
      this._visualization == null)
    )
      return;
    (this._visualization.reset(), this._visualization.initClubType(this._r5738708cca9f4a()));
    let i = this.getPromotedMonths(this._visualization.isGift);
    for (let s of this._offers)
      s.months <= 0 || (i.length > 0 && i.indexOf(s.months) === -1) || this._visualization.showOffer(s);
  }
  _ra1964c3621bd2d(e) {
    this._visualization === e && (this._visualization = null);
  }
  registerVisualization(e) {
    this._visualization = e;
  }
  requestOffers(e) {
    this._catalog?._rc638c80a192240(e);
  }
  showConfirmation(e, r) {
    (this.closeConfirmation(), (this.var_69 = new ClubBuyConfirmationDialog(this, e, r)));
  }
  _r538a2965d7ce36(e, r) {
    this._catalog?.connection != null &&
      (this._catalog.purchaseProduct(r, e.offerId), this.closeConfirmation());
  }
  closeConfirmation() {
    (this.var_69?.dispose(), (this.var_69 = null));
  }
  _r5738708cca9f4a() {
    let e = this.getPurse(),
      r = dr.NO_CLUB;
    return (
      ((e?.isVIP ?? !1) || (e?.clubPeriods ?? 0) > 0) &&
        (r = e?._ra6c4481543acf2 ? dr.VIP : dr.CLUB),
      r
    );
  }
  get hasClub() {
    return (this.getPurse()?.clubPeriods ?? 0) > 0;
  }
  get windowManager() {
    return this._catalog?.windowManager ?? null;
  }
  get localization() {
    return this._catalog?.localization ?? null;
  }
  get assets() {
    return this._catalog?.assets ?? null;
  }
  get roomEngine() {
    return this._catalog?.roomEngine ?? null;
  }
  getProductData(e) {
    return this._catalog?.getProductData(e) ?? null;
  }
  getPurse() {
    return this._catalog?.getPurse() ?? null;
  }
  getPromotedMonths(e) {
    let r = [],
      t = e ? "catalog.vip.gift.promo" : "catalog.vip.buy.promo";
    if (!this._catalog?.propertyExists(t)) return r;
    let i = this._catalog.getProperty(t, null);
    if (i.length === 0) return r;
    for (let s of i.split(",")) {
      let o = Number.parseInt(s, 10);
      !Number.isNaN(o) && o > 0 && r.push(o);
    }
    return r;
  }
}
