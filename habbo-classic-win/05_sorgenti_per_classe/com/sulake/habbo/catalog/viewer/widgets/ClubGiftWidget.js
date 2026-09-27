// Extracted from HabboAirLauncher.deobf.js, line 189422.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/ClubGiftWidget.as
// Obfuscated name: _i038b2507d20588

class a extends CatalogWidget {
  constructor(r, t, i) {
    super(r);
    this.var_63 = t;
    this._catalog = i;
  }
  static {
    n(this, "ClubGiftWidget");
  }
  _offers = new B();
  static DAYS_IN_MONTH = 31;
  dispose() {
    for (let r of this._offers.getValues()) r.dispose();
    (this._offers.dispose(),
      (this.var_63.widget = null),
      (this.var_63 = null),
      (this._catalog = null),
      super.dispose());
  }
  init() {
    return !this.window || !super.init()
      ? !1
      : ((this.var_63.widget = this),
        this._rd7318259311b4b(CatalogWidgetEnum.CLUB_GIFTS),
        this._window?.findChildByName("info_text") &&
          (this._window.findChildByName("info_text").caption = ""),
        this._window?.findChildByName("past_club_days") &&
          (this._window.findChildByName("past_club_days").caption = ""),
        this._window?.findChildByName("past_vip_days") &&
          (this._window.findChildByName("past_vip_days").caption = ""),
        this.update(),
        !0);
  }
  update() {
    (this.updateInfo(), this.updateList());
  }
  updateInfo() {
    let r = this._window?.findChildByName("info_text");
    if (r == null) return;
    let t = this.var_63.localization,
      i = "";
    (this.var_63._r6a9dca7b6b5588 > 0
      ? ((i = "catalog.club_gift.available"),
        t?._r43eae9731f5b27(i, "amount", this.var_63._r6a9dca7b6b5588.toString()))
      : this.var_63._r551d99ad913889 > 0
        ? ((i = "catalog.club_gift.days_until_next"),
          t?._r43eae9731f5b27(i, "days", this.var_63._r551d99ad913889.toString()))
        : this.var_63.hasClub
          ? (i = "catalog.club_gift.not_available")
          : (i = "catalog.club_gift.no_club"),
      (r.caption = t?.getLocalization(i) ?? i));
    let s = this.var_63.purse;
    if (s == null) return;
    let o = this._window?.findChildByName("past_club_days");
    if (o != null) {
      let c = (s.giftsAvailable ?? 0) + (s._r5268ed54bc12e0 ?? 0),
        f = c >= a.DAYS_IN_MONTH ? "catalog.club_gift.past_club.long" : "catalog.club_gift.past_club";
      (t?._r43eae9731f5b27(f, "days", String(c % a.DAYS_IN_MONTH)),
        t?._r43eae9731f5b27(f, "months", String(Math.floor(c / a.DAYS_IN_MONTH))),
        (o.caption = t?.getLocalization(f) ?? ""));
    }
    let d = this._window?.findChildByName("past_vip_days");
    if (d != null) {
      let c = s._r5268ed54bc12e0 ?? 0,
        f = c >= a.DAYS_IN_MONTH ? "catalog.club_gift.past_vip.long" : "catalog.club_gift.past_vip";
      (t?._r43eae9731f5b27(f, "days", String(c % a.DAYS_IN_MONTH)),
        t?._r43eae9731f5b27(f, "months", String(Math.floor(c / a.DAYS_IN_MONTH))),
        (d.caption = t?.getLocalization(f) ?? ""));
    }
  }
  updateList() {
    let r = this.var_63._rb0b9b572bdd5be(),
      t = this.var_63._re398c13e3c22ea(),
      i = this._window?.findChildByName("gift_list");
    for (let s of this._offers.getValues()) s.dispose();
    if ((this._offers.reset(), i?.destroyListItems(), !(t == null || i == null)))
      for (let s of r) {
        let o = t.getValue(s.offerId) ?? null,
          d = o != null ? this.createListItem(s, o) : null;
        d != null && (i.addListItem(d), this._offers.add(s.offerId, s));
      }
  }
  createListItem(r, t) {
    let i = r.product,
      s = i?.productData ?? null,
      o = this._catalog.utils.createWindow("club_gift_list_item"),
      d = this.var_63.purse;
    if (o == null || i == null || s == null || d == null) return null;
    ((o.procedure = this.windowProcedure),
      o.findChildByName("gift_name") && (o.findChildByName("gift_name").caption = s.name),
      o.findChildByName("gift_desc") && (o.findChildByName("gift_desc").caption = s.description));
    let c = t.var_4051
        ? t.var_5215 - (d._r5268ed54bc12e0 ?? 0)
        : t.var_5215 - ((d.giftsAvailable ?? 0) + (d._r5268ed54bc12e0 ?? 0)),
      f = "";
    !t.isSelectable && c > 0
      ? ((f = t.var_4051 ? "catalog.club_gift.vip_missing" : "catalog.club_gift.club_missing"),
        c >= a.DAYS_IN_MONTH && (f += ".long"),
        this.var_63.localization?._r43eae9731f5b27(f, "days", String(c % a.DAYS_IN_MONTH)),
        this.var_63.localization?._r43eae9731f5b27(
          f,
          "months",
          String(Math.floor(c / a.DAYS_IN_MONTH)),
        ))
      : this.var_63._r6a9dca7b6b5588 > 0 && (f = "catalog.club_gift.selectable");
    let l = o.findChildByName("months_required");
    l != null &&
      (l.caption = f.length > 0 ? (this.var_63.localization?.getLocalization(f) ?? f) : "");
    let b = o.findChildByName("vip_icon");
    b != null && (b.visible = t.var_4051);
    let _ = o.findChildByName("select_button");
    _ != null &&
      ((_.id = r.offerId),
      t.isSelectable && this.var_63._r6a9dca7b6b5588 > 0 ? _.enable() : _.disable());
    let h = o.findChildByName("image_container");
    return (
      h != null &&
        ((h.id = r.offerId),
        (h.procedure = this.windowProcedure),
        r._r10b16f6e9cda51 != null &&
          ((r._r10b16f6e9cda51.view = h),
          r._r10b16f6e9cda51.initProductIcon(this.page?.viewer.roomEngine ?? null))),
      o
    );
  }
  windowProcedure = n((r, t) => {
    let i = r,
      s = t;
    if (!(s == null || i == null)) {
      if (s.name === "select_button" && i.type === u.CLICK) {
        let o = this._offers.getValue(s.id);
        o != null && this.var_63._r41586776eeeb15(o);
        return;
      }
      s.name === "image_container" && i.type === u.OUT && this.hidePreview();
    }
  }, "windowProcedure");
  hidePreview() {}
}
