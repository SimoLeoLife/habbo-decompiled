// Extracted from HabboAirLauncher.deobf.js, line 205299.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/GroupForumView.as
// Obfuscated name: _iac4c9b18dc8954

class a {
  static {
    n(this, "GroupForumView");
  }
  static const_325 = 100;
  var_63;
  _r0d370badc9b52c = null;
  var_3746 = null;
  _rab196865ddf131 = null;
  _window = null;
  var_406 = null;
  var_3987 = null;
  _rf92597e59b4b5e = null;
  onClickButton = null;
  var_4134 = null;
  _r4f76fe66f37d1f = null;
  _r6e1a4e2394ec2d = null;
  maxChars = null;
  _r0beb7a80281f4e = null;
  _rcb37b5fee37407 = null;
  var_4029 = null;
  _r95a89204800661 = null;
  var_95 = null;
  var_877 = null;
  var_1653 = null;
  var_770 = 1;
  _numOfPages = 1;
  _r19d2b607a73002;
  constructor(e) {
    ((this.var_63 = e), (this._r19d2b607a73002 = ThreadsListData.PAGE_SIZE));
  }
  get controller() {
    return this.var_63;
  }
  dispose() {
    (this.var_63 != null && this.var_63._r1f20899f9a3601(),
      this._window != null &&
        (this._window.removeEventListener(u.CLICK, this.class_2147),
        this._window.dispose(),
        (this._window = null),
        (this.var_63 = null)));
  }
  openForumsList(e) {
    (this.resetWindow(),
      (this._r95a89204800661 = e),
      (this.var_95 = null),
      (this.var_877 = null),
      (this.var_1653 = null),
      (this._numOfPages = this.calculateNumOfPagesAvailable(this._r95a89204800661.totalAmount)),
      (this.var_770 = Math.ceil(this._r95a89204800661.startIndex / ThreadsListData.PAGE_SIZE)),
      (this._r0d370badc9b52c = new ForumsListView(this, this.var_406, this._r95a89204800661.forums)),
      this._r0d370badc9b52c.update(),
      (this._rcb37b5fee37407.caption = this.var_63.localizationManager.getLocalization(
        `groupforum.view.forums_list.${this._r95a89204800661.listCode}`,
      )));
    let r = this._window.findChildByName("top_part"),
      t = r.findChildByName("group_icon");
    t != null && (t.visible = !1);
    let i = r.findChildByName("header_icon");
    i != null &&
      ((i.visible = !0), (i.assetUri = `forum_forum_list${this._r95a89204800661.listCode}`));
    let s = r.findChildByName("top_header_text");
    s != null &&
      (s.text = this.var_63.localizationManager.getLocalization(
        `groupforum.view.forums_header.${this._r95a89204800661.listCode}`,
      ));
    let o = r.findChildByName("top_text");
    o != null &&
      (o.text = this.var_63.localizationManager.getLocalization(
        `groupforum.view.forums_description.${this._r95a89204800661.listCode}`,
      ));
    let d = r.findChildByName("top_click_area");
    (d?.removeEventListener(u.CLICK, this._r01a671f0451144), d?.disable(), this.initCommonControls());
    let c = this._window.findChildByName("status");
    c != null &&
      (c.text = this.var_63.localizationManager.getLocalization(
        "groupforum.view.forums_list.status",
      ));
  }
  get isForumsListOpened() {
    return this._r0d370badc9b52c != null;
  }
  openThreadList(e, r, t) {
    (this.resetWindow(),
      (this._r95a89204800661 = e),
      (this.var_95 = r),
      (this.var_877 = t),
      (this.var_1653 = null),
      (this._numOfPages = this.calculateNumOfPagesAvailable(this.var_877._r36ae06f9111e67)),
      (this.var_770 = Math.ceil(this.var_877.startIndex / ThreadsListData.PAGE_SIZE)),
      (this.var_3746 = new U2e(
        this,
        this.var_406,
        this.var_95,
        this.var_877,
      )),
      this.var_3746.update(),
      (this._rcb37b5fee37407.caption = this.var_63.localizationManager.getLocalization(
        "groupforum.view.all_threads",
      )),
      this.var_95._r519699a8b75c3b
        ? (this.maxChars?.enable(), this.setStatusTextError("post_thread", null))
        : (this.maxChars?.disable(),
          this.setStatusTextError("post_thread", this.var_95._r46300cc379aff2)));
    let i = a.initTopAreaForForum(this._window, this.var_95);
    (i.removeEventListener(u.CLICK, this._r01a671f0451144),
      i.addEventListener(u.CLICK, this._r01a671f0451144),
      i.enable(),
      this.initCommonControls());
  }
  updateThread(e) {
    this.var_3746?.updateElement(e);
  }
  _r8eedd479407ddd(e) {
    this._rab196865ddf131?.updateElement(e);
  }
  openMessagesList(e, r, t, i) {
    (this.resetWindow(),
      (this._r95a89204800661 = e),
      (this.var_95 = r),
      (this.var_877 = t),
      (this.var_1653 = i));
    let s = i.threadId,
      o = this.var_877._r336f760a46abc6.getValue(s) ?? null;
    if (o == null) return;
    ((this._numOfPages = this.calculateNumOfPagesAvailable(i.totalMessages)),
      (this.var_770 = Math.ceil(i.startIndex / ThreadsListData.PAGE_SIZE)),
      (this._rcb37b5fee37407.caption = o.header),
      (this._rab196865ddf131 = new Pz(this, this.var_406, this.var_95, o, i)),
      this._rab196865ddf131.update(),
      this.var_63._ra54f1e2b05fa1a() > 0 &&
        this.var_63._r50b23eada08be9() === s &&
        (this._rab196865ddf131.scrollToSpecificElement(this.var_63._ra54f1e2b05fa1a(), !0),
        this.var_63._rb2963b5de6fa30()),
      this.var_95.canReport
        ? this.var_95.canPostMessage || !o._r7732642648cab6
          ? (this.maxChars?.enable(), this.setStatusTextError("post_message", null))
          : (this.maxChars?.disable(),
            this.setStatusTextError("post_in_locked", this.var_95._r7cd8bc84bcede6))
        : (this.maxChars?.disable(),
          this.setStatusTextError("post_message", this.var_95._r1c04a5ff81ef2f)));
    let d = a.initTopAreaForForum(this._window, this.var_95);
    (d.removeEventListener(u.CLICK, this._r01a671f0451144),
      d.addEventListener(u.CLICK, this._r01a671f0451144),
      d.enable(),
      this.initCommonControls());
  }
  getAsDaysHoursMinutes(e) {
    return ra.getFriendlyTime(this.var_63.localizationManager, e, ".ago", 1);
  }
  openComposeMessageView(e, r = null) {
    this.var_95 == null ||
      this._window == null ||
      (this.var_63._r109046ec98702f != null
        ? this.var_63._r109046ec98702f.focus(this.var_95, e, r)
        : (this.var_63._r109046ec98702f = new Sz(
            this,
            this._window.x + this._window.width,
            this._window.y,
            this.var_95,
            e,
            r,
          )));
  }
  _rd3652d953c8fd0() {
    this.var_95 == null ||
      this._window == null ||
      (this.var_63._r78622efc9c872a != null
        ? this.var_63._r78622efc9c872a.focus(this.var_95)
        : (this.var_63._r78622efc9c872a = new H2e(
            this,
            this._window.x + this._window.width,
            this._window.y,
            this.var_95,
          )));
  }
  updateUnreadForumsCount(e) {
    this.var_4029 != null &&
      (e > 0
        ? (this.var_4029.htmlText = this.var_63.localizationManager.getLocalizationWithParams(
            "groupforum.view.shortcuts.my.unread",
            "",
            "unread_count",
            String(e),
          ))
        : (this.var_4029.htmlText = this.var_63.localizationManager.getLocalization(
            "groupforum.view.shortcuts.my",
            "",
          )));
  }
  static initTopAreaForForum(e, r) {
    let t = e.findChildByName("top_part"),
      i = t.findChildByName("group_icon");
    if (i != null) {
      i.visible = !0;
      let c = i.widget;
      c != null && ((c.badgeId = r.icon), (c.groupId = r.groupId), (c.type = Wo.GROUP));
    }
    let s = t.findChildByName("header_icon");
    s != null && (s.visible = !1);
    let o = t.findChildByName("top_header_text");
    o != null && (o.text = r.name);
    let d = t.findChildByName("top_text");
    return (d != null && (d.text = r.description), t.findChildByName("top_click_area"));
  }
  initCommonControls() {
    let e = this._window.findChildByName("settings_button");
    this.var_95 != null && this.var_95._re649b774fef7e6
      ? (e?.removeEventListener(u.CLICK, this._r7f1d4b5847a096),
        e?.addEventListener(u.CLICK, this._r7f1d4b5847a096),
        e != null && (e.visible = !0))
      : e != null && (e.visible = !1);
    let r = this._r6e1a4e2394ec2d?.findChildByName("back_button_label");
    this.var_3746 != null
      ? (this._r6e1a4e2394ec2d != null && (this._r6e1a4e2394ec2d.visible = !0),
        r != null &&
          (r.text = this.var_63.localizationManager.getLocalization("groupforum.view.mark_read")))
      : this._rab196865ddf131 != null
        ? (this._r6e1a4e2394ec2d != null && (this._r6e1a4e2394ec2d.visible = !0),
          r != null &&
            (r.text = this.var_63.localizationManager.getLocalization("groupforum.view.back")))
        : this._r0d370badc9b52c != null
          ? (this._r6e1a4e2394ec2d != null && (this._r6e1a4e2394ec2d.visible = !0),
            r != null &&
              (r.text = this.var_63.localizationManager.getLocalization("groupforum.view.mark_read")))
          : this._r6e1a4e2394ec2d != null && (this._r6e1a4e2394ec2d.visible = !1);
    let t = this.maxChars?.findChildByName("post_button_label");
    (this.var_3746 != null
      ? (this.maxChars != null && (this.maxChars.visible = !0),
        t != null &&
          (t.text = this.var_63.localizationManager.getLocalization("groupforum.view.start_thread")))
      : this._rab196865ddf131 != null
        ? (this.maxChars != null && (this.maxChars.visible = !0),
          t != null &&
            (t.text = this.var_63.localizationManager.getLocalization("groupforum.view.reply")))
        : this.maxChars != null && (this.maxChars.visible = !1),
      this._r4f76fe66f37d1f != null &&
        (this._r4f76fe66f37d1f.caption = `${this.var_770 + 1} / ${this._numOfPages}`),
      this._window.scaler?.enable(),
      this._window.scaler != null && (this._window.scaler.visible = !0),
      a.enable(this.onClickButton, this.var_770 > 0),
      a.enable(this.var_3987, this.var_770 > 0),
      a.enable(this._rf92597e59b4b5e, this.var_770 < this._numOfPages - 1),
      a.enable(this.var_4134, this.var_770 < this._numOfPages - 1),
      this.updateUnreadForumsCount(this.var_63._r2599717433efcc));
  }
  resetWindow() {
    if (this._window != null) {
      (this.var_406.destroyListItems(),
        (this._r0d370badc9b52c = null),
        (this.var_3746 = null),
        (this._rab196865ddf131 = null));
      return;
    }
    ((this._window = this.var_63.windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("groupforum_main_view_xml")?.content,
    )),
      (this.var_406 = this._window.findChildByName("scrollable_message_list")),
      this.var_406._rce8584c5e61b53.addEventListener(y.const_755, this._re104383a7bee20, 100),
      this._window.center(),
      (this._window.y = a.const_325),
      (this._r4f76fe66f37d1f = this._window.findChildByName("page_info")),
      (this.var_3987 = this._window.findChildByName("show_previous")),
      this.var_3987?.addEventListener(u.CLICK, this.class_2147),
      (this._rf92597e59b4b5e = this._window.findChildByName("show_next")),
      this._rf92597e59b4b5e?.addEventListener(u.CLICK, this.class_2147),
      (this.var_4134 = this._window.findChildByName("show_last")),
      this.var_4134?.addEventListener(u.CLICK, this.class_2147),
      (this.onClickButton = this._window.findChildByName("show_first")),
      this.onClickButton?.addEventListener(u.CLICK, this.class_2147),
      (this._r6e1a4e2394ec2d = this._window.findChildByName("back_button")),
      this._r6e1a4e2394ec2d?.addEventListener(u.CLICK, this.class_2147),
      (this.maxChars = this._window.findChildByName("post_button")),
      this.maxChars?.addEventListener(u.CLICK, this.class_2147),
      (this._r0beb7a80281f4e = this._window.findChildByTag("close")),
      this._r0beb7a80281f4e?.addEventListener(u.CLICK, this.class_2147),
      (this._rcb37b5fee37407 = this._window.findChildByName("list_header")));
    let e = this._window.findChildByName("shortcuts");
    this.var_4029 = e?.getListItemByName("my");
  }
  static enable(e, r) {
    e != null && (r ? e.enable() : e.disable());
  }
  setStatusTextError(e, r) {
    let t = this._window.findChildByName("status");
    if (t == null) return;
    if (r == null || r.length === 0) {
      t.caption = "";
      return;
    }
    let i = this.var_63.localizationManager.getLocalization(`groupforum.view.error.operation_${e}`);
    t.text = this.var_63.localizationManager.getLocalizationWithParams(
      `groupforum.view.error.${r}`,
      "",
      "operation",
      i,
    );
  }
  calculateNumOfPagesAvailable(e) {
    return Math.ceil(e / this._r19d2b607a73002);
  }
  _rc102b4156ca82e(e) {
    let r = e * this._r19d2b607a73002;
    (this._r0d370badc9b52c != null && this._r95a89204800661 != null
      ? this.var_63.openForumsList(this._r95a89204800661.listCode, r)
      : this.var_3746 != null && this.var_95 != null
        ? this.var_63._rf4a83de1ff14f8(this.var_95.groupId, r)
        : this._rab196865ddf131 != null &&
          this.var_95 != null &&
          this.var_1653 != null &&
          this.var_63._r169616a7b5d3ec(
            this.var_95.groupId,
            this.var_1653.threadId,
            r,
          ),
      (this.var_770 = e));
  }
  _re8290c2dff16ca() {
    let e = this.var_770 - 1;
    e >= 0 && this._rc102b4156ca82e(e);
  }
  _r400831ae215e48() {
    let e = this.var_770 + 1;
    e <= this._numOfPages && this._rc102b4156ca82e(e);
  }
  _r0c4d6a5ffa4805() {
    this.var_770 !== 0 && this._rc102b4156ca82e(0);
  }
  _rbfd87c5f1e6766() {
    this.var_770 < this._numOfPages && this._rc102b4156ca82e(this._numOfPages - 1);
  }
  _re104383a7bee20 = n(() => {
    (this._r0d370badc9b52c?.updateItemWidths(),
      this.var_3746?.updateItemWidths(),
      this._rab196865ddf131?.updateItemSizes());
  }, "_re104383a7bee20");
  _r7f1d4b5847a096 = n(() => {
    this._rd3652d953c8fd0();
  }, "_r7f1d4b5847a096");
  _r01a671f0451144 = n(() => {
    this.var_95 != null &&
      this.var_63.context._r6b6c989018eb05(`group/${this.var_95.groupId}`);
  }, "_r01a671f0451144");
  class_2147 = n((e) => {
    switch (e.target?.name) {
      case "back_button":
        this._rab196865ddf131 != null && this.var_95 != null && this.var_877 != null
          ? this.var_63._rf4a83de1ff14f8(
              this.var_95.groupId,
              this.var_877.startIndex,
            )
          : this.var_3746 != null
            ? (this.var_63._r16a5244344407b(!0),
              this._r95a89204800661 != null
                ? this.var_63.openForumsList(
                    this._r95a89204800661.listCode,
                    this._r95a89204800661.startIndex,
                  )
                : this.dispose())
            : this._r0d370badc9b52c != null && (this.var_63._r199efd2c1fbc47(), this.dispose());
        break;
      case "show_previous":
        this._re8290c2dff16ca();
        break;
      case "show_next":
        this._r400831ae215e48();
        break;
      case "show_last":
        this._rbfd87c5f1e6766();
        break;
      case "show_first":
        this._r0c4d6a5ffa4805();
        break;
      case "header_button_close":
        (this._window != null && (this._window.visible = !1), this.dispose());
        break;
      case "post_button":
        this.openComposeMessageView(
          this.var_1653 != null
            ? (this.var_877?._r336f760a46abc6.getValue(this.var_1653.threadId) ?? null)
            : null,
        );
        break;
    }
  }, "class_2147");
}
