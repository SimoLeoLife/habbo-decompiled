// Extracted from HabboAirLauncher.deobf.js, line 248466.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/ChatlogCtrl.as
// Obfuscated name: _i6e1e7baccbc442

class a {
  constructor(e, r, t, i, s = null, o = null, d = null, c = !1) {
    this._msg = e;
    this._main = r;
    this._type = t;
    this._id = i;
    this.var_3372 = s;
    this._embedded = c;
    ((this._frame = o), (this.var_122 = d));
  }
  static {
    n(this, "ChatlogCtrl");
  }
  static CHAT_LINE_POOL = [];
  static CHAT_LINE_POOL_MAX_SIZE = 1e3;
  static CHAT_REPORTED_USER_COLOUR = 4293973667;
  static CHAT_REPORTEE_COLOUR = 4288921072;
  _frame = null;
  var_122 = null;
  _rooms = [];
  _disposed = !1;
  var_1440 = null;
  var_2207 = null;
  _r21c407d4b5c6fa = new Map();
  var_994 = null;
  chatterName = new B();
  _contentLines = [];
  _headers = [];
  get disposed() {
    return this._disposed;
  }
  show() {
    let e = this._main.getXmlWindow("evidence_frame");
    if (e == null) return;
    e.visible = !1;
    let r = e.findChildByName("evidence_list");
    ((this.var_2207 = r?.getListItemAt(0)),
      (this.var_1440 = r?.getListItemAt(1)),
      r?.removeListItems(),
      (this.var_994 = new UnkEventDispatcherWrapperSubclass_05394e(1e3, 1)),
      this.var_994.addEventListener(DeBouncer.addEventListener, this.onResizeTimer),
      this._embedded
        ? e.dispose()
        : ((this._frame = e),
          (this._frame.procedure = this._rd401b81ca16652),
          (this._frame.visible = !0),
          this._frame.findChildByTag("close") &&
            (this._frame.findChildByTag("close").procedure = this.onClose),
          (this.var_122 = r)),
      this._main.connection?.send(this._msg),
      this._main.messageHandler._r9b93271554b3b6(this));
  }
  hide() {
    this.dispose();
  }
  onChatlog(e, r, t, i, s) {
    if (!(r !== this._type || t !== this._id || this._disposed)) {
      for (let o of this._contentLines) this.recycleContentLine(o);
      for (let o of this._headers) o.dispose();
      ((this._contentLines = []),
        (this._headers = []),
        this._main.messageHandler._r97d3e93394e7ad(this),
        (this._rooms = i),
        (this._r21c407d4b5c6fa = new Map()));
      for (let [o, d] of s) this._r21c407d4b5c6fa.set(Number(o), Number(d));
      (this.populate(),
        this.onResizeTimer(),
        !this._embedded &&
          this._frame != null &&
          ((this._frame.caption = e), (this._frame.visible = !0)));
    }
  }
  getType() {
    return this._type;
  }
  getId() {
    return `${this._id}`;
  }
  _rebd7c11478f60d(e) {
    this._id = e;
  }
  getFrame() {
    return this._frame;
  }
  dispose() {
    if (!this._disposed) {
      if (
        ((this._disposed = !0),
        (this._msg = null),
        (this.var_3372 = null),
        this.var_122 != null &&
          (this.var_122.removeListItems(),
          this.var_122.dispose(),
          (this.var_122 = null)),
        this._frame?.destroy?.(),
        (this._frame = null),
        this.var_994?.stop(),
        this.var_994?.removeEventListener(DeBouncer.addEventListener, this.onResizeTimer),
        (this.var_994 = null),
        !this._embedded)
      ) {
        for (let e of this._contentLines) this.recycleContentLine(e);
        for (let e of this._headers) e.dispose();
      }
      ((this._contentLines = []),
        (this._headers = []),
        this.var_1440?.dispose(),
        (this.var_1440 = null),
        this.var_2207?.dispose(),
        (this.var_2207 = null));
    }
  }
  populate() {
    if (this.var_122 != null) {
      ((this.var_122.autoArrangeItems = !1), this.var_122.removeListItems());
      for (let e of this._rooms) this.populateEvidence(e);
      this.var_122.autoArrangeItems = !0;
    }
  }
  populateEvidence(e) {
    let r = this.createHeaderLine(),
      t = r.findChildByName("text"),
      i = r.findChildByName("btnHeaderAction"),
      s = r.findChildByName("btnHeaderAction2");
    switch ((s != null && (s.visible = !1), e._r0feaa9f3779ee1)) {
      case class_4250.const_708:
        e.roomId > 0 &&
          (i != null && (i.caption = "Room tool"),
          t != null && (t.caption = e.roomName == null ? `Room #${e.roomId}` : `Room: ${e.roomName}`),
          s != null &&
            ((s.visible = !0), (s.caption = "View room"), new OpenRoomInSpectatorMode(this._main, s, e.roomId)),
          i != null &&
            new OpenRoomTool(this._embedded ? null : this._frame, this._main, i, e.roomId));
        break;
      case class_4250.const_886:
        t && (t.caption = "IM session");
        break;
      case class_4250.const_374:
        (t && (t.caption = "Forum thread"),
          s != null &&
            ((s.visible = !0),
            (s.caption = "Open thread"),
            new OpenDiscussionThread(this._main, s, e.groupId, e.threadId)),
          i != null &&
            ((i.caption = "Delete"), new HideDiscussionThread(this._main, this, i, e.groupId, e.threadId)));
        break;
      case class_4250.const_263:
        (t && (t.caption = "Forum message"),
          s != null &&
            ((s.visible = !0),
            (s.caption = "Open Message"),
            new OpenDiscussionMessage(this._main, s, e.groupId, e.threadId, e.messageIndex)),
          i != null &&
            ((i.caption = "Delete"),
            new UnkClass_0b67bb(this._main, this, i, e.groupId, e.threadId, e.messageId)));
        break;
      case class_4250.TYPE_SELFIE:
        (t && (t.caption = "Selfie report"),
          s != null && ((s.visible = !0), (s.caption = "View selfie"), new OpenExternalLink(s, e.url)),
          i != null &&
            ((i.visible = !0),
            (i.caption = "Room tool"),
            new OpenRoomTool(this._embedded ? null : this._frame, this._main, i, e.roomId)));
        break;
      case class_4250.const_835:
        if ((t && (t.caption = "Photo report"), s != null)) {
          ((s.visible = !0), (s.caption = "Moderate photo"));
          let c = this._main.getProperty("stories.admin.tool.base.url");
          (ua.isEmpty(c) && (c = "https://theallseeingeye.sulake.com/habbo-stories-admin/#/photos/"),
            (c += e.extraDataId),
            new OpenExternalLink(s, c));
        }
        i != null &&
          ((i.visible = !0),
          (i.caption = "Room tool"),
          new OpenRoomTool(this._embedded ? null : this._frame, this._main, i, e.roomId));
        break;
    }
    this._r4c165e6562670e(r);
    let o = !0,
      d = -1;
    for (let c = 0; c < e.chatlog.length; c++) {
      let f = e.chatlog[c];
      (this.populateContentLine(f, o), (o = !o), f._ra90832a990036c && d === -1 && (d = c));
    }
    if (
      d > -1 &&
      this.var_122 != null &&
      ((this.var_122.autoArrangeItems = !0), this.var_122._r5733287651adec > 0)
    ) {
      let c = this.var_122.getListItemAt(d);
      c != null && (this.var_122.var_46 = c.y / this.var_122._r5733287651adec);
    }
  }
  addContentLineToList(e) {
    (this.var_122?.addListItem(e), this._contentLines.push(e));
  }
  _r4c165e6562670e(e) {
    (this.var_122?.addListItem(e), this._headers.push(e));
  }
  createContentLine() {
    return a.CHAT_LINE_POOL.length > 0 ? a.CHAT_LINE_POOL.pop() : this.var_1440?.clone();
  }
  recycleContentLine(e) {
    if (a.CHAT_LINE_POOL.length < a.CHAT_LINE_POOL_MAX_SIZE && this.var_1440 != null) {
      (e.findChildByName("chatter_txt")?.removeEventListener(u.CLICK, this.var_3619),
        (e.width = this.var_1440.width),
        (e.height = this.var_1440.height - 10),
        a.CHAT_LINE_POOL.push(e));
      return;
    }
    e.dispose();
  }
  createHeaderLine() {
    return this.var_2207?.clone();
  }
  populateContentLine(e, r) {
    let t = this.createContentLine(),
      i = t.findChildByName("time_txt"),
      s = t.findChildByName("chatter_txt"),
      o = t.findChildByName("msg_txt");
    i != null && (i.caption = e.timeStamp);
    let d = this._r21c407d4b5c6fa.get(e.var_4467);
    if (
      ((t.color =
        d != null ? (d === 0 ? a.CHAT_REPORTED_USER_COLOUR : a.CHAT_REPORTEE_COLOUR) : r ? 4291030266 : 4294967295),
      e.var_4467 > 0
        ? (s != null &&
            ((s.text = e._r969169d6ea97bd),
            (s.underline = !0),
            s.addEventListener(u.CLICK, this.var_3619)),
          this.chatterName.getValue(e._r969169d6ea97bd) == null &&
            this.chatterName.add(e._r969169d6ea97bd, e.var_4467))
        : e.var_4467 === 0
          ? s != null && ((s.text = "Bot / pet"), (s.underline = !1))
          : s != null && ((s.text = "-"), (s.underline = !1)),
      s != null && (s.textColor = t.color),
      i != null && (i.color = t.color),
      o != null)
    ) {
      ((o.textColor = t.color), (o.text = e.msg));
      let c = Math.max(i?.height ?? 0, o.textHeight + 5);
      ((o.height = c), s != null && (s.height = c), i != null && (i.height = c), (t.height = c));
    }
    this.addContentLineToList(t);
  }
  var_3619 = n((e) => {
    let r = e.target?.caption ?? "",
      t = this.chatterName.getValue(r);
    t != null &&
      this._main._r2512b8a3ecad84.show(
        new UserInfoFrameCtrl(this._main, t, this.var_3372),
        this._frame,
        !1,
        !1,
        !0,
      );
  }, "var_3619");
  onClose = n((e) => {
    e.type === u.CLICK && this.dispose();
  }, "onClose");
  _rd401b81ca16652 = n((e, r) => {
    e.type !== y.const_755 ||
      r !== this._frame ||
      (this.var_994?.reset(), this.var_994?.start());
  }, "_rd401b81ca16652");
  onResizeTimer = n(() => {
    (this.refreshListDims(), this.refreshScrollBarVisibility());
  }, "onResizeTimer");
  refreshListDims() {
    if (this.var_122 != null) {
      this.var_122.autoArrangeItems = !1;
      for (let e = 0; e < this.var_122.numListItems; e++) {
        let r = this.var_122.getListItemAt(e);
        if (r == null || r.name !== "chatline") continue;
        let t = r.findChildByName("msg_txt");
        t != null && ((t.width = r.width - t.x), (t.height = t.textHeight + 5), (r.height = t.height));
      }
      this.var_122.autoArrangeItems = !0;
    }
  }
  refreshScrollBarVisibility() {
    let r = this.var_122?.parent?.getChildByName("scroller") ?? null,
      t = (this.var_122?.visibleRegion.height ?? 0) > (this.var_122?.height ?? 0),
      i = 22;
    return (r?.visible ?? !1)
      ? !t && this.var_122 != null
        ? ((r.visible = !1), (this.var_122.width += i), !0)
        : !1
      : t && this.var_122 != null && r != null
        ? ((r.visible = !0), (this.var_122.width -= i), !0)
        : !1;
  }
}
