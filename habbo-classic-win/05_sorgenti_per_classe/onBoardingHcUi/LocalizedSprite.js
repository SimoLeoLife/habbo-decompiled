// Extracted from HabboAirLauncher.deobf.js, line 71049.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/onBoardingHcUi/LocalizedSprite.as
// Obfuscated name: _ide2e6c877ee0d8

class a extends Sprite {
  static {
    n(this, "LocalizedSprite");
  }
  static _localizationManager = null;
  _localized = !1;
  static set localizationManager(e) {
    a._localizationManager = e;
  }
  static get localizationManager() {
    return a._localizationManager;
  }
  dispose() {
    this.removeOldLocalization(this.getLocalizationKey());
  }
  set localization(e) {
    this.localizedText(e ?? "");
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
      ((this._localized = !0), r.registerListener(e.slice(2, e.indexOf("}")), this));
  }
  getLocalizationKey() {
    return "";
  }
  localizedText(e) {}
}
