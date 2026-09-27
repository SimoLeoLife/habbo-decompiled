// Extracted from HabboAirLauncher.deobf.js, line 248760.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/RoomToolCtrl.as
// Obfuscated name: _ie3e4bc2c9e3cf0

class a {
  constructor(e, r) {
    this._main = e;
    this._flatId = r;
  }
  static {
    n(this, "RoomToolCtrl");
  }
  _data = null;
  _frame = null;
  var_122 = null;
  _disposed = !1;
  _msgSelect = null;
  var_966 = null;
  _includeInfo = !0;
  var_1733 = null;
  var_2584 = null;
  var_2552 = null;
  var_4123 = null;
  get disposed() {
    return this._disposed;
  }
  show() {
    this._frame = this._main.getXmlWindow("roomtool_frame");
    let r = this._frame?.findChildByName("list_cont")?.getListItemByName("room_cont");
    ((this.var_4123 = r?.findChildByName("room_data")),
      this.var_4123 && r?.removeChild(this.var_4123),
      this._main.messageHandler._rb133fda49c12e1(this),
      this._main.connection?.send(new UnkMessageComposer_1args_c7a0c3(this._flatId)));
  }
  getType() {
    return WindowTracker.TYPE_ROOMINFO;
  }
  getId() {
    return `${this._flatId}`;
  }
  getFrame() {
    return this._frame;
  }
  dispose() {
    this._disposed ||
      ((this._disposed = !0),
      this._main.messageHandler.removeRoomEnterListener(this),
      this._frame?.destroy(),
      (this._frame = null),
      this._data?.dispose?.(),
      (this._data = null),
      (this.var_122 = null),
      (this._msgSelect = null),
      (this.var_966 = null),
      (this.var_1733 = null),
      (this.var_2584 = null),
      (this.var_2552 = null));
  }
  onRoomChange() {
    (this.setSendButtonState("send_caution_but"), this.setSendButtonState("send_message_but"));
  }
  onRoomInfo(e) {
    this._disposed ||
      e.flatId !== this._flatId ||
      ((this._data = e),
      this.populate(),
      this._main.messageHandler._r5dd229e3da10fa(this),
      this._frame != null && (this._frame.visible = !0),
      this._main.messageHandler._r8e75f3f565f5b4(this));
  }
  static getLowestPoint(e) {
    let r = 0;
    for (let t = 0; t < e.numChildren; t++) {
      let i = e.getChildAt(t);
      i?.visible && (r = Math.max(r, i.y + i.height));
    }
    return r;
  }
  static moveChildrenToColumn(e, r, t) {
    for (let i = 0; i < e.numChildren; i++) {
      let s = e.getChildAt(i);
      s != null && s.visible && s.height > 0 && ((s.y = r), (r += s.height + t));
    }
  }
  setSendButtonState(e) {
    let r = this._data != null && this._data.flatId === this._main._ra384cb7661fc37,
      t = this._frame?.findChildByName(e);
    r && this._main.initMsg?._r53e14d68d5b882 ? t?.enable() : t?.disable();
  }
  populate() {
    ((this.var_122 = this._frame?.findChildByName("list_cont")),
      this._frame?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose),
      (this.var_966 = this._frame?.findChildByName("message_input")),
      this.var_966 && (this.var_966.procedure = this._r31bde35de2b894),
      (this._msgSelect = this._frame?.findChildByName("msgTemplatesSelect")),
      this._r6cafd34fd664d4(this._msgSelect),
      this._msgSelect && (this._msgSelect.procedure = this._r13452c04680e57),
      (this.var_1733 = this._frame?.findChildByName("kick_check")),
      (this.var_2584 = this._frame?.findChildByName("lock_check")),
      (this.var_2552 = this._frame?.findChildByName("changename_check")),
      this.refreshRoomData(this._data?.room ?? null, "room_cont"),
      this.setTxt("owner_name_txt", this._data?.ownerName ?? ""),
      this.setTxt("owner_in_room_txt", this._data?._r743819c51e73a0 ? "Yes" : "No"),
      this.setTxt("user_count_txt", `${this._data?.userCount ?? 0}`),
      this._frame?.findChildByName("enter_room_but")?.addEventListener(u.CLICK, this._re65b78e27573ac),
      this._frame?.findChildByName("chatlog_but")?.addEventListener(u.CLICK, this.onChatlog),
      this._frame?.findChildByName("edit_in_hk_but")?.addEventListener(u.CLICK, this._rf73229db21f2d5),
      this._frame?.findChildByName("send_caution_but")?.addEventListener(u.CLICK, this._rd45d86a7ef432e),
      this._frame?.findChildByName("send_message_but")?.addEventListener(u.CLICK, this._r2415a9781694a0),
      this._main.initMsg?._r4b53b923dcf15f ||
        this._frame?.findChildByName("chatlog_but")?.disable(),
      this._main.initMsg?._r95837a68af6ad9 || this.var_1733?.disable());
    let e = this._frame?.findChildByName("owner_name_txt");
    (e != null && (e.procedure = this.onOwnerName), this.onRoomChange());
  }
  _r0e2d4841c70d44(e, r) {
    (e != null && r != null ? e.removeListItem(r) : null)?.dispose();
  }
  refreshRoomData(e, r) {
    let t = this.var_122?.getListItemByName(r);
    if (t == null || e == null) return;
    let i = t.findChildByName("room_data");
    if (
      (i == null && this.var_4123 != null && (i = t.addChild(this.var_4123.clone())),
      !e.exists)
    ) {
      (this._r0e2d4841c70d44(this.var_122, t),
        this._r0e2d4841c70d44(
          this.var_122,
          this.var_122?.getListItemByName("event_spacing") ?? null,
        ));
      return;
    }
    if (i == null) return;
    let s = i.findChildByName("name");
    s != null && ((s.caption = e.name), (s.height = s.textHeight + 5));
    let o = i.findChildByName("desc");
    o != null && ((o.caption = e.desc), (o.height = o.textHeight + 5));
    let d = i.findChildByName("tags_cont"),
      c = d?.findChildByName("tags_txt");
    (d != null &&
      c != null &&
      ((c.caption = this.getTagsAsString(e.tags ?? [])),
      (c.height = c.textHeight + 5),
      (d.height = c.height),
      (e.tags?.length ?? 0) < 1 && i.removeChild(d)),
      a.moveChildrenToColumn(i, s?.y ?? 0, 0),
      (i.height = a.getLowestPoint(i)),
      (t.height = i.height + 2 * i.y));
  }
  getTagsAsString(e) {
    return e.join(", ");
  }
  setTxt(e, r) {
    let t = this._frame?.findChildByName(e);
    t != null && (t.text = r);
  }
  onOwnerName = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      this._main._r2512b8a3ecad84.show(
        new UserInfoFrameCtrl(this._main, this._data.ownerId),
        this._frame,
        !1,
        !1,
        !0,
      );
  }, "onOwnerName");
  _re65b78e27573ac = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      this._main.goToRoom(this._data.flatId);
  }, "_re65b78e27573ac");
  onChatlog = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      this._main._r2512b8a3ecad84.show(
        new N1(
          new class_2523(0, this._data.flatId),
          this._main,
          WindowTracker.const_1136,
          this._data.flatId,
        ),
        this._frame,
        !1,
        !1,
        !0,
      );
  }, "onChatlog");
  _rf73229db21f2d5 = n((e) => {
    e.type === u.CLICK &&
      this._data != null &&
      this._main.openHkPage("roomadmin.url", `${this._data.flatId}`);
  }, "_rf73229db21f2d5");
  _rd45d86a7ef432e = n((e) => {
    e.type === u.CLICK && this.act(!0);
  }, "_rd45d86a7ef432e");
  _r2415a9781694a0 = n((e) => {
    e.type === u.CLICK && this.act(!1);
  }, "_r2415a9781694a0");
  act(e) {
    if (this._includeInfo || (this.var_966?.text ?? "") === "") {
      this._main.windowManager.alert(
        "Alert",
        "You must input a message to the user",
        0,
        this._r9d8a83a2f57c04,
      );
      return;
    }
    let r = this._r780fe5ef29f0d5(e, this.var_1733?.isSelected ?? !1);
    (this._main.connection?.send(new class_3109(r, this.var_966?.text ?? "", "")),
      this._data != null &&
        ((this.var_2584?.isSelected ?? !1) ||
          (this.var_2552?.isSelected ?? !1) ||
          (this.var_1733?.isSelected ?? !1)) &&
        this._main.connection?.send(
          new class_2438(
            this._data.flatId,
            this.var_2584?.isSelected ?? !1,
            this.var_2552?.isSelected ?? !1,
            this.var_1733?.isSelected ?? !1,
          ),
        ),
      this.dispose());
  }
  _r780fe5ef29f0d5(e, r) {
    return r
      ? e
        ? class_3109.ACTION_KICK
        : class_3109.const_757
      : e
        ? class_3109.const_1162
        : class_3109.const_854;
  }
  _r31bde35de2b894 = n((e) => {
    e.type !== y.const_962 ||
      !this._includeInfo ||
      this.var_966 == null ||
      ((this.var_966.text = ""), (this._includeInfo = !1));
  }, "_r31bde35de2b894");
  _r6cafd34fd664d4(e) {
    e?.populate(this._main.initMsg?._r9e781968c32635 ?? []);
  }
  _r13452c04680e57 = n((e) => {
    if (e.type !== y.const_238) return;
    let r =
      this._main.initMsg?._r9e781968c32635?.[this._msgSelect?.selection ?? -1];
    r != null &&
      this.var_966 != null &&
      ((this._includeInfo = !1), (this.var_966.text = r));
  }, "_r13452c04680e57");
  onClose = n((e) => {
    e.type === u.CLICK && this.dispose();
  }, "onClose");
  _r9d8a83a2f57c04 = n((e) => {
    e.dispose();
  }, "_r9d8a83a2f57c04");
}
