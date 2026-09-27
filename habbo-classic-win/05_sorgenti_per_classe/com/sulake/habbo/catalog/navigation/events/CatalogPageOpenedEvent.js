// Extracted from HabboAirLauncher.deobf.js, line 144249.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/navigation/events/CatalogPageOpenedEvent.as
// Obfuscated name: _i1d5b872bc8af38

class a extends M {
  constructor(r, t, i = !1, s = !1) {
    super(a.CATALOG_PAGE_OPENED, i, s);
    this.var_2762 = r;
    this.var_5526 = t;
  }
  static {
    n(this, "CatalogPageOpenedEvent");
  }
  static CATALOG_PAGE_OPENED = "CATALOG_PAGE_OPENED";
  get pageId() {
    return this.var_2762;
  }
  get pageLocalization() {
    return this.var_5526;
  }
  clone() {
    return new a(this.var_2762, this.var_5526, this.bubbles, this.cancelable);
  }
}
