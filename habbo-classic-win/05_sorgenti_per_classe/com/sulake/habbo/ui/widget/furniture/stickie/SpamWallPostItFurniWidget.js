// Estratto da HabboAirLauncher.deobf.js, riga 319236.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/stickie/SpamWallPostItFurniWidget.as
// Nome offuscato: _i8e77c984fbd756

class extends MX {
  static {
    n(this, "SpamWallPostItFurniWidget");
  }
  _location = "";
  constructor(e, r, t = null) {
    (super(e, r, t), (this._windowName = "spamwall_postit_container"));
  }
  dispose() {
    ((this.var_344 = -1), (this._location = ""), super.dispose());
  }
  registerUpdateEvents(e) {
    (e?.addEventListener?.(RoomWidgetSpamWallPostItEditEvent.const_417, this._r3984d7a7485e2f), super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e?.removeEventListener?.(RoomWidgetSpamWallPostItEditEvent.const_417, this._r3984d7a7485e2f);
  }
  _r89f0690ee52550(e) {}
  _rd0a234a69dd58a() {
    this.var_344 !== -1 &&
      (this._r88f53700ec50c5(),
      this._r1515e6bde00451?.RoomWidgetLetUserInMessage(
        new RoomWidgetSpamWallPostItFinishEditingMessage(RoomWidgetSpamWallPostItFinishEditingMessage.SEND_POSTIT_DATA, this.var_344, this._location, this._text, this._r71a2056cb98d41),
      ),
      this.hideInterface(!1));
  }
  _r59d41da1db6199(e) {
    this._r88f53700ec50c5();
    let r = e.toString(16).toUpperCase();
    (r.length > 6 && (r = r.slice(r.length - 6)),
      r !== this._r71a2056cb98d41 && ((this._r71a2056cb98d41 = r), this.showInterface()));
  }
  _rfe691b2575e6f7() {
    this.hideInterface(!1);
  }
  _r3984d7a7485e2f = n((e) => {
    (this.hideInterface(!1),
      (this.var_344 = e.objectId),
      (this._location = e.location),
      (this.hasAsset = e.objectType),
      (this._text = ""),
      (this._r71a2056cb98d41 = "FFFF33"),
      (this.var_63 = !0),
      this.showInterface());
  }, "_r3984d7a7485e2f");
}
