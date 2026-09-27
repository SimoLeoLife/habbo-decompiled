// Estratto da HabboAirLauncher.deobf.js, riga 207590.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4383.as
// Nome offuscato: _id976290ed562f5

class {
  static {
    n(this, "class_4383");
  }
  _landingView = null;
  _window = null;
  get disposed() {
    return this._landingView == null;
  }
  get layoutName() {
    return "element_button";
  }
  get landingView() {
    return this._landingView;
  }
  get window() {
    return this._window;
  }
  dispose() {
    ((this._landingView = null), (this._window = null));
  }
  initialize(e, r, t, i) {
    ((this._landingView = e),
      (this._window = r),
      (r.procedure = this.onButton),
      (r.caption = "${" + (t[1] ?? "") + "}"));
  }
  refresh() {}
  onClick() {}
  onButton = n((e) => {
    e.type === u.CLICK && this.onClick();
  }, "onButton");
}
