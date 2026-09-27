// Extracted from HabboAirLauncher.deobf.js, line 189249.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/club/ClubBuyItem.as
// Obfuscated name: _ie865a9251442e6

class {
  constructor(e, r) {
    this._offer = e;
    this.var_225 = r;
    let t = this.catalog,
      i = this._ra9cbaacb6b51fb(this._offer.vip ? "club_buy_vip_item" : "club_buy_hc_item");
    if (
      t == null ||
      i == null ||
      ((this._window = t.windowManager.buildFromXML(i)), this._window == null)
    )
      return;
    let s = t.localization;
    (s?._r43eae9731f5b27("catalog.club.item.header", "months", String(this._offer.months)),
      (this._window.findChildByName("item_header").caption =
        s?._r5f04530d38380d("catalog.club.item.header")?.value ?? ""),
      s?._r43eae9731f5b27("catalog.club.price", "price", String(this._offer.priceCredits)),
      (this._window.findChildByName("item_price").caption =
        s?._r5f04530d38380d("catalog.club.price")?.value ?? ""),
      this._window.findChildByName("item_buy")?.addEventListener(u.CLICK, this._rcccb747f704f98));
  }
  static {
    n(this, "ClubBuyItem");
  }
  _window = null;
  dispose() {
    (this._window?.dispose(), (this._window = null));
  }
  get window() {
    return this._window;
  }
  get catalog() {
    return this.var_225.viewer.catalog;
  }
  _rcccb747f704f98 = n(() => {
    let e = this.catalog;
    e?.showPurchaseConfirmation(this._offer, this.var_225.pageId, "", 1, null);
  }, "_rcccb747f704f98");
  _ra9cbaacb6b51fb(e) {
    return this.catalog?.assets.getAssetByName(e)?.content ?? null;
  }
}
