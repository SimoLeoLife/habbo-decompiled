// Estratto da HabboAirLauncher.deobf.js, riga 173186.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubExtendController.as
// Nome offuscato: _icb9c77203d59c8

class {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "ClubExtendController");
  }
  var_69 = null;
  _offer = null;
  _disposed = !1;
  dispose() {
    this._disposed ||
      (this.closeConfirmation(),
      (this._offer = null),
      (this._catalog = null),
      (this._disposed = !0));
  }
  onOffer(e) {
    if (this._disposed) return;
    let r = e.getParser();
    ((this._offer = r.offer()),
      this.showConfirmation(),
      !(this._catalog?.connection == null || this._offer == null) &&
        this._catalog.connection.send(
          new class_2154(
            "Catalog",
            "dialog_show",
            this._offer.vip
              ? "vip.membership.extension.purchase"
              : "basic.membership.extension.purchase",
          ),
        ));
  }
  closeConfirmation() {
    (this.var_69?.dispose(), (this.var_69 = null));
  }
  showConfirmation() {
    (this.closeConfirmation(),
      this._offer != null &&
        ((this.var_69 = new z6e(this, this._offer)),
        this.var_69.showConfirmation()));
  }
  _r538a2965d7ce36() {
    if (!(
      this._catalog == null ||
      this._catalog.connection == null ||
      this._offer == null
    )) {
      if (this._catalog.getPurse().credits < this._offer.priceCredits) {
        this._catalog.showNotEnoughCreditsAlert();
        return;
      }
      (this._offer.vip
        ? this._catalog._r80a58b7b6d2c3b(this._offer.offerId)
        : this._catalog._rdbdd1de38a3484(this._offer.offerId),
        this.closeConfirmation());
    }
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
  get config() {
    return this._catalog;
  }
}
