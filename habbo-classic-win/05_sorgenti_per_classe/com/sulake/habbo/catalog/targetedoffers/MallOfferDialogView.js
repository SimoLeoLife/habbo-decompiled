// Extracted from HabboAirLauncher.deobf.js, line 187324.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/MallOfferDialogView.as
// Obfuscated name: _i0ffe7cbfdd6f24

class {
  constructor(e, r) {
    this.var_63 = e;
    this._offer = r;
    let t = this.var_63?.catalog.assets.getAssetByName("targeted_offer_habbomall_xml")?.content;
    if (
      t == null ||
      this.var_63 == null ||
      this._offer == null ||
      ((this._window = this.var_63.catalog.windowManager.buildFromXML(t)),
      this._window == null)
    )
      return;
    let i = this.getLocalization(this._offer.title),
      s = this._window,
      o = this._window.findChildByName("txt_title"),
      d = this._window.findChildByName("txt_description"),
      c = this._window.findChildByName("bmp_illustration");
    if (
      (s?.title != null && (s.title.text = i),
      o != null && (o.text = i),
      d != null &&
        (d.text = this.getLocalization(
          this._offer.description,
          this._offer.description,
        )),
      c != null && this._offer.imageUrl.length > 0)
    ) {
      let f = this.var_63.catalog.getProperty("image.library.url");
      c.assetUri = `${f}${this._offer.imageUrl}`;
    }
    ((this._window.procedure = this._r64e450f8ad70fb), this._window.center());
  }
  static {
    n(this, "MallOfferDialogView");
  }
  _window = null;
  dispose() {
    (this._window?.dispose(), (this._window = null));
  }
  _r64e450f8ad70fb = n((e, r) => {
    if (!(e.type !== u.DOWN || this.var_63 == null || this._offer == null))
      switch (r.name) {
        case "header_button_close":
          this.var_63._ra55d26082ecac6(this._offer);
          break;
        case "btn_buy":
          this.var_63._r87e161c15a332b(this._offer);
          break;
      }
  }, "_r64e450f8ad70fb");
  getLocalization(e, r = null) {
    return this.var_63?.catalog.localization?.getLocalization(e, r ?? e) ?? r ?? e;
  }
}
