// Extracted from HabboAirLauncher.deobf.js, line 230022.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/help/guidehelp/GuideSessionController.as
// Obfuscated name: _ib45ea61ac6e4d5

class a {
  constructor(e) {
    this._r81763b91025ebb = e;
    let r = this._r81763b91025ebb?.habboHelp;
    ((this._r88adb5d7427f16 = r?.getBoolean("guidetool.handle.help_requests") ?? !1),
      (this._r5b2432060614d0 = r?.getBoolean("guidetool.handle.chat_reviews") ?? !1),
      (this._ra04b70583892ab = r?.getBoolean("guidetool.handle.tour_requests") ?? !1),
      (this._r1b47c2fa331776 = r?.getXmlWindow("chat_msg")),
      (this._r44f3576337a894 = r?.getXmlWindow("chat_msg_notification")),
      (this._r156b50d52b6e36 = r?.getXmlWindow("chat_msg_reminder")),
      r?.context?.dispatchEvent?.stage?.addEventListener(UnkClass_fd7c12.var_370, this._r49c67624b0b5e3),
      (this._r32ac70b3dd2f21 = setInterval(this._rc3d8a577dc4b7c, a.const_613)),
      (this._r2af29eeee23e4c = _ia411d8d8194a3a()),
      (this._rbb7bcfd08d52c1 = setInterval(this._r3437fd45ecdce0, 5e3)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_2391(this._r8d00d687c63193)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_bca29e(this._r79a1c6a71e3149)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_2940(this._re7e0d94d2ea961)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_2844(this._rc3d159747f4984)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3525(this._r4f7e580f2edab6)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3129(this._r63e3797d508f91)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_ce7773(this._r4ce6fbec1150e9)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3607(this._re334bffbb2a5eb)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3408(this._rcc8a5b86f77167)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3761(this._r662128b71f9927)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_class_2880(this._r773ce30a57f0a5)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_7d9fe5(this._ra2afa1adf65f89)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_f3384a(this._ra939ff62d9b427)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_2453(this._rcd8d501cc456ad)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new class_3556(this._rbe4e203e0770e7)),
      r?._rf3db13932bfb60?._r2e106e2349a0b6(new UnkMessageEvent_40e2d1(this._r2f1ec6da5b727c)));
  }
  static {
    n(this, "GuideSessionController");
  }
  static _r8e8b48b450dfc2 = 0;
  static var_2355 = 1;
  static var_4862 = 2;
  static _r4ef0e434794b7e = 0;
  static _rf2a9ba9529fc5f = 1;
  static _r10a08d5ec5af1b = 2;
  static _rf5ddccad0109c7 = -1;
  static _r13d12122ff5a32 = 0;
  static _rcefad3a825d45c = 1;
  static _r3f2e63591782d7 = 2;
  static const_1250 = 3e3;
  static const_613 = 500;
  static _r14af66d3bdfb9a = ["waiting", "ok", "bad", "very_bad", "refused", "searching"];
  static _r9c27036690f7e4 = ["waiting", "ok", "bad", "very_bad", "inconclusive", "searching"];
  static STATUS_KEY_PREFIX = "${guide.bully.request.guide.results.outcome.";
  static STATUS_ICON_PREFIX = "help_chat_review_decision_";
  _sessionData = new B0();
  _window = null;
  _ra1e08ee4b56f6d = null;
  _r9407c0730757ac = new E(120, 80);
  _onDuty = !1;
  _r278ca634a0b41a = !1;
  _disposed = !1;
  _r88adb5d7427f16;
  _r5b2432060614d0;
  _ra04b70583892ab;
  _r1b47c2fa331776 = null;
  _r44f3576337a894 = null;
  _r156b50d52b6e36 = null;
  _r48cd263c41bb0d = null;
  _r8b3b50c87f2490 = 0;
  _r1ad9f85a4167f1 = !1;
  _r32ac70b3dd2f21 = null;
  _rff022b5e7355bb = [];
  _r4b1c7661769774 = 0;
  _rbb7bcfd08d52c1 = null;
  _r2af29eeee23e4c = 0;
  dispose() {
    this._disposed ||
      (this._rbb7bcfd08d52c1 != null &&
        (clearInterval(this._rbb7bcfd08d52c1), (this._rbb7bcfd08d52c1 = null)),
      this._r32ac70b3dd2f21 != null && (clearInterval(this._r32ac70b3dd2f21), (this._r32ac70b3dd2f21 = null)),
      (this._rff022b5e7355bb = []),
      this._r7be4981172c9f6(),
      this._rc2a1d655b2b6e6(),
      this.closeWindow(),
      this._r1b47c2fa331776?.dispose(),
      (this._r1b47c2fa331776 = null),
      this._r44f3576337a894?.dispose(),
      (this._r44f3576337a894 = null),
      this._r156b50d52b6e36?.dispose(),
      (this._r156b50d52b6e36 = null),
      this._r81763b91025ebb?.habboHelp.context?.dispatchEvent?.stage?.removeEventListener(
        UnkClass_fd7c12.var_370,
        this._r49c67624b0b5e3,
      ),
      (this._r81763b91025ebb = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  onInput(e) {
    let r = this._r81763b91025ebb?.habboHelp;
    if (!(r == null || this._sessionData._rcc8a3bda444523())) {
      if (e === UnkConstants_d64457._rb6595d1a1fe905 || e === UnkConstants_d64457._rba379f7c9c44bb) {
        ((this._sessionData.role = B0._r711573a6873f8a),
          (this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_CREATE),
          (this._sessionData._r703d0531e0e84c = e),
          r._rb13ed3a89b85ae(
            new class_3326(e, r.localization?.getLocalization("guide.help.request.tour.description") ?? ""),
          ));
        return;
      }
      this._rd9cc4bb23a54ba(e);
    }
  }
  _racc3c0ed238b27() {
    this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(
      new UnkMessageComposer_4args_fbe8d1(this._onDuty, this._ra04b70583892ab, this._r88adb5d7427f16, this._r5b2432060614d0),
    );
  }
  openReportWindow() {
    let e = this._r81763b91025ebb?.habboHelp;
    if (this._ra1e08ee4b56f6d != null || this._window == null || e == null) return;
    let r = e.windowManager?.getDesktop(0);
    if (((this._ra1e08ee4b56f6d = e.getXmlWindow("report_window")), this._ra1e08ee4b56f6d == null))
      return;
    ((this._ra1e08ee4b56f6d.procedure = this.var_393),
      (this._ra1e08ee4b56f6d.x = Math.max(
        0,
        Math.min(
          (r?.width ?? this._ra1e08ee4b56f6d.width) - this._ra1e08ee4b56f6d.width,
          this._window.x + this._window.width + 10,
        ),
      )),
      (this._ra1e08ee4b56f6d.y = Math.max(0, this._window.y)));
    let t = this._rc52b727d6e5c63(this._ra1e08ee4b56f6d);
    t != null && (t._r8b6f1399ef3de2 = this);
  }
  _r64e450f8ad70fb(e, r) {
    if (r.length === 0) return;
    this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_241f2a(r));
    let t = e.widget;
    (t != null && (t.message = ""), this._raac1aff35315f6());
  }
  _r662128b71f9927 = n((e) => {
    let r = ClassUtils.getParser(e, class_3923);
    if (r == null) return;
    let t = this._r81763b91025ebb?.habboHelp;
    ((this._onDuty = r.onDuty),
      t?.localization?._r43eae9731f5b27(
        "guide.help.guide.tool.guidesonduty",
        "amount",
        `${r._r42ccd304f56ad0}`,
      ),
      t?.localization?._r43eae9731f5b27(
        "guide.help.guide.tool.helpersonduty",
        "amount",
        `${r._rc5a81c2047e008}`,
      ),
      t?.localization?._r43eae9731f5b27(
        "guide.help.guide.tool.guardiansonduty",
        "amount",
        `${r._r1ab273a44f1ab4}`,
      ),
      this.setStateGuideTool());
  }, "_r662128b71f9927");
  _r8d00d687c63193 = n((e) => {
    if (this._disposed) return;
    let r = e.getParser();
    if (r != null) {
      if (r._r8167aa5d949122) {
        if (this._sessionData._rccc20fe64a9117()) {
          this._r4b38847af17be9();
          return;
        }
        this.setStateGuideAccept(r._r6087fb63b9a270, r._r2f13cfea9b15a1, r._rd04c2e17431248);
        return;
      }
      if (!this._sessionData._r6686ce2adc7929()) {
        this._r4b38847af17be9();
        return;
      }
      this.setStateUserPendingRequest(r._r6087fb63b9a270, r._r2f13cfea9b15a1, r._rd04c2e17431248);
    }
  }, "_r8d00d687c63193");
  _re7e0d94d2ea961 = n((e) => {
    if (this._disposed) return;
    let r = ClassUtils.getParser(e, class_2740);
    r != null &&
      ((this._sessionData.userId = r.requesterUserId),
      (this._sessionData.userName = r._r19234559776703),
      (this._sessionData._rd90e40ea576eac = r._r92ee533e1c3c13),
      (this._sessionData._re37dbc09670180 = r._rcd57c4e33d2e39),
      (this._sessionData.guideName = r.guideName),
      (this._sessionData._reea2dd8bfffc6d = r._reea2dd8bfffc6d),
      (this._r1ad9f85a4167f1 = !1),
      this._sessionData._rccc20fe64a9117() ? this.setStateGuideOngoing() : this.setStateUserOngoingRequest());
  }, "_re7e0d94d2ea961");
  _r79a1c6a71e3149 = n(() => {
    if (!this._disposed) {
      if (this._r278ca634a0b41a) {
        let e = this._sessionData._r703d0531e0e84c,
          r = this._sessionData._r2ea4ca0b54bc4d;
        (this._r0edce956b3db3f(), this._rd9cc4bb23a54ba(e, r));
        return;
      }
      if (
        this._sessionData._r6686ce2adc7929() &&
        this._sessionData._ra25c446b9c70b2 === GuideSessionStateEnum.USER_FEEDBACK
      ) {
        this._r0a6312992f9ad2();
        return;
      }
      this._r0581d37d4fed57(!0);
    }
  }, "_r79a1c6a71e3149");
  _rc3d159747f4984 = n((e) => {
    if (this._disposed) return;
    let r = ClassUtils.getParser(e, class_3983);
    if (r != null) {
      if (this._sessionData._rccc20fe64a9117()) {
        this.setStateGuideClosed(r.endReason);
        return;
      }
      r.endReason === B0._r74779cde9c2c59 ? this._r3e097424bf17fe() : this._r519ca330413546();
    }
  }, "_rc3d159747f4984");
  _r4f7e580f2edab6 = n((e) => {
    if (this._disposed) return;
    let r = ClassUtils.getParser(e, class_3960);
    if (r != null)
      switch (r.errorCode) {
        case class_3960.const_1227:
          this.setStateRejected();
          break;
        case class_3960.const_502:
        case class_3960.const_720:
          this.setStateClosedWithNotification("guide.bully.request.error.not_enough_guardians");
          break;
        default:
          this._r4b38847af17be9();
          break;
      }
  }, "_r4f7e580f2edab6");
  _r63e3797d508f91 = n((e) => {
    if (this._disposed) return;
    let r = ClassUtils.getParser(e, class_3878);
    if (r == null || this._window == null || !this._sessionData._r3309318e1639a0()) return;
    let t = this._sessionData.userName,
      i = this._sessionData._rd90e40ea576eac;
    r.senderId === this._sessionData._re37dbc09670180 &&
      ((t = this._sessionData.guideName), (i = this._sessionData._reea2dd8bfffc6d));
    let s = !0;
    (((this._sessionData._rccc20fe64a9117() &&
      this._sessionData._re37dbc09670180 === r.senderId) ||
      (!this._sessionData._rccc20fe64a9117() && this._sessionData.userId === r.senderId)) &&
      (s = !1),
      this._rbda5cb55b7cbf2(r.senderId, t, i, r.chatMessage, s));
  }, "_r63e3797d508f91");
  _r4ce6fbec1150e9 = n((e) => {
    if (this._disposed || !this._sessionData._r3309318e1639a0()) return;
    let r = ClassUtils.getParser(e, UnkMessageParser_I_92089c);
    if (r == null) return;
    let t = r._r403ddeaed316d6();
    if (t > 0) {
      this._r81763b91025ebb?.habboHelp.roomSessionManager?.gotoRoom(t);
      return;
    }
    this._rbda5cb55b7cbf2(
      this._sessionData._re37dbc09670180,
      this._sessionData.guideName,
      this._sessionData._reea2dd8bfffc6d,
      this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
        "guide.help.request.guide.ongoing.user.not.in.room.error",
        "",
      ) ?? "",
      !1,
      a._r10a08d5ec5af1b,
    );
  }, "_r4ce6fbec1150e9");
  _re334bffbb2a5eb = n((e) => {
    if (this._disposed || this._window == null || !this._sessionData._r3309318e1639a0()) return;
    let r = e.parser,
      t = r._rf6169a8ce00356(),
      i = r._r9bf502fda037f6();
    if (this._sessionData._rccc20fe64a9117()) {
      this.addSystemMessage(
        a._r8e8b48b450dfc2,
        i > 0
          ? (this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
              "guide.help.request.guide.ongoing.error.invite.success",
              "",
              "name",
              this._sessionData.userName,
            ) ?? "")
          : (this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
              "guide.help.request.guide.ongoing.error.invite.failed",
              "",
            ) ?? ""),
      );
      return;
    }
    i > 0 &&
      this._rbda5cb55b7cbf2(
        this._sessionData._re37dbc09670180,
        this._sessionData.guideName,
        this._sessionData._reea2dd8bfffc6d,
        this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
          "guide.help.request.user.ongoing.visit.guide.request.message",
          "",
          "name",
          this._sessionData.guideName,
          "roomname",
          t,
        ) ?? "",
        !0,
        a._rf2a9ba9529fc5f,
        i,
      );
  }, "_re334bffbb2a5eb");
  _rcc8a5b86f77167 = n((e) => {
    let r = ClassUtils.getParser(e, class_4130);
    r != null && this._ra28678def3eb1d(r.isTyping);
  }, "_rcc8a5b86f77167");
  _r773ce30a57f0a5 = n((e) => {
    this._sessionData._ra25c446b9c70b2 === GuideSessionStateEnum.GUIDE_TOOL &&
      ((ClassUtils.getParser(e, class_2880)?.isPerkAllowed(class_2156.USE_GUIDE_TOOL) ?? !0) ||
        (this._onDuty &&
          (this._r80de93f1654c7a(!1),
          this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_4args_fbe8d1(!1, !1, !1, !1))),
        this._r0581d37d4fed57(!1)));
  }, "_r773ce30a57f0a5");
  _ra2afa1adf65f89 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_I_33fbfd);
    r != null && this._r4a5301db508d0e(r._re88016f07cf2e9);
  }, "_ra2afa1adf65f89");
  _ra939ff62d9b427 = n((e) => {
    let r = ClassUtils.getParser(e, UnkMessageParser_IS_62ab49);
    r != null && this._rb05265bc6cce69(r._ra69a2838852932, r._rc99187437356a9 ?? "");
  }, "_ra939ff62d9b427");
  _rcd8d501cc456ad = n((e) => {
    let r = ClassUtils.getParser(e, class_4089);
    r != null &&
      this._sessionData._ra25c446b9c70b2 === GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_WAIT_FOR_RESULTS &&
      this.showStatus(this._window?.findChildByName("results"), r.status ?? []);
  }, "_rcd8d501cc456ad");
  _rbe4e203e0770e7 = n((e) => {
    let r = ClassUtils.getParser(e, class_4200);
    r != null && this.setStateGuardianChatReviewResults(r._re08cb915809022, r._rf7e40e1818e24a, r._r6db7608dbea991 ?? []);
  }, "_rbe4e203e0770e7");
  _r2f1ec6da5b727c = n(() => {
    this._r0581d37d4fed57(!0);
  }, "_r2f1ec6da5b727c");
  setStateGuideTool() {
    if (
      !this._sessionData._rcc8a3bda444523() &&
      ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUIDE_TOOL),
      this.openWindow(this.onGuideToolEvent, !0),
      this.setOnDutyStatus(this._onDuty),
      this._r7aed7afd099b1a("handle_guardian_tickets", this._r5b2432060614d0),
      this._r7aed7afd099b1a("handle_helper_tickets", this._r88adb5d7427f16),
      this._r7aed7afd099b1a("handle_guide_tickets", this._ra04b70583892ab),
      !(this._r81763b91025ebb?.habboHelp.sessionDataManager?.isPerkAllowed(class_2156.JUDGE_CHAT_REVIEWS) ?? !0))
    ) {
      let r = this._window?.findChildByName("list")?.getListItemByName("handle_selection_container"),
        t = r?.findChildByName("handle_guardian_tickets"),
        i = r?.findChildByName("selection_separator");
      (t?.dispose(), i != null && (i.y -= 17), r != null && (r.height -= 17));
    }
  }
  _rd9cc4bb23a54ba(e, r = "") {
    if (this._sessionData._rcc8a3bda444523()) return;
    ((this._sessionData.role = B0._r711573a6873f8a),
      (this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_CREATE),
      (this._sessionData._r703d0531e0e84c = e),
      this.openWindow(this._r2805faaa5320ad, !0));
    let t = this._rc52b727d6e5c63();
    t != null &&
      ((t._r4c2336e24c69cc =
        this._r81763b91025ebb?.habboHelp.getInteger("guide.help.request.max.description.length", 255) ?? 255),
      (t.message = r));
  }
  setStateUserPendingRequest(e, r, t) {
    if (!this._sessionData._r6686ce2adc7929()) return;
    ((this._sessionData.role = B0._r711573a6873f8a),
      (this._sessionData._r703d0531e0e84c = e),
      (this._sessionData._r2ea4ca0b54bc4d = r),
      (this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_PENDING),
      this.openWindow(this._r364882dec8e55f, !1),
      this.setCaption("request_type", this.getRequestTypeCaption(e)),
      this.setCaption("request_description", r));
    let i =
      this._r81763b91025ebb?.habboHelp.localization != null
        ? ra.getFriendlyTime(this._r81763b91025ebb.habboHelp.localization, t)
        : `${t}`;
    this.setCaption(
      "waiting_time",
      this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
        "guide.help.request.user.pending.info.waiting",
        "",
        "waitingtime",
        i,
      ) ?? "",
    );
  }
  setStateUserOngoingRequest() {
    if (!this._sessionData._r6686ce2adc7929()) return;
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_ONGOING),
      this.openWindow(this.onUserOngoingEvent, !1),
      this.addSystemMessage(
        a.var_2355,
        this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
          "guide.help.requester.disclaimer",
          "",
        ) ?? "",
      ),
      this._sessionData._r703d0531e0e84c === UnkConstants_d64457._rb6595d1a1fe905 ||
      this._sessionData._r703d0531e0e84c === UnkConstants_d64457._rba379f7c9c44bb
        ? this.addSystemMessage(
            a.var_4862,
            this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
              "guide.help.request.tour.reminder",
              "",
            ) ?? "",
          )
        : this._rbda5cb55b7cbf2(
            this._sessionData.userId,
            this._sessionData.userName,
            this._sessionData._rd90e40ea576eac,
            this._sessionData._r2ea4ca0b54bc4d,
            !1,
            a._r10a08d5ec5af1b,
          ),
      this._window != null &&
        (this._window.caption =
          this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
            "guide.help.request.user.ongoing.title",
            "",
            "name",
            this._sessionData.guideName,
          ) ?? ""),
      this.setCaption("guide_name_link", this._sessionData.guideName));
    let e = this._rc52b727d6e5c63();
    e != null &&
      ((e._r8b6f1399ef3de2 = this),
      (e._rda4899eac6ad8b =
        this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
          "guide.help.request.user.ongoing.input.help",
          "",
          "name",
          this._sessionData.guideName,
        ) ?? ""),
      (e._r4c2336e24c69cc =
        this._r81763b91025ebb?.habboHelp.getInteger("guide.help.request.max.chat.message.length", 150) ??
        150));
  }
  setStateGuideAccept(e, r, t) {
    if (!(!this._onDuty || this._sessionData._rcc8a3bda444523())) {
      if (
        ((this._sessionData.role = B0._rbb2dfdd0beabe0),
        (this._sessionData._r703d0531e0e84c = e),
        (this._sessionData._r2ea4ca0b54bc4d = r),
        (this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUIDE_ACCEPT),
        this.openWindow(this._rebbb2d8afa399f, !1),
        this._r81763b91025ebb?.habboHelp.musicController?.playSound(HabboSoundTypesEnum.SOUND_GUIDE_REQUEST),
        e === UnkConstants_d64457._rba379f7c9c44bb || e === UnkConstants_d64457._rb6595d1a1fe905)
      ) {
        let i = this._window?.findChildByName("frank_greeting"),
          s = this._window?.findChildByName("request_title"),
          o = this._window?.findChildByName("request_type"),
          d = this._window?.findChildByName("request_description_wrapper"),
          c = this._window?.findChildByName("request_description"),
          f = this._window?.findChildByName("itemlist"),
          l = this._window?.findChildByName("border"),
          b = this._window?.findChildByName("skip_link");
        if (
          (i != null && (i.visible = !0),
          s != null && (s.caption = "${guide.help.request.guide.accept.tour_request.title}"),
          o?.dispose(),
          f != null && d != null && c != null)
        ) {
          (f.addListItemAt(c, f.getListItemIndex(d)),
            f.removeListItem(d),
            (c.x = s?.x ?? c.x),
            (c.margins.top = 10),
            (c.caption = r));
          let _ = f.height,
            h = b?.bottom ?? _;
          ((f.height = h),
            l != null && (l.height += h - _),
            this._window != null && (this._window.height += h - _ + 40));
        }
      } else
        (this.setCaption("request_type", this.getRequestTypeCaption(e)),
          this.setCaption("request_description", r));
      this.setCountdown(t);
    }
  }
  setStateGuideOngoing() {
    if (!this._onDuty || !this._sessionData._rccc20fe64a9117()) return;
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUIDE_ONGOING),
      this.openWindow(this._r0056e68a8de20c, !1),
      this._rbda5cb55b7cbf2(
        this._sessionData.userId,
        this._sessionData.userName,
        this._sessionData._rd90e40ea576eac,
        this._sessionData._r2ea4ca0b54bc4d,
        !0,
        a._r10a08d5ec5af1b,
      ),
      this._window != null &&
        (this._window.caption =
          this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
            "guide.help.request.guide.ongoing.title",
            "",
            "name",
            this._sessionData.userName,
          ) ?? ""));
    let e = this._rc52b727d6e5c63();
    if (
      (e != null &&
        ((e._r8b6f1399ef3de2 = this),
        (e._rda4899eac6ad8b =
          this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
            "guide.help.request.guide.ongoing.input.empty",
            "",
            "name",
            this._sessionData.userName,
          ) ?? ""),
        (e._r4c2336e24c69cc =
          this._r81763b91025ebb?.habboHelp.getInteger("guide.help.request.max.chat.message.length", 150) ??
          150)),
      this._sessionData._r703d0531e0e84c === UnkConstants_d64457._rba379f7c9c44bb ||
        this._sessionData._r703d0531e0e84c === UnkConstants_d64457._rb6595d1a1fe905)
    ) {
      let r = "${guide.help.request.join.room.title}",
        t =
          this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
            "guide.help.request.join.room.summary",
            "",
            "name",
            this._sessionData.userName,
          ) ?? "";
      this._r81763b91025ebb?.habboHelp.windowManager?.confirm(r, t, 0, (i, s) => {
        (i.dispose(),
          s.type === y.const_1300 && this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_0args_b9e29b()));
      });
    }
  }
  _r519ca330413546() {
    this._sessionData._r6686ce2adc7929() &&
      ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_FEEDBACK),
      this.openWindow(this._rd3ea6077ceba4d, !1),
      this.setCaption("guide_name_link", this._sessionData.guideName));
  }
  _r0a6312992f9ad2() {
    this._sessionData._r6686ce2adc7929() &&
      ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_THANKS),
      this.openWindow(this._re80e2a3f577016, !0));
  }
  _r3e097424bf17fe() {
    this._sessionData._r6686ce2adc7929() &&
      ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.USER_GUIDE_DISCONNECTED),
      this.openWindow(this._r2efa39b950f877, !0),
      this.setCaption("guide_name_link", this._sessionData.guideName));
  }
  setStateGuideClosed(e) {
    if (!this._onDuty || !this._sessionData._rccc20fe64a9117()) return;
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUIDE_CLOSED),
      this.openWindow(this._r775bc438264ed6, !0),
      this.setCaption(
        "close_reason",
        e === B0._r74779cde9c2c59 || e === B0._r7894481c427574
          ? (this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
              "guide.help.request.guide.closed.reason.other",
              "",
              "name",
              this._sessionData.userName,
            ) ?? "")
          : (this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
              "guide.help.request.guide.closed.reason.you",
              "",
            ) ?? ""),
      ),
      this.setCaption(
        "report_link",
        this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
          "guide.help.request.guide.closed.report.link",
          "",
          "name",
          this._sessionData.userName,
        ) ?? "",
      ));
    let r = this._window?.findChildByName("requester_avatar")?.widget;
    r != null && (r.figure = this._sessionData._rd90e40ea576eac);
  }
  _r4a5301db508d0e(e) {
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_ACCEPT),
      this.openWindow(this._r46a71955a774e0, !1),
      this._r81763b91025ebb?.habboHelp.musicController?.playSound(HabboSoundTypesEnum.SOUND_GUIDE_REQUEST),
      this.setCountdown(e));
  }
  _rb05265bc6cce69(e, r) {
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_VOTE),
      this.openWindow(this._ra3ad685cae753e, !1),
      this.setCountdown(e),
      this.setStateGuardianChatReviewVote(r));
  }
  setStateGuardianChatReviewWaitForOtherVoters() {
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_WAIT_FOR_VOTERS),
      this.openWindow(this.onGuardianChatReviewWaitForOtherVotersEvent, !1),
      this.startWaitingAnimation(
        this._window?.findChildByName("waiting_animation"),
        "help_chat_review_progress_big",
        4,
      ));
  }
  _r01dc6bd18f217c(e) {
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_WAIT_FOR_RESULTS),
      this.openWindow(this._rbd734a5becb2e6, !0),
      this.showOwnVote(e));
  }
  setStateGuardianChatReviewResults(e, r, t) {
    ((this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.GUARDIAN_CHAT_REVIEW_RESULTS),
      this.openWindow(this.onGuardianChatReviewResultsEvent, !0));
    let i = a.statusFromVote(e);
    this.setCaption("result_text", `${a.STATUS_KEY_PREFIX}${a._r9c27036690f7e4[i]}}`);
    let s = this._window?.findChildByName("result_image");
    (s != null && (s.assetUri = `${a.STATUS_ICON_PREFIX}${a._r14af66d3bdfb9a[i]}`),
      this.showOwnVote(r),
      this.showStatus(this._window?.findChildByName("results"), t));
  }
  setStateClosedWithNotification(e) {
    (this._r81763b91025ebb?.habboHelp.windowManager?._r3651220a1507f2(
      `\${${e}.title}`,
      `\${${e}.heading}`,
      `\${${e}.message}`,
    ),
      this._r0581d37d4fed57(!0));
  }
  _r4b38847af17be9() {
    (this._r80de93f1654c7a(!1),
      (this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.ERROR),
      this.openWindow(this._r2e6eb5f40064c1, !0));
  }
  setStateRejected() {
    (this._r80de93f1654c7a(!1),
      (this._sessionData._ra25c446b9c70b2 = GuideSessionStateEnum.REJECTED),
      this.openWindow(this._r6d1dc6decaeba7, !0),
      (this._sessionData._r703d0531e0e84c === UnkConstants_d64457._rb6595d1a1fe905 ||
        this._sessionData._r703d0531e0e84c === UnkConstants_d64457._rba379f7c9c44bb) &&
        (this._window &&
          (this._window.caption = "${guide.help.request.no_tour_guides.title}"),
        this.setCaption("heading", "${guide.help.request.no_tour_guides.heading}"),
        this.setCaption("message", "${guide.help.request.no_tour_guides.message}")));
  }
  _r0581d37d4fed57(e) {
    (this._r0edce956b3db3f(),
      this.closeWindow(),
      this._onDuty &&
        !(this._r81763b91025ebb?.habboHelp.sessionDataManager?.isPerkAllowed(class_2156.USE_GUIDE_TOOL) ?? !0) &&
        this._r80de93f1654c7a(!1),
      e && this._onDuty && this.setStateGuideTool());
  }
  onGuideToolEvent = n((e, r) => {
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.GUIDE_TOOL
    ))
      switch (r.name) {
        case "header_button_close":
          e.type === u.CLICK && this._r0581d37d4fed57(!1);
          break;
        case "helper_group_link":
          if (e.type === u.CLICK) {
            let t = this._r81763b91025ebb?.habboHelp.getInteger("guide.help.alpha.groupid", 0) ?? 0;
            t > 0 &&
              (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new class_1949(t, !0)),
              this._r81763b91025ebb?.habboHelp.trackGoogle(
                "guideHelp",
                `${this._window.name}_groupProfile`,
              ));
          }
          break;
        case "guide_forum_link":
          if (e.type === u.CLICK) {
            let t = this._r81763b91025ebb?.habboHelp.getInteger("guide.help.alpha.groupid", 0) ?? 0;
            if (t > 0) {
              let i = this._r81763b91025ebb?.habboHelp.getProperty("group.homepage.url") ?? "";
              ((i = i.replace("%groupid%", `${t}`)),
                Ae.openWebPage(i, "habboMain"),
                this._r81763b91025ebb?.habboHelp.trackGoogle(
                  "guideHelp",
                  `${this._window.name}_groupForum`,
                ));
            }
          }
          break;
        case "guide_tool_duty":
          switch (e.type) {
            case y.const_238: {
              if (
                (this.setOnDutyStatus(!0),
                (this._r88adb5d7427f16 =
                  this._window.findChildByName("handle_helper_tickets")?.isSelected ?? !1),
                (this._r5b2432060614d0 =
                  this._window.findChildByName("handle_guardian_tickets")?.isSelected ?? !1),
                (this._ra04b70583892ab =
                  this._window.findChildByName("handle_guide_tickets")?.isSelected ?? !1),
                !this._r88adb5d7427f16 && !this._r5b2432060614d0 && !this._ra04b70583892ab)
              ) {
                (this._r81763b91025ebb?.habboHelp.windowManager?._r3651220a1507f2(
                  "${guide.help.guide.tool.noqueueselected.caption}",
                  "${guide.help.guide.tool.noqueueselected.subtitle}",
                  "${guide.help.guide.tool.noqueueselected.message}",
                ),
                  this.setOnDutyStatus(!1));
                return;
              }
              (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(
                new UnkMessageComposer_4args_fbe8d1(!0, this._ra04b70583892ab, this._r88adb5d7427f16, this._r5b2432060614d0),
              ),
                this._r81763b91025ebb?.habboHelp.trackGoogle(
                  "guideHelp",
                  `${this._window.name}_onDuty`,
                ));
              break;
            }
            case y.const_1217:
              (this.setOnDutyStatus(!1),
                this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_4args_fbe8d1(!1, !1, !1, !1)),
                this._r81763b91025ebb?.habboHelp.trackGoogle(
                  "guideHelp",
                  `${this._window.name}_offDuty`,
                ));
              break;
          }
          break;
        case "guide_tool_talent":
          e.type === u.CLICK &&
            (this._r81763b91025ebb?.habboHelp.getBoolean("talent.track.enabled") ?? !1) &&
            (this._r81763b91025ebb?.habboHelp.tracking?.trackTalentTrackOpen(ys.HELPER, "guidetool"),
            this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new class_2687(ys.HELPER)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_talent`,
            ));
          break;
      }
  }, "onGuideToolEvent");
  _r2805faaa5320ad = n((e, r) => {
    let t = this._r81763b91025ebb?.habboHelp;
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.USER_CREATE ||
      e.type !== u.CLICK ||
      t == null
    ))
      switch (r.name) {
        case "create_button": {
          let i = ua.trim(this._rc52b727d6e5c63()?.message ?? "");
          if (i.length < t.getInteger("guide.help.request.min.description.length", 15)) {
            let s = this._window.findChildByName("create_error");
            (s != null && (s.visible = !0),
              this._window.findChildByName("list")?.arrangeListItems());
            return;
          }
          (t._rb13ed3a89b85ae(new class_3326(this._sessionData._r703d0531e0e84c, i)),
            t.trackGoogle("guideHelp", `${this._window.name}_clickCreate`),
            this.closeWindow());
          break;
        }
        case "header_button_close":
        case "cancel_link":
          (t.trackGoogle("guideHelp", `${this._window.name}_clickCancel`),
            this._r0581d37d4fed57(!0));
          break;
      }
  }, "_r2805faaa5320ad");
  _rebbb2d8afa399f = n((e, r) => {
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.GUIDE_ACCEPT ||
      e.type !== u.CLICK
    ))
      switch (r.name) {
        case "accept_button":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_e52ad3(!0)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickAccept`,
            ),
            this.closeWindow());
          break;
        case "skip_link":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_e52ad3(!1)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickSkip`,
            ),
            this.closeWindow());
          break;
      }
  }, "_rebbb2d8afa399f");
  _r0056e68a8de20c = n((e, r) => {
    let t = this._r81763b91025ebb?.habboHelp;
    if (!(
      this.disposed ||
      e.type !== u.CLICK ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.GUIDE_ONGOING ||
      t == null
    ))
      switch (r.name) {
        case "visit_button":
          (t._rb13ed3a89b85ae(new UnkMessageComposer_0args_b9e29b()),
            t.trackGoogle("guideHelp", `${this._window.name}_clickVisit`));
          break;
        case "invite_button":
          (t._rb13ed3a89b85ae(new UnkMessageComposer_0args_c4056f()),
            t.trackGoogle("guideHelp", `${this._window.name}_clickInvite`));
          break;
        case "report_link":
          (this._rfbb86caf695e65(), t.trackGoogle("guideHelp", `${this._window.name}_clickReport`));
          break;
        case "close_link":
          (t._rb13ed3a89b85ae(new UnkMessageComposer_0args_1f252e()),
            t.trackGoogle("guideHelp", `${this._window.name}_clickClose`),
            this.closeWindow());
          break;
      }
  }, "_r0056e68a8de20c");
  onUserOngoingEvent = n((e, r) => {
    let t = this._r81763b91025ebb?.habboHelp;
    if (!(
      this.disposed ||
      e.type !== u.CLICK ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.USER_ONGOING ||
      t == null
    ))
      switch (r.name) {
        case "guide_name_link":
          (t._rb13ed3a89b85ae(new class_2134(this._sessionData._re37dbc09670180)),
            t.trackGoogle("guideHelp", `${this._window.name}_clickProfile`));
          break;
        case "report_guide_link":
          (this._rfbb86caf695e65(), t.trackGoogle("guideHelp", `${this._window.name}_clickReport`));
          break;
        case "close_link":
          (t._rb13ed3a89b85ae(new UnkMessageComposer_0args_1f252e()),
            t.trackGoogle("guideHelp", `${this._window.name}_clickClose`),
            this.closeWindow());
          break;
      }
  }, "onUserOngoingEvent");
  _r364882dec8e55f = n((e, r) => {
    this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.USER_PENDING ||
      e.type !== u.CLICK ||
      (r.name === "cancel_button" &&
        (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_0args_d8a83c()),
        this._r81763b91025ebb?.habboHelp.trackGoogle(
          "guideHelp",
          `${this._window.name}_clickCancel`,
        ),
        this.closeWindow()));
  }, "_r364882dec8e55f");
  _r775bc438264ed6 = n((e, r) => {
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.GUIDE_CLOSED ||
      e.type !== u.CLICK
    ))
      switch (r.name) {
        case "close_button":
        case "header_button_close":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_b9c7ad(!0)), this.closeWindow());
          break;
        case "report_link":
          (this._rfbb86caf695e65(),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickReport`,
            ));
          break;
      }
  }, "_r775bc438264ed6");
  _rd3ea6077ceba4d = n((e, r) => {
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.USER_FEEDBACK ||
      e.type !== u.CLICK
    ))
      switch (r.name) {
        case "guide_name_link":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new class_2134(this._sessionData._re37dbc09670180)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickProfile`,
            ));
          break;
        case "report_guide_link":
          (this._rfbb86caf695e65(),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickReport`,
            ));
          break;
        case "positive_button":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_b9c7ad(!0)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickPositiveFeedback`,
            ),
            this.closeWindow());
          break;
        case "negative_button":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_b9c7ad(!1)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickNegativeFeedback`,
            ),
            this.closeWindow());
          break;
      }
  }, "_rd3ea6077ceba4d");
  _r2efa39b950f877 = n((e, r) => {
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.USER_GUIDE_DISCONNECTED ||
      e.type !== u.CLICK
    ))
      switch (r.name) {
        case "header_button_close":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_b9c7ad(!1)), this.closeWindow());
          break;
        case "guide_name_link":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new class_2134(this._sessionData._re37dbc09670180)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickProfile`,
            ));
          break;
        case "report_guide_link":
          (this._rfbb86caf695e65(),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickReport`,
            ));
          break;
        case "resubmit_button":
          ((this._r278ca634a0b41a = !0),
            this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_b9c7ad(!1)),
            this._r81763b91025ebb?.habboHelp.trackGoogle(
              "guideHelp",
              `${this._window.name}_clickResubmit`,
            ),
            this.closeWindow());
          break;
      }
  }, "_r2efa39b950f877");
  _re80e2a3f577016 = n((e, r) => {
    if (!(
      this.disposed ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.USER_THANKS ||
      e.type !== u.CLICK
    ))
      switch (r.name) {
        case "header_button_close":
        case "close_button":
          this._r0581d37d4fed57(!1);
          break;
      }
  }, "_re80e2a3f577016");
  _r63337ff9c2769a = n((e, r) => {
    e.type !== u.CLICK ||
      this._window == null ||
      ((r.name === "header_button_close" || r.name === "close_button") && this._r0581d37d4fed57(!0));
  }, "_r63337ff9c2769a");
  _r2e6eb5f40064c1 = n((e, r) => {
    e.type !== u.CLICK ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.ERROR ||
      ((r.name === "header_button_close" || r.name === "close_button") && this._r0581d37d4fed57(!0));
  }, "_r2e6eb5f40064c1");
  _r6d1dc6decaeba7 = n((e, r) => {
    e.type !== u.CLICK ||
      this._window == null ||
      this._window.name !== GuideSessionStateEnum.REJECTED ||
      ((r.name === "header_button_close" || r.name === "close_button") && this._r0581d37d4fed57(!0));
  }, "_r6d1dc6decaeba7");
  _r46a71955a774e0 = n((e, r) => {
    if (!(this.disposed || this._window == null || e.type !== u.CLICK))
      switch (r.name) {
        case "skip_link":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_8f877f(!1)), this._r0581d37d4fed57(!0));
          break;
        case "accept_button":
          (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_8f877f(!0)), this.setStateGuardianChatReviewWaitForOtherVoters());
          break;
      }
  }, "_r46a71955a774e0");
  _ra3ad685cae753e = n((e, r) => {
    if (!(this.disposed || this._window == null)) {
      if (e.type === u.CLICK) {
        switch (r.name) {
          case "close_link":
            (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_0args_20939e()), this._r0581d37d4fed57(!0));
            break;
          case "vote_ok":
            (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_c73ebf(a._r13d12122ff5a32)),
              this._r01dc6bd18f217c(a._r13d12122ff5a32));
            break;
          case "vote_bad":
            (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_c73ebf(a._rcefad3a825d45c)),
              this._r01dc6bd18f217c(a._rcefad3a825d45c));
            break;
          case "vote_very_bad":
            (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_c73ebf(a._r3f2e63591782d7)),
              this._r01dc6bd18f217c(a._r3f2e63591782d7));
            break;
        }
        return;
      }
      if (r.type === class_2090.const_1384 && r.name.startsWith("vote_")) {
        let t = r.name.substring(5),
          i = r,
          s = `help_chat_review_vote_${t}`,
          o = i.getChildAt(0);
        if (o == null) return;
        switch (e.type) {
          case u.OVER:
            o.id |= 1;
            break;
          case u.OUT:
            o.id &= -2;
            break;
          case u.DOWN:
            o.id |= 2;
            break;
          case u.UP:
          case u.UP_OUTSIDE:
            o.id &= -3;
            break;
        }
        switch (o.id) {
          case 1:
            o.assetUri = `${s}_over`;
            break;
          case 3:
            o.assetUri = `${s}_down`;
            break;
          default:
            o.assetUri = s;
            break;
        }
      }
    }
  }, "_ra3ad685cae753e");
  onGuardianChatReviewWaitForOtherVotersEvent = n((e, r) => {
    this.disposed ||
      this._window == null ||
      e.type !== u.CLICK ||
      (r.name === "close_link" &&
        (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_0args_20939e()), this._r0581d37d4fed57(!0)));
  }, "onGuardianChatReviewWaitForOtherVotersEvent");
  _rbd734a5becb2e6 = n((e, r) => {
    this.disposed ||
      this._window == null ||
      e.type !== u.CLICK ||
      ((r.name === "close_button" || r.name === "header_button_close") &&
        (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_0args_20939e()), this._r0581d37d4fed57(!0)));
  }, "_rbd734a5becb2e6");
  onGuardianChatReviewResultsEvent = n((e, r) => {
    this.disposed ||
      this._window == null ||
      e.type !== u.CLICK ||
      ((r.name === "close_button" || r.name === "header_button_close") &&
        (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_0args_20939e()), this._r0581d37d4fed57(!0)));
  }, "onGuardianChatReviewResultsEvent");
  var_393 = n((e, r) => {
    let t = this._r81763b91025ebb?.habboHelp;
    if (!(e.type !== u.CLICK || this._ra1e08ee4b56f6d == null || t == null))
      switch (r.name) {
        case "header_button_close":
        case "cancel_link":
          (t.trackGoogle("guideHelp", `${this._ra1e08ee4b56f6d.name}_clickClose`), this._rc2a1d655b2b6e6());
          break;
        case "submit_button": {
          let s = this._rc52b727d6e5c63(this._ra1e08ee4b56f6d)?.message ?? "";
          if (s.length === 0) {
            let o = this._ra1e08ee4b56f6d.findChildByName("report_error");
            (o != null && (o.visible = !0),
              this._ra1e08ee4b56f6d.findChildByName("list")?.arrangeListItems());
            return;
          }
          (t._rb13ed3a89b85ae(new UnkMessageComposer_1args_f95bde(s)),
            t.trackGoogle("guideHelp", `${this._ra1e08ee4b56f6d.name}_clickReport`),
            this._rc2a1d655b2b6e6(),
            this.closeWindow());
          break;
        }
      }
  }, "var_393");
  openWindow(e, r) {
    let t = this._r81763b91025ebb?.habboHelp;
    if (
      this._disposed ||
      t == null ||
      (this.closeWindow(),
      (this._window = t.getXmlWindow(this._sessionData._ra25c446b9c70b2)),
      this._window == null)
    )
      return;
    ((this._window.position = new E(this._r9407c0730757ac.x, this._r9407c0730757ac.y)),
      (this._window.procedure = e));
    let i = this._window.findChildByName("header_button_close");
    (i != null && (i.visible = r), this._raac1aff35315f6());
  }
  closeWindow() {
    (this._window != null &&
      ((this._r9407c0730757ac = new E(
        Math.max(0, this._window.position.x),
        Math.max(0, this._window.position.y),
      )),
      this._window.dispose(),
      (this._window = null)),
      this._r7be4981172c9f6());
  }
  _rc2a1d655b2b6e6() {
    (this._ra1e08ee4b56f6d?.dispose(), (this._ra1e08ee4b56f6d = null));
  }
  setCountdown(e) {
    let r = this._window?.findChildByName("countdown")?.widget;
    r != null && e >= 0 && ((r.seconds = e), (r.running = !0));
  }
  setCaption(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.caption = r);
  }
  setOnDutyStatus(e) {
    let r = this._window?.findChildByName("guide_tool_duty");
    (this._r80de93f1654c7a(e),
      r != null &&
        ((r.isSelected = e),
        (r.caption =
          this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
            e ? "guide.help.guide.tool.duty.on" : "guide.help.guide.tool.duty.off",
            "",
          ) ?? "")));
    let t = this._window?.findChildByName("disabled_screen");
    t != null && (t.visible = e);
  }
  _r7aed7afd099b1a(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.isSelected = r);
  }
  getRequestTypeCaption(e) {
    return (
      e === UnkConstants_d64457._rba379f7c9c44bb && (e = UnkConstants_d64457._rb6595d1a1fe905),
      this._r81763b91025ebb?.habboHelp.localization?.getLocalization(`guide.help.request.type.${e}`, "") ??
        ""
    );
  }
  _rbda5cb55b7cbf2(e, r, t, i, s, o = a._r4ef0e434794b7e, d = null) {
    this.addChatMessage(e, r, t, i, s, o, d);
  }
  addChatMessage(e, r, t, i, s, o, d = null) {
    let c = this._r80185ae251cd0b(),
      f = null;
    if (
      (c != null && c.name === `chat_msg_${a._r4ef0e434794b7e}` && (f = c.widget),
      f != null && f.userId === e && o === a._r4ef0e434794b7e)
    ) {
      (f.appendMessage(i), this.addItemAndUpdateChatList(null));
      return;
    }
    let l = this._r1b47c2fa331776?.clone(),
      b = l?.widget;
    if (!(l == null || b == null)) {
      if (
        ((l.name = `chat_msg_${o}`),
        (b.figure = t),
        (b.flipped = s),
        (b.userName = r),
        (b.userId = e),
        b.appendMessage(i),
        o === a._rf2a9ba9529fc5f)
      ) {
        let _ = (l.rootWindow ?? l).findChildByName("message_region");
        if (_ != null) {
          ((_.procedure = this.onChatMessageEvent),
            _.setParamFlag(N._re3bd61027cfd94, !0),
            (_.id = Number(d ?? 0)));
          let h = _.findChildByName("message");
          h != null && (h.underline = !0);
        }
      }
      this.addItemAndUpdateChatList(l);
    }
  }
  addSystemMessage(e, r) {
    if (!(!this._sessionData._r3309318e1639a0() || r.length === 0))
      switch (e) {
        case a.var_2355: {
          let t = this._r44f3576337a894?.clone(),
            i = t?.findChildByName("content");
          t != null && i != null && ((i.caption = r), this.addItemAndUpdateChatList(t));
          break;
        }
        case a.var_4862: {
          let t = this._r156b50d52b6e36?.clone(),
            i = t?.findChildByName("content");
          t != null && i != null && ((i.caption = r), this.addItemAndUpdateChatList(t));
          break;
        }
        default: {
          let t = this._sessionData._rccc20fe64a9117()
              ? this._sessionData._re37dbc09670180
              : this._sessionData.userId,
            i = this._sessionData._rccc20fe64a9117()
              ? this._sessionData.guideName
              : this._sessionData.userName,
            s = this._sessionData._rccc20fe64a9117()
              ? this._sessionData._reea2dd8bfffc6d
              : this._sessionData._rd90e40ea576eac;
          this.addChatMessage(t, i, s, r, !0, a._r10a08d5ec5af1b);
          break;
        }
      }
  }
  onChatMessageEvent = n((e, r) => {
    this.disposed ||
      this._window == null ||
      e.type !== u.CLICK ||
      this._r81763b91025ebb?.habboHelp.navigator?._r32d169e0ccf735(r.id);
  }, "onChatMessageEvent");
  _r285e6f9a3d37d9() {
    return this._window?.findChildByName("chat_list");
  }
  _r80185ae251cd0b() {
    if (this._window == null || this._window.disposed) return null;
    let e = this._r285e6f9a3d37d9();
    return e == null || e.numListItems <= 1 ? null : e.getListItemAt(e.numListItems - 2);
  }
  addItemAndUpdateChatList(e) {
    let r = this._r285e6f9a3d37d9();
    r != null &&
      (e != null && r.addListItemAt(e, Math.max(0, r.numListItems - 1)),
      r.arrangeListItems(),
      (r.var_46 = 1),
      this._raac1aff35315f6());
  }
  _rc52b727d6e5c63(e = this._window) {
    return e?.findChildByName("input_widget")?.widget ?? null;
  }
  _raac1aff35315f6() {
    (this._r7be4981172c9f6(),
      !(
        this._window == null ||
        this._window.disposed ||
        (this._window.name !== GuideSessionStateEnum.USER_ONGOING &&
          this._window.name !== GuideSessionStateEnum.GUIDE_ONGOING)
      ) &&
        ((this._r8b3b50c87f2490 = this.messageLength),
        this._ra28678def3eb1d(!1),
        (this._r48cd263c41bb0d = setInterval(this._r269b36fc91b25c, a.const_1250))));
  }
  _r7be4981172c9f6() {
    this._r48cd263c41bb0d != null && (clearInterval(this._r48cd263c41bb0d), (this._r48cd263c41bb0d = null));
  }
  get messageLength() {
    return this._window == null ||
      this._window.disposed ||
      (this._window.name !== GuideSessionStateEnum.USER_ONGOING &&
        this._window.name !== GuideSessionStateEnum.GUIDE_ONGOING)
      ? 0
      : (this._rc52b727d6e5c63()?.message.length ?? 0);
  }
  _r269b36fc91b25c = n(() => {
    if (
      this._window == null ||
      (this._window.name !== GuideSessionStateEnum.USER_ONGOING &&
        this._window.name !== GuideSessionStateEnum.GUIDE_ONGOING)
    )
      return;
    let e = this.messageLength,
      r = this._r8b3b50c87f2490 !== e;
    (this._r1ad9f85a4167f1 !== r &&
      (this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(new UnkMessageComposer_1args_cbf4ea(r)), (this._r1ad9f85a4167f1 = r)),
      (this._r8b3b50c87f2490 = e));
  }, "_r269b36fc91b25c");
  _ra28678def3eb1d(e) {
    if (
      this._window == null ||
      this._window.disposed ||
      (this._window.name !== GuideSessionStateEnum.USER_ONGOING &&
        this._window.name !== GuideSessionStateEnum.GUIDE_ONGOING)
    )
      return;
    let r = this._r285e6f9a3d37d9(),
      t = r?.getListItemAt((r?.numListItems ?? 1) - 1) ?? null;
    t != null && (t.blend = e ? 1 : 0);
  }
  setStateGuardianChatReviewVote(e) {
    let r = this._window?.findChildByName("chatlog");
    if (r == null) return;
    let t = e.substring(0, e.indexOf(";")).match(/\d+/g) ?? [],
      i =
        t.length > 5
          ? new Date(Number(t[0]), Number(t[1]) - 1, Number(t[2]), Number(t[3]), Number(t[4]), Number(t[5]))
          : new Date(),
      s = (Date.now() - i.getTime()) / 1e3;
    this.setCaption(
      "incident_time",
      `(${ra.getFriendlyTime(this._r81763b91025ebb?.habboHelp.localization, s, ".ago")})`,
    );
    let o = this._window?.findChildByName("reported_user_template"),
      d = r.getListItemByName("other_user_template"),
      c = this._window?.findChildByName("separator_template");
    if (o == null || d == null || c == null) return;
    r.removeListItems();
    let f = -1,
      l = null;
    for (let b of e.split("\r")) {
      if (b.length === 0) continue;
      let _ = b.split(";", 3);
      if (_.length < 3) continue;
      let h = Number(_[1]),
        p = String(_[2]).replace("<", "&lt;").replace(">", "&gt;");
      if (h === f && l != null) {
        let I = l.findChildByName("message");
        I != null &&
          (I.caption += `
${p}`);
        continue;
      }
      let m = h === 0;
      l = m ? o.clone() : d.clone();
      let v = m
          ? (this._r81763b91025ebb?.habboHelp.localization?.getLocalization(
              "guide.bully.request.guide.vote.perpetrator",
              "",
            ) ?? "")
          : (this._r81763b91025ebb?.habboHelp.localization?.getLocalizationWithParams(
              "guide.bully.request.guide.vote.anonymous",
              "%ID%",
              "id",
              `${h}`,
            ) ?? ""),
        w = l.findChildByName("message");
      (w != null && (w.caption = `<b>${v}:</b> ${p}`), r.addListItem(l), (f = h));
    }
  }
  showOwnVote(e) {
    let r = a.statusFromVote(e);
    this.setCaption("vote_text", `${a.STATUS_KEY_PREFIX}${a._r14af66d3bdfb9a[r]}}`);
    let t = this._window?.findChildByName("vote_image");
    t != null && (t.assetUri = `${a.STATUS_ICON_PREFIX}${a._r14af66d3bdfb9a[r]}`);
  }
  showStatus(e, r) {
    if (e == null || e.numListItems === 0) return;
    let t = e.getListItemAt(0);
    if (t == null) return;
    let i = null;
    for (; e.numListItems < r.length + 1;) ((i = t.clone()), e.addListItem(i));
    i?.findChildByName("vote_separator")?.dispose();
    for (let s = 0; s < r.length; s++) {
      let o = e.getListItemAt(s + 1),
        d = o?.findChildByName("vote_text"),
        c = o?.findChildByName("vote_image"),
        f = r[s];
      if (
        (d != null && (d.caption = `${a.STATUS_KEY_PREFIX}${a._r14af66d3bdfb9a[f]}}`),
        this._rd6af137a5c9d82(c),
        c != null)
      )
        switch (f) {
          case class_4089.const_564:
          case class_4089.const_426:
            this.startWaitingAnimation(c, `${a.STATUS_ICON_PREFIX}${a._r14af66d3bdfb9a[f]}`, 2);
            break;
          default:
            c.assetUri = `${a.STATUS_ICON_PREFIX}${a._r14af66d3bdfb9a[f]}`;
            break;
        }
    }
  }
  static statusFromVote(e) {
    switch (e) {
      case a._r13d12122ff5a32:
        return class_4089.const_1120;
      case a._rcefad3a825d45c:
        return class_4089.const_1102;
      case a._r3f2e63591782d7:
        return class_4089.const_1370;
      case a._rf5ddccad0109c7:
        return class_4089.const_957;
      default:
        return class_4089.const_564;
    }
  }
  _r80de93f1654c7a(e) {
    ((this._onDuty = e),
      this._r81763b91025ebb?.habboHelp.toolbar != null &&
        (this._r81763b91025ebb.habboHelp.toolbar.onDuty = e));
  }
  _rfbb86caf695e65() {
    this._r81763b91025ebb?.habboHelp._r41eeaae23311a4(jt.REPORT_TYPE_GUIDE);
  }
  _rc3d8a577dc4b7c = n(() => {
    ((this._r4b1c7661769774 += 1),
      (this._rff022b5e7355bb = this._rff022b5e7355bb.filter((e) => e.window != null && !e.window.disposed)));
    for (let e of this._rff022b5e7355bb) this.setAnimationFrame(e);
  }, "_rc3d8a577dc4b7c");
  startWaitingAnimation(e, r, t) {
    if (this._window == null || e == null) return;
    let i = new UnkClass_b6e351___(e, r, t);
    (this.setAnimationFrame(i), this._rff022b5e7355bb.push(i));
  }
  setAnimationFrame(e) {
    let r = this._r4b1c7661769774 % e.frameCount;
    e.window.assetUri = `${e.asset}_${r + 1}`;
  }
  _rd6af137a5c9d82(e) {
    e != null && (this._rff022b5e7355bb = this._rff022b5e7355bb.filter((r) => r.window !== e));
  }
  _r49c67624b0b5e3 = n(() => {
    this._r2af29eeee23e4c = _ia411d8d8194a3a();
  }, "_r49c67624b0b5e3");
  _r3437fd45ecdce0 = n(() => {
    let e = (this._r81763b91025ebb?.habboHelp.getInteger("guidetool.idle.timeout", 300) ?? 300) * 1e3;
    this._onDuty &&
      _ia411d8d8194a3a() - this._r2af29eeee23e4c > e &&
      this._r81763b91025ebb?.habboHelp._rb13ed3a89b85ae(
        new UnkMessageComposer_4args_fbe8d1(!1, this._ra04b70583892ab, this._r88adb5d7427f16, this._r5b2432060614d0),
      );
  }, "_r3437fd45ecdce0");
  _r0edce956b3db3f() {
    this._sessionData = new B0();
  }
}
