// Estratto da HabboAirLauncher.deobf.js, riga 189291.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/ClubBuyCatalogWidget.as

class extends CatalogWidget {
  static {
    n(this, "ClubBuyCatalogWidget");
  }
  var_63 = null;
  _offers = [];
  constructor(e) {
    super(e);
  }
  get isGift() {
    return !1;
  }
  dispose() {
    (this.var_63?._ra1964c3621bd2d(this),
      (this.var_63 = null),
      this.reset(),
      super.dispose());
  }
  init() {
    if (!super.init()) return !1;
    ((this._offers = []), this._rd7318259311b4b(CatalogWidgetEnum.CLUB_BUY));
    let e = this.catalog;
    return e == null
      ? !1
      : ((this.var_63 = e._r5a5819a5decf89()),
        this.var_63.registerVisualization(this),
        this.var_63.requestOffers(_id2bfaa31fdabf7._r3499229c907005),
        !0);
  }
  reset() {
    for (let e of this._offers) e.dispose();
    this._offers = [];
  }
  initClubType(e) {
    if (this.disposed) return;
    let r = this.catalog;
    if (r != null) {
      let t = r.localization,
        i = r.getPurse();
      if (i != null && t != null) {
        let s = (i.clubDays ?? 0) * 31 + (i.clubPeriods ?? 0);
        (t._r43eae9731f5b27("catalog.club.buy.remaining.hc", "days", String(s)),
          t._r43eae9731f5b27("catalog.club.buy.remaining.vip", "days", String(s)));
      }
    }
    try {
      if (this._window != null)
        switch (e) {
          case dr.NO_CLUB:
            ((this._window.findChildByName("club_header").caption =
              "${catalog.club.buy.header.none}"),
              (this._window.findChildByName("club_info").caption = "${catalog.club.buy.info.none}"),
              (this._window.findChildByName("club_remaining").visible = !1),
              (this._window.findChildByName("club_remaining_bg").visible = !1));
            break;
          case dr.CLUB:
            ((this._window.findChildByName("club_header").caption = "${catalog.club.buy.header.hc}"),
              (this._window.findChildByName("club_info").caption = "${catalog.club.buy.info.hc}"),
              (this._window.findChildByName("club_remaining").caption =
                "${catalog.club.buy.remaining.hc}"));
            break;
          case dr.VIP:
            ((this._window.findChildByName("club_header").caption =
              "${catalog.club.buy.header.vip}"),
              (this._window.findChildByName("club_info").caption = "${catalog.club.buy.info.vip}"),
              (this._window.findChildByName("club_remaining").caption =
                "${catalog.club.buy.remaining.vip}"),
              this.showClubInfo());
            break;
        }
    } catch {
      ErrorReportStorage.addDebugData("ClubBuyCatalogWidget", "initClubType - Window not properly constructed!");
    }
    this.initLinks();
  }
  showOffer(e) {
    if (this.disposed) return;
    e.page = this.page;
    let r;
    try {
      r = new ClubBuyItem(e, this.page);
    } catch {
      ErrorReportStorage.addDebugData("ClubBuyCatalogWidget", `showOffer - new ClubBuyItem(${String(e)}) crashed!`);
      return;
    }
    let t = e.vip ? "item_list_vip" : "item_list_hc",
      i = this._window?.findChildByName(t);
    (i != null && r.window != null && i.addListItem(r.window), this._offers.push(r));
  }
  get catalog() {
    return this.page?.viewer.catalog;
  }
  initLinks() {
    let e = this._window?.findChildByName("club_link");
    e != null &&
      (e.setParamFlag(N._re3bd61027cfd94),
      (e.mouseThreshold = 0),
      e.addEventListener(u.CLICK, this._r969f57a5e5b280));
  }
  _r969f57a5e5b280 = n((e) => {
    switch (e?.target?.name ?? "") {
      case "club_link": {
        let i = this.catalog?.getProperty("link.format.club", null) ?? "";
        this.openExternalLink(i);
        break;
      }
      default:
        break;
    }
  }, "_r969f57a5e5b280");
  openExternalLink(e) {
    e !== "" &&
      (this.catalog?.windowManager.alert(
        "${catalog.alert.external.link.title}",
        "${catalog.alert.external.link.desc}",
        0,
        this._r16d7d65ecad484,
      ),
      Ae.openWebPage(e, "habboMain"));
  }
  _r16d7d65ecad484 = n((...e) => {
    (e[0] ?? null)?.dispose();
  }, "_r16d7d65ecad484");
  showClubInfo() {
    let e = this._window?.findChildByName("item_list_hc"),
      r = this._ra9cbaacb6b51fb("club_buy_info_item");
    if (e == null || r == null || this.page == null) return;
    let t = this.catalog?.windowManager.buildFromXML(r) ?? null;
    t != null && e.addListItem(t);
  }
}
