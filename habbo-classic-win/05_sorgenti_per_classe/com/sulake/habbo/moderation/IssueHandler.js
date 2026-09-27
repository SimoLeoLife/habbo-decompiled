// Estratto da HabboAirLauncher.deobf.js, riga 249978.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/IssueHandler.as
// Nome offuscato: _i0db7641922cd55

class a {
  constructor(e, r, t, i, s, o, d) {
    this._moderationManager = e;
    this.var_156 = r;
    this._cfhCategories = t;
    this._rb5492f91f9202c = i;
    this._r664196a53167df = s;
    this._lastWindowWidth = o;
    this.var_1397 = d;
  }
  static {
    n(this, "IssueHandler");
  }
  static USELESS_REPORTS_TOPIC_ID = 27;
  static AUTO_TOPIC_ID = 28;
  static const_789 = 1;
  static AUTO_TRIGGERED_CATEGORY_ID = 3;
  _rafca564117549f = null;
  _window = null;
  var_3014 = [];
  _topicDropdown = null;
  _r6dd9016264f83f = null;
  _r015768abe7c144 = null;
  _disposed = !1;
  _rc255dd9deb2e12 = 0;
  _r93903df8d2e25b = null;
  var_1469 = null;
  var_1705 = null;
  _rca814bbe611024 = 0;
  _rd1d3df158cfc7f = _ia411d8d8194a3a();
  _r0a31b8ffd66110 = null;
  _r8be4ea9ece8884 = null;
  getType() {
    return WindowTracker.TYPE_ISSUEHANDLER;
  }
  getId() {
    return `${this.var_156.id}`;
  }
  getFrame() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  get callerUserInfo() {
    return this._r6dd9016264f83f;
  }
  get reportedUserInfo() {
    return this._r015768abe7c144;
  }
  show() {
    if (
      this._window != null ||
      ((this._window = this._moderationManager.getXmlWindow("issue_handler")),
      this._window == null)
    )
      return;
    let e = this._window.findChildByName("issues_item_list");
    ((this._r0a31b8ffd66110 = e?.getListItemAt(0)), e?.removeListItems());
    let r = this._window.findChildByName("msg_item_list");
    ((this._r8be4ea9ece8884 = r?.getListItemAt(0)),
      r?.removeListItems(),
      this._window.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose));
    let t = this._window.findChildByName("issue_cont");
    if (
      (t != null &&
        (t.addEventListener(y.const_475, this._r075f17d27e6358),
        t.addEventListener(y.const_755, this._r075f17d27e6358),
        this._moderationManager.registerUpdateReceiver(this, 1e3)),
      (this._rd1d3df158cfc7f = _ia411d8d8194a3a()),
      this.setProc("close_useless", this._rec44f67a1970c6),
      this.setProc("close_sanction", this._rcd9b97c991cc6a),
      this.setProc("close_resolved", this._r48188527f2f57a),
      this.setProc("release", this._r4a7bc04c224896),
      this._window.findChildByName("move_to_player_support")?.disable(),
      this._moderationManager._r74ed78993f8dd6._r19cc9935650149(this.var_156.id, -1),
      this.initializeTopicDropdown(),
      (this._rafca564117549f = this.var_156.var_2416()),
      this._rafca564117549f == null)
    )
      return;
    ((this._r6dd9016264f83f = new Km(
      this._window,
      this._moderationManager,
      this._rafca564117549f,
      this,
    )),
      (this._r015768abe7c144 = new Km(
        this._window,
        this._moderationManager,
        this._rafca564117549f,
        this,
      )),
      this._r6dd9016264f83f.load(
        this._window.findChildByName("caller_user_info"),
        this._rafca564117549f._r594210f2d887d0,
      ),
      this._rafca564117549f.categoryId === a.AUTO_TRIGGERED_CATEGORY_ID &&
        this._rafca564117549f.reportedCategoryId === a.AUTO_TOPIC_ID &&
        this._topicDropdown != null &&
        ((this._topicDropdown.selection = this._rc255dd9deb2e12),
        this._moderationManager._r74ed78993f8dd6._r19cc9935650149(
          this.var_156.id,
          a.const_789,
        )));
    let i = this._window.findChildByName("reported_user_info");
    if (this.var_156.reportedUserId > 0)
      this._r015768abe7c144.load(i, this.var_156.reportedUserId);
    else {
      let o = this._window.findChildByName("issue_cont"),
        d = this._window.findChildByName("reported_user_info_caption");
      (d != null && o?.removeListItem(d), i != null && o?.removeListItem(i));
    }
    (this._window.findChildByName("handle_next_checkbox")?.select(),
      (this.var_1469 = this._window.findChildByName("chat_cont")),
      (this.var_1705 = this.var_1469?.findChildByName("evidence_list")),
      (this._r93903df8d2e25b = new N1(
        new _i2f07f95651d352(this._rafca564117549f.issueId),
        this._moderationManager,
        WindowTracker.const_1236,
        this._rafca564117549f.issueId,
        this._rafca564117549f,
        this.var_1469,
        this.var_1705,
        !0,
      )),
      this._r93903df8d2e25b.show(),
      this.updateIssueList(),
      this.updateMessages());
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._window?.dispose(),
      (this._window = null),
      this._r6dd9016264f83f?.dispose(),
      (this._r6dd9016264f83f = null),
      this._r015768abe7c144?.dispose(),
      (this._r015768abe7c144 = null),
      this._r93903df8d2e25b?.dispose(),
      (this._r93903df8d2e25b = null),
      this._r0a31b8ffd66110?.dispose(),
      (this._r0a31b8ffd66110 = null),
      this._r8be4ea9ece8884?.dispose(),
      (this._r8be4ea9ece8884 = null),
      this._moderationManager.removeUpdateReceiver(this));
  }
  update(e) {
    let r = _ia411d8d8194a3a();
    this._r49a8517384def2() && r - this._rd1d3df158cfc7f > 5e3 && this.sendWindowPreferences();
  }
  _radb8e99ab8ee5c() {
    (this.updateIssueList(), this.updateMessages());
  }
  _rf37d42d9e6d54a(e, r) {
    if (this._window == null || e !== this.var_156.reportedUserId) return;
    let t = this._window.findChildByName("sanction_label");
    t != null && (t.caption = r);
  }
  trackAction(e) {
    this._moderationManager.disposed ||
      (this._rca814bbe611024++, this._moderationManager.trackGoogle(`issueHandler_${e}`));
  }
  sendWindowPreferences() {
    this._window != null &&
      ((this._rb5492f91f9202c = this._window.x),
      (this._r664196a53167df = this._window.y),
      (this._lastWindowWidth = this._window.width),
      (this.var_1397 = this._window.height),
      this._moderationManager._r74ed78993f8dd6._r89ebf2a59f5994(
        this._rb5492f91f9202c,
        this._r664196a53167df,
        this._lastWindowWidth,
        this.var_1397,
      ),
      this._moderationManager.connection?.send(
        new _i7274f8467d765d(this._rb5492f91f9202c, this._r664196a53167df, this._lastWindowWidth, this.var_1397),
      ));
  }
  _r49a8517384def2() {
    return this._window == null
      ? !1
      : this._rb5492f91f9202c !== this._window.x ||
          this._r664196a53167df !== this._window.y ||
          this._lastWindowWidth !== this._window.width ||
          this.var_1397 !== this._window.height;
  }
  updateIssueList() {
    if (this._window == null) return;
    let e = this._window.findChildByName("issues_item_list");
    if (e == null || this._r0a31b8ffd66110 == null) return;
    let r = this.var_156.issues,
      t = e.numListItems,
      i = r.length;
    if (t < i) {
      let f = this._r0a31b8ffd66110.clone();
      e.addListItem(f);
      for (let l = 1; l < i - t; l++) ((f = f.clone()), e.addListItem(f));
    } else if (t > i) for (let f = 0; f < t - i; f++) e.removeListItemAt(0)?.dispose();
    let o = this.var_156.var_2416()?.issueId ?? 0,
      d = _ia411d8d8194a3a(),
      c = 0;
    for (let f of r) {
      let l = e.getListItemAt(c);
      if (l == null) continue;
      ((l.background = c % 2 === 0),
        (l.id = f.issueId),
        l.removeEventListener(u.CLICK, this._ra82a6bad1b068f),
        l.addEventListener(u.CLICK, this._ra82a6bad1b068f),
        this.setCaption(l.findChildByName("reporter"), f.reporterUserName ?? ""),
        this.setCaption(l.findChildByName("type"), IssueCategoryNames.getSourceName(f.categoryId)),
        this.setCaption(l.findChildByName("category"), IssueCategoryNames.getCategoryName(f.reportedCategoryId) ?? ""),
        this.setCaption(l.findChildByName("time_open"), f.getOpenTime(d)));
      let b = f.issueId === o && i > 1 ? "Volter Bold" : "Volter",
        _ = l.findChildByName("category");
      (_ != null && (_.fontFace = b), c++);
    }
  }
  updateMessages() {
    if (this._window == null) return;
    let e = this._window.findChildByName("msg_item_list");
    if (e == null || this._r8be4ea9ece8884 == null) return;
    let r = this.var_156.issues,
      t = e.numListItems,
      i = r.length;
    if (t < i) {
      let o = this._r8be4ea9ece8884.clone();
      ((o.selectable = !0), (o.editable = !1), e.addListItem(o));
      for (let d = 1; d < i - t; d++) ((o = o.clone()), e.addListItem(o));
    } else if (t > i) for (let o = 0; o < t - i; o++) e.removeListItemAt(0)?.dispose();
    let s = 0;
    for (let o of r) {
      let d = e.getListItemAt(s);
      (d != null &&
        ((d.width = e.width),
        (d.background = s % 2 === 0),
        (d.caption = `${o.reporterUserName}: ${o.message}`),
        (d.height = d.textHeight + 10)),
        s++);
    }
  }
  initializeTopicDropdown() {
    if (
      ((this._topicDropdown = this._window?.findChildByName("cfh_topics")),
      this._topicDropdown == null)
    )
      return;
    let e = this.var_156.var_2416()?.reportedCategoryId ?? 0;
    if (e === a.USELESS_REPORTS_TOPIC_ID) {
      this._topicDropdown.disable();
      return;
    }
    let r = [];
    this.var_3014 = [];
    let t = -1,
      i = 0;
    for (let s of this._cfhCategories)
      for (let o of s._rddb8305acca679 ?? [])
        ((r[i] = `\${help.cfh.topic.${o.id}}`),
          (this.var_3014[i] = o.id),
          o.id === a.const_789 && (this._rc255dd9deb2e12 = i),
          o.id === e && (t = i),
          i++);
    (this._topicDropdown.populate(r),
      t >= 0 && (this._topicDropdown.selection = t),
      this._topicDropdown.addEventListener(y.const_238, this.refreshSanctionDataForSelectedTopic));
  }
  refreshSanctionDataForSelectedTopic = n(() => {
    let e = this._topicDropdown?.selection ?? -1,
      r = this.var_3014[e] ?? -1;
    this._moderationManager._r74ed78993f8dd6._r19cc9935650149(this.var_156.id, r);
  }, "refreshSanctionDataForSelectedTopic");
  setProc(e, r) {
    this._window?.findChildByName(e)?.addEventListener(u.CLICK, r);
  }
  setCaption(e, r) {
    e != null && (e.caption = r);
  }
  onClose = n(() => {
    (this._moderationManager._r74ed78993f8dd6._r5604e032b83111(this.var_156.id),
      this.trackAction("closeWindow"),
      this.dispose());
  }, "onClose");
  _rec44f67a1970c6 = n(() => {
    (this.trackAction("closeUseless"),
      this._moderationManager.trackGoogle("actionCountUseless", this._rca814bbe611024),
      this._moderationManager._r74ed78993f8dd6._r94863113082c44(this.var_156.id, kI.RESOLUTION_USELESS),
      this.checkAutoHandling(),
      this.dispose());
  }, "_rec44f67a1970c6");
  _r48188527f2f57a = n(() => {
    (this.trackAction("closeResolved"),
      this._moderationManager.trackGoogle("actionCountResolved", this._rca814bbe611024),
      this._moderationManager._r74ed78993f8dd6._r94863113082c44(this.var_156.id, kI.RESOLUTION_RESOLVED),
      this.checkAutoHandling(),
      this.dispose());
  }, "_r48188527f2f57a");
  _rcd9b97c991cc6a = n(() => {
    (this.trackAction("closeSanction"),
      this._moderationManager.trackGoogle("actionCountSanction", this._rca814bbe611024));
    let e = this._topicDropdown?.selection ?? -1,
      r = e >= 0 ? this.var_3014[e] : -1;
    if (r <= 0 && (this.var_156.var_2416()?.reportedCategoryId ?? 0) === a.AUTO_TOPIC_ID) {
      this._moderationManager.windowManager.alert(
        "Topic missing",
        "You need to select the topic first.",
        0,
        null,
      );
      return;
    }
    (this._moderationManager._r74ed78993f8dd6._rf57fb23edbb75c(this.var_156.id, r),
      this.checkAutoHandling(),
      this.dispose());
  }, "_rcd9b97c991cc6a");
  _r4a7bc04c224896 = n(() => {
    (this.trackAction("release"),
      this._moderationManager._r74ed78993f8dd6._r0a23c60f69b52c(this.var_156.id),
      this.checkAutoHandling(),
      this.dispose());
  }, "_r4a7bc04c224896");
  _ra82a6bad1b068f = n((e) => {
    if (e.window != null)
      for (let r of this.var_156.issues) {
        if (r.issueId !== e.window.id) continue;
        this._rafca564117549f = r;
        let t = r._r594210f2d887d0;
        t !== 0 &&
          (this._r6dd9016264f83f?.dispose(),
          (this._r6dd9016264f83f = new Km(this._window, this._moderationManager, r, this)),
          this._r6dd9016264f83f.load(this._window?.findChildByName("caller_user_info"), t),
          this._moderationManager.connection?.send(new _i2f07f95651d352(r.issueId)),
          this._r93903df8d2e25b?._rebd7c11478f60d(r.issueId),
          this._moderationManager.messageHandler._r9b93271554b3b6(this._r93903df8d2e25b));
        break;
      }
  }, "_ra82a6bad1b068f");
  _r075f17d27e6358 = n((e) => {
    let r = e.window;
    if (r == null) return;
    let t = r,
      i = t?.getListItemByName("issues_item_list"),
      s = t?.getListItemByName("msg_item_list");
    if (t == null || i == null || s == null) return;
    let o = (t.height - t.visibleRegion.height + i.height + s.height) * 0.5;
    ((t.autoArrangeItems = !1), (i.height = o), (s.height = o), (t.autoArrangeItems = !0));
  }, "_r075f17d27e6358");
  checkAutoHandling() {
    this._window?.findChildByName("handle_next_checkbox")?.isSelected &&
      this._moderationManager._r74ed78993f8dd6.autoPick("issue handler pick next");
  }
}
