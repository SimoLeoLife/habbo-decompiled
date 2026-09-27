// Extracted from HabboAirLauncher.deobf.js, line 229699.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/guidehelp/HelpController.as
// Obfuscated name: _i8b04e8d294f3e0

class {
  constructor(e) {
    this._r81763b91025ebb = e;
    this._habboHelp = this._r81763b91025ebb?.habboHelp ?? null;
  }
  static {
    n(this, "HelpController");
  }
  _disposed = !1;
  _r22a12f56545ee3 = null;
  _tourPopup = null;
  _r827d4d4030bbd9 = 0;
  var_654 = null;
  _habboHelp;
  dispose() {
    this._disposed ||
      (this.closeWindow(),
      this.closeTourPopup(),
      this.var_654?.dispose(),
      (this.var_654 = null),
      (this._habboHelp = null),
      (this._r81763b91025ebb = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  closeWindow() {
    (this._r22a12f56545ee3?.dispose(), (this._r22a12f56545ee3 = null));
  }
  openTourPopup() {
    this._tourPopup != null ||
      this._disposed ||
      (this._habboHelp != null &&
        ((this._r827d4d4030bbd9 = _ia411d8d8194a3a()),
        (this._tourPopup = this._habboHelp.getXmlWindow("welcome_tour_popup")),
        this._tourPopup != null &&
          (this._tourPopup.center(),
          (this._tourPopup.y *= 0.25),
          (this._tourPopup.procedure = this._ra7ca16a37ee264))));
  }
  showPendingTicket(e) {
    if (this._habboHelp == null) return;
    let r = "";
    if (e._r8adee34c738777) r = "pending_guide_session";
    else
      switch (e.type) {
        case UnkConstants_d64457._rb6595d1a1fe905:
        case UnkConstants_d64457._rba379f7c9c44bb:
          r = "pending_tour_request";
          break;
        case UnkConstants_d64457._r5c4ffc3b81a5d4:
          r = "pending_instructions_request";
          break;
        case UnkConstants_d64457._r5ec251b1280db0:
          r = "pending_bully_request";
          break;
        default:
          return;
      }
    if (
      ((this.var_654 = this._habboHelp.getXmlWindow(r)),
      this.var_654 != null &&
        (this.var_654.center(),
        (this.var_654.procedure = this._r7ad0a0bf832508),
        !e._r8adee34c738777))
    )
      switch (e.type) {
        case UnkConstants_d64457._r5c4ffc3b81a5d4:
          ((this.var_654.findChildByName("description").caption = e.description ?? ""),
            ((this.var_654.findChildByName("timestamp")?.widget).timeStamp =
              Date.now() - e._r83f0646adec737 * 1e3));
          break;
        case UnkConstants_d64457._r5ec251b1280db0:
          ((this.var_654.findChildByName("user_name").caption = e._rf9d7691c8d6183 ?? ""),
            ((this.var_654.findChildByName("user_avatar")?.widget).figure =
              e._r121475978b61a8 ?? ""),
            ((this.var_654.findChildByName("timestamp")?.widget).timeStamp =
              Date.now() - e._r83f0646adec737 * 1e3),
            this._habboHelp.localization?._r43eae9731f5b27(
              "guide.pending.bully.room",
              "room",
              e.roomName ?? "",
            ));
          break;
      }
  }
  openWindow() {
    this._r22a12f56545ee3 != null ||
      this._disposed ||
      (this._habboHelp != null &&
        ((this._r22a12f56545ee3 = this._habboHelp.getModalXmlWindow("main_help")),
        this._r22a12f56545ee3?.rootWindow &&
          (this._r22a12f56545ee3.rootWindow.procedure = this._r155485ad8273d8)));
  }
  _r155485ad8273d8 = n((e, r) => {
    if (this._disposed || e.type !== u.CLICK) return;
    let t = this._habboHelp;
    if (t != null)
      switch (r.name) {
        case "header_button_close":
          this.closeWindow();
          break;
        case "tour_button":
          (this._r81763b91025ebb?.onInput(
            t.newIdentity ? UnkConstants_d64457._rb6595d1a1fe905 : UnkConstants_d64457._rba379f7c9c44bb,
          ),
            t.trackGoogle("helpWindow", "click_userTour"),
            this.closeWindow());
          break;
        case "bully_button":
          (this.closeWindow(), t._rcc22aff4331642(), t.trackGoogle("helpWindow", "click_reportBully"));
          break;
        case "instructions_button":
          (this._r81763b91025ebb?.onInput(UnkConstants_d64457._r5c4ffc3b81a5d4),
            t.trackGoogle("helpWindow", "click_instructions"),
            this.closeWindow());
          break;
        case "self_help_link":
          (Ae.openWebPage(t.getProperty("zendesk.url"), "habboMain"),
            t.trackGoogle("helpWindow", "click_selfHelp"),
            this.closeWindow());
          break;
        case "habboway_link":
          (t.getBoolean("habboway.enabled")
            ? t.showHabboWay()
            : Ae.openWebPage(t.getProperty("habboway.url"), "habboMain"),
            t.trackGoogle("helpWindow", "click_habboWay"),
            this.closeWindow());
          break;
        case "safetybooklet_link":
          (t._r572a5ffd9c1afd(), t.trackGoogle("helpWindow", "click_showSafetyBooklet"), this.closeWindow());
          break;
        case "emergency_button": {
          (this._r22a12f56545ee3?.rootWindow?.findChildByName("leave_room")?.isSelected &&
            t._rb13ed3a89b85ae(new class_2551()),
            this.closeWindow(),
            t._r71d023064452a2(),
            t.trackGoogle("helpWindow", "click_emergency"));
          break;
        }
      }
  }, "_r155485ad8273d8");
  closeTourPopup() {
    (this._tourPopup?.dispose(), (this._tourPopup = null));
  }
  _ra7ca16a37ee264 = n((e, r) => {
    if (this._disposed || e.type !== u.CLICK) return;
    let t = this._habboHelp;
    if (t == null) return;
    let i = Math.trunc((this._r827d4d4030bbd9 - _ia411d8d8194a3a()) / 1e3);
    switch (r.name) {
      case "refuse_tour":
        (t.tracking?.trackEventLog("Help", "", "tour.new_user.cancel", "", i),
          t.trackGoogle("newbieTourWindow", "click_refuseTour"),
          this.closeTourPopup());
        break;
      case "header_button_close":
        (t.tracking?.trackEventLog("Help", "", "tour.new_user.dismiss", "", i),
          t.trackGoogle("newbieTourWindow", "click_closeWindow"),
          this.closeTourPopup());
        break;
      case "take_tour":
        (this._r81763b91025ebb?.onInput(UnkConstants_d64457._rb6595d1a1fe905),
          t.tracking?.trackEventLog("Help", "", "tour.new_user.accept", "", i),
          t.trackGoogle("newbieTourWindow", "click_acceptTour"),
          this.closeTourPopup());
        break;
    }
  }, "_ra7ca16a37ee264");
  _r7ad0a0bf832508 = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "header_button_close":
        case "close_button":
          (this.var_654?.dispose(), (this.var_654 = null));
          break;
      }
  }, "_r7ad0a0bf832508");
}
