// Extracted from HabboAirLauncher.deobf.js, line 269118.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/QuestTracker.as

class a {
  constructor(e) {
    this._questEngine = e;
    ((this.var_3272 = a.var_4303), (a.var_4303 += 1));
  }
  static {
    n(this, "QuestTracker");
  }
  static _getNextQuestWhenCompletionAnimationFinishes = 0;
  static TRACKER_ANIMATION_STATUS_SLIDE_IN = 1;
  static _rc6cea8ea03afc5 = 2;
  static TRACKER_ANIMATION_STATUS_COMPLETED_ANIMATION = 3;
  static var_1501 = 4;
  static TRACKER_ANIMATION_STATUS_CLOSE_WAIT = 5;
  static _r26ec5c933d1c6c = 6;
  static getDefaultLocationX = [-2, -3, -2, 0, 2, 3, 2, 0, 2, 1, 0, 1];
  static const_36 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 4];
  static _r5b0716f7977524 = 6;
  static _rfdf78adbe75bb3 = 4;
  static _r8866cd448ee82f = 2;
  static PROMPT_FRAME_LENGTH_IN_MSECS = 200;
  static _r5d9acab03b810d = ["a", "b", "c", "d"];
  static PROMPT_DELAY_IN_MSECS = 1e4;
  static _r02e99aa1a63c4a = 0;
  static _re678b0c6393dc6 = -1;
  static _r69e85018af8edd = new E(10, 87);
  static PROGRESS_BAR_WIDTH = 162;
  static TRACKER_SLIDE_IN_SPEED = 0.01;
  static TRACKER_SLIDE_OUT_SPEED = 100;
  static COMPLETION_CLOSE_DELAY_IN_MSECS = 1e3;
  static TOOLBAR_EXTENSION_ID_PREFIX = "quest_tracker_";
  static const_393 = 10;
  static var_4303 = 0;
  var_2985 = !1;
  var_1658 = !1;
  _r5aeecd47159558 = 0;
  _msecsUntilPrompt = a._re678b0c6393dc6;
  onNewQuestNotReceived = null;
  NUDGE_OFFSETS = 0;
  _r834034b605f603 = null;
  _r526140090cc785 = -1;
  var_5227 = !1;
  _r0fa06b503bd8c0 = null;
  var_2945 = 0;
  _r62a08132e54077 = 0;
  _r194446bffb004d = null;
  _successFrame = -1;
  _trackerAnimationStatus = a._getNextQuestWhenCompletionAnimationFinishes;
  _window = null;
  var_3272;
  dispose() {
    (this._questEngine?.toolbar?.extensionView != null &&
      this._questEngine.toolbar.extensionView._rb18768cf275a26(this._rd85e18a67aa912()),
      this._r702f30e652a1b4(),
      this._r9f51aff7e7ac50(),
      (this._questEngine = null),
      (this._r0fa06b503bd8c0 = null),
      this._window?.dispose(),
      (this._window = null),
      this._r834034b605f603?.dispose(),
      (this._r834034b605f603 = null));
  }
  get disposed() {
    return this._questEngine == null;
  }
  _r27f5f0ce8a8093(e, r) {
    this._window != null &&
      (this._r51e510137510a5(),
      (this._r0fa06b503bd8c0 = e),
      (this.NUDGE_OFFSETS = 0),
      this.refreshTrackerDetails(),
      (this._successFrame = 0),
      (this._trackerAnimationStatus = a.TRACKER_ANIMATION_STATUS_COMPLETED_ANIMATION),
      (this.var_1658 = !r));
  }
  onQuestCancelled() {
    ((this._r0fa06b503bd8c0 = null),
      this._window != null &&
        (this._r51e510137510a5(),
        this._r834034b605f603?.refresh(0, 100, -1, 0),
        (this._trackerAnimationStatus = a._rc6cea8ea03afc5)));
  }
  startDefaultCampaign(e) {
    let r = this._questEngine?.getInteger("new.identity", 0) ?? 0;
    if (this._questEngine == null || r <= 0 || e === "" || this._r194446bffb004d != null) return;
    let t = this._questEngine.getInteger("questing.startQuestDelayInSeconds", 30);
    this._r194446bffb004d = setTimeout(() => this._r181b3d9d0c359e(), t * 1e3);
  }
  onRoomExit() {
    if (this._window == null || !this._window.visible) return;
    let e = this._window.findChildByName("more_info_txt"),
      r = this._window.findChildByName("more_info_region");
    (e != null && (e.visible = !1), r != null && (r.visible = !1));
  }
  onQuest(e) {
    (this._r702f30e652a1b4(), this._r9f51aff7e7ac50());
    let r = this._window?.visible === !0;
    if (e.waitPeriodSeconds > 0) {
      r && this._r36ed689d16f83c(!1);
      return;
    }
    ((this._r0fa06b503bd8c0 = e),
      this.prepareTrackerWindow(),
      this.refreshTrackerDetails(),
      this._r1ac1b32cf5a2fe(),
      this._r36ed689d16f83c(!0),
      this._r5b0f751f92085d(),
      r
        ? (this._trackerAnimationStatus === a._rc6cea8ea03afc5 && (this._trackerAnimationStatus = a.TRACKER_ANIMATION_STATUS_SLIDE_IN),
          this.setupPrompt(this._msecsUntilPrompt, a._rfdf78adbe75bb3, !1))
        : this._window != null &&
          ((this._window.x = this._r3ad60797e87497()),
          (this._trackerAnimationStatus = a.TRACKER_ANIMATION_STATUS_SLIDE_IN),
          this.setupPrompt(a._r02e99aa1a63c4a, a._r8866cd448ee82f, !1)));
  }
  _r817b15ccb33fd3() {
    this._trackerAnimationStatus === a._getNextQuestWhenCompletionAnimationFinishes
      ? (this._r36ed689d16f83c(!1), (this.var_2985 = !1))
      : (this.var_2985 = !0);
  }
  update(e) {
    if (this._window != null)
      switch ((this._r834034b605f603?.updateView(e), this._trackerAnimationStatus)) {
        case a.TRACKER_ANIMATION_STATUS_SLIDE_IN: {
          let r = this._rf7e0d57417e3cc(),
            t = this._window.x - r;
          if (t > 0) {
            let i = Math.max(1, Math.round(t * e * a.TRACKER_SLIDE_IN_SPEED));
            this._window.x -= i;
          } else ((this._trackerAnimationStatus = a._getNextQuestWhenCompletionAnimationFinishes), (this._window.x = r));
          break;
        }
        case a._rc6cea8ea03afc5: {
          let r = this._r3ad60797e87497(),
            t = this._window.width - this._window.x;
          if (t > 0) {
            let i = Math.max(1, Math.round((e * a.TRACKER_SLIDE_OUT_SPEED) / t));
            this._window.x += i;
          } else
            ((this._trackerAnimationStatus = a._getNextQuestWhenCompletionAnimationFinishes),
              (this._window.x = r),
              this._r36ed689d16f83c(!1));
          break;
        }
        case a.TRACKER_ANIMATION_STATUS_COMPLETED_ANIMATION:
          this._r5b0f751f92085d();
          {
            let r = this.getSuccessFrame(a.const_36[this._successFrame]);
            r != null && (r.visible = !0);
          }
          ((this._successFrame += 1),
            this._successFrame >= a.const_36.length &&
              ((this._trackerAnimationStatus = a.TRACKER_ANIMATION_STATUS_CLOSE_WAIT), (this._r62a08132e54077 = a.COMPLETION_CLOSE_DELAY_IN_MSECS)));
          break;
        case a._r26ec5c933d1c6c:
          (this.setQuestImageVisible(!1), this.hidePromptFrames(), (this._r5aeecd47159558 -= e));
          {
            let r = this.getPromptFrame(a._r5d9acab03b810d[this._r526140090cc785]);
            r != null && (r.visible = !0);
          }
          this._r5aeecd47159558 < 0 &&
            ((this._r5aeecd47159558 = a.PROMPT_FRAME_LENGTH_IN_MSECS),
            (this._r526140090cc785 += 1),
            this._r526140090cc785 >= a._r5d9acab03b810d.length &&
              ((this._r526140090cc785 = 0),
              (this.var_2945 -= 1),
              this.var_2945 < 1 &&
                (this.setupPrompt(a.PROMPT_DELAY_IN_MSECS, a._r8866cd448ee82f, !0),
                (this._trackerAnimationStatus = a._getNextQuestWhenCompletionAnimationFinishes))));
          break;
        case a.var_1501:
          this.NUDGE_OFFSETS >= a.getDefaultLocationX.length - 1
            ? ((this._window.x = this._rf7e0d57417e3cc()),
              (this._trackerAnimationStatus = a._getNextQuestWhenCompletionAnimationFinishes),
              this.setupPrompt(a.PROMPT_DELAY_IN_MSECS, a._r8866cd448ee82f, !1))
            : ((this._window.x =
                this._rf7e0d57417e3cc() + a.getDefaultLocationX[this.NUDGE_OFFSETS]),
              (this.NUDGE_OFFSETS += 1));
          break;
        case a.TRACKER_ANIMATION_STATUS_CLOSE_WAIT:
          ((this._r62a08132e54077 -= e),
            this._r62a08132e54077 < 0 &&
              ((this._trackerAnimationStatus = a._getNextQuestWhenCompletionAnimationFinishes),
              this.var_1658 && !this.var_2985 && this._questEngine != null
                ? ((this.onNewQuestNotReceived = setTimeout(() => this._r6e28eb0a23eeef(), 600)),
                  this._questEngine.send(new class_3325()))
                : (this._r36ed689d16f83c(!1), (this.var_2985 = !1))));
          break;
        case a._getNextQuestWhenCompletionAnimationFinishes:
          this._msecsUntilPrompt !== a._re678b0c6393dc6 &&
            ((this._msecsUntilPrompt -= e),
            this._msecsUntilPrompt < 0 &&
              ((this._msecsUntilPrompt = a._re678b0c6393dc6),
              this._r0fa06b503bd8c0 != null &&
                this._questEngine?._r84899202c2a237(this._r0fa06b503bd8c0) &&
                (this.var_5227
                  ? this._rd89db94a8f0ee6()
                  : ((this._trackerAnimationStatus = a._r26ec5c933d1c6c),
                    (this._r526140090cc785 = 0),
                    (this._r5aeecd47159558 = a.PROMPT_FRAME_LENGTH_IN_MSECS)))));
          break;
      }
  }
  get _r808a32b2f4122c() {
    return this._r0fa06b503bd8c0?._r808a32b2f4122c ?? null;
  }
  get _re4d2b54b2c521b() {
    return this._r0fa06b503bd8c0 == null
      ? !0
      : this._window?.visible !== !0 && this._trackerAnimationStatus === a._getNextQuestWhenCompletionAnimationFinishes;
  }
  _r1ac1b32cf5a2fe() {
    if (!(
      this._questEngine == null ||
      this._window == null ||
      this._r0fa06b503bd8c0 == null ||
      !this._questEngine._r84899202c2a237(this._r0fa06b503bd8c0)
    ))
      for (let e of a._r5d9acab03b810d)
        this._questEngine.setupPromptFrameImage(this._window, this._r0fa06b503bd8c0, e);
  }
  prepareTrackerWindow() {
    if (
      this._window != null ||
      this._questEngine == null ||
      ((this._window = this._questEngine.getXmlWindow("QuestTracker")),
      this._window == null)
    )
      return;
    let e = this._window.findChildByName("more_info_region");
    (e != null && (e.procedure = (...t) => this._rb3dd06828db09c(t[0], t[1])), this._r5b0f751f92085d());
    let r = this._window.findChildByName("content_cont");
    r != null &&
      (this._r834034b605f603 = new g5(
        this._questEngine,
        r,
        a.PROGRESS_BAR_WIDTH,
        "quests.tracker.progress",
        !1,
        a._r69e85018af8edd,
      ));
  }
  _r5b0f751f92085d() {
    if (this._window != null)
      for (let e = 1; e <= a._r5b0716f7977524; e++) {
        let r = this.getSuccessFrame(e);
        r != null && (r.visible = !1);
      }
  }
  hidePromptFrames() {
    if (this._window != null)
      for (let e of a._r5d9acab03b810d) {
        let r = this.getPromptFrame(e);
        r != null && (r.visible = !1);
      }
  }
  getSuccessFrame(e) {
    return this._window?.findChildByName(`success_pic_${e}`) ?? null;
  }
  getPromptFrame(e) {
    return this._window?.findChildByName(`prompt_pic_${e}`) ?? null;
  }
  refreshTrackerDetails() {
    if (this._questEngine == null || this._window == null || this._r0fa06b503bd8c0 == null)
      return;
    let e = this._window.findChildByName("quest_header_txt"),
      r = this._window.findChildByName("desc_txt"),
      t = this._window.findChildByName("more_info_txt"),
      i = this._window.findChildByName("more_info_region");
    (e != null &&
      (e.caption = this._questEngine.localization.getLocalizationWithParams(
        "quests.tracker.caption",
        "",
        "quest_name",
        this._questEngine.getQuestName(this._r0fa06b503bd8c0),
      )),
      r != null && (r.caption = this._questEngine.getQuestDesc(this._r0fa06b503bd8c0)),
      t != null && (t.visible = this._questEngine.currentlyInRoom),
      i != null && (i.visible = this._questEngine.currentlyInRoom));
    let s = Math.ceil(
      (100 * this._r0fa06b503bd8c0._r9bc0a180322965) / this._r0fa06b503bd8c0._r1370316ec45b24,
    );
    (this._r834034b605f603?.refresh(s, 100, this._r0fa06b503bd8c0.id, 0),
      this._questEngine.setupQuestImage(this._window, this._r0fa06b503bd8c0));
  }
  _rb3dd06828db09c(e, r) {
    e.type !== u.CLICK ||
      this._questEngine == null ||
      this._r0fa06b503bd8c0 == null ||
      this._questEngine._rd4042d1a6a05a1._r2b4bfddbe77cb9.showDetails(this._r0fa06b503bd8c0);
  }
  _r6e28eb0a23eeef() {
    (this._r36ed689d16f83c(!1), (this.var_2985 = !1), (this.onNewQuestNotReceived = null));
  }
  _rf7e0d57417e3cc() {
    return 0;
  }
  _r3ad60797e87497() {
    return (this._window?.width ?? 0) + a.const_393;
  }
  _r181b3d9d0c359e() {
    if (((this._r194446bffb004d = null), this._questEngine != null)) {
      if (this._r0f34c48e6caa57()) {
        let e = this._questEngine.getInteger("questing.startQuestDelayInSeconds", 30);
        this._r194446bffb004d = setTimeout(() => this._r181b3d9d0c359e(), e * 1e3);
        return;
      }
      ((this._questEngine._rd4042d1a6a05a1._r2b4bfddbe77cb9.openForNextQuest =
        this._questEngine.getBoolean("questing.showDetailsForNextQuest")),
        this._questEngine.send(new class_2922(this._questEngine._rd4042d1a6a05a1.getDefaultCampaign())));
    }
  }
  _r0f34c48e6caa57() {
    if (this._questEngine == null) return !1;
    for (let e = 0; e <= 2; e++) {
      let r = this._questEngine.windowManager.getDesktop(e);
      if (r != null && this.hasBlockingWindowInLayer(r)) return !0;
    }
    return !1;
  }
  hasBlockingWindowInLayer(e) {
    for (let r = 0; r < e.numChildren; r++) {
      let t = e.getChildAt(r);
      if (!(t == null || !t.visible)) {
        if (t.header != null) {
          if (t.name !== "mod_start_panel" && t.name !== "_frame") return !0;
        } else if (t.name === "welcome_screen") return !0;
      }
    }
    return !1;
  }
  setQuestImageVisible(e) {
    let r = this._window?.findChildByName("quest_pic_bitmap");
    r != null && (r.visible = e);
  }
  _r51e510137510a5() {
    this.setupPrompt(a._re678b0c6393dc6, 0, !1);
  }
  setupPrompt(e, r, t) {
    (this.setQuestImageVisible(!0),
      this.hidePromptFrames(),
      (this._msecsUntilPrompt = e),
      (this.var_2945 = r),
      (this.var_5227 = t));
  }
  _rd89db94a8f0ee6() {
    ((this.NUDGE_OFFSETS = 0), (this._trackerAnimationStatus = a.var_1501));
  }
  _r36ed689d16f83c(e) {
    if (this._window == null) return;
    this._window.visible = e;
    let r = this._questEngine?.toolbar?.extensionView;
    r != null &&
      (e
        ? r._ra96f07968c4ed0(this._rd85e18a67aa912(), this._window)
        : r._rb18768cf275a26(this._rd85e18a67aa912()));
  }
  _rd85e18a67aa912() {
    return `${a.TOOLBAR_EXTENSION_ID_PREFIX}${this.var_3272}`;
  }
  _r702f30e652a1b4() {
    this._r194446bffb004d != null && (clearTimeout(this._r194446bffb004d), (this._r194446bffb004d = null));
  }
  _r9f51aff7e7ac50() {
    this.onNewQuestNotReceived != null && (clearTimeout(this.onNewQuestNotReceived), (this.onNewQuestNotReceived = null));
  }
}
