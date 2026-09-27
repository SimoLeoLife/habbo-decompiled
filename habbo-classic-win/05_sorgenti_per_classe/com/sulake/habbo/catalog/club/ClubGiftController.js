// Extracted from HabboAirLauncher.deobf.js, line 173315.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubGiftController.as
// Obfuscated name: _i92c094a6f4d147

class {
  constructor(e) {
    this._catalog = e;
  }
  static {
    n(this, "ClubGiftController");
  }
  var_17 = null;
  var_4756 = 0;
  _r9278fc8348c641 = 0;
  _offers = [];
  _ra7f09814aabb79 = null;
  var_69 = null;
  dispose() {
    ((this._catalog = null),
      this.var_69?.dispose(),
      (this.var_69 = null),
      (this.var_17 = null));
  }
  set widget(e) {
    ((this.var_17 = e), this._catalog?.connection?.send(new class_2402()));
  }
  get _r551d99ad913889() {
    return this.var_4756;
  }
  get _r6a9dca7b6b5588() {
    return this._r9278fc8348c641;
  }
  setInfo(e, r, t, i) {
    ((this.var_4756 = e),
      (this._r9278fc8348c641 = r),
      (this._offers = t),
      (this._ra7f09814aabb79 = i),
      this.var_17?.update());
  }
  _r41586776eeeb15(e) {
    (this.closeConfirmation(), (this.var_69 = new ClubGiftConfirmationDialog(this, e)));
  }
  _r538a2965d7ce36(e) {
    e === "" ||
      this._catalog?.connection == null ||
      (this._catalog.connection.send(new class_2622(e)),
      this._r9278fc8348c641--,
      this.var_17?.update(),
      this.closeConfirmation());
  }
  closeConfirmation() {
    (this.var_69?.dispose(), (this.var_69 = null));
  }
  _rb0b9b572bdd5be() {
    return this._offers;
  }
  _re398c13e3c22ea() {
    return this._ra7f09814aabb79;
  }
  get hasClub() {
    return (this.purse?.clubPeriods ?? 0) > 0;
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
  get purse() {
    return this._catalog?.getPurse() ?? null;
  }
  get catalog() {
    return this._catalog;
  }
}
