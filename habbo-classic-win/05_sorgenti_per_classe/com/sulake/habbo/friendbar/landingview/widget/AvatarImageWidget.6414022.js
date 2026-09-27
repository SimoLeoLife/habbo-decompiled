// Estratto da HabboAirLauncher.deobf.js, riga 206695.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/AvatarImageWidget.as
// Nome offuscato: _i855faa876ca501

class {
  constructor(e) {
    this._landingView = e;
  }
  static {
    n(this, "AvatarImageWidget");
  }
  var_2244 = null;
  _rcea152645e59bb = null;
  _r35064222dd94b5 = null;
  get container() {
    return this.var_2244;
  }
  get disposed() {
    return this._landingView == null;
  }
  dispose() {
    (this._rcea152645e59bb != null &&
      this._landingView?._rf3db13932bfb60?._r7668362bf55fdd(this._rcea152645e59bb),
      this._r35064222dd94b5 != null &&
        this._landingView?._rf3db13932bfb60?._r7668362bf55fdd(this._r35064222dd94b5),
      (this._rcea152645e59bb = null),
      (this._r35064222dd94b5 = null),
      (this.var_2244 = null),
      (this._landingView = null));
  }
  initialize() {
    ((this.var_2244 = this._landingView?.getXmlWindow("avatar_image")),
      (this._rcea152645e59bb = new class_1926((e) => {
        this._r6e2e75987c854e(e);
      })),
      (this._r35064222dd94b5 = new _ic493e19be4b81c((e) => {
        this._r9b3a75bb1f2b44(e);
      })),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(this._rcea152645e59bb),
      this._landingView?._rf3db13932bfb60?._r2e106e2349a0b6(this._r35064222dd94b5));
  }
  refresh() {
    this.refreshAvatarInfo();
  }
  _r6e2e75987c854e(e) {
    this.refreshAvatarInfo(e.getParser()?.figure ?? null);
  }
  _r9b3a75bb1f2b44(e) {
    e.id === -1 && this.refreshAvatarInfo(e.figure);
  }
  refreshAvatarInfo(e = null) {
    e ??= this._landingView?.sessionDataManager?.figure ?? null;
    let r = this.var_2244?.widget;
    r != null && e != null && (r.figure = e);
  }
}
