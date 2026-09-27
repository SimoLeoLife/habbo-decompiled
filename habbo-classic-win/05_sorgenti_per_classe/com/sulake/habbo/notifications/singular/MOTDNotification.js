// Estratto da HabboAirLauncher.deobf.js, riga 261928.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/notifications/singular/MOTDNotification.as
// Nome offuscato: _i34a530f27856ee

class a {
  static {
    n(this, "MOTDNotification");
  }
  static LIST_ITEM_HEIGHT_MARGIN = 20;
  _window = null;
  _messages;
  constructor(e, r, t) {
    if (((this._messages = e), t == null || r == null)) return;
    let i = r.getAssetByName("motd_notification_xml");
    if (
      i == null ||
      ((this._window = t.buildFromXML(rr(String(i.content ?? "")))), this._window == null)
    )
      return;
    ((this._window.procedure = this.eventHandler), this._window.center());
    let s = r.getAssetByName("motd_notification_item_xml");
    if (s == null) return;
    let o = t.buildFromXML(rr(String(s.content ?? ""))),
      d = this._window.findChildByName("message_list");
    if (!(o == null || d == null))
      for (let c of this._messages) {
        let f = o.clone(),
          l = f?.findChildByName("message_text");
        f == null ||
          l == null ||
          ((l.text = c), (f.height = l.textHeight + a.LIST_ITEM_HEIGHT_MARGIN), d.addListItem(f));
      }
  }
  dispose() {
    (this._window?.dispose(), (this._window = null));
  }
  eventHandler = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "close":
        case "header_button_close":
          this.dispose();
          return;
      }
  }, "eventHandler");
}
