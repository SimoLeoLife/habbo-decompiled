// Estratto da HabboAirLauncher.deobf.js, riga 220579.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/game/snowwar/leaderboard/LeaderboardViewController.as
// Nome offuscato: _icb6c3f6125836a

class a {
  constructor(e) {
    this._rc48cb7ca67aee6 = e;
    ((this._rb55d8ea5917672 =
      this._rc48cb7ca67aee6.config?.getBoolean("games.highscores.scrolling.enabled") ?? !1),
      (this._rb92c2d5e45fdbe = new D1(this._rc48cb7ca67aee6)),
      (this._r85fe01c83fa341 = new TotalLeaderboardTable(this._rc48cb7ca67aee6)),
      (this._rf5022e239a6633 = new TotalGroupLeaderboardTable(this._rc48cb7ca67aee6)),
      (this.var_379 = new WeeklyTotalLeaderboardTable(this._rc48cb7ca67aee6)),
      (this._ra2dfd84bbfcfcc = new WeeklyGroupLeaderboardTable(this._rc48cb7ca67aee6)),
      (this.var_338 = new WeeklyFriendLeaderboardTable(this._rc48cb7ca67aee6)),
      this._rb52fac5617d2ab());
  }
  static {
    n(this, "LeaderboardViewController");
  }
  static STATE_FRIENDS_ALLTIME = 0;
  static STATE_ALLTIME = 1;
  static STATE_WEEKLY = 2;
  static STATE_FRIENDS_WEEKLY = 3;
  static STATE_GROUP_WEEKLY = 4;
  static STATE_GROUP_ALLTIME = 5;
  _window = null;
  _disposed = !1;
  _state = a.STATE_FRIENDS_ALLTIME;
  var_122 = null;
  _rb975eaad124148 = null;
  _r5e9ed92f12a444 = null;
  _r50598adf09f2cb = null;
  _r051b21028fe846 = null;
  var_2612 = null;
  var_1988 = null;
  var_2991 = null;
  _r1d6086a03e4709 = null;
  _r4c222ddc18b7f9 = null;
  _rd36744822d51d1 = null;
  _r3ea9d6b455cf43 = null;
  _rb26fc3bc827efa = null;
  var_1442 = null;
  var_448 = 0;
  var_1386 = null;
  _r1e3b6fcbe3da0e = new Map();
  _rb92c2d5e45fdbe;
  _r85fe01c83fa341;
  _rf5022e239a6633;
  var_379;
  _ra2dfd84bbfcfcc;
  var_338;
  _rb55d8ea5917672 = !1;
  _r61ac9ae2750402 = class_3666.SNOWWAR;
  get disposed() {
    return this._disposed;
  }
  set _r6f8f1cb125be6c(e) {
    this._r61ac9ae2750402 = e;
  }
  dispose() {
    this._disposed ||
      (this._r1e3b6fcbe3da0e.clear(),
      this._window?.dispose(),
      (this._window = null),
      this._rb92c2d5e45fdbe?.dispose(),
      (this._rb92c2d5e45fdbe = null),
      this._r85fe01c83fa341?.dispose(),
      (this._r85fe01c83fa341 = null),
      this._rf5022e239a6633?.dispose(),
      (this._rf5022e239a6633 = null),
      this.var_379?.dispose(),
      (this.var_379 = null),
      this._ra2dfd84bbfcfcc?.dispose(),
      (this._ra2dfd84bbfcfcc = null),
      this.var_338?.dispose(),
      (this.var_338 = null),
      this.disposeWeeklyResetTimer(),
      (this._disposed = !0));
  }
  _r0fa8339f9ef029() {
    ((this._state = a.STATE_FRIENDS_ALLTIME),
      this._rb52fac5617d2ab(),
      (this.visible = !0),
      this._window != null && (this._window.caption = "${snowwar.leaderboard.friends}"),
      this.enableAllTimeButton(),
      this.updateWeekSelection(),
      this.populateList());
  }
  _r6da5cfda8a3b29() {
    ((this._state = a.STATE_ALLTIME),
      this._rd7acec5f69b34c(),
      (this.visible = !0),
      this._window != null && (this._window.caption = "${snowwar.leaderboard.all}"),
      this.enableAllTimeButton(),
      this.updateWeekSelection(),
      this.populateList());
  }
  _rfd7759eb5f744e() {
    ((this._state = a.STATE_GROUP_ALLTIME),
      this._r3ac8e20b86bcb9(),
      (this.visible = !0),
      this._window != null && (this._window.caption = "${snowwar.leaderboard.all}"),
      this.enableAllTimeButton(),
      this.updateWeekSelection(),
      this.populateList());
  }
  _ra35ee8cafc4de6() {
    ((this._state = a.STATE_WEEKLY),
      this.var_379 && (this.var_379.offset = 0),
      this._rd70214fb38a806(0),
      (this.visible = !0),
      this._window != null && (this._window.caption = "${snowwar.leaderboard.all}"),
      this.enableThisWeekButton(),
      this.updateWeekSelection(),
      this.populateList());
  }
  _r3b9696c343e4d3() {
    ((this._state = a.STATE_GROUP_WEEKLY),
      this._ra2dfd84bbfcfcc && (this._ra2dfd84bbfcfcc.offset = 0),
      this._r3032c510f2e733(0),
      (this.visible = !0),
      this._window != null && (this._window.caption = "${snowwar.leaderboard.all}"),
      this.enableThisWeekButton(),
      this.updateWeekSelection(),
      this.populateList());
  }
  _r77d001bcd4e03e() {
    ((this._state = a.STATE_FRIENDS_WEEKLY),
      this.var_338 && (this.var_338.offset = 0),
      this._re48fee0e8162ba(0),
      (this.visible = !0),
      this._window != null && (this._window.caption = "${snowwar.leaderboard.friends}"),
      this.enableThisWeekButton(),
      this.updateWeekSelection(),
      this.populateList());
  }
  _r3c237aef72a35f(e, r) {
    (this._r85fe01c83fa341?.addEntries(e, r),
      this._state === a.STATE_ALLTIME && this.visible && this.populateList(),
      this.updateWeekSelection());
  }
  _r8f66e928a4454d(e, r, t) {
    (this._rf5022e239a6633?._r2efbb5337ee121(e, r, t),
      this._state === a.STATE_GROUP_ALLTIME && this.visible && this.populateList(),
      this.updateWeekSelection());
  }
  _ra2ef81407e9189(e, r, t, i, s, o) {
    (this.disposeWeeklyResetTimer(),
      (this.var_448 = o),
      (this.var_1442 = `${e}/${r}`),
      this.var_379 != null &&
        ((this.var_379.maxOffset = s), this.var_379.addEntries(t, i)),
      this._state === a.STATE_WEEKLY && this.visible && this.populateList(),
      this.updateWeekSelection());
  }
  addWeeklyGroupData(e, r, t, i, s, o, d) {
    (this.disposeWeeklyResetTimer(),
      (this.var_448 = o),
      (this.var_1442 = `${e}/${r}`),
      this._ra2dfd84bbfcfcc != null &&
        ((this._ra2dfd84bbfcfcc.maxOffset = s), this._ra2dfd84bbfcfcc._r2efbb5337ee121(t, i, d)),
      this._state === a.STATE_GROUP_WEEKLY && this.visible && this.populateList(),
      this.updateWeekSelection());
  }
  _r1daf0057d2e8d5(e, r) {
    (this._rb92c2d5e45fdbe?.addEntries(e, r),
      this._state === a.STATE_FRIENDS_ALLTIME && this.visible && this.populateList(),
      this.updateWeekSelection());
  }
  _r63a2b2889ef706(e, r, t, i, s, o) {
    (this.disposeWeeklyResetTimer(),
      (this.var_448 = o),
      (this.var_1442 = `${e}/${r}`),
      this.var_338 != null &&
        ((this.var_338.maxOffset = s), this.var_338.addEntries(t, i)),
      this._state === a.STATE_FRIENDS_WEEKLY && this.visible && this.populateList(),
      this.updateWeekSelection());
  }
  hide() {
    this.visible = !1;
  }
  avatarImageReady(e) {
    if (this._disposed) return;
    let r = this._r1e3b6fcbe3da0e.get(e) ?? null;
    r != null && !r.disposed && (this._r1e3b6fcbe3da0e.delete(e), this.setAvatarImage(r, e));
  }
  get visible() {
    return this._window?.visible === !0;
  }
  set visible(e) {
    (e && this._window == null && this.createMainWindow(),
      e
        ? ((this._window.visible = !0), this._window.activate())
        : this._window != null && (this._window.visible = !1));
  }
  disposeWeeklyResetTimer() {
    this.var_1386 != null &&
      (this.var_1386.removeEventListener(DeBouncer.addEventListener, this.onTick),
      this.var_1386.stop(),
      (this.var_1386 = null));
  }
  startWeeklyResetTimer(e) {
    ((this.var_1386 = new _i05394ecc0c0c4d(6e4, e)),
      this.var_1386.addEventListener(DeBouncer.addEventListener, this.onTick),
      this.var_1386.start());
  }
  enableAllTimeButton() {
    (this.var_1988 != null && (this.var_1988.textColor = 0),
      this._r1d6086a03e4709 != null && (this._r1d6086a03e4709.textColor = 16777215),
      je.setElementImage(this.var_2612, this.getBitmap("left_blue")),
      je.setElementImage(this.var_2991, this.getBitmap("right_black")));
  }
  enableThisWeekButton() {
    (this.var_1988 != null && (this.var_1988.textColor = 16777215),
      this._r1d6086a03e4709 != null && (this._r1d6086a03e4709.textColor = 0),
      je.setElementImage(this.var_2612, this.getBitmap("left_black")),
      je.setElementImage(this.var_2991, this.getBitmap("right_blue")));
  }
  _rb52fac5617d2ab() {
    this._rb92c2d5e45fdbe?.revertToDefaultView(this._r61ac9ae2750402);
  }
  _rd7acec5f69b34c() {
    this._r85fe01c83fa341?.revertToDefaultView(this._r61ac9ae2750402);
  }
  _r3ac8e20b86bcb9() {
    this._rf5022e239a6633?.revertToDefaultView(this._r61ac9ae2750402);
  }
  _rd70214fb38a806(e) {
    (this.var_379 != null && (this.var_379.offset = e),
      this.var_379?.revertToDefaultView(this._r61ac9ae2750402));
  }
  _r3032c510f2e733(e) {
    (this._ra2dfd84bbfcfcc != null && (this._ra2dfd84bbfcfcc.offset = e),
      this._ra2dfd84bbfcfcc?.revertToDefaultView(this._r61ac9ae2750402));
  }
  _re48fee0e8162ba(e) {
    (this.var_338 != null && (this.var_338.offset = e),
      this.var_338?.revertToDefaultView(this._r61ac9ae2750402));
  }
  createMainWindow() {
    this._window == null &&
      ((this._window = je.createWindow("snowwar_leaderboard", 1)),
      this._window != null &&
        (this._window.center(),
        this._window.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
        (this.var_122 = this._window.findChildByName("list")),
        (this._rb975eaad124148 = this._window.findChildByName("listBorder")),
        (this._r5e9ed92f12a444 = this._window.findChildByName("changeView")),
        this._r5e9ed92f12a444?.addEventListener(u.CLICK, this._r65fa2dae2bf111),
        (this._r50598adf09f2cb = this._window.findChildByName("changeGroupView")),
        this._r50598adf09f2cb?.addEventListener(u.CLICK, this._r986f9c51040c75),
        (this._r051b21028fe846 = this._window.findChildByName("changeFriendsView")),
        this._r051b21028fe846?.addEventListener(u.CLICK, this._rb157a112820f41),
        this._window
          .findChildByName("all_time_region")
          ?.addEventListener(u.DOWN, this._r4ef182b186814d),
        this._window
          .findChildByName("this_week_region")
          ?.addEventListener(u.DOWN, this._r47489a41f8e546),
        (this.var_2991 = this._window.findChildByName("all_time_image")),
        (this.var_2612 = this._window.findChildByName("this_week_image")),
        (this._r1d6086a03e4709 = this._window.findChildByName("all_time_text")),
        (this.var_1988 = this._window.findChildByName("this_week_text")),
        (this._r4c222ddc18b7f9 = this._window.findChildByName("scrollUp")),
        this._rac7f676b302479(this._r4c222ddc18b7f9),
        je.setElementImage(
          this._r4c222ddc18b7f9?.getChildAt(0) ?? null,
          this.getBitmap("scroll_up_normal"),
        ),
        (this._rd36744822d51d1 = this._window.findChildByName("scrollDown")),
        this._rac7f676b302479(this._rd36744822d51d1),
        je.setElementImage(
          this._rd36744822d51d1?.getChildAt(0) ?? null,
          this.getBitmap("scroll_down_normal"),
        ),
        (this._r3ea9d6b455cf43 = this._window.findChildByName("nextWeek")),
        this._r3ea9d6b455cf43?.addEventListener(u.CLICK, this._ra8f10327aeb082),
        this._r3ea9d6b455cf43 != null && (this._r3ea9d6b455cf43.visible = !1),
        (this._rb26fc3bc827efa = this._window.findChildByName("previousWeek")),
        this._rb26fc3bc827efa?.addEventListener(u.CLICK, this._rcb61726b9433de),
        this._rb26fc3bc827efa != null && (this._rb26fc3bc827efa.visible = !1),
        this._r9f85de5b789c6d(),
        this.updateWeekSelection()));
  }
  _rac7f676b302479(e) {
    (e?.addEventListener(u.CLICK, this._r5a332d1bb826a4),
      e?.addEventListener(u.OVER, this._r5a332d1bb826a4),
      e?.addEventListener(u.OUT, this._r5a332d1bb826a4),
      e?.addEventListener(u.DOWN, this._r5a332d1bb826a4),
      e?.addEventListener(u.UP, this._r5a332d1bb826a4));
  }
  _r9bd19a77ef7918() {
    switch (this._state) {
      case a.STATE_FRIENDS_ALLTIME:
        return this._rb92c2d5e45fdbe;
      case a.STATE_ALLTIME:
        return this._r85fe01c83fa341;
      case a.STATE_WEEKLY:
        return this.var_379;
      case a.STATE_FRIENDS_WEEKLY:
        return this.var_338;
      case a.STATE_GROUP_ALLTIME:
        return this._rf5022e239a6633;
      case a.STATE_GROUP_WEEKLY:
        return this._ra2dfd84bbfcfcc;
      default:
        return null;
    }
  }
  updateWeekSelection() {
    switch (this._state) {
      case a.STATE_WEEKLY:
        (this._r3ea9d6b455cf43 != null &&
          (this._r3ea9d6b455cf43.visible = (this.var_379?.offset ?? 0) > 0),
          this._rb26fc3bc827efa != null &&
            (this._rb26fc3bc827efa.visible =
              (this.var_379?.offset ?? 0) < (this.var_379?.maxOffset ?? 0)));
        break;
      case a.STATE_GROUP_WEEKLY:
        (this._r3ea9d6b455cf43 != null &&
          (this._r3ea9d6b455cf43.visible = (this._ra2dfd84bbfcfcc?.offset ?? 0) > 0),
          this._rb26fc3bc827efa != null &&
            (this._rb26fc3bc827efa.visible =
              (this._ra2dfd84bbfcfcc?.offset ?? 0) < (this._ra2dfd84bbfcfcc?.maxOffset ?? 0)));
        break;
      case a.STATE_FRIENDS_WEEKLY:
        (this._r3ea9d6b455cf43 != null &&
          (this._r3ea9d6b455cf43.visible = (this.var_338?.offset ?? 0) > 0),
          this._rb26fc3bc827efa != null &&
            (this._rb26fc3bc827efa.visible =
              (this.var_338?.offset ?? 0) < (this.var_338?.maxOffset ?? 0)));
        break;
      default:
        (this._r3ea9d6b455cf43 != null && (this._r3ea9d6b455cf43.visible = !1),
          this._rb26fc3bc827efa != null && (this._rb26fc3bc827efa.visible = !1));
        break;
    }
    switch (
      (this.var_1988 != null &&
        (this.var_1988.caption = this._r3ea9d6b455cf43?.visible
          ? (this.var_1442 ?? "")
          : "${snowwar.leaderboard.this_week}"),
      this._state)
    ) {
      case a.STATE_WEEKLY:
      case a.STATE_GROUP_WEEKLY:
      case a.STATE_FRIENDS_WEEKLY:
        if (!this._r3ea9d6b455cf43?.visible) {
          (this.showTimeUntilWeeklyReset(),
            this.var_1386 == null && this.startWeeklyResetTimer(this.var_448));
          break;
        }
      default:
        (this._window != null && je.hideElement(this._window, "reset_text"),
          this.disposeWeeklyResetTimer());
        break;
    }
  }
  showTimeUntilWeeklyReset() {
    if (this._window == null) return;
    je.showElement(this._window, "reset_text");
    let e = "snowwar.leaderboard.weekly_reset";
    (this._rc48cb7ca67aee6.localization?._r43eae9731f5b27(
      e,
      "days",
      `${this._r3fe828cbd2013e(this.var_448)}`,
    ),
      this._rc48cb7ca67aee6.localization?._r43eae9731f5b27(
        e,
        "hours",
        `${this._rd1d4c528ab4c13(this.var_448)}`,
      ),
      this._rc48cb7ca67aee6.localization?._r43eae9731f5b27(
        e,
        "minutes",
        `${this._r024d5879761bbc(this.var_448)}`,
      ),
      je.setCaption(this._window?.findChildByName("reset_text") ?? null, `\${${e}}`));
  }
  _r3fe828cbd2013e(e) {
    return Math.floor(e / 60 / 24);
  }
  _rd1d4c528ab4c13(e) {
    let r = this._r3fe828cbd2013e(e);
    return Math.floor((e - r * 24 * 60) / 60);
  }
  _r024d5879761bbc(e) {
    let r = this._r3fe828cbd2013e(e),
      t = this._rd1d4c528ab4c13(e);
    return e - r * 24 * 60 - t * 60;
  }
  getData() {
    return this._r9bd19a77ef7918()?.getVisibleEntries() ?? null;
  }
  getFavouriteGroupId() {
    switch (this._state) {
      case a.STATE_GROUP_ALLTIME:
        return this._rf5022e239a6633?.favouriteGroupId ?? -1;
      case a.STATE_GROUP_WEEKLY:
        return this._ra2dfd84bbfcfcc?.favouriteGroupId ?? -1;
      default:
        return -1;
    }
  }
  populateList() {
    let e = this.getData(),
      r = this.getFavouriteGroupId(),
      t = this._rc48cb7ca67aee6.sessionDataManager?.userId ?? -1;
    if (e == null || e.length === 0 || this.var_122 == null || this._rb975eaad124148 == null) {
      (this.var_122 != null && (this.var_122.visible = !1),
        this._rb975eaad124148 != null && (this._rb975eaad124148.visible = !1));
      return;
    }
    this.var_122.destroyListItems();
    let i = je.createWindow("snowwar_leaderboard_entry");
    if (i == null) return;
    for (let o = 0; o < e.length; o++) {
      let d = e[o],
        c = i.clone();
      if (c == null) continue;
      ((c.findChildByName("rank").caption = d.rank.toString()),
        (c.findChildByName("score").caption = d.score.toString()),
        (c.findChildByName("name").caption = d.name));
      let f = d.gender === "g";
      f
        ? this.setGroupBadgeImage(c.findChildByName("avatarImage"), d.figure)
        : this.setAvatarImage(c.findChildByName("avatarImage"), d.figure, d.gender);
      let b =
        (this._state === a.STATE_ALLTIME || this._state === a.STATE_GROUP_ALLTIME) &&
        ((!f && d.userId === t) || (f && d.userId === r));
      if ((!f && d.userId !== t) || (f && d.userId !== r) || (b && o < e.length - 1)) {
        ((c.findChildByName("highlight").visible = !1), (c.findChildByName("divider").visible = !1));
        let h = this.var_122.getListItemAt(this.var_122.numListItems - 1);
        h != null && (h.findChildByName("divider").visible = !1);
      }
      let _ = c.findChildByName("imageRegion");
      (_ != null &&
        ((_.id = d.userId), _.addEventListener(u.CLICK, f ? this._r83bd3d844f0fe7 : this._r770b8bbf7982c2)),
        this.var_122.addListItem(c));
    }
    if (
      this._state === a.STATE_ALLTIME ||
      this._state === a.STATE_GROUP_ALLTIME ||
      this._state === a.STATE_WEEKLY ||
      this._state === a.STATE_GROUP_WEEKLY
    ) {
      let o = this._rb92c2d5e45fdbe?.viewSize ?? 0,
        d = o > 0 ? e.length % o : 0;
      if (o > 0 && d !== 0) {
        let c = this.var_122.getListItemAt(this.var_122.numListItems - 1);
        for (let f = 0; f < d - 1; f++) {
          let l = i.clone();
          if (l == null) continue;
          ((l.findChildByName("rank").caption = ""),
            (l.findChildByName("score").caption = ""),
            (l.findChildByName("name").caption = ""),
            (l.findChildByName("highlight").visible = !1),
            (l.findChildByName("divider").visible = !1));
          let b = this.var_122.getListItemAt(this.var_122.numListItems - 1);
          b != null && (b.findChildByName("divider").visible = !1);
          let _ = l.findChildByName("imageRegion");
          (_ != null && l.removeChild(_), this.var_122.addListItem(l));
        }
        c != null && this.var_122.addListItem(c);
      }
    }
    i.dispose();
    let s = this.var_122.getListItemAt(this.var_122.numListItems - 1);
    (s != null && (s.findChildByName("divider").visible = !1),
      (this.var_122.visible = !0),
      (this._rb975eaad124148.visible = !0),
      this._r9f85de5b789c6d(),
      this._window?.invalidate());
  }
  setGroupBadgeImage(e, r) {
    let t = this._rc48cb7ca67aee6.sessionDataManager?.getGroupBadgeImage(r) ?? null;
    e != null && t != null && (this._r1e3b6fcbe3da0e.set(r, e), je.setElementImage(e, t), t.dispose());
  }
  setAvatarImage(e, r, t = null) {
    if (e == null) return;
    let i = this._rc48cb7ca67aee6.avatarManager?._r274f6640e76241(
        r,
        fr.LARGE,
        t ?? void 0,
        this,
      ),
      s = null;
    (i != null &&
      (i.setDirection(class_2123.const_252, 2),
      (s = i._rb2bd48e3b4d265(class_2123.HEAD)),
      i._re9580ee607591e() && this._r1e3b6fcbe3da0e.set(r, e),
      i.dispose()),
      je.setElementImage(e, s),
      s?.dispose());
  }
  _r9f85de5b789c6d() {
    let e = this._r9bd19a77ef7918();
    e != null &&
      this._rb55d8ea5917672 &&
      (this._r4c222ddc18b7f9 != null && (this._r4c222ddc18b7f9.visible = e._ra100f7e50f483d()),
      this._rd36744822d51d1 != null && (this._rd36744822d51d1.visible = e._r0391065070f9a7()));
  }
  getBitmap(e) {
    return this._rc48cb7ca67aee6.assets?.getAssetByName(e)?.content;
  }
  onClose = n((e) => {
    this.hide();
  }, "onClose");
  _r65fa2dae2bf111 = n((e) => {
    switch (this._state) {
      case a.STATE_ALLTIME:
        this._r6da5cfda8a3b29();
        break;
      case a.STATE_WEEKLY:
        this._ra35ee8cafc4de6();
        break;
      default:
        ((this._state = a.STATE_WEEKLY), this._ra35ee8cafc4de6());
        break;
    }
  }, "_r65fa2dae2bf111");
  _rb157a112820f41 = n((e) => {
    switch (this._state) {
      case a.STATE_FRIENDS_ALLTIME:
        this._r0fa8339f9ef029();
        break;
      case a.STATE_FRIENDS_WEEKLY:
        this._r77d001bcd4e03e();
        break;
      default:
        ((this._state = a.STATE_FRIENDS_WEEKLY), this._r77d001bcd4e03e());
        break;
    }
  }, "_rb157a112820f41");
  _r986f9c51040c75 = n((e) => {
    switch (this._state) {
      case a.STATE_GROUP_ALLTIME:
        this._rfd7759eb5f744e();
        break;
      case a.STATE_GROUP_WEEKLY:
        this._r3b9696c343e4d3();
        break;
      default:
        ((this._state = a.STATE_GROUP_WEEKLY), this._r3b9696c343e4d3());
        break;
    }
  }, "_r986f9c51040c75");
  _r4ef182b186814d = n((e) => {
    switch (this._state) {
      case a.STATE_WEEKLY:
        this._r6da5cfda8a3b29();
        break;
      case a.STATE_GROUP_WEEKLY:
        this._rfd7759eb5f744e();
        break;
      case a.STATE_FRIENDS_WEEKLY:
        this._r0fa8339f9ef029();
        break;
    }
  }, "_r4ef182b186814d");
  _r47489a41f8e546 = n((e) => {
    switch (this._state) {
      case a.STATE_FRIENDS_ALLTIME:
        this._r77d001bcd4e03e();
        break;
      case a.STATE_ALLTIME:
        this._ra35ee8cafc4de6();
        break;
      case a.STATE_GROUP_ALLTIME:
        this._r3b9696c343e4d3();
        break;
    }
  }, "_r47489a41f8e546");
  _r5a332d1bb826a4 = n((e) => {
    let r = e.window === this._r4c222ddc18b7f9 ? "up" : "down",
      t = "normal";
    switch (e.type) {
      case u.CLICK:
        e.window === this._r4c222ddc18b7f9 ? this._r7a47d0658b83fb() : this._r7019d5516b8450();
        return;
      case u.OUT:
        t = "normal";
        break;
      case u.OVER:
        t = "hilite";
        break;
      case u.DOWN:
        t = "click";
        break;
      case u.UP:
        t = "normal";
        break;
    }
    je.setElementImage(e.window?.getChildAt(0) ?? null, this.getBitmap(`scroll_${r}_${t}`));
  }, "_r5a332d1bb826a4");
  _r7a47d0658b83fb() {
    this._r9bd19a77ef7918()?.scrollUp() && this.populateList();
  }
  _r7019d5516b8450() {
    this._r9bd19a77ef7918()?.scrollDown() && this.populateList();
  }
  _ra8f10327aeb082 = n((e) => {
    if (this._r3ea9d6b455cf43?.visible)
      switch (this._state) {
        case a.STATE_WEEKLY:
          this._rd70214fb38a806((this.var_379?.offset ?? 0) - 1);
          break;
        case a.STATE_GROUP_WEEKLY:
          this._r3032c510f2e733((this._ra2dfd84bbfcfcc?.offset ?? 0) - 1);
          break;
        case a.STATE_FRIENDS_WEEKLY:
          this._re48fee0e8162ba((this.var_338?.offset ?? 0) - 1);
          break;
      }
  }, "_ra8f10327aeb082");
  _rcb61726b9433de = n((e) => {
    if (this._rb26fc3bc827efa?.visible)
      switch (this._state) {
        case a.STATE_WEEKLY:
          this._rd70214fb38a806((this.var_379?.offset ?? 0) + 1);
          break;
        case a.STATE_GROUP_WEEKLY:
          this._r3032c510f2e733((this._ra2dfd84bbfcfcc?.offset ?? 0) + 1);
          break;
        case a.STATE_FRIENDS_WEEKLY:
          this._re48fee0e8162ba((this.var_338?.offset ?? 0) + 1);
          break;
      }
  }, "_rcb61726b9433de");
  onTick = n((e) => {
    !this._r3ea9d6b455cf43?.visible &&
      (this._state === a.STATE_WEEKLY ||
        this._state === a.STATE_FRIENDS_WEEKLY ||
        this._state === a.STATE_GROUP_WEEKLY) &&
      (this.var_448 > 0 && this.var_448--, this.showTimeUntilWeeklyReset());
  }, "onTick");
  _r770b8bbf7982c2 = n((e) => {
    this._rc48cb7ca67aee6._r231346362c74e1?._rebf0e04324ba16(e.window?.id ?? 0);
  }, "_r770b8bbf7982c2");
  _r83bd3d844f0fe7 = n((e) => {
    this._rc48cb7ca67aee6._r231346362c74e1?._r373cbe1da119cd(!1, e.window?.id ?? 0);
  }, "_r83bd3d844f0fe7");
}
