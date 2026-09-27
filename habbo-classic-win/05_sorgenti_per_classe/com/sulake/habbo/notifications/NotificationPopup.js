// Estratto da HabboAirLauncher.deobf.js, riga 262580.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/NotificationPopup.as
// Nome offuscato: _ifa5d6d31b765cb

class a {
  static {
    n(this, "NotificationPopup");
  }
  static CRITICAL_COLOR = 4291047229;
  _notifications;
  var_408;
  _type;
  _parameters;
  constructor(e, r, t) {
    ((this._notifications = e), (this._type = r), (this._parameters = t));
    let i = this.getNotificationPart("title", !0),
      s = this.getNotificationPart("message", !0).replace(/\\r/g, "\r"),
      o = this.getNotificationPart("linkUrl", !1),
      d = o != null && o.substring(0, 6) === "event:",
      c = null;
    o != null && (c = this.getNotificationPart("linkTitle", !1) ?? o);
    let f = e.assets.getAssetByName("layout_notification_popup_xml"),
      l = f != null ? (e.windowManager?.buildModalDialogFromXML(f.content) ?? null) : null;
    this.var_408 = l;
    let b = l?.rootWindow;
    if (b == null) return;
    if (
      (this._parameters.getValue("alertStyle") === "critical" && (b.color = a.CRITICAL_COLOR),
      (b.procedure = this.windowProcedure),
      (b.caption = i),
      o != null)
    )
      if (d) {
        let p = b.findChildByName("action");
        p != null && ((p.visible = !0), (p.caption = c ?? ""));
      } else {
        let p = b.findChildByName("link");
        p != null && ((p.visible = !0), (p.caption = c ?? ""));
      }
    let _ = b.findChildByName("message");
    _ != null && (_.caption = s);
    let h = b.findChildByName("illustration");
    h != null && (h.assetUri = e.getNotificationImageUrl(t, r));
  }
  get disposed() {
    return this.var_408 == null;
  }
  dispose() {
    this.disposed ||
      (this.var_408?.dispose(),
      (this.var_408 = null),
      (this._notifications = null),
      (this._type = null),
      (this._parameters = null));
  }
  windowProcedure = n((e, r) => {
    if (!this.disposed)
      switch (e.type) {
        case u.CLICK:
          switch (r.name) {
            case "header_button_close":
              this.dispose();
              break;
            case "action":
              (this._notifications?._r6b6c989018eb05(
                (this.getNotificationPart("linkUrl", !1) ?? "").substring(6),
              ),
                this.dispose());
              break;
            case "link":
              Ae.openWebPage(this.getNotificationPart("linkUrl", !1) ?? "", "habboMain");
              break;
          }
          break;
        case y.const_755:
          if (r.name === "illustration") {
            let t = r.parent;
            t?.limits != null && (t.limits.minHeight = r.height);
          }
          break;
      }
  }, "windowProcedure");
  getNotificationPart(e, r) {
    return this._notifications?.getNotificationPart(this._parameters, this._type ?? "", e, r) ?? "";
  }
}
