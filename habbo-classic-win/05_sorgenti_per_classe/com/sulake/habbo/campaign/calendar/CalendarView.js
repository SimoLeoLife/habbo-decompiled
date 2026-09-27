// Estratto da HabboAirLauncher.deobf.js, riga 339515.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/campaign/calendar/CalendarView.as
// Nome offuscato: _i5214c973cffec6

class a {
  constructor(e, r) {
    this.var_63 = e;
    let t = this.var_63.assets.getAssetByName("campaign_calendar_xml")?.content;
    if (
      t == null ||
      ((this.var_313 = r.buildModalDialogFromXML(t)),
      this.var_313?.rootWindow == null || this.itemList == null)
    )
      return;
    let i = this.itemList.getListItemAt(0);
    if (i != null) {
      (this.itemList.removeListItems(), (this.itemList._re9172ef75e4fbc = !0));
      for (let s = 0; s < this.calendarData._rf9f59040b8aa0f; s += 1) {
        let o = N0.populateItem(i, this.calendarData, s);
        ((o.procedure = this._r64e450f8ad70fb), this.itemList.addListItem(o));
      }
      (this.var_63.context.dispatchEvent?.stage?.addEventListener?.(
        M.RESIZE,
        this.onResize,
      ),
        (this.window.procedure = this._r64e450f8ad70fb),
        this.onResize(null),
        this.setSelectedIndex(this.var_63.calendarData._r7568522c4b24c4));
    }
  }
  static {
    n(this, "CalendarView");
  }
  static MARGIN = 75;
  var_313 = null;
  var_652 = -1;
  _rb52cc0ab0880dd = 0;
  dispose() {
    (this.var_63.context.dispatchEvent?.stage?.removeEventListener?.(
      M.RESIZE,
      this.onResize,
    ),
      this.var_313?.dispose(),
      (this.var_313 = null));
  }
  setReceivedProduct(e, r = null) {
    (this.setInfoText("${campaign.calendar.heading.product.received}", e.name ?? ""),
      this.updateThumbnail(r));
  }
  imageReady(e, r) {
    this.updateThumbnail(r);
  }
  imageFailed(e) {}
  hide() {
    this.var_63._r11d756c943900d();
  }
  get window() {
    return this.var_313?.rootWindow;
  }
  get itemList() {
    return this.window?.findChildByName("calendar_itemlist");
  }
  get _rf377477da179e0() {
    return this.itemList?.numListItems > 0 ? (this.itemList.getListItemAt(0)?.width ?? 0) : 0;
  }
  get _r0785c9818a20a6() {
    return this.itemList?.spacing ?? 0;
  }
  get _r00ad0dfb413b98() {
    return this.window?.content?.width ?? 0;
  }
  _rec6bc2bac87177(e) {
    return e * this._rf377477da179e0 + Math.max(0, e - 1) * this._r0785c9818a20a6;
  }
  updateThumbnail(e) {
    if (e == null) return;
    let r = this.itemList.getListItemAt(this.var_652);
    r != null && N0.updateThumbnail(r, e);
  }
  onResize = n((e) => {
    let r = this.var_63.context.dispatchEvent?.stage;
    if (r == null || this.var_313?.rootWindow == null) return;
    ((this._rb52cc0ab0880dd = Math.floor(
      (r.stageWidth - a.MARGIN * 2) / (this._rf377477da179e0 + this._r0785c9818a20a6),
    )),
      (this.var_313.rootWindow.width = this._rec6bc2bac87177(this._rb52cc0ab0880dd)));
    let t = this.window.findChildByName("btn_back"),
      i = this.window.findChildByName("btn_forward");
    t != null && i != null && (i.x = this._r00ad0dfb413b98 - t.x - i.width);
    let s = this.window.findChildByName("calendar_scrollbar");
    (s != null && (s.width = this._r00ad0dfb413b98),
      this.window.center(),
      this.var_652 > -1 && this.setSelectedIndex(this.var_652));
  }, "onResize");
  _r64e450f8ad70fb = n((e, r) => {
    if (e.type === u.DOWN)
      switch (r.name) {
        case "btn_present": {
          let t = this.itemList.getListItemIndex(e.target?.parent ?? null);
          if (t < 0) return;
          t !== this.var_652
            ? this.setSelectedIndex(t)
            : this.var_63._r6513dfea4b20bf(this.var_652);
          break;
        }
        case "btn_back":
          this.setSelectedIndex(this.var_652 - 1);
          break;
        case "btn_forward":
          this.setSelectedIndex(this.var_652 + 1);
          break;
        case "btn_force_open":
          this.var_63._rdd72155a261595(this.var_652);
          break;
        case "header_button_close":
          this.hide();
          break;
      }
  }, "_r64e450f8ad70fb");
  setSelectedIndex(e) {
    if (e < 0 || e >= this.calendarData._rf9f59040b8aa0f) return;
    ((this.var_652 = e), (this.itemList.scrollH = this._rfd35bc426a8d62(e)));
    for (let o = 0; o < this.calendarData._rf9f59040b8aa0f; o += 1) {
      let d = this.itemList.getListItemAt(o);
      d != null && N0.updateState(d, this.calendarData, o, e);
    }
    CalendarSpinnerUtil.createGradients(this, this.var_652);
    let r = this.var_63.isAnyRoomController ? this.window.findChildByName("btn_force_open") : null;
    r != null && (r.visible = !0);
    let t = N0.resolveDayState(this.calendarData, e),
      i = "";
    switch (t) {
      case N0.STATE_LOCKED_AVAILABLE:
        i = "${campaign.calendar.info.available.desktop}";
        break;
      case N0.STATE_LOCKED_EXPIRED:
        i = "${campaign.calendar.info.expired}";
        break;
      case N0.STATE_LOCKED_FUTURE:
        i = "${campaign.calendar.info.future}";
        break;
      case N0.STATE_UNLOCKED:
        i = "${campaign.calendar.info.unlocked}";
        break;
    }
    let s = (
      this.var_63.localizationManager.getLocalization("campaign.calendar.heading.day") ?? ""
    ).replace("%number%", String(this.var_652 + 1));
    (this.setInfoText(s, i), r != null && (t !== N0.STATE_UNLOCKED ? r.enable() : r.disable()));
  }
  setInfoText(e, r) {
    let t = this.window.findChildByName("info_heading"),
      i = this.window.findChildByName("info_body");
    (t != null && (t.text = e ?? ""), i != null && (i.text = r ?? ""));
  }
  _rfd35bc426a8d62(e) {
    let r = this.itemList._radb221318b5180;
    return r <= 0
      ? 0
      : (this._rec6bc2bac87177(e) - (this._r00ad0dfb413b98 - this._rf377477da179e0) * 0.5) / r;
  }
  get calendarData() {
    return this.var_63.calendarData;
  }
}
