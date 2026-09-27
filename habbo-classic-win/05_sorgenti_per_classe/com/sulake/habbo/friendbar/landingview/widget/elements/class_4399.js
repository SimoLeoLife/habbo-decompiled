// Estratto da HabboAirLauncher.deobf.js, riga 208157.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4399.as
// Nome offuscato: _i1b6f8a19e4d182

class {
  static {
    n(this, "class_4399");
  }
  _landingView = null;
  _url = "";
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    this._landingView = null;
  }
  initialize(e, r, t, i) {
    ((this._landingView = e),
      (this._url = t[2] ?? ""),
      (r.procedure = this.onLink),
      (r.findChildByName("link_txt").caption = "${" + (t[1] ?? "") + "}"));
  }
  refresh() {}
  onLink = n((e) => {
    e.type === u.CLICK &&
      this._landingView != null &&
      (this._landingView.windowManager?.alert(
        "${catalog.alert.external.link.title}",
        "${catalog.alert.external.link.desc}",
        0,
        null,
      ),
      Ae.openWebPage(this._url),
      this._landingView.tracking?.trackGoogle("landingView", "click_link"));
  }, "onLink");
}
