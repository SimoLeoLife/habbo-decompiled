// Estratto da HabboAirLauncher.deobf.js, riga 208770.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/HabboModerationPromoWidget.as
// Nome offuscato: _i067f8259e4c175

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "HabboModerationPromoWidget");
  }
  _container = null;
  get container() {
    return this._container;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    ((this._landingView = null), (this._container = null));
  }
  initialize() {
    ((this._container = this._landingView?.getXmlWindow("habbo_moderation_promo")),
      this._container != null && HabboLandingView.positionAfterAndStretch(this._container, "title_txt", "hdr_line"));
  }
  refresh() {}
}
