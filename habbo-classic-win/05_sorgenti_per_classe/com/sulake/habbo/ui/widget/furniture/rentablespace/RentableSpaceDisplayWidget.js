// Extracted from HabboAirLauncher.deobf.js, line 318842.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/rentablespace/RentableSpaceDisplayWidget.as
// Obfuscated name: _i85e27b6035b135

class a extends RoomWidgetBase {
  static {
    n(this, "RentableSpaceDisplayWidget");
  }
  static errorCodesToMessages = new Map([
    [100, "${rentablespace.widget.error_reason_already_rented}"],
    [101, "${rentablespace.widget.error_reason_not_rented}"],
    [102, "${rentablespace.widget.error_reason_not_rented_by_you}"],
    [103, "${rentablespace.widget.error_reason_can_rent_only_one_space}"],
    [200, "${rentablespace.widget.error_reason_not_enough_credits}"],
    [201, "${rentablespace.widget.error_reason_not_enough_duckets}"],
    [202, "${rentablespace.widget.error_reason_no_permission}"],
    [203, "${rentablespace.widget.error_reason_no_habboclub}"],
    [300, "${rentablespace.widget.error_reason_disabled}"],
    [400, "${rentablespace.widget.error_reason_generic}"],
  ]);
  _window = null;
  _roomObject = null;
  constructor(e, r, t, i) {
    (super(e, r, t, i), (this.ownHandler.widget = this));
  }
  get mainWindow() {
    return this._window;
  }
  get ownHandler() {
    return this._r16afd202c77c85;
  }
  hide(e) {
    this._roomObject === e &&
      (this._window?.dispose(), (this._window = null), (this._roomObject = null));
  }
  dispose() {
    this.disposed || (this.hide(this._roomObject), super.dispose());
  }
  show(e) {
    ((this._roomObject = e), this.updateWidgetState());
  }
  updateWidgetState() {
    this._roomObject != null &&
      this.ownHandler._r1669dc743860b4(this._roomObject.getId());
  }
  populateRentInfo(e, r, t, i, s, o, d) {
    if (this._roomObject != null && (this.createWindow(), this._window != null)) {
      if (e)
        ((this._window.findChildByName("rent_view").visible = !1),
          (this._window.findChildByName("error_view").visible = !1),
          (this._window.findChildByName("rented_view").visible = !0),
          (this._window.findChildByName("renter_name").caption = s),
          (this._window.findChildByName("time_remaining_label").caption = ra.getFriendlyTime(
            this.ownHandler.container?.localization ?? this.localizations,
            o,
          )),
          (this._window.findChildByName("cancel_rent_button").visible =
            (this.ownHandler.container?._rc2337883ff003a(this._roomObject) ?? !1) ||
            (this.ownHandler.container?.sessionDataManager?.hasSecurity(class_1794.MODERATOR) ?? !1)),
          this._window.findChildByName("rented_view")?.arrangeListItems());
      else {
        ((this._window.findChildByName("rented_view").visible = !1),
          (this._window.findChildByName("error_view").visible = !1),
          (this._window.findChildByName("rent_view").visible = !0),
          (this._window.findChildByName("price_label").caption = `${d} x`));
        let c = d <= this.ownHandler._r229f1246af5ab2(),
          f = this._window.findChildByName("cant_rent_error"),
          l = this._window.findChildByName("rent_button");
        (r
          ? c
            ? ((f.visible = !1), l?.enable())
            : ((f.caption = a.errorCodesToMessages.get(200) ?? ""), (f.visible = !0))
          : ((f.caption = a.errorCodesToMessages.get(t) ?? ""), (f.visible = !0)),
          this._window.findChildByName("rent_view")?.arrangeListItems());
      }
      this._window.visible || (this._window.visible = !0);
    }
  }
  showErrorView(e) {
    this._window != null &&
      ((this._window.findChildByName("rent_view").visible = !1),
      (this._window.findChildByName("rented_view").visible = !1),
      (this._window.findChildByName("error_view").visible = !0),
      (this._window.findChildByName("error_message").caption = a.errorCodesToMessages.get(e) ?? ""));
  }
  createWindow() {
    if (this._window != null) return;
    let e = this.assets?.getAssetByName("rentablespace_xml");
    e?.content != null &&
      ((this._window = this.windowManager?.buildFromXML(e.content)),
      this._window != null &&
        ((this._window.procedure = this.windowProcedure),
        this._window.center(),
        this._window.findChildByName("rent_button")?.disable(),
        (this._window.findChildByName("rented_view").visible = !1),
        (this._window.findChildByName("error_view").visible = !1)));
  }
  windowProcedure = n((e, r) => {
    if (!(e.type !== u.CLICK || this._roomObject == null))
      switch (r.name) {
        case "header_button_close":
        case "error_button_close":
          this.hide(this._roomObject);
          break;
        case "rent_button":
          this.ownHandler._rc9b335a0fef7a4(this._roomObject.getId());
          break;
        case "cancel_rent_button":
          this.ownHandler._rfc8afddbd2d10c(this._roomObject.getId());
          break;
      }
  }, "windowProcedure");
}
