// Estratto da HabboAirLauncher.deobf.js, riga 263561.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/SafetyLockedNotification.as
// Nome offuscato: _i80a8bc82ca9c71

class a {
  static {
    n(this, "SafetyLockedNotification");
  }
  static TOOLBAR_EXTENSION_ID = "safety_locked_notification";
  static LINK_COLOR_NORMAL = 16777215;
  static LINK_COLOR_HIGHLIGHT = 12247545;
  _window = null;
  _catalog;
  _toolbar;
  _r956616011887ff = null;
  constructor(e, r, t, i, s) {
    if (r == null || t == null || i == null) {
      ((this._catalog = null), (this._toolbar = null));
      return;
    }
    ((this._catalog = i), (this._toolbar = s));
    let o = r.getAssetByName("safety_locked_notification_xml");
    if (
      o == null ||
      ((this._window = t.buildFromXML(rr(String(o.content ?? "")))), this._window == null)
    )
      return;
    let d = this._window;
    ((d.procedure = this.eventHandler),
      this._toolbar?.extensionView?._ra96f07968c4ed0(a.TOOLBAR_EXTENSION_ID, d),
      (this._r956616011887ff = d.findChildByName("unlock_link")));
    let c = d.findChildByName("unlock_link_region");
    c != null &&
      (c.addEventListener(u.OVER, this._rad325cc53260a0), c.addEventListener(u.OUT, this.onMousetOut));
  }
  get visible() {
    return this._window?.visible ?? !1;
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
        case "unlock_link_region":
        case "unlock_link": {
          let t = this._toolbar?.getProperty("link.format.safetylock_unlock") ?? "";
          t.length > 0 && Ae.openWebPage(t, "habboMain");
          return;
        }
      }
  }, "eventHandler");
  _rad325cc53260a0 = n((e) => {
    this._r956616011887ff != null && (this._r956616011887ff.textColor = a.LINK_COLOR_HIGHLIGHT);
  }, "_rad325cc53260a0");
  onMousetOut = n((e) => {
    this._r956616011887ff != null && (this._r956616011887ff.textColor = a.LINK_COLOR_NORMAL);
  }, "onMousetOut");
}
