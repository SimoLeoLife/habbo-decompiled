// Extracted from HabboAirLauncher.deobf.js, line 208793.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/HabboTalentsPromoWidget.as
// Obfuscated name: _ie417f52cca331b

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "HabboTalentsPromoWidget");
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
    ((this._container = this._landingView?.getXmlWindow("habbo_talents_promo")),
      this._container?.findChildByName("go_button")?.addEventListener(u.CLICK, this._r9fd49274c293f9),
      this._container != null && HabboLandingView.positionAfterAndStretch(this._container, "title_txt", "hdr_line"));
  }
  refresh() {}
  _r9fd49274c293f9 = n((e) => {
    if (e.type === u.CLICK) {
      let r = this._landingView?.sessionDataManager?.currentTalentTrack ?? "";
      (this._landingView?.tracking?.trackTalentTrackOpen(r, "landingpagepromo"),
        this._landingView?.send(new class_2687(r)));
    }
  }, "_r9fd49274c293f9");
}
