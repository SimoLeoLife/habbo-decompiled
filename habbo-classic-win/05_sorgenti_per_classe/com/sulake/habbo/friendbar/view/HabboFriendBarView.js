// Extracted from HabboAirLauncher.deobf.js, line 212560.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/view/HabboFriendBarView.as
// Obfuscated name: _i3c21f28a3503c6

class a extends AbstractView {
  static {
    n(this, "HabboFriendBarView");
  }
  static const_429 = 1;
  static TAB_WIDTH = 127;
  static const_801 = 3;
  static MAIN_WINDOW_RESOURCE = "new_bar_xml";
  static TOGGLE_WINDOW_RESOURCE = "toggle_xml";
  static _rb637a71150724d = !1;
  static LIST = "list";
  static TOOLS = "friendtools";
  static HEADER = "header";
  static CANVAS = "canvas";
  static PIECES = "pieces";
  static ICON_ALL_FRIENDS = "icon_all_friends";
  static ICON_FIND_FRIENDS = "icon_find_friends";
  static const_850 = "collapse_left";
  static BUTTON_COLLAPSE_RIGHT = "collapse_right";
  static BUTTON_LEFT_PAGE = "button_left_page";
  static BUTTON_RIGHT_PAGE = "button_right_page";
  static const_1065 = "button_left";
  static const_1017 = "button_right";
  static const_591 = "button_left_end";
  static const_270 = "button_right_end";
  static const_724 = "button_open";
  static const_259 = "button_close";
  static BORDER = "border";
  static LINK_FRIEND_LIST = "link_friendlist";
  static COLLAPSED_MARGIN = 150;
  static _ra4c24ca6de5825 = 1;
  static NEW_BAR_RIGHT_MARGIN = 16;
  static COLLAPSE_ANIMATION_DURATION_MS = 140;
  static COLLAPSE_ANIMATION_FPS = 60;
  var_414 = null;
  var_540 = null;
  var_32 = null;
  recycle = [];
  var_573 = null;
  _rc346e25d03c6a8 = -1;
  var_402 = 0;
  _r5d5a3bab8529fa;
  var_487 = null;
  _r3dbfaf89aba477 = null;
  var_4240 = !0;
  _r7033dba2401e76 = null;
  var_496 = !1;
  _rea66b68a855416 = null;
  _rf024dd28a8b968 = null;
  _rb4f413479aeee1 = !1;
  _rcf4a65213f0aed = null;
  var_382 = null;
  var_2634 = null;
  var_4247 = 0;
  var_4314 = 0;
  _collapseAnimationStartWidth = 0;
  _collapseAnimationTargetWidth = 0;
  _collapseAnimationStartReservedWidth = 0;
  _collapseAnimationTargetReservedWidth = 0;
  applyCollapseAnimationFrame = 0;
  _r883dcad9cf6a0a = 0;
  _re83e5f8eede939 = !1;
  _r315eed7855c0b2 = null;
  _r024d6488c077ab = null;
  _r6180ffe5015216 = null;
  _rc007d271d18e2f = null;
  _r0694b505a19a21 = null;
  _r8c918fcbdb0433 = null;
  _r428e1bf5f3ba7d = null;
  constructor(e, r, t) {
    (super(e, r, t), (this._r5d5a3bab8529fa = new TextCropper()));
  }
  get _rd9ade8d75cbe99() {
    return this.var_414 == null ? 0 : this._r883dcad9cf6a0a;
  }
  get linkPattern() {
    return "friendbar/";
  }
  get visible() {
    return this.var_414 != null && this.var_414.visible;
  }
  set visible(e) {
    (this.var_414 != null && ((this.var_414.visible = e), this.var_414.activate()),
      this.var_32 != null &&
        ((this.var_32.visible = !e),
        this.var_414 != null &&
          ((this.var_32.x = this.var_414.x),
          (this.var_32.y = this.var_414.y),
          this.var_32.activate())));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboFriendList(), (e) => {
        this._friendList = e;
      }),
      new ComponentDependency(new IIDHabboFriendBarData(), (e) => {
        this._rcddaa95ba9587a = e;
      }),
      new ComponentDependency(new IIDHabboToolbar(), (e) => {
        this._toolbar = e;
      }),
      new ComponentDependency(new IIDHabboGameManager(), (e) => {
        this._gameManager = e;
      }),
    ]);
  }
  initComponent() {
    (this.context._r7e43d9f4706607(this),
      (this._r315eed7855c0b2 ??= (e) => {
        this._r1fbd75366319a0(e);
      }),
      (this._r024d6488c077ab ??= (e) => {
        this._r0ae32f9a7eb79d(e);
      }),
      (this._r6180ffe5015216 ??= (e) => {
        this._r8d210033df04c0(e);
      }),
      (this._rc007d271d18e2f ??= (e) => {
        this._rb75692568c966c(e);
      }),
      (this._r0694b505a19a21 ??= (e) => {
        this._r43c39e0385e668(e);
      }),
      (this._r8c918fcbdb0433 ??= (e) => {
        this._rfe9c1b533ae799(e);
      }),
      (this._r428e1bf5f3ba7d ??= (e) => {
        this._r729c945b759c35(e);
      }),
      this._rcddaa95ba9587a?.events.addEventListener?.(R8.FRIEND_LIST_UPDATED, this._r315eed7855c0b2),
      this._rcddaa95ba9587a?.events.addEventListener?.(jy.TYPE, this._r024d6488c077ab),
      this._rcddaa95ba9587a?.events.addEventListener?.(Du.FRIEND_REQUEST_UPDATE, this._r6180ffe5015216),
      this._rcddaa95ba9587a?.events.addEventListener?.(P8.NEW_INSTANT_MESSAGE, this._rc007d271d18e2f),
      this._rcddaa95ba9587a?.events.addEventListener?.(zy.FRIEND_NOTIFICATION_EVENT, this._r0694b505a19a21),
      this._rcddaa95ba9587a?.events.addEventListener?.(Gy.ACTIVE_MESSENGER_CONVERSATION_EVENT, this._r8c918fcbdb0433),
      this._sessionDataManager?.events.addEventListener?.(Kb.const_72, this._r428e1bf5f3ba7d));
  }
  dispose() {
    if (!this.disposed) {
      for (
        this.var_382?.removeEventListener?.(DeBouncer.addEventListener, this._r76ce286f901681),
          this.var_382?.stop(),
          this.var_382 = null,
          this.var_2634?.removeEventListener?.(DeBouncer.addEventListener, this._r1ac39791d669a1),
          this.var_2634?.stop(),
          this.var_2634 = null,
          this._r7033dba2401e76?.removeEventListener?.(DeBouncer._rf33144eac61595, this.onRemoveDimmer),
          this._r7033dba2401e76 = null,
          this.var_32?.dispose(),
          this.var_32 = null,
          this.var_414?.dispose(),
          this.var_414 = null,
          this.var_540?.dispose(),
          this.var_540 = null;
        this.recycle.length > 0;
      )
        this.recycle.pop()?.dispose();
      (this._r315eed7855c0b2 != null &&
        this._rcddaa95ba9587a?.events.removeEventListener?.(R8.FRIEND_LIST_UPDATED, this._r315eed7855c0b2),
        this._r024d6488c077ab != null &&
          this._rcddaa95ba9587a?.events.removeEventListener?.(jy.TYPE, this._r024d6488c077ab),
        this._r6180ffe5015216 != null &&
          this._rcddaa95ba9587a?.events.removeEventListener?.(Du.FRIEND_REQUEST_UPDATE, this._r6180ffe5015216),
        this._rc007d271d18e2f != null &&
          this._rcddaa95ba9587a?.events.removeEventListener?.(P8.NEW_INSTANT_MESSAGE, this._rc007d271d18e2f),
        this._r0694b505a19a21 != null &&
          this._rcddaa95ba9587a?.events.removeEventListener?.(zy.FRIEND_NOTIFICATION_EVENT, this._r0694b505a19a21),
        this._r8c918fcbdb0433 != null &&
          this._rcddaa95ba9587a?.events.removeEventListener?.(Gy.ACTIVE_MESSENGER_CONVERSATION_EVENT, this._r8c918fcbdb0433),
        this._r428e1bf5f3ba7d != null &&
          this._sessionDataManager?.events.removeEventListener?.(Kb.const_72, this._r428e1bf5f3ba7d),
        this._windowManager
          ?.getDesktopWindow(a.const_429)
          ?._r1165eed3833024()
          .removeEventListener?.(y.const_755, this.onDesktopResized),
        this.context._r7485c47d8bd77c(this),
        this._r5d5a3bab8529fa?.dispose(),
        (this._r5d5a3bab8529fa = null),
        super.dispose());
    }
  }
  _r28b4132fa4317e(e) {
    this.var_487 != null && this.notifyMessenger(e);
  }
  _r4bb158e8575a36(e) {}
  selectTab(e, r) {
    (e.selected ||
      (this.var_573?.deselect(!0),
      e.select(r),
      (this.var_573 = e),
      e instanceof Sn && (this._rc346e25d03c6a8 = e.friend?.id ?? -1)),
      r &&
        e instanceof Sn &&
        e.friend != null &&
        this.context.events.dispatchEvent?.(new g1e(e.friend.id, e.friend.name)));
  }
  _r0574cac632096b(e) {
    this.var_573 != null &&
      (this.var_573.deselect(e),
      (this.var_573 = null),
      (this._rc346e25d03c6a8 = -1));
  }
  _rac9072fcec5669(e) {
    let r = null;
    if (this._r943cf45602d873 != null) {
      let t = this._r943cf45602d873._r274f6640e76241(e, fr.LARGE, null, this);
      t != null && ((r = Jd.focusUserFace(t, class_2123.HEAD, 2, 1)), t.dispose());
    }
    return r;
  }
  _r4418e3360fb6c9(e) {
    return this._sessionDataManager?.getGroupBadgeImage(e) ?? null;
  }
  avatarImageReady(e) {
    if (this.var_414 == null || this._rcddaa95ba9587a == null) return;
    let r = this.var_414.findChildByName(a.LIST);
    for (let t = 0; t < this._rcddaa95ba9587a._r2144d65dea1029; t++) {
      let i = this._rcddaa95ba9587a._rd1b16f75b8bb69(t);
      if (i != null && i.figure === e) {
        let s = i.id > 0 ? this._rac9072fcec5669(i.figure) : this._r4418e3360fb6c9(i.figure),
          f = r
            ?.getListItemByID(i.id)
            ?.getChildByName(a.PIECES)
            ?.getListItemByName(a.HEADER)
            ?.findChildByName(a.CANVAS);
        s != null && f != null && ((f.bitmap = s), (f.width = s.width), (f.height = s.height));
        return;
      }
    }
    for (let t of this._rcddaa95ba9587a._r0add2df0e583e9())
      if (t.figure === e) {
        let i = this._rac9072fcec5669(e);
        if (i == null) return;
        for (let s of this.recycle) {
          if (s instanceof UnkClass_07f8e0) {
            s.avatarImageReady(t, i);
            return;
          }
          if (s instanceof Um) {
            s.avatarImageReady(t, i);
            return;
          }
          if (s instanceof LJ) {
            s.avatarImageReady(t, i);
            return;
          }
        }
      }
  }
  _r6822d89b476fe5(e) {
    return this.var_414?.findChildByName(e);
  }
  _r339c2cfe1300a6() {
    for (let e of this.recycle) e instanceof UnkClass_4c37cd && e._r7cefabbfdccfbb(yd.TYPE_MESSENGER, !0);
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2 || this._rcddaa95ba9587a == null))
      switch (r[1]) {
        case "findfriends":
          this._rcddaa95ba9587a._ra110382b6557cc();
          break;
        case "user":
          r.length > 2 && this._rcddaa95ba9587a._rde19ea92fd3543(r[2]);
          break;
        default:
      }
  }
  populate() {
    if (this.var_414 == null || this._rcddaa95ba9587a == null) return;
    let e = this.var_414.findChildByName(a.LIST);
    if (e == null) return;
    let r = this._rc346e25d03c6a8;
    (this._r0574cac632096b(!1), (e.autoArrangeItems = !1));
    for (let f = e.numListItems; f > 0; f--) e.removeListItemAt(f - 1);
    for (; this.recycle.length > 0;) this.recycle.pop()?.recycle();
    this.updateFriendRequestCounter(this._rcddaa95ba9587a._r101698a53118ff);
    let t = this._rcddaa95ba9587a._r2144d65dea1029,
      i = 0,
      s = this.maxNumOfTabsVisible,
      o = t + (this.var_4240 ? 1 : 0) + (i > 0 ? 1 : 0),
      d = Math.min(s, o);
    this.var_402 + d > o &&
      (this.var_402 = Math.max(0, this.var_402 - (this.var_402 + d - o)));
    let c = this.var_402;
    if (i > 0)
      if (this.var_402 === 0 && this.recycle.length < s)
        if (i === 1) {
          let f = this._rcddaa95ba9587a._r93fe4962023663(0);
          if (f != null) {
            let l = Um.allocate(f);
            (this.recycle.push(l), l.window != null && e.addListItem(l.window));
          }
        } else {
          let f = LJ.allocate(this._rcddaa95ba9587a._r0add2df0e583e9());
          (this.recycle.push(f), f.window != null && e.addListItem(f.window));
        }
      else c--;
    for (let f = c; f < t + c && !(f >= t || this.recycle.length >= s); f++) {
      let l = this._rcddaa95ba9587a._rd1b16f75b8bb69(f);
      if (l != null && l.id > 0) {
        let b = Sn.allocate(l);
        (this.recycle.push(b), b.window != null && e.addListItem(b.window));
      }
    }
    if (this.var_4240) {
      let f = this.getNumberOfFindFriendsTabs(s);
      for (o = t + f + (i > 0 ? 1 : 0); f-- > 0;) {
        let l = G9e.allocate();
        (this.recycle.push(l), l.window != null && e.addListItem(l.window));
      }
    }
    ((e.autoArrangeItems = !0),
      r > -1 && this._rb6619d4cd00268(r),
      this._r7573e6b9216beb(),
      this._r6fe4c20d099a64(
        this.recycle.length < o && o > 0,
        this.var_402 !== 0,
        this.var_402 + this.recycle.length < o,
      ),
      this._rb4f413479aeee1 ||
        ((this._rb4f413479aeee1 = !0), this._rec09a671d69fb9(!1), this._rec09a671d69fb9(!0)));
  }
  _rb6619d4cd00268(e) {
    if (this._rc346e25d03c6a8 === e) return;
    let r = this._r401c32f0dd50c0(e);
    r != null && (this.selectTab(r, !1), (this._rc346e25d03c6a8 = e));
  }
  get maxNumOfTabsVisible() {
    if (this.var_414 == null) return 0;
    let e = this.var_414.findChildByName(a.LIST),
      r = this.var_414.findChildByName(a.TOOLS);
    return e == null || r == null
      ? 0
      : Math.trunc(
          (this.var_414.width - r.width - a.NEW_BAR_RIGHT_MARGIN) / (a.TAB_WIDTH + e.spacing),
        );
  }
  get _r7d298f998725a3() {
    let e = 0;
    for (let r of this.recycle) r instanceof UnkClass_4c37cd && e++;
    for (let r of this.recycle) r instanceof UnkClass_4c37cd && e++;
    return e;
  }
  _r401c32f0dd50c0(e) {
    for (let r of this.recycle) if (r instanceof Sn && r.friend?.id === e) return r;
    return null;
  }
  _ra0b1b0cc33eeed() {
    return this.var_414 != null && !this.var_414.disposed;
  }
  getNumberOfFindFriendsTabs(e) {
    if (this.recycle.length >= e) return 0;
    let r = 1;
    return (
      this.recycle.length + r < a.const_801 &&
        (r = Math.min(e - this.recycle.length, a.const_801 - this.recycle.length)),
      r
    );
  }
  _rf3cee26fe6d976() {
    if (
      this._rcddaa95ba9587a == null ||
      this._gameManager == null ||
      this._friendList == null ||
      this._windowManager == null ||
      this._localizationManager == null ||
      this._r5d5a3bab8529fa == null ||
      this._tracking == null ||
      this._r943cf45602d873 == null
    )
      return;
    ((br._ra38a77a0a4203f = this._rcddaa95ba9587a),
      (br.GAMES = this._gameManager),
      (br.FRIENDS = this._friendList),
      (br.VIEW = this),
      (br._rb32e1e294172ec = this.assets),
      (br._r4280a9b33bac0a = this._windowManager),
      (br._r9470351e58eba2 = this._localizationManager),
      (br._r5a9e9983ab0116 = this._r5d5a3bab8529fa),
      (br._r6eff1f661c015f = this._tracking),
      (br._ra992a7b919f825 = this._r943cf45602d873),
      (bl._r4280a9b33bac0a = this._windowManager),
      (bl._rb32e1e294172ec = this.assets),
      (bl.GAMES = this._gameManager));
    let e = this.assets.getAssetByName(a.MAIN_WINDOW_RESOURCE);
    if (
      ((this.var_414 = this._windowManager.buildFromXML(e?.content, a.const_429)),
      this.var_414 == null)
    )
      return;
    if (
      (this.var_414.parent != null &&
        (this.var_414.y =
          this.var_414.parent.height - (this.var_414.height + a._ra4c24ca6de5825)),
      this.var_414.setParamFlag(N._r317c7c36abd185, !0),
      (this.var_414.procedure = this._r6d72b73119362e),
      a._rb637a71150724d)
    ) {
      let s = this.assets.getAssetByName(a.TOGGLE_WINDOW_RESOURCE);
      this.var_32 = this._windowManager.buildFromXML(s?.content, a.const_429);
    }
    Jn.isRunning() && this.addDimmerToFriendBar();
    let r = this.var_414.findChildByName(a.TOOLS);
    ((this._rcf4a65213f0aed = r?.getChildByName("line")),
      (this.var_487 = r?.findChildByName("icon_messenger")),
      this.var_487?.addEventListener(u.CLICK, this._r9a69b5ef5990af),
      this.var_487 != null && (this.var_487.visible = !1),
      r?.findChildByName(a.ICON_ALL_FRIENDS)?.addEventListener(u.CLICK, this._r2c146b4a6f824d),
      r?.findChildByName(a.ICON_FIND_FRIENDS)?.addEventListener(u.CLICK, this._r50f5063a08ca84),
      (this._rf024dd28a8b968 = this.var_414.findChildByName(a.const_850)),
      this._rf024dd28a8b968?.addEventListener(u.CLICK, this._r128d23292a6cdc),
      (this._rea66b68a855416 = this.var_414.findChildByName(a.BUTTON_COLLAPSE_RIGHT)),
      this._rea66b68a855416?.addEventListener(u.CLICK, this._r128d23292a6cdc),
      this._windowManager
        .getDesktopWindow(a.const_429)
        ?._r1165eed3833024()
        .addEventListener?.(y.const_755, this.onDesktopResized),
      this.populate(),
      this.var_2634 == null &&
        ((this.var_2634 = new UnkEventDispatcherWrapperSubclass_05394e(1e3 / a.COLLAPSE_ANIMATION_FPS)),
        this.var_2634.addEventListener?.(DeBouncer.addEventListener, this._r1ac39791d669a1)),
      this._re83e5f8eede939 && this.notifyMessenger(!0));
  }
  addDimmerToFriendBar() {
    if (this._windowManager == null || this.var_414 == null) return;
    let e = this._windowManager.createWindow(
      "bar_dimmer",
      "",
      HabboWindowType.BORDER,
      HabboWindowStyle.BLACK,
      class_2094._r5e6031ce4e2cb8 | class_2094._r5fc5b82230bd49 | class_2094._r26338c8d88c4e5,
      new D(0, 0, this.var_414.width, this.var_414.height),
      null,
      0,
    );
    e != null &&
      ((e.color = 0),
      (e.blend = 0.3),
      this.var_414.addChild(e),
      this._r7033dba2401e76 == null &&
        ((this._r7033dba2401e76 = new UnkEventDispatcherWrapperSubclass_05394e(Jn.totalRunningTime, 1)),
        this._r7033dba2401e76.addEventListener?.(DeBouncer._rf33144eac61595, this.onRemoveDimmer),
        this._r7033dba2401e76.start()));
  }
  notifyMessenger(e) {
    if (this.var_487 == null) return;
    let r = this.var_487.getChildByName("icon"),
      t = this.var_487.getChildByName("icon_1");
    if (e)
      this.var_382 == null &&
        (r != null && (r.visible = !1),
        t != null && (t.visible = !0),
        (this.var_382 = new UnkEventDispatcherWrapperSubclass_05394e(500, 0)),
        this.var_382.addEventListener?.(DeBouncer.addEventListener, this._r76ce286f901681),
        this.var_382.start());
    else {
      (this.var_382?.removeEventListener?.(DeBouncer.addEventListener, this._r76ce286f901681),
        this.var_382?.stop(),
        (this.var_382 = null),
        r != null && (r.visible = !0),
        t != null && (t.visible = !1));
      let i = this.var_487.getChildByName("icon_2");
      i != null && (i.visible = !1);
    }
  }
  _r7573e6b9216beb() {
    (this._rf024dd28a8b968 != null && (this._rf024dd28a8b968.visible = this.var_496),
      this._rea66b68a855416 != null && (this._rea66b68a855416.visible = !this.var_496));
  }
  _r6481ef4da83b0d() {
    return this.var_414 == null
      ? 0
      : this.var_496
        ? a.COLLAPSED_MARGIN
        : this.var_414.width;
  }
  _r16654dd802d6a3() {
    this.events.dispatchEvent?.(new l1());
  }
  var_419(e, r, t) {
    this.var_414 != null &&
      ((this.var_414.x = e),
      (this.var_414.width = r),
      (this._r883dcad9cf6a0a = t),
      this.var_414.invalidate(),
      this._r16654dd802d6a3());
  }
  startCollapseAnimation(e, r, t, i, s, o) {
    if (this.var_2634 == null) {
      this.var_419(r, i, o);
      return;
    }
    (this.var_2634.reset(),
      (this.var_4247 = 0),
      (this.var_4314 = e),
      (this._collapseAnimationStartWidth = r),
      (this._collapseAnimationTargetWidth = t),
      (this._collapseAnimationStartReservedWidth = i),
      (this._collapseAnimationTargetReservedWidth = s),
      (this.applyCollapseAnimationFrame = o),
      this.var_419(e, t, s),
      this.var_2634.start());
  }
  _r36ae51f8d9797e() {
    this._r238010c5c0d7fd(!this.var_496, !0, !0);
  }
  _r238010c5c0d7fd(e, r, t) {
    if (this.var_496 === e) return;
    let i = this.var_414?.x ?? 0,
      s = this.var_414?.width ?? 0,
      o = this._r883dcad9cf6a0a;
    ((this.var_496 = e),
      r && this._sessionDataManager?.setFriendBarState(!this.var_496),
      this.var_2634?.stop(),
      this._r0574cac632096b(!0),
      this._rec09a671d69fb9(!0),
      this._r7573e6b9216beb(),
      this.var_496 || this._rec09a671d69fb9(!0));
    let d = this.var_414?.x ?? 0,
      c = this.var_414?.width ?? 0,
      f = this._r6481ef4da83b0d();
    t ? this.startCollapseAnimation(i, d, s, c, o, f) : this.var_419(d, c, f);
  }
  _r6fe4c20d099a64(e, r, t) {
    if (this.var_414 == null) return;
    let i = this.var_414.findChildByName(a.BUTTON_LEFT_PAGE),
      s = this.var_414.findChildByName(a.BUTTON_RIGHT_PAGE);
    (i != null && ((i.visible = e), r ? i.enable() : i.disable(), (i.blend = r ? 1 : 0.2)),
      s != null && ((s.visible = e), t ? s.enable() : s.disable(), (s.blend = t ? 1 : 0.2)),
      this._r36195449b62a03());
  }
  _rec09a671d69fb9(e = !1) {
    if (this.disposed || this.var_414 == null || this._toolbar == null) return;
    let r = this._toolbar._ra9b27e4a11ddce();
    if (
      ((this.var_414.width =
        this.var_414.parent != null
          ? this.var_414.parent.width - r.right
          : this.var_414.width),
      this._rcf4a65213f0aed != null && (this._rcf4a65213f0aed.visible = !this.var_496),
      !e && this._rcddaa95ba9587a != null)
    ) {
      let t = this.maxNumOfTabsVisible;
      (t < this.recycle.length ||
        (t > this.recycle.length &&
          (this.recycle.length < a.const_801 ||
            this.recycle.length <
              this._rcddaa95ba9587a._r2144d65dea1029 + (this.var_4240 ? 1 : 0) ||
            this._r7d298f998725a3 < this._rcddaa95ba9587a._r2144d65dea1029))) &&
        (e = !0);
    }
    (e && (this.populate(), this._r36195449b62a03()),
      this.var_496
        ? (this.var_414.x = this.var_414.desktop.width - a.COLLAPSED_MARGIN)
        : ((this.var_414.x = this.var_414.desktop.width - this.var_414.width),
          this._rcf4a65213f0aed != null && (this._rcf4a65213f0aed.x = 1)),
      (this._r883dcad9cf6a0a = this._r6481ef4da83b0d()));
  }
  _r36195449b62a03() {
    if (this.var_414 == null) return;
    let e = 0;
    for (let r = 0; r < this.var_414.numChildren; r++) {
      let t = this.var_414.getChildAt(r);
      t == null || !t.visible || ((t.x = e), (e += t.width));
    }
    this.var_414.width = e;
  }
  updateFriendRequestCounter(e) {
    if (
      !(this.var_414 == null || this._windowManager == null) &&
      (this.var_540 == null && (this.var_540 = this._windowManager.createUnseenItemCounter()),
      this.var_540 != null)
    ) {
      let r = this.var_414.findChildByName(a.ICON_ALL_FRIENDS);
      r != null &&
        (r.addChild(this.var_540),
        (this.var_540.x = r.width - this.var_540.width - 5),
        (this.var_540.y = 0),
        (this.var_540.visible = e > 0),
        e > 0 && (this.var_540.findChildByName("count").caption = e.toString()));
    }
  }
  _r1fbd75366319a0 = n((e) => {
    this._ra0b1b0cc33eeed() ? this._rec09a671d69fb9(!0) : this._rf3cee26fe6d976();
  }, "_r1fbd75366319a0");
  _r0ae32f9a7eb79d = n((e) => {
    let r = e.success ? "${friendbar.find.success.title}" : "${friendbar.find.error.title}",
      t = e.success ? "${friendbar.find.success.text}" : "${friendbar.find.error.text}";
    this._windowManager?.notify(r, t, (i) => i.dispose(), HabboAlertDialogFlag.const_427);
  }, "_r0ae32f9a7eb79d");
  _r8d210033df04c0 = n((e) => {
    this._rcddaa95ba9587a != null &&
      (this.var_414 != null
        ? (this.updateFriendRequestCounter(this._rcddaa95ba9587a._r101698a53118ff), this._rec09a671d69fb9(!0))
        : this._rf3cee26fe6d976());
  }, "_r8d210033df04c0");
  _r76ce286f901681 = n((e) => {
    if (this.var_487 == null) return;
    this.var_487.visible = !0;
    let r = this.var_487.getChildByName("icon_1"),
      t = this.var_487.getChildByName("icon_2");
    r != null &&
      t != null &&
      (r.visible ? ((r.visible = !1), (t.visible = !0)) : t.visible && ((t.visible = !1), (r.visible = !0)));
  }, "_r76ce286f901681");
  _rb75692568c966c = n((e) => {
    (e.notify && (this._re83e5f8eede939 = !0),
      this.var_487 != null &&
        (e.notify
          ? this.notifyMessenger(!0)
          : ((this.var_487.visible = !0), this.notifyMessenger(!1))),
      this._r3dbfaf89aba477?.window != null && e.notify && (this._r3dbfaf89aba477.window.visible = !0));
  }, "_rb75692568c966c");
  _r43c39e0385e668 = n((e) => {
    this._r401c32f0dd50c0(e.friendId)?._r0a6ba1439fec3e(e.notification);
  }, "_r43c39e0385e668");
  _rfe9c1b533ae799 = n((e) => {
    this.var_487 != null &&
      ((this.var_487.visible = e.var_4825 !== 0), this.notifyMessenger(e._hasUnread));
  }, "_rfe9c1b533ae799");
  _r729c945b759c35 = n((e) => {
    this._r238010c5c0d7fd(!(e.uiFlags & UnkConstants_5a1c56._r373bc350e1a95e), !1, !1);
  }, "_r729c945b759c35");
  _r1ac39791d669a1 = n((e) => {
    if (this.var_414 == null || this.var_2634 == null) return;
    this.var_4247 += this.var_2634.delay;
    let r = Math.min(1, this.var_4247 / a.COLLAPSE_ANIMATION_DURATION_MS),
      t = 1 - Math.pow(1 - r, 3),
      i = Math.round(this.var_4314 + (this._collapseAnimationStartWidth - this.var_4314) * t),
      s = Math.round(this._collapseAnimationTargetWidth + (this._collapseAnimationStartReservedWidth - this._collapseAnimationTargetWidth) * t),
      o = Math.round(this._collapseAnimationTargetReservedWidth + (this.applyCollapseAnimationFrame - this._collapseAnimationTargetReservedWidth) * t);
    (this.var_419(i, s, o),
      r >= 1 &&
        (this.var_2634.stop(),
        this.var_419(this._collapseAnimationStartWidth, this._collapseAnimationStartReservedWidth, this.applyCollapseAnimationFrame)));
  }, "_r1ac39791d669a1");
  _r6d72b73119362e = n((e, r) => {
    if (this._rcddaa95ba9587a != null) {
      if (e.type === u.DOWN) {
        let t = this.var_402,
          i =
            this._rcddaa95ba9587a._r2144d65dea1029 +
            (this.var_4240 ? 1 : 0) +
            (this._rcddaa95ba9587a._r101698a53118ff > 0 ? 1 : 0);
        switch (r.name) {
          case a.const_1065:
            t = Math.max(0, this.var_402 - 1);
            break;
          case a.BUTTON_LEFT_PAGE:
            t = Math.max(0, this.var_402 - this.maxNumOfTabsVisible);
            break;
          case a.const_591:
            t = 0;
            break;
          case a.const_1017:
            t = Math.max(0, Math.min(i - this.maxNumOfTabsVisible, this.var_402 + 1));
            break;
          case a.BUTTON_RIGHT_PAGE:
            t = Math.max(
              0,
              Math.min(i - this.maxNumOfTabsVisible, this.var_402 + this.maxNumOfTabsVisible),
            );
            break;
          case a.const_270:
            t = Math.max(0, i - this.maxNumOfTabsVisible);
            break;
          case a.const_259:
            this.visible = !1;
            break;
          case a.BORDER:
            this._r0574cac632096b(!0);
            break;
          case a.LINK_FRIEND_LIST:
            this._rcddaa95ba9587a._r61142a7bc6d4cf();
            break;
        }
        t !== this.var_402 &&
          (this._r0574cac632096b(!0), (this.var_402 = t), this._rec09a671d69fb9(!0));
      }
      e.type === y.const_210 && this._r0574cac632096b(!0);
    }
  }, "_r6d72b73119362e");
  _r128d23292a6cdc = n((e) => {
    this._r36ae51f8d9797e();
  }, "_r128d23292a6cdc");
  _r9a69b5ef5990af = n((e) => {
    (this._rcddaa95ba9587a?._r4109e4e344be47(), this.notifyMessenger(!1));
  }, "_r9a69b5ef5990af");
  _r2c146b4a6f824d = n((e) => {
    this._rcddaa95ba9587a?._r61142a7bc6d4cf();
  }, "_r2c146b4a6f824d");
  _r50f5063a08ca84 = n((e) => {
    this._rcddaa95ba9587a?._rd4e1f486632930();
  }, "_r50f5063a08ca84");
  onRemoveDimmer = n((e) => {
    (this._r7033dba2401e76?.removeEventListener?.(DeBouncer._rf33144eac61595, this.onRemoveDimmer),
      (this._r7033dba2401e76 = null));
    let r = this.var_414?.findChildByName("bar_dimmer");
    r != null &&
      this.var_414 != null &&
      this._windowManager != null &&
      (this.var_414.removeChild(r), this._windowManager.destroy(r));
  }, "onRemoveDimmer");
  onDesktopResized = n((e) => {
    this._rec09a671d69fb9(!0);
  }, "onDesktopResized");
}
