// Estratto da HabboAirLauncher.deobf.js, riga 208824.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/HabboWayPromoWidget.as
// Nome offuscato: _i5ec46d815b620c

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "HabboWayPromoWidget");
  }
  _container = null;
  var_5295 = 0;
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
    ((this._container = this._landingView?.getXmlWindow("habbo_way_promo")),
      this._container?.findChildByName("go_button")?.addEventListener(u.CLICK, this._r9fd49274c293f9),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3726((e) => {
          this.onCommunityGoalProgress(e);
        }),
      ));
  }
  refresh() {
    (this._landingView?.send(new class_2982()), this.refreshContent());
  }
  _r9fd49274c293f9 = n((e) => {
    e.type === u.CLICK && this._landingView?.habboHelp?.showHabboWay();
  }, "_r9fd49274c293f9");
  onCommunityGoalProgress(e) {
    let r = ClassUtils.getParser(e, class_3972);
    r != null && ((this.var_5295 = r?.data?.communityTotalScore ?? 0), this.refreshContent());
  }
  refreshContent() {
    let e = String(this.var_5295);
    for (; e.length < 8;) e = "0" + e;
    let r = this._container?.findChildByName("counter_txt");
    r != null && (r.caption = e);
  }
}
