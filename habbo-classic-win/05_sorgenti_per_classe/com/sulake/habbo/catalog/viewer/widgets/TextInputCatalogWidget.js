// Estratto da HabboAirLauncher.deobf.js, riga 195488.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/TextInputCatalogWidget.as
// Nome offuscato: _ifa8a7b4cca9cd4

class extends CatalogWidget {
  static {
    n(this, "TextInputCatalogWidget");
  }
  var_2666 = null;
  constructor(e) {
    super(e);
  }
  init() {
    return super.init()
      ? ((this.var_2666 = this._window?.findChildByName("input_text")),
        this.var_2666?.addEventListener(sr.const_900, this._r5435d363a29fe5),
        !0)
      : !1;
  }
  dispose() {
    (this.var_2666?.removeEventListener(sr.const_900, this._r5435d363a29fe5),
      (this.var_2666 = null),
      super.dispose());
  }
  _r5435d363a29fe5 = n((e) => {
    this.var_2666 != null && this.events?.dispatchEvent?.(new _i7ca93159eab558(this.var_2666.text));
  }, "_r5435d363a29fe5");
}
