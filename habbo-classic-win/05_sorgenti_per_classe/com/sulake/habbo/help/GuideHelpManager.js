// Estratto da HabboAirLauncher.deobf.js, riga 231469.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/GuideHelpManager.as
// Nome offuscato: _i8b80634b02a416

class {
  constructor(e) {
    this._habboHelp = e;
    ((this._rcffad91cc40373 = new HelpController(this)),
      (this._rfa24702f766ffb = new v7e(this)),
      (this._r42498dda299c56 = new ChatReviewReporterFeedbackCtrl(this._habboHelp)),
      this._habboHelp._rf3db13932bfb60?._r2e106e2349a0b6(new class_2117(this.onRoomEnter)));
  }
  static {
    n(this, "GuideHelpManager");
  }
  _rcffad91cc40373;
  _rfa24702f766ffb;
  _r42498dda299c56;
  _disposed = !1;
  _rf018a884aaba34 = !1;
  var_1770 = null;
  get habboHelp() {
    return this._habboHelp;
  }
  dispose() {
    this._disposed ||
      (this._rcffad91cc40373?.dispose(),
      (this._rcffad91cc40373 = null),
      this._rfa24702f766ffb?.dispose(),
      (this._rfa24702f766ffb = null),
      this._r42498dda299c56?.dispose(),
      (this._r42498dda299c56 = null),
      this.var_1770 != null && (clearTimeout(this.var_1770), (this.var_1770 = null)),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  _racc3c0ed238b27() {
    this._rfa24702f766ffb?._racc3c0ed238b27();
  }
  showPendingTicket(e) {
    this._rcffad91cc40373?.showPendingTicket(e);
  }
  onInput(e) {
    this._rfa24702f766ffb?.onInput(e);
  }
  openReportWindow() {
    this._rfa24702f766ffb?.openReportWindow();
  }
  _rf7d4bef940b9a9(e) {
    this._r42498dda299c56?.show(e);
  }
  openTourPopup() {
    (this._rcffad91cc40373?.openTourPopup(), (this._rf018a884aaba34 = !0));
  }
  IIDHabboCatalog(e) {
    if (e.type === HabboToolbarEvent.TOOLBAR_CLICK)
      switch (e._re9c693c8b69b04) {
        case Me.HELP:
          this._habboHelp._rcc22aff4331642();
          break;
        case Me.GUIDE:
          this._racc3c0ed238b27();
          break;
      }
  }
  onRoomEnter = n(() => {
    if (
      !this._habboHelp.newUserTourEnabled ||
      !this._habboHelp.newIdentity ||
      this._rf018a884aaba34 ||
      this._habboHelp.sessionDataManager?.isRealNoob
    )
      return;
    let e = this.getTourPopupDelay();
    ((this.var_1770 = setTimeout(() => {
      this._disposed ||
        (this._habboHelp.tracking?.trackEventLog("Help", "", "tour.new_user.show", "", e),
        this._habboHelp.trackGoogle("newbieTourWindow", "timer_popupShown"),
        this.openTourPopup());
    }, e)),
      this._habboHelp.tracking?.trackEventLog("Help", "", "tour.new_user.create", "", e),
      this._habboHelp.trackGoogle("newbieTourWindow", "timer_popupCreated"));
  }, "onRoomEnter");
  getTourPopupDelay() {
    return this._habboHelp.getInteger("guide.help.new.user.tour.popup.delay", 30) * 1e3;
  }
}
