// Estratto da HabboAirLauncher.deobf.js, riga 319432.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/trophy/NikoTrophyView.as
// Nome offuscato: _ie6a3e2be1f6602

class {
  constructor(e, r) {
    this.var_17 = e;
    this._r9213a44374ce7e = r;
  }
  static {
    n(this, "NikoTrophyView");
  }
  _window = null;
  dispose() {
    (this._window?.dispose(), (this._window = null), (this.var_17 = null));
  }
  showInterface() {
    let e = this.var_17?.assets?.getAssetByName("niko_trophy");
    if (e?.content == null) return !1;
    (this._window == null &&
      (this._window = this.var_17?.windowManager?.buildFromXML(e.content)),
      this._window?.center(),
      this._window
        ?.findChildByName("header_button_close")
        ?.addEventListener(u.CLICK, this._r254245879064d6));
    let t = this._window?.findChildByName("html_textbox");
    if (t != null && this.var_17?.localizations != null)
      switch (this._r9213a44374ce7e) {
        case Wg.VIEW_NIKO_GOLD:
          t.text = this.var_17.localizations.getLocalization("niko.trophy.description.gold");
          break;
        case Wg.VIEW_NIKO_SILVER:
          t.text = this.var_17.localizations.getLocalization("niko.trophy.description.silver");
          break;
      }
    this._window?.findChildByName("store_link")?.addEventListener(u.CLICK, this._r920df4d6647954);
    let s = this._window?.findChildByName("date");
    s != null &&
      this.var_17?.localizations != null &&
      (this.var_17.localizations._r43eae9731f5b27(
        "trophy.niko.date",
        "date",
        this.var_17.date,
      ),
      (s.text = this.var_17.localizations.getLocalization("trophy.niko.date")));
    let o = this._window?.findChildByName("preview_image");
    return (
      o != null &&
        (o.assetUri =
          this._r9213a44374ce7e === Wg.VIEW_NIKO_GOLD
            ? "${image.library.url}niko/niko_trophy_gold.png"
            : "${image.library.url}niko/niko_trophy_silver.png"),
      (o = this._window?.findChildByName("store_image")),
      o != null &&
        this.var_17?.configuration != null &&
        (o.assetUri = `\${image.library.url}niko/${this.var_17.configuration.getProperty("niko.trophy.appstore.image")}.png`),
      this._window
        ?.findChildByName("appstore_region")
        ?.addEventListener(u.CLICK, this._r920df4d6647954),
      !0
    );
  }
  disposeInterface() {
    (this._window?.dispose(), (this._window = null));
  }
  _r920df4d6647954 = n((e) => {
    let r = this.var_17?.configuration?.getProperty("niko.appstore.link.url") ?? "";
    Ae.openWebPage(r, "habboMain");
  }, "_r920df4d6647954");
  _r254245879064d6 = n((e) => {
    this.disposeInterface();
  }, "_r254245879064d6");
}
