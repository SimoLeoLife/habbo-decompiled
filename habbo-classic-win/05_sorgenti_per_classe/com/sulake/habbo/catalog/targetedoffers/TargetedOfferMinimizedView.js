// Extracted from HabboAirLauncher.deobf.js, line 187639.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/TargetedOfferMinimizedView.as
// Obfuscated name: _ib1a42500adbcfb

class a extends OfferView {
  static {
    n(this, "TargetedOfferMinimizedView");
  }
  static IMAGE_DEFAULT_URL = "targetedoffers/offer_default_icon.png";
  constructor(e, r) {
    super(e, r);
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
      o = this.var_63.catalog.getProperty("image.library.url"),
      d = r._r208659c203d13d.length > 0 ? r._r208659c203d13d : a.IMAGE_DEFAULT_URL;
    if (
      (i != null && (i.text = this.getLocalization(r.title)),
      s != null && (s.assetUri = `${o}${d}`),
      (this._r713b7abae09edb = this.getLocalization("targeted.offer.minimized.timeleft", "")),
      this._offer?.expirationTime === 0)
    ) {
      let c = this._window.findChildByName("itemlist"),
        f = this._window.findChildByName("cnt_time_left");
      c != null && f != null && c.removeListItem(f);
    } else this._ra50b20a2cf6128();
    ((this._window.procedure = this._r64e450f8ad70fb),
      this.var_63._ra96f07968c4ed0(this._window));
  }
  get window() {
    return this._window;
  }
  _r64e450f8ad70fb = n((e, r) => {
    e.type !== u.DOWN ||
      this.var_63 == null ||
      this._offer == null ||
      this.var_63.maximizeOffer(this._offer);
  }, "_r64e450f8ad70fb");
}
