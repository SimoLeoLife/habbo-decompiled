// Estratto da HabboAirLauncher.deobf.js, riga 271321.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/TwinkleImages.as
// Nome offuscato: _i24fff1c103accc

class a {
  constructor(e) {
    this._questEngine = e;
    if (this._questEngine != null)
      for (let r = 1; r <= a.IMAGE_COUNT; r++)
        this._questEngine.windowManager._r55bb54da384802?.retrieveAsset(a.getImageUri(r), null);
  }
  static {
    n(this, "TwinkleImages");
  }
  static IMAGE_COUNT = 6;
  _rb09602dca8db26(e) {
    if (this._questEngine != null) {
      let r = this._questEngine.windowManager.assets.getAssetByName(
        this._questEngine.interpolate(a.getImageUri(e)),
      );
      if (r instanceof Qt) return r.content;
    }
    return null;
  }
  dispose() {
    this._questEngine = null;
  }
  get disposed() {
    return this._questEngine == null;
  }
  static getImageUri(e) {
    return `\${image.library.questing.url}ach_twinkle${e}.png`;
  }
}
