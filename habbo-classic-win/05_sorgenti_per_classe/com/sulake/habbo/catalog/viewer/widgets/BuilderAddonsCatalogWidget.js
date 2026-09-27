// Estratto da HabboAirLauncher.deobf.js, riga 188127.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/BuilderAddonsCatalogWidget.as
// Nome offuscato: _i42e1ccc59637aa

class extends CatalogWidget {
  constructor(r, t) {
    super(r);
    this._catalog = t;
  }
  static {
    n(this, "BuilderAddonsCatalogWidget");
  }
  init() {
    if (!super.init()) return !1;
    this._window.procedure = this.windowProcedure;
    let r = this._window?.findChildByName("addons_list"),
      t = r?.removeListItemAt(0),
      i = this._catalog._rc7d5aba394e3cd > 0,
      s = this.page?.offers ?? [];
    if (
      (this._window?.findChildByName("trial_warning") &&
        (this._window.findChildByName("trial_warning").visible = !i),
      r == null || t == null)
    )
      return !0;
    let o = 0;
    for (let d of s) {
      let c = t.clone();
      (c.findChildByName("item_header") && (c.findChildByName("item_header").caption = d._r0f66f124c65f91),
        c.findChildByName("item_price") &&
          (c.findChildByName("item_price").caption = d.priceInCredits.toString()));
      let f = c.findChildByName("item_buy");
      (f != null && ((f.id = o), i || f.disable()),
        d.priceInActivityPoints > 0 &&
          (c.findChildByName("diamonds_icon") && (c.findChildByName("diamonds_icon").visible = !0),
          c.findChildByName("diamonds_price") && (c.findChildByName("diamonds_price").visible = !0),
          c.findChildByName("diamonds_price") &&
            (c.findChildByName("diamonds_price").caption = d.priceInActivityPoints.toString())),
        r.addListItem(c),
        o++);
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
