// Extracted from HabboAirLauncher.deobf.js, line 188275.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BuilderLoyaltyCatalogWidget.as
// Obfuscated name: _i698c6558e68b81

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "BuilderLoyaltyCatalogWidget");
  }
  init() {
    if (!super.init()) return !1;
    this._window.procedure = this.windowProcedure;
    let r = this._window?.findChildByName("loyalty_list"),
      t = r?.removeListItemAt(0),
      i = this.page?.offers ?? [];
    if (r == null || t == null) return !0;
    let s = 0;
    for (let o of i) {
      let d = t.clone();
      d.findChildByName("item_header") && (d.findChildByName("item_header").caption = o._r0f66f124c65f91);
      let c = d.findChildByName("item_cost_box");
      (c && this._catalog.utils._ra10ac9ff6556f3(c, o),
        d.findChildByName("item_buy") && (d.findChildByName("item_buy").id = s),
        r.addListItem(d),
        s++);
    }
    return !0;
  }
  windowProcedure = n((r, t) => {
    let i = r,
      s = t;
    if (i?.type !== u.CLICK || s?.name !== "item_buy") return;
    let o = this.page?.offers[s.id];
    o != null &&
      this._catalog.showPurchaseConfirmation(o, this.page?.pageId ?? -1, "", 1, null);
  }, "windowProcedure");
}
