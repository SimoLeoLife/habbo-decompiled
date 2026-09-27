// Extracted from HabboAirLauncher.deobf.js, line 187462.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/MallOfferMinimizedView.as
// Obfuscated name: _ic33882b6b9e0c6

class a extends OfferView {
  static {
    n(this, "MallOfferMinimizedView");
  }
  static IMAGE_DEFAULT_URL = "targetedoffers/offer_default_icon.png";
  _ra09567381d1526;
  constructor(e, r) {
    (super(e, null), (this._ra09567381d1526 = r));
    let t = this.var_63?.catalog.assets.getAssetByName("targeted_offer_minimized_xml")?.content;
    if (
      t == null ||
      this.var_63 == null ||
      ((this._window = this.var_63.catalog.windowManager.buildFromXML(t)),
      this._window == null)
    )
      return;
    let i = this._window.findChildByName("txt_title"),
      s = this._window.findChildByName("bmp_icon"),
      o = this.var_63.catalog.getProperty("image.library.url");
    (i != null && (i.text = this.getLocalization(r.title)),
      s != null && (s.assetUri = `${o}${a.IMAGE_DEFAULT_URL}`),
      (this._window.procedure = this._r64e450f8ad70fb),
      this.var_63._ra96f07968c4ed0(this._window));
  }
  get window() {
    return this._window;
  }
  _r64e450f8ad70fb = n((e, r) => {
    e.type !== u.DOWN ||
      this.var_63 == null ||
      this._ra09567381d1526 == null ||
      this.var_63._r21c907afa1db07(this._ra09567381d1526);
  }, "_r64e450f8ad70fb");
}
