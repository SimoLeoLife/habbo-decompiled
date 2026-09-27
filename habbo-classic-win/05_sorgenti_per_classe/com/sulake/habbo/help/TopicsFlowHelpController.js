// Extracted from HabboAirLauncher.deobf.js, line 232909.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/TopicsFlowHelpController.as
// Obfuscated name: _i2d720abb488aea

class a {
  constructor(e) {
    this._habboHelp = e;
  }
  static {
    n(this, "TopicsFlowHelpController");
  }
  static _r0ff0aa5b7e45b2 = "start_container";
  static HELP_CONTAINER = "help_container";
  static USERS_CONTAINER = "users_container";
  static USER_CONTAINER = "user";
  static REASON_CONTAINER = "reason_container";
  static TOPIC_CONTAINER = "topic_container";
  static MESSAGE_CONTAINER = "message_container";
  static CHAT_CONTAINER = "chat_container";
  static BACK_BUTTON = "back_button";
  static SUMMARY_CONTAINER = "summary_container";
  static UNLAWFUL_MESSAGE_CONTENT = "unlawful_message_content";
  static HELP_MESSAGE = "help_message";
  static MESSAGE_CONTAINER_DESCRIPTION = "message_container_description";
  static const_1297 = "unlawful_message_confirm";
  static MESSAGE_NAME_INPUT = "help_message_name";
  static MESSAGE_EMAIL_INPUT = "help_message_email";
  static CONTINUE_BUTTON = "continue_button";
  static _r109faa419a4a25 = [a.USERS_CONTAINER, a.MESSAGE_CONTAINER, a.CHAT_CONTAINER];
  static _rebe46e2361425e = [a.REASON_CONTAINER, a.MESSAGE_CONTAINER, a.CHAT_CONTAINER, a.SUMMARY_CONTAINER];
  static FIELD_MAX_CHARS = 253;
  static TOPIC_NAME_BULLYING = "bullying";
  static TOPIC_NAME_BAD_USER_NAME = "habbo_name";
  static DEFAULT_REPORT_MESSAGE_DESCRIPTION = "help.emergency.main.step.one.description";
  static UNLAWFUL_REPORT_MESSAGE_TITLE = "help.cfh.unlawful_activity.reason_description";
  _disposed = !1;
  _r22a12f56545ee3 = null;
  _view = null;
  _rcd5fdfa35efc9e = [
    a._r0ff0aa5b7e45b2,
    a.HELP_CONTAINER,
    a.USERS_CONTAINER,
    a.USER_CONTAINER,
    a.REASON_CONTAINER,
    a.MESSAGE_CONTAINER,
    a.CHAT_CONTAINER,
    a.BACK_BUTTON,
    a.SUMMARY_CONTAINER,
  ];
  _r9be7ab8eccd72b = null;
  _red3fc0f371d265 = null;
  var_1705 = null;
  _ra40126f9c0e5f5 = null;
  _rdf4421b7df5a37 = null;
  _rb7f650b3b32995 = null;
  _r46c313bea525b5 = a._r0ff0aa5b7e45b2;
  var_563 = null;
  _r8074de00ac7801 = "";
  var_1065 = "";
  _reportedUserName = "";
  var_840 = -1;
  var_4969 = !1;
  _r2a0079d17fc7f8 = ["unlawful_activity"];
  dispose() {
    this._disposed || (this.closeWindow(), (this._habboHelp = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  openReportingUserName() {
    ((this.var_4969 = !0),
      this.showReportingDialog(-1, !1),
      (this.var_563 = this.getTopic(a.TOPIC_NAME_BAD_USER_NAME)));
    let e = this._view?.findChildByName("message_phase_title");
    (e != null &&
      this._habboHelp?.localization != null &&
      this.var_563 != null &&
      (e.caption = `${this._habboHelp.localization.getLocalization("generic.reason")} ${this._habboHelp.localization.getLocalization(`help.cfh.topic.${this.var_563.id}`)}`),
      this.id(a.MESSAGE_CONTAINER));
  }
  _r630b3f0dcad271() {
    (this.showReportingDialog(-1, !0),
      this.openReportingIMSelection() && (this.id(a.CHAT_CONTAINER), this.populateInstantMessages()));
  }
  _r89fa3962f0824b(e) {
    this.showReportingDialog(e, !1);
    let r = this._r66442b616eceff(e);
    return (r || this.closeWindow(), r);
  }
  userChatLinesAvailable() {
    (this.showReportingDialog(jt.REPORT_TYPE_IM, !1),
      this.id(a.CHAT_CONTAINER),
      this.populateChatMessage(),
      (this.var_1705?.numListItems ?? 0) === 0 &&
        (this._habboHelp?.windowManager?.alertWithModal(
          "${generic.alert.title}",
          "${help.cfh.error.no_user_data}",
          0,
          null,
        ),
        this.closeWindow()));
  }
  _r383c01d7789bff() {
    if (this._r22a12f56545ee3 == null) {
      ((this.var_840 = -1), this.openWindow(), this.id(a._r0ff0aa5b7e45b2));
      return;
    }
    this.closeWindow();
  }
  submitCallForHelp(e) {
    if (this.var_1065 === "" || this.var_563 == null || this._habboHelp == null)
      return;
    let r = "",
      t = "";
    switch (
      (this._r2a0079d17fc7f8.includes(this._r8074de00ac7801) &&
        ((r = this._view?.findChildByName(a.MESSAGE_NAME_INPUT)?.widget?.message ?? ""),
        (t = this._view?.findChildByName(a.MESSAGE_EMAIL_INPUT)?.widget?.message ?? "")),
      this._habboHelp._r68cfb8aa6393cc(this.var_563.id),
      this.var_840)
    ) {
      case jt.REPORT_TYPE_PHOTO:
        this._habboHelp._rb13ed3a89b85ae(
          new UnkMessageComposer_7args_558888(
            this._habboHelp._rbc914ab682acbc,
            this._habboHelp.reportedRoomId,
            this._habboHelp.reportedUserId,
            this.var_563.id,
            this._habboHelp._r4d650ce6dc3306,
            r,
            t,
          ),
        );
        break;
      case jt.REPORT_TYPE_IM:
        this._habboHelp._rb13ed3a89b85ae(
          new UnkMessageComposer_6args_826cee(
            this.var_1065,
            this.var_563.id,
            this._habboHelp.reportedUserId,
            this._habboHelp._r6d93655097f605._r7e209a0f258e82?.collectSelectedEntries(
              jt.REPORT_TYPE_IM,
              this._habboHelp.reportedUserId,
            ) ?? [],
            r,
            t,
          ),
        );
        break;
      case jt.REPORT_TYPE_ROOM:
        this._habboHelp._rb13ed3a89b85ae(
          new class_2472(
            this.var_1065,
            this.var_563.id,
            -1,
            this._habboHelp.reportedRoomId,
            [],
            r,
            t,
          ),
        );
        break;
      case jt.REPORT_TYPE_THREAD:
        this._habboHelp._rb13ed3a89b85ae(
          new UnkMessageComposer_6args_0c6cfe(
            this._habboHelp._r6d93655097f605._rd5d902ebf403c9,
            this._habboHelp._r6d93655097f605._rd9f5cdd9dd88ea,
            this.var_563.id,
            this.var_1065,
            r,
            t,
          ),
        );
        break;
      case jt.REPORT_TYPE_MESSAGE:
        this._habboHelp._rb13ed3a89b85ae(
          new UnkMessageComposer_7args_30b02d(
            this._habboHelp._r6d93655097f605._rd5d902ebf403c9,
            this._habboHelp._r6d93655097f605._rd9f5cdd9dd88ea,
            this._habboHelp._r6d93655097f605._r5883f416775423,
            this.var_563.id,
            this.var_1065,
            r,
            t,
          ),
        );
        break;
      default:
        e &&
        this.var_563.name === a.TOPIC_NAME_BULLYING &&
        this._habboHelp.getBoolean("guides.enabled") &&
        this._habboHelp.guardiansEnabled
          ? this._habboHelp._rb13ed3a89b85ae(
              new UnkMessageComposer_2args_99629c(this._habboHelp.reportedUserId, this._habboHelp.reportedRoomId),
            )
          : this._habboHelp._rb13ed3a89b85ae(
              new class_2472(
                this.var_1065,
                this.var_563.id,
                this._habboHelp.reportedUserId,
                this._habboHelp.reportedRoomId,
                this._habboHelp._r6d93655097f605._r7e209a0f258e82?.collectSelectedEntries(
                  jt.REPORT_TYPE_EMERGENCY,
                  -1,
                ) ?? [],
                r,
                t,
              ),
            );
        break;
    }
  }
  showReportingDialog(e, r) {
    ((this.var_840 = e),
      this._r22a12f56545ee3 == null && this.openWindow(),
      this._view?.findChildByName("change_user") && (this._view.findChildByName("change_user").visible = r));
  }
  openWindow() {
    if (
      this._r22a12f56545ee3 != null ||
      this._disposed ||
      this._habboHelp == null ||
      ((this._r22a12f56545ee3 = this._habboHelp.getModalXmlWindow("topics_flow_help")),
      (this._view = this._r22a12f56545ee3?.rootWindow),
      this._view == null)
    )
      return;
    ((this._view.procedure = this._r155485ad8273d8),
      (this._r9be7ab8eccd72b = this._view.findChildByName("user_list")),
      (this._red3fc0f371d265 = this._view.findChildByName("reason_list")),
      (this.var_1705 = this._view.findChildByName("chat_list")),
      (this._ra40126f9c0e5f5 = this._r9be7ab8eccd72b?.getListItemAt(0)),
      (this._rdf4421b7df5a37 = this._red3fc0f371d265?.getListItemAt(0)),
      (this._rb7f650b3b32995 = this.var_1705?.getListItemAt(0)),
      this._r9be7ab8eccd72b?.removeListItems(),
      this._red3fc0f371d265?.removeListItems(),
      this.var_1705?.removeListItems());
    let e = this._view.findChildByName(a.HELP_MESSAGE)?.widget;
    if (
      (e && (e._r4c2336e24c69cc = a.FIELD_MAX_CHARS),
      !this._habboHelp.getBoolean("my.reports.status.enabled") &&
        this._r22a12f56545ee3?.rootWindow != null)
    ) {
      let r = this._r22a12f56545ee3.rootWindow.findChildByName("reports_status_bitmap"),
        t = this._r22a12f56545ee3.rootWindow.findChildByName("reports_status");
      (r && (r.visible = !1), t && (t.visible = !1));
    }
    this.deselectChatEntries();
  }
  closeWindow() {
    (this._r22a12f56545ee3?.dispose(),
      (this._r22a12f56545ee3 = null),
      (this._view = null),
      (this._r46c313bea525b5 = a._r0ff0aa5b7e45b2));
  }
  id(e) {
    if (this._view != null) {
      for (let r of this._rcd5fdfa35efc9e) {
        let t = this._view.findChildByName(r);
        t != null && (t.visible = !1);
      }
      if (
        ((this._view.findChildByName(a.CONTINUE_BUTTON).visible = a._r109faa419a4a25.includes(e)),
        (this._view.findChildByName(a.USER_CONTAINER).visible = a._rebe46e2361425e.includes(e)),
        (this._r46c313bea525b5 = e),
        this._r1119bbfafcb951(),
        (this._view.findChildByName(e).visible = !0),
        e === a.MESSAGE_CONTAINER)
      ) {
        let r = this._r2a0079d17fc7f8.includes(this._r8074de00ac7801),
          t = this._view.findChildByName(a.UNLAWFUL_MESSAGE_CONTENT),
          i = this._view.findChildByName(a.HELP_MESSAGE),
          s = this._view.findChildByName(a.MESSAGE_CONTAINER_DESCRIPTION);
        (t && (t.visible = r),
          i != null && (i.height = r ? 120 : 220),
          s != null && (s.caption = `\${${r ? a.UNLAWFUL_REPORT_MESSAGE_TITLE : a.DEFAULT_REPORT_MESSAGE_DESCRIPTION}}`));
      }
      a._rebe46e2361425e.includes(e) && this.updateUserData();
    }
  }
  _r1119bbfafcb951() {
    if (this._view == null) return;
    let e = !0;
    (this._r46c313bea525b5 === a._r0ff0aa5b7e45b2
      ? (e = !1)
      : this.var_840 === jt.REPORT_TYPE_IM
        ? (e = this._r46c313bea525b5 !== a.CHAT_CONTAINER)
        : this.var_840 > -1
          ? (e = this._r46c313bea525b5 !== a.REASON_CONTAINER)
          : this.var_4969 && (e = this._r46c313bea525b5 !== a.MESSAGE_CONTAINER),
      (this._view.findChildByName(a.BACK_BUTTON).visible = e));
  }
  verifyUserSelected() {
    return (this._habboHelp?.reportedUserId ?? -1) === -1
      ? (this._habboHelp?.windowManager?.alertWithModal(
          "${generic.alert.title}",
          "${guide.bully.request.usermissing}",
          0,
          null,
        ),
        !1)
      : !0;
  }
  _r562d10951292d0() {
    if (this._r2a0079d17fc7f8.includes(this._r8074de00ac7801)) {
      let e = this._view?.findChildByName(a.const_1297),
        r = this._view?.findChildByName(a.MESSAGE_NAME_INPUT)?.widget?.message ?? "",
        t = this._view?.findChildByName(a.MESSAGE_EMAIL_INPUT)?.widget?.message ?? "";
      if (!(e?.isSelected ?? !1) || r === "" || t === "")
        return (
          this._habboHelp?.windowManager?.alertWithModal(
            "${generic.alert.title}",
            `\${${a.DEFAULT_REPORT_MESSAGE_DESCRIPTION}}`,
            0,
            null,
          ),
          !1
        );
    }
    return (
      (this.var_1065 = this._view?.findChildByName(a.HELP_MESSAGE)?.widget?.message ?? ""),
      this.var_1065 === ""
        ? (this._habboHelp?.windowManager?.alertWithModal(
            "${generic.alert.title}",
            "${help.cfh.error.nomsg}",
            0,
            null,
          ),
          !1)
        : this.var_1065.length <
            (this._habboHelp?.getInteger("help.cfh.length.minimum", 15) ?? 15)
          ? (this._habboHelp?.windowManager?.alertWithModal(
              "${generic.alert.title}",
              "${help.cfh.error.msgtooshort}",
              0,
              null,
            ),
            !1)
          : !0
    );
  }
  verifySelectedChatLines() {
    return (
      this._habboHelp?._r6d93655097f605._r7e209a0f258e82?.collectSelectedEntries(
        this.var_840,
        this._habboHelp.reportedUserId,
      ) ?? []
    ).length === 0
      ? (this._habboHelp?.windowManager?.alertWithModal(
          "${generic.alert.title}",
          "${help.cfh.error.chatmissing}",
          0,
          null,
        ),
        !1)
      : !0;
  }
  _r155485ad8273d8 = n((e, r) => {
    if (!(this._disposed || e.type !== u.CLICK))
      switch (r.name) {
        case "header_button_close":
          this.closeWindow();
          break;
        case a.BACK_BUTTON:
          switch (this._r46c313bea525b5) {
            case a.REASON_CONTAINER:
              this.id(a.CHAT_CONTAINER);
              break;
            case a.TOPIC_CONTAINER:
            case a.MESSAGE_CONTAINER:
              (this.id(a.REASON_CONTAINER), this.populateReasons());
              break;
            case a.CHAT_CONTAINER:
              this.populateUsers()
                ? this.id(a.USERS_CONTAINER)
                : this.id(a._r0ff0aa5b7e45b2);
              break;
            case a.SUMMARY_CONTAINER:
              this.id(a.MESSAGE_CONTAINER);
              break;
            default:
              this.id(a._r0ff0aa5b7e45b2);
              break;
          }
          break;
        case a.CONTINUE_BUTTON:
          this._r46c313bea525b5 === a.USERS_CONTAINER
            ? this.verifyUserSelected() && (this.id(a.CHAT_CONTAINER), this.populateInstantMessages())
            : this._r46c313bea525b5 === a.MESSAGE_CONTAINER
              ? this._r562d10951292d0() && this.id(a.SUMMARY_CONTAINER)
              : this._r46c313bea525b5 === a.CHAT_CONTAINER &&
                this.verifySelectedChatLines() &&
                (this.id(a.REASON_CONTAINER), this.populateReasons());
          break;
        case "button_habbo_help":
          this.id(a.HELP_CONTAINER);
          break;
        case "button_user_report":
        case "change_user":
          this.populateUsers()
            ? this.id(a.USERS_CONTAINER)
            : this._habboHelp?.windowManager?.alertWithModal(
                "${generic.alert.title}",
                "${help.cfh.error.nochathistory}",
                0,
                null,
              );
          break;
        case "button_account":
          (Ae.openWebPage(this._habboHelp?.getProperty("zendesk.url") ?? "", "habboMain"),
            this.closeWindow());
          break;
        case "tour_button":
          (this._habboHelp?._r61d35b1de16441.onInput(
            this._habboHelp.newIdentity ? UnkConstants_d64457._rb6595d1a1fe905 : UnkConstants_d64457._rba379f7c9c44bb,
          ),
            this.closeWindow());
          break;
        case "bully_button":
          (this.closeWindow(), this._habboHelp?._rcc22aff4331642());
          break;
        case "instructions_button":
          (this._habboHelp?._r61d35b1de16441.onInput(UnkConstants_d64457._r5c4ffc3b81a5d4), this.closeWindow());
          break;
        case "safetybooklet_link":
          (this._habboHelp?._r572a5ffd9c1afd(), this.closeWindow());
          break;
        case "habboway_link":
          (this._habboHelp?.getBoolean("habboway.enabled")
            ? this._habboHelp.showHabboWay()
            : Ae.openWebPage(this._habboHelp?.getProperty("habboway.url") ?? "", "habboMain"),
            this.closeWindow());
          break;
        case "faq_link":
          this._habboHelp?._r9ca83c8ade6879();
          break;
        case "sanction_info_link":
          (this._habboHelp?.requestSanctionInfo(!1), this.closeWindow());
          break;
        case "reports_status":
          (this._habboHelp?._re969b30350bde4(), this.closeWindow());
          break;
        case "submit_button":
          this.var_563 != null
            ? (this.submitCallForHelp(!0), this.closeWindow())
            : this._habboHelp?.windowManager?.alertWithModal(
                "${generic.alert.title}",
                "${help.cfh.error.notopic}",
                0,
                null,
              );
          break;
      }
  }, "_r155485ad8273d8");
  populateUsers() {
    if (this._r9be7ab8eccd72b == null || this._ra40126f9c0e5f5 == null || this._habboHelp == null)
      return !1;
    this._r9be7ab8eccd72b.removeListItems();
    let e = 0,
      r = !1;
    for (let t of this._habboHelp._ra8fe81e2f96c0e._rd6278aa8cdcd3c().getKeys()) {
      let i = this._habboHelp._ra8fe81e2f96c0e._rd6278aa8cdcd3c().getValue(t);
      if (i == null || this._habboHelp._rac50ce9cc85d8c._r84e188e8801478(i.userId).length === 0)
        continue;
      let s = this._ra40126f9c0e5f5.clone(),
        o = i.userId === this._habboHelp.reportedUserId,
        d = s.findChildByName("user_bg");
      ((s.name = `${i.userId}`),
        (s.procedure = this._rf18868947eec55),
        (s.findChildByName("user_name").caption = i.userName),
        d && (d.blend = o ? 1 : 0),
        (s.findChildByName("room_name").id = i.roomId),
        (s.findChildByName("room_name").caption =
          i.roomName !== ""
            ? (this._habboHelp.localization?.getLocalizationWithParams(
                "help.emergency.main.step.two.room.name",
                "",
                "room_name",
                i.roomName,
              ) ?? "")
            : ""),
        o && (this._habboHelp.reportedRoomId = i.roomId),
        ((s.findChildByName("user_avatar")?.widget).figure = i.figure),
        this._r9be7ab8eccd72b.addListItemAt(s, e),
        o && ((e = 1), (r = !0)));
    }
    return (
      r || ((this._habboHelp.reportedUserId = -1), (this._habboHelp.reportedRoomId = -1)),
      this._r9be7ab8eccd72b.numListItems > 0
    );
  }
  _rf18868947eec55 = n((e, r) => {
    e.type === u.CLICK && this.selectUserToReport(r);
  }, "_rf18868947eec55");
  selectUserToReport(e) {
    e == null ||
      this._habboHelp == null ||
      ((this._habboHelp.reportedUserId = Number(e.name)),
      (this._habboHelp.reportedRoomId = e.findChildByName("room_name")?.id ?? -1),
      this.refreshUserList());
  }
  refreshUserList() {
    if (!(this._r9be7ab8eccd72b == null || this._habboHelp == null))
      for (let e = 0; e < this._r9be7ab8eccd72b.numListItems; e++) {
        let r = this._r9be7ab8eccd72b.getListItemAt(e),
          t = r?.findChildByName("user_bg");
        t != null &&
          r != null &&
          (t.blend = Number(r.name) === this._habboHelp.reportedUserId ? 1 : 0);
      }
  }
  populateReasons() {
    if (!(this._red3fc0f371d265 == null || this._rdf4421b7df5a37 == null || this._habboHelp == null)) {
      this._red3fc0f371d265.destroyListItems();
      for (let e of this._habboHelp._callForHelpCategories) {
        let r = this._rdf4421b7df5a37.clone();
        ((r.findChildByName("name").caption = `\${help.cfh.reason.${e.name}}`),
          (r.name = e.name),
          r.addEventListener(u.CLICK, this._r8a645ff3852d0a),
          this._red3fc0f371d265.addListItem(r));
      }
    }
  }
  populateRoomReportButton() {
    if (this._red3fc0f371d265 == null || this._rdf4421b7df5a37 == null || this._habboHelp == null)
      return;
    this._red3fc0f371d265.destroyListItems();
    let e = this._red3fc0f371d265.height;
    ((this._red3fc0f371d265.height = 0), (this._red3fc0f371d265.height = e));
    let r = 34,
      t = "inappropiate_room_group_event",
      i = this._rdf4421b7df5a37.clone(),
      s = i.findChildByName("name");
    (this._habboHelp.localization?._r43eae9731f5b27(
      `help.cfh.topic.${r}`,
      "name",
      this._reportedUserName,
    ),
      s != null &&
        ((s.caption = `\${help.cfh.topic.${r}}`),
        s.height < s.textHeight && (s.height = s.textHeight + 5),
        i.height < s.height + s.y * 2 + 5 && (i.height = s.height + s.y * 2 + 5)),
      (i.name = t),
      i.addEventListener(u.CLICK, this._r4c711a27aeba43),
      this._red3fc0f371d265.addListItem(i),
      (this._r8074de00ac7801 = "room_report"));
  }
  _r8a645ff3852d0a = n((e) => {
    let r = e.target;
    r != null && (this.populateTopics(r.name), (this._r8074de00ac7801 = r.name));
  }, "_r8a645ff3852d0a");
  populateTopics(e) {
    if (this._red3fc0f371d265 == null || this._rdf4421b7df5a37 == null || this._habboHelp == null)
      return !1;
    let r = null;
    for (let i of this._habboHelp._callForHelpCategories)
      if (i.name === e) {
        r = i._rddb8305acca679;
        break;
      }
    if (r == null || r.length === 0) return !1;
    this._red3fc0f371d265.destroyListItems();
    let t = this._red3fc0f371d265.height;
    ((this._red3fc0f371d265.height = 0), (this._red3fc0f371d265.height = t));
    for (let i of r) {
      let s = this._rdf4421b7df5a37.clone(),
        o = s.findChildByName("name");
      (this._habboHelp.localization?._r43eae9731f5b27(
        `help.cfh.topic.${i.id}`,
        "name",
        this._reportedUserName,
      ),
        o != null &&
          ((o.caption = `\${help.cfh.topic.${i.id}}`),
          o.height < o.textHeight && (o.height = o.textHeight + 5),
          s.height < o.height + o.y * 2 + 5 && (s.height = o.height + o.y * 2 + 5)),
        (s.name = i.name),
        s.addEventListener(u.CLICK, this._r4c711a27aeba43),
        this._red3fc0f371d265.addListItem(s));
    }
    return ((this._r46c313bea525b5 = a.TOPIC_CONTAINER), this._r1119bbfafcb951(), !0);
  }
  populateInstantMessages() {
    if (this.var_1705 == null || this._rb7f650b3b32995 == null || this._habboHelp == null)
      return;
    (this.var_1705.removeListItems(), (this._habboHelp._rac50ce9cc85d8c._r57d695ff15edb9 = !0));
    let e =
      this._habboHelp.reportedUserId > 0
        ? this._habboHelp._rac50ce9cc85d8c._r84e188e8801478(this._habboHelp.reportedUserId)
        : this._habboHelp._rac50ce9cc85d8c._rc33dd608d2ddc4();
    for (let r of e) {
      if (r.userId === this._habboHelp._rb286a1f9faeb60) continue;
      let t = this._rb7f650b3b32995.clone(),
        i = t.findChildByName("chat_text"),
        s = t.findChildByName("chat_check");
      (i != null &&
        ((i.caption = r.text),
        i.height < i.textHeight && (i.height = i.textHeight + 5),
        t.height < i.height + i.y * 2 && (t.height = i.height + i.y * 2)),
        (t.id = r.index),
        (t.procedure = this.onChatEntryEvent),
        s && (s.isSelected = r.selected),
        this.var_1705.addListItem(t));
    }
  }
  populateChatMessage() {
    if (!(this.var_1705 == null || this._rb7f650b3b32995 == null || this._habboHelp == null)) {
      (this.var_1705.removeListItems(),
        (this._habboHelp._r86d4afd9e4a8a4._r57d695ff15edb9 = !0));
      for (let e of this._habboHelp._r86d4afd9e4a8a4._r84e188e8801478(
        this._habboHelp.reportedUserId,
      ) ?? []) {
        let r = this._rb7f650b3b32995.clone(),
          t = r.findChildByName("chat_check");
        ((r.findChildByName("chat_text").caption = e.text),
          (r.id = e.index),
          (r.procedure = this.onInstantMessageEntryEvent),
          t && (t.isSelected = e.selected),
          this.var_1705.addListItem(r));
      }
    }
  }
  deselectChatEntries() {
    if (this._habboHelp != null) {
      for (let e of this._habboHelp._r86d4afd9e4a8a4._rc33dd608d2ddc4().getValues())
        for (let r of e) r.selected = !1;
      for (let e of this._habboHelp._rac50ce9cc85d8c._rc33dd608d2ddc4()) e.selected = !1;
    }
  }
  onChatEntryEvent = n((e, r) => {
    if (e.type !== u.CLICK || this._habboHelp == null) return;
    let t = r.id,
      i = null,
      s = r.parent;
    s != null &&
      (r === s.findChildByName("chat_text")
        ? ((t = s.id), (i = s.findChildByName("chat_check")))
        : r === s.findChildByName("chat_check") && ((t = s.id), (i = r)));
    let o = this._habboHelp._rac50ce9cc85d8c.getItem(t);
    o != null &&
      (!o.selected &&
        o.roomId !== this._habboHelp.reportedRoomId &&
        (this._habboHelp.reportedRoomId = o.roomId),
      (o.selected = !o.selected),
      i && (i.isSelected = o.selected));
  }, "onChatEntryEvent");
  onInstantMessageEntryEvent = n((e, r) => {
    if (e.type !== u.CLICK || this._habboHelp == null) return;
    let t = r.id,
      i = null;
    r.parent != null &&
      (r === r.parent.findChildByName("chat_text")
        ? ((t = r.parent.id), (i = r.parent.findChildByName("chat_check")))
        : r === r.parent.findChildByName("chat_check") && ((t = r.parent.id), (i = r)));
    let s = this._habboHelp._r86d4afd9e4a8a4.getItem(this._habboHelp.reportedUserId, t);
    s != null && ((s.selected = !s.selected), i && (i.isSelected = s.selected));
  }, "onInstantMessageEntryEvent");
  openReportingIMSelection() {
    return (
      this.populateUsers(),
      (this._habboHelp?.reportedUserId ?? 0) <= 0
        ? (this._habboHelp?.windowManager?.alertWithModal(
            "${generic.alert.title}",
            "${help.cfh.error.no_user_data}",
            0,
            null,
          ),
          this.closeWindow(),
          !1)
        : !0
    );
  }
  _r4c711a27aeba43 = n((e) => {
    this._r22a12f56545ee3 == null && this.openWindow();
    let r = e?.target;
    ((this.var_563 = r != null ? this.getTopic(r.name) : null),
      this.id(a.MESSAGE_CONTAINER));
  }, "_r4c711a27aeba43");
  _rd4a4e4f58a7cda() {
    return (
      this.var_840 === jt.REPORT_TYPE_ROOM ||
      this.var_840 === jt.REPORT_TYPE_THREAD ||
      this.var_840 === jt.REPORT_TYPE_MESSAGE
    );
  }
  _r66442b616eceff(e) {
    return this._rd4a4e4f58a7cda() || this.verifyUserSelected()
      ? (this.id(a.REASON_CONTAINER),
        e === jt.REPORT_TYPE_ROOM ? this.populateRoomReportButton() : this.populateReasons(),
        !0)
      : !1;
  }
  getTopic(e) {
    for (let r of this._habboHelp?._callForHelpCategories ?? [])
      for (let t of r._rddb8305acca679) if (t.name === e) return t;
    return null;
  }
  updateUserData() {
    if (!(this._view == null || this._habboHelp == null))
      switch (this.var_840) {
        case jt.REPORT_TYPE_ROOM:
          (this._view.findChildByName("reported_user_avatar") &&
            (this._view.findChildByName("reported_user_avatar").visible = !1),
            this._view.findChildByName("user_info_title") &&
              (this._view.findChildByName("user_info_title").visible = !1),
            this._view.findChildByName("reported_user_name") &&
              (this._view.findChildByName("reported_user_name").caption =
                this._habboHelp._r6d93655097f605.reportedRoomName));
          break;
        case jt.REPORT_TYPE_THREAD:
        case jt.REPORT_TYPE_MESSAGE:
          (this._view.findChildByName("reported_user_avatar") &&
            (this._view.findChildByName("reported_user_avatar").visible = !1),
            this._view.findChildByName("user_info_title") &&
              (this._view.findChildByName("user_info_title").visible = !1),
            this._view.findChildByName("reported_user_name") &&
              (this._view.findChildByName("reported_user_name").visible = !1));
          break;
        default:
          if (this._habboHelp.reportedUserId > 0) {
            let e = this._habboHelp._ra8fe81e2f96c0e.getEntry(
              this._habboHelp.reportedUserId,
            );
            (e != null
              ? ((this._reportedUserName = e.userName),
                ((this._view.findChildByName("reported_user_avatar")?.widget).figure = e.figure))
              : (this._view.findChildByName("reported_user_avatar") &&
                  (this._view.findChildByName("reported_user_avatar").visible = !1),
                (this._reportedUserName = this._habboHelp.onPendingCallsForHelp)),
              this._view.findChildByName("reported_user_name") &&
                (this._view.findChildByName("reported_user_name").caption = this._reportedUserName));
          }
          break;
      }
  }
}
