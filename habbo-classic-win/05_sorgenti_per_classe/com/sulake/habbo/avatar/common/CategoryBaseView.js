// Extracted from HabboAirLauncher.deobf.js, line 163022.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/CategoryBaseView.as
// Obfuscated name: _i74df3cd2d86e16

class {
  static {
    n(this, "CategoryBaseView");
  }
  _window = null;
  var_104 = "";
  _currentTabName = "";
  var_38;
  var_217 = !1;
  constructor(e) {
    this.var_38 = e;
  }
  dispose() {
    (this._window?.dispose(),
      (this._window = null),
      (this.var_38 = null),
      (this.var_217 = !1));
  }
  init() {}
  reset() {
    ((this.var_104 = ""), (this._currentTabName = ""), (this.var_217 = !1));
  }
  getWindowContainer() {
    return (this.var_217 || this.init(), this._window);
  }
  showPalettes(e, r) {
    this.var_38?.controller.view._rec117ee421e0a7.showPalettes(r);
  }
  updateGridView(e) {
    this.var_38?.controller.view._rec117ee421e0a7._r3306bcdc249851(this.var_38, e);
  }
  _rcec831491d4501(e) {
    let t = this._window?.findChildByName(e)?.findChildByTag("BITMAP");
    TabUtils.setElementImage(t, !0);
  }
  _r66d51c6b273640(e) {
    let t = this._window?.findChildByName(e)?.findChildByTag("BITMAP");
    TabUtils.setElementImage(t, !1);
  }
}
