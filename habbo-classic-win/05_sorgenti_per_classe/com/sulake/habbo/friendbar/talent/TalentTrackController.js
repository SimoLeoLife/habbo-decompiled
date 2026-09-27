// Extracted from HabboAirLauncher.deobf.js, line 210694.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/talent/TalentTrackController.as
// Obfuscated name: _i9c741afed6d979

class a {
  static {
    n(this, "TalentTrackController");
  }
  static MODAL_DIALOG_LAYER = 3;
  static HORIZONTAL_MARGIN = 100;
  static LEVEL_PANE_PREFIX = "level_pane_";
  static BEGIN_PANE_PREFIX = "begin_";
  static NO_CITIZENSHIP_SUFFIX = "_no_citizenship";
  static PROGRESS_BAR_MARGIN = 40;
  _habboTalent;
  _disposed = !1;
  var_408 = null;
  _window = null;
  _r99e08127040e56 = null;
  _talentProgressMeter = null;
  _r0d065951c59039 = null;
  _re329d4cd316949 = null;
  _r47c9b98a757eb7 = -1;
  _r9c94c525ef68d6 = null;
  constructor(e) {
    this._habboTalent = e;
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    return this._window;
  }
  get talentTrack() {
    return this._r0d065951c59039;
  }
  initialize() {
    (this._habboTalent?._rf3db13932bfb60?._r2e106e2349a0b6(
      new class_2539((e) => {
        this._r510470ad7f45d4(e);
      }),
    ),
      this._habboTalent?._rf3db13932bfb60?._r2e106e2349a0b6(
        new UnkMessageEvent_71ce07((e) => {
          this.onGroupDetails(e);
        }),
      ),
      this._habboTalent?._rf3db13932bfb60?._r2e106e2349a0b6(
        new UnkMessageEvent_e9ed5c((e) => {
          this.onEmailStatus(e);
        }),
      ),
      this._habboTalent?._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_1909((e) => {
          this._r0f40aa5613b0f3(e);
        }),
      ));
  }
  dispose() {
    this._disposed ||
      (this._re329d4cd316949?.dispose(),
      this._r37c10db3b64fe9(),
      this.destroyWindow(),
      (this._habboTalent = null),
      (this._disposed = !0));
  }
  _r510470ad7f45d4(e) {
    let t = ClassUtils._rc882f0c0aea57f(e, class_2539)?.getParser() ?? null;
    t != null && ((this._r0d065951c59039 = t._r87388a53d201f5()), this.createWindow());
  }
  onGroupDetails(e) {
    e.data.groupId === this._r47c9b98a757eb7 &&
      ((this._r47c9b98a757eb7 = -1), this._habboTalent?.navigator?._r32d169e0ccf735(e.data.roomId));
  }
  onEmailStatus(e) {
    let r = this.getEmailContainer();
    if (r == null) return;
    let t = e.getParser(),
      i = this.getEmailText();
    i != null && (i.text = t.email);
    let s = r.findChildByName("unverified_container"),
      o = r.findChildByName("verified_txt");
    (s != null && (s.visible = !t._rc18b0feae00674), o != null && (o.visible = t._rc18b0feae00674));
  }
  _r0f40aa5613b0f3(e) {
    this.setEmailErrorStatus(!0, e.getParser().result);
  }
  createWindow() {
    if (
      (this.destroyWindow(),
      (this.var_408 = this._habboTalent?.getModalXmlWindow("talent_track")),
      (this._window = this.var_408?.rootWindow),
      this._window == null || this._r0d065951c59039 == null)
    )
      return;
    ((this._window.procedure = (i, s) => {
      this.onWindowEvent(i, s);
    }),
      this.var_408?.background != null &&
        (this.var_408.background.procedure = (i) => {
          this._r1ad98eef759518(i);
        }));
    let e = n((i) => {
      this.onDesktopResized(i);
    }, "_i8c333484e554c5");
    ((this._r9c94c525ef68d6 = e),
      this._habboTalent?.windowManager
        ?.getDesktopWindow(a.MODAL_DIALOG_LAYER)
        ?._r1165eed3833024()
        .addEventListener(y.const_755, e),
      (this._talentProgressMeter = this._window.findChildByName("panorama")));
    let r = this._habboTalent?.citizenshipEnabled ?? !1;
    for (let i of ys.asArray) {
      let s = this._talentProgressMeter?.getListItemByName(a.BEGIN_PANE_PREFIX + i);
      (s != null &&
        ((s.visible = i === this._r0d065951c59039.name && r), this._rec9f68da00f984(s, s.visible)),
        i !== ys.CITIZENSHIP &&
          ((s = this._talentProgressMeter?.getListItemByName(a.BEGIN_PANE_PREFIX + i + a.NO_CITIZENSHIP_SUFFIX)),
          s != null &&
            ((s.visible = i === this._r0d065951c59039.name && !r), this._rec9f68da00f984(s, s.visible))));
    }
    (this.setCaption("frame_title", "${talent.track." + this._r0d065951c59039.name + ".frame.title}"),
      this.setCaption(
        "frame_subtitle",
        "${talent.track." + this._r0d065951c59039.name + ".frame.subtitle}",
      ),
      this.setCaption(
        "progress_text",
        "${talent.track." + this._r0d065951c59039.name + ".progress.title}",
      ),
      r && this._r0d065951c59039.name !== ys.CITIZENSHIP && this._r0d065951c59039.removeFirstLevel());
    let t = 0;
    for (let i = 0; i < this._r0d065951c59039.levels.length; i++) {
      let s = this._reb432d92949a11(this._r0d065951c59039.levels[i], i);
      (s != null && this._talentProgressMeter?.addListItem(s),
        this._r0d065951c59039.levels[i].state === Wu.const_384 && (t = i));
    }
    ((this._re329d4cd316949 = new H9e(this._habboTalent, this)),
      this.resizeWindow(),
      this.scrollToLevel(t));
  }
  _reb432d92949a11(e, r) {
    let t = this._window?.findChildByName("level_pane")?.clone();
    if (t == null) return null;
    ((t.name = a.LEVEL_PANE_PREFIX + r),
      this._r8b5ea2432058db(
        t,
        "level_title",
        "${talent.track." + this._r0d065951c59039?.name + ".level." + e.level + ".title}",
      ),
      this._r8b5ea2432058db(
        t,
        "level_description",
        "${talent.track." + this._r0d065951c59039?.name + ".level." + e.level + ".description}",
      ));
    let i = t.findChildByName("level_illustration");
    i != null &&
      (i.caption = "${image.library.url}talent/" + this._r0d065951c59039?.name + "_" + e.level + ".png");
    let s = t.findChildByName("task_list_top"),
      o = t.findChildByName("task_list_bottom");
    for (let d of e.tasks) {
      let c = this.createTask(d);
      c != null && ((s?.numListItems ?? 0) <= (o?.numListItems ?? 0) ? s?.addListItem(c) : o?.addListItem(c));
    }
    return (s?.arrangeListItems(), o?.arrangeListItems(), t);
  }
  createTask(e) {
    let r =
        e.state === Wu.const_455
          ? "task_achieved"
          : e.state === Wu.const_384
            ? "task_ongoing"
            : "task_locked",
      t = this._window?.findChildByName(r)?.clone();
    if (t == null || e._rc9fc89e7eb27a7 === "") return null;
    let i = t.findChildByName("badge");
    i?.widget != null && e.state !== Wu.STATE_LOCKED && (i.widget.badgeId = e._rc9fc89e7eb27a7);
    let s = t.findChildByName("title"),
      o = t.findChildByName("description");
    (s != null &&
      (s.caption = (
        this._habboTalent?.localizationManager?.getAchievementName(e._rc9fc89e7eb27a7) ?? ""
      ).toUpperCase()),
      o != null &&
        (o.caption = this._habboTalent?.localizationManager?.getAchievementInstruction(e._rc9fc89e7eb27a7) ?? ""));
    let d = t.findChildByName("task_ongoing_region");
    return (d != null && (d.id = e.achievementId), t);
  }
  setCaption(e, r) {
    let t = this._window?.findChildByName(e);
    t != null && (t.caption = r);
  }
  _r8b5ea2432058db(e, r, t) {
    let i = e.findChildByName(r);
    i != null && (i.caption = t);
  }
  _rec9f68da00f984(e, r) {
    if (!r) return;
    let t = e.findChildByName("avatar_image");
    t?.widget != null && (t.widget.figure = this._habboTalent?._r10c65085b9beaf?.figure ?? "");
  }
  resizeWindow() {
    this._window != null &&
      ((this._window.x = a.HORIZONTAL_MARGIN),
      (this._window.width = this._window.desktop.width - 2 * a.HORIZONTAL_MARGIN),
      this._re329d4cd316949?.resize(),
      this._talentProgressMeter?.arrangeListItems(),
      this._window.invalidate());
  }
  onDesktopResized(e) {
    this.resizeWindow();
  }
  onWindowEvent(e, r) {
    if (!(this._window == null || this._window.disposed || e.type !== u.CLICK))
      switch (r.name) {
        case "header_button_close":
          this.destroyWindow();
          break;
        case "progress_container": {
          let t = e.localX;
          t < a.PROGRESS_BAR_MARGIN
            ? this._talentProgressMeter && (this._talentProgressMeter.scrollH = 0)
            : t > (this._re329d4cd316949?.width ?? 0) - a.PROGRESS_BAR_MARGIN
              ? this._talentProgressMeter && (this._talentProgressMeter.scrollH = 1)
              : this.scrollToLevel(
                  Math.floor(t / Math.max(this._re329d4cd316949?.progressPerLevelWidth ?? 1, 1)),
                );
          break;
        }
        case "task_ongoing_region":
          this._r782adb55c64bd2(r.id);
          break;
        case "citizenship_button":
          (this._habboTalent?.tracking?.trackTalentTrackOpen(ys.CITIZENSHIP, "talentrack"),
            this._habboTalent?.send(new class_2687(ys.CITIZENSHIP)));
          break;
        case "button_track_citizenship":
          break;
        case "button_track_helper":
          break;
        case Vl.const_655:
          (this.closeAndLog(r.name), this._habboTalent?.habboHelp?._r572a5ffd9c1afd());
          break;
      }
  }
  _r1ad98eef759518(e) {
    e.type === u.CLICK && this.destroyWindow();
  }
  scrollToLevel(e) {
    if (this._talentProgressMeter == null) return;
    if (e === 0) {
      this._talentProgressMeter.scrollH = 0;
      return;
    }
    let r = this._talentProgressMeter.getListItemByName(a.LEVEL_PANE_PREFIX + e);
    r != null &&
      (this._talentProgressMeter.scrollH = In.map(
        r.x - 20,
        0,
        this._talentProgressMeter.visibleRegion.width - this._talentProgressMeter._rbab5041f1931e4.width,
        0,
        1,
      ));
  }
  _r782adb55c64bd2(e) {
    this._r37c10db3b64fe9();
    let r = this._r0d065951c59039?.findTaskByAchievementId(e) ?? null;
    if (r == null || r._rc9fc89e7eb27a7 === "") return;
    if (r._rc9fc89e7eb27a7 === Vl.const_459) {
      this.setupTourAdvertisement();
      return;
    }
    this._r99e08127040e56 = this._habboTalent?.getModalXmlWindow("task_progress_dialog");
    let t = this._r99e08127040e56?.rootWindow;
    if (t == null) return;
    let i = this._r99e08127040e56;
    if (i == null) return;
    ((i.background.procedure = (d) => {
      this._r5ae67ce0a9597a(d);
    }),
      (t.procedure = (d, c) => {
        this._r611e65c31ccbc6(d, c);
      }),
      this._r8b5ea2432058db(
        t,
        "instruction",
        this._habboTalent?.localizationManager?.getAchievementInstruction(r._rc9fc89e7eb27a7) ?? "",
      ),
      this._r8b5ea2432058db(
        t,
        "title",
        this._habboTalent?.localizationManager?.getAchievementName(r._rc9fc89e7eb27a7) ?? "",
      ),
      this._r8b5ea2432058db(
        t,
        "progress_text",
        (this._habboTalent?.localizationManager?.getLocalization(
          "talent.track.task.progress.dialog.progress",
        ) ?? "") +
          " " +
          r._r901265a6ad395e +
          "/" +
          r.totalScore,
      ));
    let s = t.findChildByName("badge");
    s?.widget != null && (s.widget.badgeId = r._rc9fc89e7eb27a7);
    let o = t.findChildByName("action_link");
    if (
      (o != null && (o.name = r._rc9fc89e7eb27a7),
      r._rc9fc89e7eb27a7 === Vl.const_352 && this.emailChangeEnabled)
    ) {
      let d = this.getEmailContainer();
      if (d != null) {
        d.visible = !0;
        let c = d.findChildByName("change_email_region");
        c != null &&
          (c.procedure = (l) => {
            this.setText(l);
          });
        let f = this.getEmailText();
        (f != null &&
          (f.procedure = (l) => {
            this._r2f027ae11ae9f9(l);
          }),
          this._habboTalent?.send(new UnkMessageComposer_0args_5d612e()),
          this.setEmailErrorStatus(!1));
      }
    }
  }
  _r611e65c31ccbc6(e, r) {
    if (!(this._r99e08127040e56 == null || this._r99e08127040e56.disposed || e.type !== u.CLICK))
      switch (r.name) {
        case "header_button_close":
        case "thanks_button":
          this._r37c10db3b64fe9();
          break;
        case Vl.const_643:
          (this.closeAndLog(r.name), this._habboTalent?.habboHelp?.showHabboWay());
          break;
        case Vl.const_653: {
          this.closeAndLog(r.name);
          let t = this._habboTalent?.getInteger("guide.help.alpha.groupid", 0) ?? 0;
          t > 0 && ((this._r47c9b98a757eb7 = t), this._habboTalent?.send(new class_1949(t, !1)));
          break;
        }
        case Vl.const_655:
          (this.closeAndLog(r.name), this._habboTalent?.habboHelp?._r572a5ffd9c1afd());
          break;
        case Vl.ROOM_ENTRY_1:
        case Vl.ROOM_ENTRY_2:
          (this.closeAndLog(r.name), this._habboTalent?.navigator?._r52fa4af48d31b1(null));
          break;
        case Vl.const_174:
          (this.closeAndLog(r.name),
            this._habboTalent?.avatarEditor?._rdaf967f79ea08a(UnkConstants_c72396._r4a110ddb22fcf1, null, null, !0),
            this._habboTalent?.avatarEditor?._rb825ef6be7b35c(UnkConstants_c72396._r4a110ddb22fcf1));
          break;
      }
  }
  setupTourAdvertisement() {
    this._r99e08127040e56 = this._habboTalent?.getModalXmlWindow("tour_task_progress_dialog");
    let e = this._r99e08127040e56?.rootWindow;
    (e?.findChildByName("take_tour_button") != null &&
      (e.findChildByName("take_tour_button").procedure = (r) => {
        this.onTakeTour(r);
      }),
      e?.findChildByName("decline_tour_region") != null &&
        (e.findChildByName("decline_tour_region").procedure = (r) => {
          this.onDeclineTour(r);
        }),
      e?.findChildByName("header_button_close") != null &&
        (e.findChildByName("header_button_close").procedure = (r) => {
          this._ra71e78e38b4586(r);
        }));
  }
  onTakeTour(e) {
    e.type === u.CLICK &&
      (this.destroyWindow(),
      this._r37c10db3b64fe9(),
      this._habboTalent?.send(new class_2182()),
      this._habboTalent?.habboHelp?.requestGuide(),
      this._habboTalent?.tracking?.trackEventLog("Help", "", "tour.new_user.accept"),
      this._habboTalent?.tracking?.trackGoogle("newbieTourWindow", "click_acceptTour"));
  }
  _ra71e78e38b4586(e) {
    e.type === u.CLICK && this._r37c10db3b64fe9();
  }
  onDeclineTour(e) {
    e.type === u.CLICK &&
      (this.destroyWindow(),
      this._r37c10db3b64fe9(),
      this._habboTalent?.send(new class_2182()),
      this._habboTalent?.tracking?.trackEventLog("Help", "", "tour.new_user.cancel"),
      this._habboTalent?.tracking?.trackGoogle("newbieTourWindow", "click_refuseTour"));
  }
  setText(e) {
    e.type === u.CLICK && this._habboTalent?.send(new UnkMessageComposer_1args_16b46c(this.getEmailText()?.text ?? ""));
  }
  _r2f027ae11ae9f9(e) {
    e.type === y.const_962 && this.setEmailErrorStatus(!1);
  }
  _r5ae67ce0a9597a(e) {
    e.type === u.CLICK && this._r37c10db3b64fe9();
  }
  closeAndLog(e) {
    (this.destroyWindow(),
      this._habboTalent?.tracking?.trackEventLog(
        "Talent",
        this._r0d065951c59039?.name ?? "",
        "talent.progress.click_activity",
        e,
      ));
  }
  getEmailContainer() {
    return this._r99e08127040e56?.rootWindow != null
      ? this._r99e08127040e56.rootWindow.findChildByName("email_container")
      : null;
  }
  getEmailText() {
    return this.getEmailContainer()?.findChildByName("email_txt");
  }
  setEmailErrorStatus(e, r = 0) {
    let t = this.getEmailContainer();
    if (t == null) return;
    let i = e && r !== class_3646._rd5e51433ac6f14;
    this._r8b5ea2432058db(t, "error_txt", "${welcome.gift.email.error." + r + "}");
    let s = t.findChildByName("error_txt"),
      o = t.findChildByName("error_border"),
      d = t.findChildByName("change_email_region"),
      c = t.findChildByName("changed_container");
    (s != null && (s.visible = i),
      o != null && (o.visible = i),
      d != null && (d.visible = !e),
      c != null && (c.visible = e && r === class_3646._rd5e51433ac6f14));
  }
  _r37c10db3b64fe9() {
    (this._r99e08127040e56?.dispose(), (this._r99e08127040e56 = null));
  }
  destroyWindow() {
    (this.var_408?.dispose(),
      (this.var_408 = null),
      (this._window = null),
      this._r9c94c525ef68d6 != null &&
        (this._habboTalent?.windowManager
          ?.getDesktopWindow(a.MODAL_DIALOG_LAYER)
          ?._r1165eed3833024()
          .removeEventListener(y.const_755, this._r9c94c525ef68d6),
        (this._r9c94c525ef68d6 = null)));
  }
  get emailChangeEnabled() {
    return this._habboTalent?.getBoolean("talent.progress.emailchange.enabled") ?? !1;
  }
}
