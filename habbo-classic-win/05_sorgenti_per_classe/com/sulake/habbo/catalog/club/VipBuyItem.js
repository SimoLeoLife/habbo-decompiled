// Estratto da HabboAirLauncher.deobf.js, riga 190376.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/VipBuyItem.as
// Nome offuscato: _i8b19b21dd60240

class {
  constructor(e, r, t) {
    this._offer = e;
    this._catalog = r;
    this.var_5802 = t;
    if (
      ((this._window = this._catalog.utils.createWindow("vip_buy_item")),
      this._window == null)
    )
      return;
    let i = this._catalog.localization,
      s = "-";
    (this._offer.months > 0
      ? (i?._r43eae9731f5b27(
          "catalog.vip.item.header.months",
          "num_months",
          String(this._offer.months),
        ),
        (s = i?._r5f04530d38380d("catalog.vip.item.header.months")?.value ?? s))
      : (i?._r43eae9731f5b27(
          "catalog.vip.item.header.days",
          "num_days",
          String(this._offer._rbf1116149613a0),
        ),
        (s = i?._r5f04530d38380d("catalog.vip.item.header.days")?.value ?? s)),
      (this._window.findChildByName("item_header").caption = s),
      this._catalog.utils._ra10ac9ff6556f3(
        this._window.findChildByName("item_price"),
        this._offer,
      ),
      this._window.findChildByName("item_buy")?.addEventListener(u.CLICK, this._rcccb747f704f98));
    let o = this._window.findChildByName("item_gift");
    this._offer.giftable
      ? o?.addEventListener(u.CLICK, this._r63fe7bb7138a9e)
      : o != null && (o.visible = !1);
  }
  static {
    n(this, "VipBuyItem");
  }
  _window = null;
  _disposed = !1;
  dispose() {
    this._disposed ||
      (this._window?.dispose(), (this._window = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  _rcccb747f704f98 = n(() => {
    (this._catalog._ra2855e753d5c74(!1),
      this._catalog.showPurchaseConfirmation(
        this._offer,
        this._offer.page?.pageId ?? -1,
        "",
        1,
        null,
      ));
  }, "_rcccb747f704f98");
  _r63fe7bb7138a9e = n(() => {
    (this._catalog._ra2855e753d5c74(!0),
      this._catalog.showPurchaseConfirmation(
        this._offer,
        this._offer.page?.pageId ?? -1,
        "",
        1,
        null,
      ));
  }, "_r63fe7bb7138a9e");
}
