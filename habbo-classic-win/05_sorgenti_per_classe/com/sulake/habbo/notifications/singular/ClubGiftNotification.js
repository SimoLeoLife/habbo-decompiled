// Estratto da HabboAirLauncher.deobf.js, riga 262662.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/ClubGiftNotification.as
// Nome offuscato: _ibd71555efc141a

class a {
  static {
    n(this, "ClubGiftNotification");
  }
  static TOOLBAR_EXTENSION_ID = "club_gift_notification";
  static LINK_COLOR_NORMAL = 16777215;
  static LINK_COLOR_HIGHLIGHT = 12247545;
  static ICON_STYLE_CLUB = 13;
  _window = null;
  _catalog;
  _toolbar;
  _r956616011887ff = null;
  var_5405 = !1;
  constructor(e, r, t, i, s) {
    if (r == null || t == null || i == null) {
      ((this._catalog = null), (this._toolbar = null));
      return;
    }
    ((this._catalog = i), (this._toolbar = s));
    let o = r.getAssetByName("club_gift_notification_xml");
    if (
      o == null ||
      ((this._window = t.buildFromXML(rr(String(o.content ?? "")))), this._window == null)
    )
      return;
    let d = this._window;
    ((d.procedure = this.eventHandler),
      this._toolbar?.extensionView?._ra96f07968c4ed0(a.TOOLBAR_EXTENSION_ID, d),
      (this._r956616011887ff = d.findChildByName("cancel_link")));
    let c = d.findChildByName("cancel_link_region");
    (c != null &&
      (c.addEventListener(u.OVER, this._rad325cc53260a0), c.addEventListener(u.OUT, this.onMousetOut)),
      this.setClubIcon(a.ICON_STYLE_CLUB));
  }
  get visible() {
    return this._window?.visible ?? !1;
  }
  get isCancelled() {
    return this.var_5405;
  }
  dispose() {
    (this._toolbar?.extensionView?._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID),
      this._window?.dispose(),
      (this._window = null),
      (this._catalog = null),
      (this._toolbar = null));
  }
  eventHandler = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "open_catalog_button":
          (this._catalog?.openCatalogPage(CatalogPageName.CATALOG_PAGE_CLUB_GIFTS), this.dispose());
          break;
        case "cancel_link_region":
        case "cancel_link":
          ((this.var_5405 = !0), this.dispose());
          return;
      }
  }, "eventHandler");
  _rad325cc53260a0 = n((e) => {
    this._r956616011887ff != null && (this._r956616011887ff.textColor = a.LINK_COLOR_HIGHLIGHT);
  }, "_rad325cc53260a0");
  onMousetOut = n((e) => {
    this._r956616011887ff != null && (this._r956616011887ff.textColor = a.LINK_COLOR_NORMAL);
  }, "onMousetOut");
  setClubIcon(e) {
    let r = this._window?.findChildByName("club_icon");
    r != null && ((r.style = e), r.invalidate());
  }
}
