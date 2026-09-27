// Extracted from HabboAirLauncher.deobf.js, line 70746.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/LocalizedTextField.as
// Obfuscated name: _i635cba25c0fa14

class a extends Pt {
  static {
    n(this, "LocalizedTextField");
  }
  static _localizationManager = null;
  _localized = !1;
  _key = "";
  static set localizationManager(e) {
    a._localizationManager = e;
  }
  static get localizationManager() {
    return a._localizationManager;
  }
  dispose() {
    this.removeOldLocalization(this._key);
  }
  set htmlText(e) {
    ((super.htmlText = e), this.checkLocalization(e));
  }
  get htmlText() {
    return super.htmlText;
  }
  set localization(e) {
    super.htmlText = e ?? "";
  }
  removeOldLocalization(e) {
    if (!this._localized) return;
    let r = a.localizationManager;
    (r?.removeListener(e.slice(2, e.indexOf("}")), this), (this._localized = !1));
  }
  checkLocalization(e) {
    let r = a.localizationManager;
    r != null &&
      e !== "" &&
      e.startsWith("${") &&
      (this.removeOldLocalization(this._key),
      (this._key = e),
      (this._localized = !0),
      r.registerListener(e.slice(2, e.indexOf("}")), this));
  }
}
