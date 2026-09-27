// Estratto da HabboAirLauncher.deobf.js, riga 217185.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/HabboFriendList.as
// Nome offuscato: _id726576b6c1847

class a extends ue {
  static {
    n(this, "HabboFriendList");
  }
  static AVATAR_FACE_NAME = "face";
  _view = null;
  _re842dacc40aa7f = null;
  _r4ab2d701f204b6 = null;
  var_194 = null;
  var_1327 = null;
  _rf1c854f2d31d91 = !1;
  _r6199af4806bf6e = !1;
  _rb3976a96b1929b = !1;
  var_3798 = 0;
  var_5697 = _ia4c17117df4f10._r05521d2174447f;
  _r4c3fb90f88a143 = -zz.ROOM_INVITATION_DELAY;
  _r9534593ee4611a;
  _categories;
  _r76deb6afce45f5;
  constructor(e, r = 0, t = null) {
    (super(e, r, t),
      (this._categories = new p4e(new FriendCategoriesDeps(this))),
      (this._r76deb6afce45f5 = new AvatarSearchResults(new _i2362d931a86308(this))),
      (this._r9534593ee4611a = new _if23792bbaa3f53()));
  }
  get dependencies() {
    return super.dependencies.concat([
      new ComponentDependency(new IIDHabboCommunicationManager(), (e) => {
        this._communication = e;
      }),
      new ComponentDependency(new IIDHabboTracking(), (e) => {
        this._tracking = e;
      }),
      new ComponentDependency(
        new IIDHabboMessenger(),
        (e) => {
          this._messenger = e;
        },
        !1,
      ),
      new ComponentDependency(new IIDAvatarRenderManager(), (e) => {
        this._r943cf45602d873 = e;
      }),
      new ComponentDependency(new IIDHabboLocalizationManager(), (e) => {
        this._localization = e;
      }),
      new ComponentDependency(new IIDHabboNotifications(), (e) => {
        this._notifications = e;
      }),
      new ComponentDependency(new IIDHabboWindowManager(), (e) => {
        this._windowManager = e;
      }),
      new ComponentDependency(new IIDSessionDataManager(), (e) => {
        this._sessionData = e;
      }),
    ]);
  }
  initComponent() {
    (this._communication?._r2e106e2349a0b6(new class_1926(this._r6e2e75987c854e)),
      this._communication?._r2e106e2349a0b6(new class_2248(this._r835491ace736d9)),
      this._communication?._r2e106e2349a0b6(new _ib1cf729ef555ec(this._r89804fb6520a29)),
      this.context.events?.addEventListener?.(HabboCommunicationEvent.AUTHENTICATED, this._r3ff765f17f3159),
      this.context._r7e43d9f4706607(this),
      this._ra93b992ad04545());
  }
  dispose() {
    this.disposed ||
      (this.context._r7485c47d8bd77c(this),
      this.context.events?.removeEventListener?.(HabboCommunicationEvent.AUTHENTICATED, this._r3ff765f17f3159),
      this.var_1327?.stop(),
      this.var_1327?.removeEventListener(DeBouncer.addEventListener, this._r3b0414a267b3c1),
      (this.var_1327 = null),
      (this._view = null),
      (this._re842dacc40aa7f = null),
      (this.var_194 = null),
      (this._r4ab2d701f204b6 = null),
      super.dispose());
  }
  send(e) {
    this._communication?.connection.send(e);
  }
  trackGoogle(e, r, t = -1) {
    this._tracking?.trackGoogle(e, r, t);
  }
  getText(e) {
    return this._localization?.getLocalization(e) ?? e;
  }
  _r43eae9731f5b27(e, r, t) {
    this._localization?._r43eae9731f5b27(e, r, t);
  }
  close() {
    this._view?.close();
  }
  alignBottomLeftTo(e) {
    this._view?.alignBottomLeftTo(e);
  }
  isOpen() {
    return this._view?.isOpen() ?? !1;
  }
  get linkPattern() {
    return "friendlist/";
  }
  get categories() {
    return this._categories;
  }
  get friendRequests() {
    return this.var_194;
  }
  get _rc6d7b8ee3de201() {
    return this._r76deb6afce45f5;
  }
  get view() {
    return this._view;
  }
  get tabs() {
    return this._re842dacc40aa7f;
  }
  get _r6dce2f14add5ec() {
    return this._r9534593ee4611a;
  }
  get messenger() {
    return this._messenger;
  }
  get localization() {
    return this._localization;
  }
  get avatarManager() {
    return this._r943cf45602d873;
  }
  get notifications() {
    return this._notifications;
  }
  get tracking() {
    return this._tracking;
  }
  get windowManager() {
    return this._windowManager;
  }
  get avatarId() {
    return this.var_3798;
  }
  get mainWindow() {
    return this._view?.mainWindow ?? null;
  }
  get _r777772002dbf32() {
    return this._rf1c854f2d31d91;
  }
  get lastRoomInvitationTime() {
    return this._r4c3fb90f88a143;
  }
  _r53c67dcfbf0024() {
    this._r4c3fb90f88a143 = Date.now();
  }
  openFriendList() {
    this.openFriendListWithTab(_ia4c17117df4f10._ra8c8b3cdc9c268);
  }
  _r7ec993a0b08204() {
    this.openFriendListWithTab(_ia4c17117df4f10._rfadb4d8e33d276);
  }
  _r5ea4d7eb8b0a8c() {
    (this.openFriendListWithTab(_ia4c17117df4f10.SearchView),
      this._re842dacc40aa7f?.findTab(_ia4c17117df4f10.SearchView)?._r547724a31de035?.focus());
  }
  _r31fba0b9e95dac() {
    return this._view == null || !this._view.isOpen() ? _ia4c17117df4f10._r05521d2174447f : this.var_5697;
  }
  getFriendCount(e, r) {
    return this._view == null ? 0 : this._categories.getFriendCount(e, r);
  }
  _rf51d9426e17752(e) {
    return this._view == null ? null : this._categories._r6c6a0b9c455198(e);
  }
  _rab99fafd046469() {
    return this._categories._rab99fafd046469();
  }
  isMessagesPersisted() {
    return this.getBoolean("friend_list.persistent_message_status.enabled");
  }
  isEmbeddedMinimailEnabled() {
    return this.getProperty("client.minimail.embed.enabled") === "true";
  }
  _r7df26efa3d56a0(e) {
    return (
      this._view != null &&
      this.var_194 != null &&
      this._rf51d9426e17752(e) == null &&
      !this._r76deb6afce45f5.var_3816(e) &&
      this._categories.getFriendCount(!1) < this.var_194.limit
    );
  }
  _r9c4d5fbe38e0ed(e, r) {
    return this._view == null
      ? !1
      : this._r76deb6afce45f5.var_3816(e)
        ? !0
        : this._r7df26efa3d56a0(e)
          ? (this.send(new _icf4364c12405b9(r)), this._r76deb6afce45f5.setFriendRequestSent(e), this.send(new _ic0905c4104eb87()), !0)
          : !1;
  }
  openHabboWebPage(e, r, t, i) {
    (Ae.navigateToURL(this.getProperty(e, r), "habboMain"),
      (this._r4ab2d701f204b6 ??= new OpenedToWebPopup(this)),
      this._r4ab2d701f204b6.show(t, i));
  }
  showLimitReachedAlert() {
    this.var_194 != null &&
      (this._r43eae9731f5b27("friendlist.listfull.text", "mylimit", `${this.var_194.limit}`),
      this._r43eae9731f5b27(
        "friendlist.listfull.text",
        "clublimit",
        `${this.var_194.friendRequests}`,
      ),
      this._r3651220a1507f2("${friendlist.listfull.title}", "${friendlist.listfull.text}"));
  }
  showFriendRequestSentAlert(e) {
    (this._r43eae9731f5b27("friendlist.friendrequestsent.text", "user_name", e),
      this._r3651220a1507f2("${friendlist.friendrequestsent.title}", "${friendlist.friendrequestsent.text}"));
  }
  getXmlWindow(e) {
    let r = this.assets.getAssetByName(`${e}_xml`)?.content ?? null;
    return r == null ? null : (this._windowManager?.buildFromXML(r) ?? null);
  }
  _r6bd8f6d6bfdbb5(e) {
    return this.assets.getAssetByName(`${e}_png`)?.content?.clone() ?? null;
  }
  face(e) {
    return this._sessionData?.getGroupBadgeSmallImage(e) ?? null;
  }
  _rac9072fcec5669(e) {
    let r =
      this._r943cf45602d873?._r274f6640e76241(
        e,
        this.getBoolean("zoom.enabled") ? fr.LARGE : fr.SMALL,
        null,
        this,
      ) ?? null;
    if (r == null) return null;
    let t = Jd.focusUserFace(r, class_2123.HEAD, 2, this.getBoolean("zoom.enabled") ? 0.5 : 1, 20, 20);
    return (r.dispose(), t);
  }
  refreshText(e, r, t, i) {
    let s = e.getChildByName(r);
    s != null && ((s.visible = t), t && (s.caption = i));
  }
  refreshButton(e, r, t, i, s) {
    let o = e.findChildByName(r);
    if (o != null) {
      if (!t) {
        o.visible = !1;
        return;
      }
      (this.prepareButton(o, r, i, s), (o.visible = !0));
    }
  }
  _r2a0afb25f016d4(e, r, t, i, s) {
    let o = e.findChildByName(r),
      d = o?.findChildByTag("bitmap");
    (d &&
      (d.assetUri =
        t === en.const_522
          ? "relationship_status_heart"
          : t === en.SMILE
            ? "relationship_status_smile"
            : t === en.BOBBA
              ? "relationship_status_bobba"
              : "relationship_status_none"),
      d != null && (d.visible = !0),
      o != null &&
        ((o.id = s),
        (o.procedure = i),
        (o.visible = s > 0 && this.getBoolean("relationship.status.enabled"))));
  }
  refreshIcon(e, r, t, i, s) {
    let o = e.findChildByName(r);
    o != null && ((o.visible = t), t && ((o.id = s), (o.procedure = i)));
  }
  _r3651220a1507f2(e, r) {
    this._windowManager != null ? this._windowManager._r3651220a1507f2(e, "", r) : new SimpleAlertView(this, e, r).show();
  }
  _r2261fa54b0d7ce(e) {
    this._re842dacc40aa7f?.findTab(_ia4c17117df4f10._rfadb4d8e33d276)?._r547724a31de035?.acceptRequest(e);
  }
  _r36a1959e9c4470() {
    this._re842dacc40aa7f?.findTab(_ia4c17117df4f10._rfadb4d8e33d276)?._r547724a31de035?.acceptAllRequests();
  }
  _r62afd2c361c783(e) {
    this._re842dacc40aa7f?.findTab(_ia4c17117df4f10._rfadb4d8e33d276)?._r547724a31de035?.declineRequest(e);
  }
  _r64b082e60ec4ab() {
    this._re842dacc40aa7f?.findTab(_ia4c17117df4f10._rfadb4d8e33d276)?._r547724a31de035?.declineAllRequests();
  }
  _rb0baadd15ced86(e, r) {
    this.send(new class_1917(e, r));
  }
  _rd4c8265c0d402f(e) {
    return this._categories._r6c6a0b9c455198(e)?._r13d8beafe06ba1 ?? en.NONE;
  }
  openFriendListWithTab(e) {
    if (this._view == null || this._re842dacc40aa7f == null) return;
    this._view.openFriendList();
    let r = this._re842dacc40aa7f.findTab(e);
    (r != null &&
      r !== this._re842dacc40aa7f.findSelectedTab() &&
      (this._re842dacc40aa7f.toggleSelected(r), this._view.refresh("openFriendList")),
      this._view.mainWindow?.activate(),
      (this.var_5697 = e));
  }
  prepareButton(e, r, t, i) {
    e.id = i;
    let s = null;
    if (("bitmap" in e ? (s = e) : (s = e.findChildByTag?.("bitmap")), s?.bitmap != null)) return;
    let o = this._r6bd8f6d6bfdbb5(r);
    (s != null && o != null && ((s.bitmap = o), (s.width = o.width), (s.height = o.height)),
      (e.procedure = t));
  }
  _r3ebab57ec826fa() {
    (this._communication?._r2e106e2349a0b6(new _i07ae484c56c170(this._ra2a140f1aa896a)),
      this._communication?._r2e106e2349a0b6(new _ib019fd527eda9d(this._re2d4f827ef2413)),
      this._communication?._r2e106e2349a0b6(new _id914761a015ed9(this._r46ae09bb95d453)),
      this._communication?._r2e106e2349a0b6(new _ifdf85a61afccf4(this._rf9b7cbaf81007e)),
      this._communication?._r2e106e2349a0b6(new _i1f64010219fea1(this._rbf4c4a51b7f794)),
      this._communication?._r2e106e2349a0b6(new _if8dc94f99b03d0(this._r482e3dd977479a)),
      this._communication?._r2e106e2349a0b6(new class_2288(this._rf3f7efc071df24)),
      this._communication?._r2e106e2349a0b6(new _i38a86b3f3520e2(this._r7ad969464e11d5)),
      this._communication?._r2e106e2349a0b6(new class_2271(this._r97aecc27368072)));
  }
  _r6e2e75987c854e = n((e) => {
    let t = ClassUtils._rc882f0c0aea57f(e, class_1926)?.getParser() ?? null;
    t != null && ((this.var_3798 = Number(t.id)), this._ra93b992ad04545());
  }, "_r6e2e75987c854e");
  _r89804fb6520a29 = n((e) => {
    let t = ClassUtils._rc882f0c0aea57f(e, _ib1cf729ef555ec)?.getParser() ?? null;
    if (t != null) {
      for (let i of t._r3ffeb595461103) this._categories.addFriend(new Friend(i));
      t._rd646a5cabacc16 === t._rec250fae6d7fc2 - 1 &&
        (this._categories.sort(),
        (this._rf1c854f2d31d91 = !0),
        this._categories
          .findCategory(_c._r9f6f78959f0306)
          ?._r49df954c589e8e(this._categories.getFriendCount(!0, !1) === 0));
    }
  }, "_r89804fb6520a29");
  _r835491ace736d9 = n((e) => {
    let r = ClassUtils.getParser(e, class_2023);
    r != null &&
      ((this._r6199af4806bf6e = !0),
      (this._rb3976a96b1929b = !0),
      (this._view = new o4e(this)),
      (this.var_194 = new FriendRequests(new _iaec6492ba501cd(this), r._rdeb413fa6c27ce, r._rd18925e9d6e18a)),
      this._categories.addCategory(new _c(_c._r2a8d0988824e63, this.getText("friendlist.friends"))),
      this._categories.addCategory(
        new _c(_c._r9f6f78959f0306, this.getText("friendlist.friends.offlinecaption")),
      ),
      (this._re842dacc40aa7f = new FriendListTabs(new FriendListTabsDeps(this, this))),
      this.var_1327 == null &&
        ((this.var_1327 = new _i05394ecc0c0c4d(1e6)),
        this.var_1327.addEventListener(DeBouncer.addEventListener, this._r3b0414a267b3c1),
        this.var_1327.start()),
      this.send(new _i9606fa8e9670ab()),
      this._r3ebab57ec826fa());
  }, "_r835491ace736d9");
  _r3b0414a267b3c1 = n((e) => {
    this.send(new _i0f5d864ce4ee2d());
  }, "_r3b0414a267b3c1");
  _r46ae09bb95d453 = n((e) => {
    if (this.var_194 == null || this._re842dacc40aa7f == null || this._view == null) return;
    let r = ClassUtils.getParser(e, _i9cd5c96c2d404f);
    if (r != null) {
      this.var_194._rfba60cd726e045(!1);
      for (let t of r._r6ec858df0bd32d) this.var_194._r2513a3d4c4957f(new Po(t));
      (r._r6ec858df0bd32d.length > 0 &&
        this._re842dacc40aa7f.findTab(_ia4c17117df4f10._rfadb4d8e33d276)?.setNewMessageArrived(!0),
        this._view.refresh("friendRequests"));
    }
  }, "_r46ae09bb95d453");
  _rf9b7cbaf81007e = n((e) => {
    if (this.var_194 == null || this._re842dacc40aa7f == null || this._view == null) return;
    let t = ClassUtils._rc882f0c0aea57f(e, _ifdf85a61afccf4)?.getParser() ?? null;
    if (t == null) return;
    let i = t.req;
    if (i == null) return;
    let s = new Po(i);
    (this.var_194._r01fbe580789752(s),
      this._re842dacc40aa7f.findTab(_ia4c17117df4f10._rfadb4d8e33d276)?.setNewMessageArrived(!0),
      this._view.refresh("newFriendRequest"));
  }, "_rf9b7cbaf81007e");
  _rbf4c4a51b7f794 = n((e) => {
    let r = ClassUtils.getParser(e, _ieec6a5c6cf2886);
    if (r != null)
      for (let t of r._r3933db8d552e0b)
        (this.var_194?._r5efc4cec21c4c4(t.senderId),
          this.showAlertView(t.errorCode, t.senderId));
  }, "_rbf4c4a51b7f794");
  _rf3f7efc071df24 = n((e) => {
    let r = ClassUtils.getParser(e, class_2211);
    r != null && (this._r76deb6afce45f5.searchReceived(r.friends, r.others), this._view?.refresh("search"));
  }, "_rf3f7efc071df24");
  _r482e3dd977479a = n((e) => {
    let t = ClassUtils._rc882f0c0aea57f(e, _if8dc94f99b03d0)?.getParser() ?? null;
    t != null && this.showAlertView(t.errorCode, t._r5e5a4c91d9abaf);
  }, "_r482e3dd977479a");
  _r7ad969464e11d5 = n((e) => {
    let t = ClassUtils._rc882f0c0aea57f(e, _i38a86b3f3520e2)?.getParser() ?? null;
    t != null &&
      this._r3651220a1507f2(
        "${friendlist.alert.title}",
        `Received room invite error: errorCode: ${t.errorCode}, recipients: ${Util.arrayToString(t._r23d4d3ce9a3612)}`,
      );
  }, "_r7ad969464e11d5");
  _re2d4f827ef2413 = n((e) => {
    (this._categories._re2d4f827ef2413(e), this._view?.refresh("friendListUpdate"));
  }, "_re2d4f827ef2413");
  _ra2a140f1aa896a = n((e) => {
    let t = ClassUtils._rc882f0c0aea57f(e, _i07ae484c56c170)?.getParser() ?? null;
    t != null && this._r3651220a1507f2("${friendlist.alert.title}", this.getFollowFriendErrorText(t.errorCode));
  }, "_ra2a140f1aa896a");
  _r3ff765f17f3159 = n((e) => {
    this._ra93b992ad04545();
  }, "_r3ff765f17f3159");
  _r97aecc27368072 = n((e) => {
    if (this._sessionData == null || this.var_194 == null) return;
    let r =
      this._sessionData.hasVip || this._sessionData.hasClub
        ? this.var_194.friendRequests
        : 0;
    r > this.var_194.limit && (this.var_194.limit = r);
  }, "_r97aecc27368072");
  _ra93b992ad04545() {
    if (this._r6199af4806bf6e || this._rb3976a96b1929b) return;
    let e = this._communication?.connection ?? null;
    e == null || !e.connected || (e.send(new _i5640350515a481()) && (this._r6199af4806bf6e = !0));
  }
  showAlertView(e, r = 0) {
    let t =
      e === 1
        ? "${friendlist.error.friendlistownlimit}"
        : e === 2
          ? "${friendlist.error.friendlistlimitofrequester}"
          : e === 3
            ? "${friendlist.error.friend_requests_disabled}"
            : e === 4
              ? "${friendlist.error.requestnotfound}"
              : e === 7
                ? "${friendlist.error.blocked_by_them}"
                : e === 8
                  ? "${friendlist.error.blocked_by_you}"
                  : `Received messenger error: msg: ${r}, errorCode: ${e}`;
    this._r3651220a1507f2("${friendlist.alert.title}", t);
  }
  getFollowFriendErrorText(e) {
    return e === 0
      ? "${friendlist.followerror.notfriend}"
      : e === 1
        ? "${friendlist.followerror.offline}"
        : e === 2
          ? "${friendlist.followerror.hotelview}"
          : e === 3
            ? "${friendlist.followerror.prevented}"
            : `Unknown follow friend error ${e}`;
  }
  _rb80d77cf35b167(e) {
    this.events.dispatchEvent?.(new M(e));
  }
  avatarImageReady(e) {
    if (!this.disposed)
      for (let r of this._categories._r3c1bb30d3e52f8().values()) {
        if (r.disposed || r.figure !== e) continue;
        r.face = r.isGroupFriend() ? this.face(r.figure) : this._rac9072fcec5669(r.figure);
        let t = r.view?.getChildByName(a.AVATAR_FACE_NAME);
        r.face != null &&
          t?.bitmap != null &&
          (t.bitmap.fillRect(t.bitmap.rect, 0),
          t.bitmap.copyPixels(r.face, r.face.rect, new E(0, 0), null, null, !0),
          t.invalidate());
      }
  }
  linkReceived(e) {
    let r = e.split("/");
    if (!(r.length < 2)) {
      if (r[1] === "open") {
        this.openFriendList();
        return;
      }
      if (r[1] === "openchat" && r.length >= 3 && this._messenger != null) {
        let t = r[2].split(":");
        if (t.length < 2) return;
        let i = Number(t[0]) === this.var_3798 ? Number(t[1]) : Number(t[0]);
        i > 0 && (this.openFriendList(), this._messenger.startConversation(i));
      }
    }
  }
}
