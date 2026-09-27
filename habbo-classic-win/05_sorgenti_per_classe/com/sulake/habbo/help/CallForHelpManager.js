// Extracted from HabboAirLauncher.deobf.js, line 229122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/CallForHelpManager.as
// Obfuscated name: _ie387a73a75c026

class a {
  constructor(e) {
    this._habboHelp = e;
    ((this._rfc9a24dda15882 = new u7e(this._habboHelp, this._recd2d3a776f58b)),
      this._habboHelp?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_1e7c70(this._r5bc4d36558a73c)),
      this._habboHelp?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3000(this._rebf636f3ddea21)),
      this._habboHelp?._rf3db13932bfb60?._r2e106e2349a0b6(new class_2395(this.onIssueClose)));
  }
  static {
    n(this, "CallForHelpManager");
  }
  static FIELD_MAX_CHARS = 253;
  static EMERGENCY_HELP_REQUEST_TITLE = "emergency_help_request";
  _disposed = !1;
  _window = null;
  _rfc9a24dda15882;
  var_138 = -1;
  _reportedUserName = "";
  var_399 = -1;
  _reportedRoomName = "";
  var_4026 = "";
  _r01af1378c9dfea = -1;
  _r65de4fd5dcded4 = -1;
  _r18274c63f929d5 = -1;
  _rde7a091bb6ea6b = "";
  _rd072a93140fe22 = -1;
  var_375 = 0;
  _r527941bfa6ceee = 0;
  _re84e965de7d181 = 0;
  var_1065 = "";
  dispose() {
    this._disposed ||
      (this.closeWindow(),
      this._rfc9a24dda15882?.dispose(),
      (this._rfc9a24dda15882 = null),
      (this._habboHelp = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get reportedUserId() {
    return this.var_138;
  }
  set reportedUserId(e) {
    this.var_138 = e;
  }
  get onPendingCallsForHelp() {
    return this._reportedUserName;
  }
  set onPendingCallsForHelp(e) {
    this._reportedUserName = e;
  }
  get reportedRoomId() {
    return this.var_399;
  }
  set reportedRoomId(e) {
    this.var_399 = e;
  }
  get reportedRoomName() {
    return this._reportedRoomName;
  }
  set reportedRoomName(e) {
    this._reportedRoomName = e;
  }
  get _rbc914ab682acbc() {
    return this._rde7a091bb6ea6b;
  }
  set _rbc914ab682acbc(e) {
    this._rde7a091bb6ea6b = e;
  }
  get _r4d650ce6dc3306() {
    return this._rd072a93140fe22;
  }
  set _r4d650ce6dc3306(e) {
    this._rd072a93140fe22 = e;
  }
  get _rd5d902ebf403c9() {
    return this._r01af1378c9dfea;
  }
  set _rd5d902ebf403c9(e) {
    this._r01af1378c9dfea = e;
  }
  get _rd9f5cdd9dd88ea() {
    return this._r65de4fd5dcded4;
  }
  set _rd9f5cdd9dd88ea(e) {
    this._r65de4fd5dcded4 = e;
  }
  get _r5883f416775423() {
    return this._r18274c63f929d5;
  }
  set _r5883f416775423(e) {
    this._r18274c63f929d5 = e;
  }
  get _r7e209a0f258e82() {
    return this._rfc9a24dda15882;
  }
  _r19b752804a82d0(e, r) {
    if (this._habboHelp?.guardiansEnabled) {
      ((this.var_138 = e), (this.var_399 = r), this._habboHelp._rffc8f5d59666ad(5));
      return;
    }
    this._r046ef1fd9b83b8(e, jt.REPORT_TYPE_EMERGENCY, 123);
  }
  _r046ef1fd9b83b8(e, r, t) {
    ((this.var_138 = e),
      (this.var_399 = -1),
      (this._r527941bfa6ceee = t),
      this._habboHelp?._r41eeaae23311a4(r));
  }
  reportRoom(e, r, t) {
    ((this.var_399 = e),
      (this._reportedRoomName = r),
      (this.var_4026 = t),
      (this.var_138 = -1),
      this._habboHelp?._r41eeaae23311a4(jt.REPORT_TYPE_ROOM));
  }
  _rb1c939952cd277(e, r) {
    ((this._r01af1378c9dfea = e),
      (this._r65de4fd5dcded4 = r),
      this._habboHelp?._r41eeaae23311a4(jt.REPORT_TYPE_THREAD));
  }
  _r699ed42ce6865d(e, r, t) {
    ((this._r01af1378c9dfea = e),
      (this._r65de4fd5dcded4 = r),
      (this._r18274c63f929d5 = t),
      this._habboHelp?._r41eeaae23311a4(jt.REPORT_TYPE_MESSAGE));
  }
  reportSelfie(e, r, t, i, s) {
    this._habboHelp?._rb13ed3a89b85ae(new UnkMessageComposer_5args_7d4374(e, t, i, r, s));
  }
  reportPhoto(e, r, t, i, s) {
    (this._habboHelp?._r78bbaeb8e25778(new UnkMessageComposer_7args_558888(e, t, i, r, s, "", "")),
      this._habboHelp?._r41eeaae23311a4(jt.REPORT_TYPE_PHOTO));
  }
  _r6f5fdec0692988() {
    this._r046ef1fd9b83b8(0, jt.REPORT_TYPE_EMERGENCY, -1);
  }
  showEmergencyHelpRequest(e) {
    if ((this.closeWindow(), (this.var_375 = e), e === jt.REPORT_TYPE_BULLY))
      ((this._window = this._habboHelp?.getXmlWindow("bully_report")),
        this._window && (this._window.procedure = this._r12b1ff1ca50934));
    else if (
      ((this._window = this._habboHelp?.getXmlWindow("emergency_help_request")),
      this._window != null)
    ) {
      this._window.procedure = this._r8ec51c51503d57;
      let s = this._window.findChildByName("help_message")?.widget;
      s && (s._r4c2336e24c69cc = a.FIELD_MAX_CHARS);
    }
    this._window?.center();
    let r = this._window?.findChildByName("topic_selector"),
      t = r?._rf1edf3aad44c96(`${this._r527941bfa6ceee}`);
    t && r?.setSelected(t);
    let i = r?._rf1edf3aad44c96("123");
    switch ((i != null && this._habboHelp?.guardiansEnabled && (i.visible = !1), e)) {
      case jt.REPORT_TYPE_ROOM:
        this.showPanels(!1, !0);
        break;
      case jt.REPORT_TYPE_EMERGENCY:
        this.showPanels(!0, !1);
        break;
      case jt.REPORT_TYPE_IM:
      case jt.REPORT_TYPE_THREAD:
      case jt.REPORT_TYPE_MESSAGE:
        this.showPanels(!1, !1);
        break;
      case jt.REPORT_TYPE_BULLY:
        this.populateUserList();
        break;
    }
  }
  showPendingRequest(e) {
    (this.closeWindow(),
      (this._window = this._habboHelp?.getXmlWindow("pending_request")),
      this._window != null &&
        ((this._window.findChildByName("request_message").caption = e),
        this._window.center(),
        (this._window.procedure = this._r7ad0a0bf832508)));
  }
  showChatReportTool() {
    (this.closeWindow(),
      this._rfc9a24dda15882?.show(
        this._habboHelp?._rb286a1f9faeb60 ?? 0,
        this.var_138,
        this.var_375,
      ));
  }
  showPanels(e, r) {
    if (this._window == null) return;
    let t = this._window.findChildByName("room_panel"),
      i = this._window.findChildByName("user_panel"),
      s = e || r;
    ((this._window.findChildByName("submit_box_wide").visible = s),
      (this._window.findChildByName("submit_box_narrow").visible = !s),
      (this._window.findChildByName("separator").visible = s),
      t && (t.visible = r),
      i && (i.visible = e),
      r &&
        t != null &&
        ((t.getListItemByName("room_name").caption = this._reportedRoomName ?? ""),
        (t.getListItemByName("room_description").caption = this.var_4026 ?? "")),
      e && this.populateUserList(),
      s || (this._window.width = 301));
  }
  populateUserList() {
    if (this._window == null || this._habboHelp == null) return;
    let e = this._window.findChildByName("user_list"),
      r = e?.getListItemAt(0);
    if (e == null || r == null) return;
    e.removeListItems();
    let t = 0;
    for (let i of this._habboHelp._ra8fe81e2f96c0e._rd6278aa8cdcd3c().getKeys()) {
      let s = this._habboHelp._ra8fe81e2f96c0e._rd6278aa8cdcd3c().getValue(i);
      if (s == null) continue;
      let o = r.clone(),
        d = s.userId === this.var_138;
      ((o.name = `${s.userId}`),
        (o.blend = d ? 1 : 0),
        (o.procedure = this._rf18868947eec55),
        (o.findChildByName("user_name").caption = s.userName),
        (o.findChildByName("room_name").id = s.roomId),
        d && (this.var_399 = s.roomId),
        (o.findChildByName("room_name").caption =
          s.roomName !== ""
            ? (this._habboHelp.localization?.getLocalizationWithParams(
                "help.emergency.main.step.two.room.name",
                "",
                "room_name",
                s.roomName,
              ) ?? "")
            : ""),
        ((o.findChildByName("user_avatar")?.widget).figure = s.figure),
        e.addListItemAt(o, t),
        d && (t = 1));
    }
  }
  refreshUserList() {
    let e = this._window?.findChildByName("user_list");
    if (e != null)
      for (let r = 0; r < e.numListItems; r++) {
        let t = e.getListItemAt(r);
        t != null && (t.blend = Number(t.name) === this.var_138 ? 1 : 0);
      }
  }
  closeWindow() {
    (this._window?.dispose(), (this._window = null));
  }
  _r8ec51c51503d57 = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "submit_button":
          if (!this.saveEmergencyHelpRequestData()) return;
          this.basicInfoDone();
          break;
        case "header_button_close":
          this.closeWindow();
          break;
      }
  }, "_r8ec51c51503d57");
  _r12b1ff1ca50934 = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "submit_button":
          this.var_138 > 0
            ? (this._habboHelp?._rb13ed3a89b85ae(new class_1807(this.var_138)),
              this._habboHelp?._rb13ed3a89b85ae(new UnkMessageComposer_2args_99629c(this.var_138, this.var_399)),
              this.closeWindow())
            : this._habboHelp?.windowManager?.alert(
                "${generic.alert.title}",
                "${guide.bully.request.usermissing}",
                0,
                null,
              );
          break;
        case "header_button_close":
          this.closeWindow();
          break;
      }
  }, "_r12b1ff1ca50934");
  _recd2d3a776f58b = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "submit_button":
          if ((this._rfc9a24dda15882?.collectSelectedEntries(this.var_375, -1).length ?? 0) === 0) {
            this._habboHelp?.windowManager?.alert(
              "${generic.alert.title}",
              "${help.cfh.error.chatmissing}",
              0,
              null,
            );
            return;
          }
          (this.submitCallForHelp(), this._rfc9a24dda15882?.closeWindow(), this.closeWindow());
          break;
        case "header_button_close":
          this._rfc9a24dda15882?.closeWindow();
          break;
      }
  }, "_recd2d3a776f58b");
  _rf18868947eec55 = n((e, r) => {
    e.type === u.CLICK && this.selectUserToReport(r);
  }, "_rf18868947eec55");
  selectUserToReport(e) {
    if (this._window == null || this._window.name !== a.EMERGENCY_HELP_REQUEST_TITLE || e == null)
      return;
    let r = Number(e.name);
    (this.var_138 === r
      ? ((this.var_138 = 0), (this.var_399 = -1))
      : ((this.var_138 = r), (this.var_399 = e.findChildByName("room_name")?.id ?? -1)),
      this.refreshUserList());
  }
  basicInfoDone() {
    let e = this.isChatSelectionRequired();
    if (this.var_375 === jt.REPORT_TYPE_IM)
      this._habboHelp?._r86d4afd9e4a8a4._r92b2d93b5e6308(this.var_138) ||
        this._habboHelp?.windowManager?.alert(
          "${generic.alert.title}",
          "${help.cfh.error.nochathistory}",
          0,
          null,
        );
    else if (
      e &&
      !this._habboHelp?._rac50ce9cc85d8c._rb58aa599e4f70a(
        this._habboHelp._rb286a1f9faeb60 ?? 0,
      ) &&
      (this._habboHelp?._rac50ce9cc85d8c._rb58aa599e4f70a(this.var_138) ?? !1)
    ) {
      this._habboHelp?.windowManager?.alert(
        "${generic.alert.title}",
        "${help.cfh.error.nochathistory}",
        0,
        null,
      );
      return;
    }
    if (e) {
      this.showChatReportTool();
      return;
    }
    this.submitCallForHelp();
  }
  isChatSelectionRequired() {
    return this.var_375 === jt.REPORT_TYPE_THREAD ||
      this.var_375 === jt.REPORT_TYPE_MESSAGE ||
      this.var_375 === jt.REPORT_TYPE_ROOM
      ? !1
      : this.var_138 <= 0 ||
          (this._habboHelp?._rac50ce9cc85d8c._r84e188e8801478(this.var_138).length ?? 0) > 0 ||
          this.var_375 === jt.REPORT_TYPE_IM;
  }
  saveEmergencyHelpRequestData() {
    if (this._window == null || this._window.name !== a.EMERGENCY_HELP_REQUEST_TITLE) return !1;
    if (
      ((this.var_1065 = this._window.findChildByName("help_message")?.widget?.message ?? ""),
      this.var_1065 === "")
    )
      return (
        this._habboHelp?.windowManager?.alert(
          "${generic.alert.title}",
          "${help.cfh.error.nomsg}",
          0,
          null,
        ),
        !1
      );
    if (
      this.var_1065.length < (this._habboHelp?.getInteger("help.cfh.length.minimum", 15) ?? 15)
    )
      return (
        this._habboHelp?.windowManager?.alert(
          "${generic.alert.title}",
          "${help.cfh.error.msgtooshort}",
          0,
          null,
        ),
        !1
      );
    this._re84e965de7d181 = 0;
    let e = this._window.findChildByName("topic_selector")?.getSelected();
    return (
      e != null && (this._re84e965de7d181 = Number(e.name)),
      this._re84e965de7d181 === 0
        ? (this._habboHelp?.windowManager?.alert(
            "${generic.alert.title}",
            "${help.cfh.error.notopic}",
            0,
            null,
          ),
          !1)
        : this.var_375 === jt.REPORT_TYPE_MESSAGE || this.var_375 === jt.REPORT_TYPE_THREAD
          ? !0
          : (this.var_138 <= 0 &&
                this.var_375 !== jt.REPORT_TYPE_MESSAGE &&
                this.var_375 === jt.REPORT_TYPE_THREAD) ||
              (this.var_375 === jt.REPORT_TYPE_ROOM &&
                !(this._habboHelp?.getBoolean("room.report.enabled") ?? !1))
            ? (this._habboHelp?.windowManager?.alert(
                "${generic.alert.title}",
                "${guide.bully.request.usermissing}",
                0,
                null,
              ),
              !1)
            : this._habboHelp?.friendList?._rf51d9426e17752(this.var_138) != null
              ? (this._habboHelp.windowManager?.confirm(
                  "${help.cfh.unfriend.confirm.title}",
                  "${help.cfh.unfriend.confirm.message}",
                  HabboAlertDialogFlag.const_427 | HabboAlertDialogFlag.const_688,
                  this.onFriendReportConfirmation,
                ),
                !1)
              : !0
    );
  }
  submitCallForHelp() {
    switch ((this.closeWindow(), this.var_375)) {
      case jt.REPORT_TYPE_EMERGENCY:
      case jt.REPORT_TYPE_ROOM: {
        let e =
          (this._rfc9a24dda15882?.reportedRoomId ?? 0) <= 0
            ? this.var_399
            : (this._rfc9a24dda15882?.reportedRoomId ?? this.var_399);
        this._habboHelp?._rb13ed3a89b85ae(
          new class_2472(
            this.var_1065,
            this._re84e965de7d181,
            this.var_138,
            e,
            this._rfc9a24dda15882?.collectSelectedEntries(this.var_375, -1) ?? [],
            "",
            "",
          ),
        );
        break;
      }
      case jt.REPORT_TYPE_IM:
        this._habboHelp?._rb13ed3a89b85ae(
          new UnkMessageComposer_6args_826cee(
            this.var_1065,
            this._re84e965de7d181,
            this.var_138,
            this._rfc9a24dda15882?.collectSelectedEntries(jt.REPORT_TYPE_IM, -1) ?? [],
            "",
            "",
          ),
        );
        break;
      case jt.REPORT_TYPE_THREAD:
        this._habboHelp?._rb13ed3a89b85ae(
          new UnkMessageComposer_6args_0c6cfe(
            this._r01af1378c9dfea,
            this._r65de4fd5dcded4,
            this._re84e965de7d181,
            this.var_1065,
            "",
            "",
          ),
        );
        break;
      case jt.REPORT_TYPE_MESSAGE:
        this._habboHelp?._rb13ed3a89b85ae(
          new UnkMessageComposer_7args_30b02d(
            this._r01af1378c9dfea,
            this._r65de4fd5dcded4,
            this._r18274c63f929d5,
            this._re84e965de7d181,
            this.var_1065,
            "",
            "",
          ),
        );
        break;
    }
    this._habboHelp?._r68cfb8aa6393cc(this._re84e965de7d181);
  }
  onFriendReportConfirmation = n((e, r) => {
    (r.type === y.const_1300 && this.basicInfoDone(), e.dispose());
  }, "onFriendReportConfirmation");
  _r7ad0a0bf832508 = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "keep_button":
        case "header_button_close":
          this.closeWindow();
          break;
        case "discard_button":
          (this._r7a4d897bf6475b(), this.closeWindow());
          break;
      }
  }, "_r7ad0a0bf832508");
  _r5bc4d36558a73c = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_S_9e0797);
    r != null &&
      this._habboHelp?.windowManager?.alert("${help.cfh.reply.title}", r.message ?? "", 0, null);
  }, "_r5bc4d36558a73c");
  _rebf636f3ddea21 = n((e) => {
    let r = ClassUtils.getParser(e, class_2760);
    if (r == null) return;
    let t = r.messageText === "" ? "${help.cfh.sent.text}" : r.messageText;
    this._habboHelp?.windowManager?.alert("${help.cfh.sent.title}", t, 0, null);
  }, "_rebf636f3ddea21");
  onIssueClose = n((e) => {
    let r = ClassUtils.getParser(e, class_3609);
    if (r == null) return;
    let t = r.messageText;
    (t === "" && (t = `\${help.cfh.closed.${a.getCloseReasonKey(r.closeReason)}}`),
      this._habboHelp?.windowManager?.alert("${mod.alert.title}", t, 0, null));
  }, "onIssueClose");
  static getCloseReasonKey(e) {
    return e === 1 ? "useless" : e === 2 ? "abusive" : "resolved";
  }
  _r7a4d897bf6475b() {
    this._habboHelp?._rb13ed3a89b85ae(new UnkMessageComposer_0args_590efe());
  }
}
