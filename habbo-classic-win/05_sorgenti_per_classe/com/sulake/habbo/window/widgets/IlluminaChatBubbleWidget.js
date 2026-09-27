// Extracted from HabboAirLauncher.deobf.js, line 149469.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/widgets/IlluminaChatBubbleWidget.as
// Obfuscated name: _i6ef7c23a0c037b

class a {
  constructor(e, r) {
    this.var_220 = e;
    this._windowManager = r;
    ((this._rf8f9fc25599fa4 = this._windowManager?.buildFromXML(
      this._windowManager.assets.getAssetByName("illumina_chat_bubble_xml")?.content,
    )),
      (this.createMessageWindow = this._rf8f9fc25599fa4?.findChildByName("message_container")),
      (this._rc3b953963eb869 = this.createMessageWindow?.getListItemByName("message_template")),
      this.createMessageWindow != null &&
        this._rc3b953963eb869 != null &&
        this.createMessageWindow.removeListItem(this._rc3b953963eb869),
      (this._rca9021bf8bd310 = this.createMessageWindow?.getListItemByName("habbicon_template")),
      this.createMessageWindow != null &&
        this._rca9021bf8bd310 != null &&
        this.createMessageWindow.removeListItem(this._rca9021bf8bd310),
      (this._r4dc31c01e0d19c = this._rf8f9fc25599fa4?.findChildByName("spaced_message_container")),
      (this._userName = this._rf8f9fc25599fa4?.findChildByName("user_name")));
    let t = this._rf8f9fc25599fa4?.findChildByName("user_avatar");
    ((this._r7627d55c763fff = t?.parent ?? null),
      (this._avatarWidget = t?.widget),
      (this.var_1635 = this._rf8f9fc25599fa4?.findChildByName("bubble_wrapper")),
      (this.class_2240 = this._rf8f9fc25599fa4?.findChildByName("post_time")?.widget),
      (this._rdbc09c3a280c28 = this._rf8f9fc25599fa4?.findChildByName("offline_placeholder")),
      this._rdbc09c3a280c28 != null && (this._rdbc09c3a280c28.height = 0),
      (this._r30d18039c39cb9 = this._rf8f9fc25599fa4?.findChildByName("arrow_point")),
      this._rf8f9fc25599fa4?.findChildByName("message_region")?.setParamFlag(N._re3bd61027cfd94, !1),
      this._rf8f9fc25599fa4 != null && (this._rf8f9fc25599fa4.procedure = this._r13ca249bd24f60),
      (this.userName = String(a._r5fa208c48dd0f2.value)),
      (this.figure = String(a._rea630a9f314ce4.value)),
      this._r9da032a685bb9b(a.getMessagesFromProperty(String(a._r1e27c82ddbefae.value))),
      this.var_220 != null &&
        ((this.var_220.rootWindow = this._rf8f9fc25599fa4),
        this.var_220.setParamFlag(N._r22d1ec858797ca)),
      this._rf8f9fc25599fa4 != null &&
        this.var_220 != null &&
        (this._rf8f9fc25599fa4.width = this.var_220.width));
  }
  static {
    n(this, "IlluminaChatBubbleWidget");
  }
  static TYPE = "illumina_chat_bubble";
  static _recc21ee805bdbb = `${a.TYPE}:flipped`;
  static _r494d970b22604c = `${a.TYPE}:user_name`;
  static _r92df576dfd6155 = `${a.TYPE}:figure`;
  static _rf050b1317fedfd = `${a.TYPE}:message`;
  static _r6dfca88e273109 = new ne(a._recc21ee805bdbb, !1, ne.BOOLEAN);
  static _r5fa208c48dd0f2 = new ne(a._r494d970b22604c, "", ne.STRING);
  static _rea630a9f314ce4 = new ne(a._r92df576dfd6155, "", ne.STRING);
  static _r1e27c82ddbefae = new ne(a._rf050b1317fedfd, "", ne.STRING);
  static const_677 = 80;
  static const_794 = 2;
  static _r1e14c45307bbe8 = -1;
  static HABBICON_DIRECTION_RIGHT = 1;
  static PENDING_MESSAGE_BLEND = 0.45;
  static RESIZING_OFFSETS = 10;
  _disposed = !1;
  _rf8f9fc25599fa4 = null;
  _rc3b953963eb869 = null;
  _rca9021bf8bd310 = null;
  _rb993e7589932e1 = !!a._r6dfca88e273109.value;
  _userName = null;
  _r7627d55c763fff = null;
  _avatarWidget = null;
  var_1635 = null;
  class_2240 = null;
  _rdbc09c3a280c28 = null;
  _r30d18039c39cb9 = null;
  var_1341 = !1;
  createMessageWindow = null;
  _r4dc31c01e0d19c = null;
  numMessages = [];
  _messages = [];
  _r9048b627f1e0dc = !1;
  var_5468 = 0;
  dispose() {
    this._disposed ||
      (this._rf8f9fc25599fa4?.dispose(),
      (this._rf8f9fc25599fa4 = null),
      Dr.removeEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773),
      this.var_220 != null &&
        ((this.var_220.rootWindow = null), (this.var_220 = null)),
      (this._windowManager = null),
      (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get iterator() {
    return Lt.INSTANCE;
  }
  get properties() {
    return this._disposed
      ? []
      : [
          a._r6dfca88e273109.withValue(this.flipped),
          a._r5fa208c48dd0f2.withValue(this.userName),
          a._rea630a9f314ce4.withValue(this.figure),
          a._r1e27c82ddbefae.withValue(this._r8db3690128a71a().join("	")),
        ];
  }
  set properties(e) {
    if (!this._disposed)
      for (let r of e)
        switch (r.key) {
          case a._recc21ee805bdbb:
            this.flipped = !!r.value;
            break;
          case a._r494d970b22604c:
            this.userName = String(r.value);
            break;
          case a._r92df576dfd6155:
            this.figure = String(r.value);
            break;
          case a._rf050b1317fedfd:
            this._r9da032a685bb9b(a.getMessagesFromProperty(String(r.value)));
            break;
        }
  }
  static getMessagesFromProperty(e) {
    let r = e.split("	");
    return r.length === 1 && r[0] === "" ? [] : r;
  }
  get flipped() {
    return this._rb993e7589932e1;
  }
  set flipped(e) {
    this._rb993e7589932e1 !== e && ((this._rb993e7589932e1 = e), this.refresh());
  }
  get userName() {
    let e = this._userName?.caption ?? "";
    return e.endsWith(":") ? e.slice(0, -1) : e;
  }
  set userName(e) {
    this._userName != null && (this._userName.caption = `${e}:`);
  }
  get userId() {
    return this._avatarWidget?.userId ?? 0;
  }
  set userId(e) {
    this._avatarWidget != null && (this._avatarWidget.userId = e);
  }
  get figure() {
    return this._avatarWidget?.figure ?? "";
  }
  set figure(e) {
    this._avatarWidget != null && (this._avatarWidget.figure = e);
  }
  get timeStamp() {
    return this.class_2240?.timeStamp ?? 0;
  }
  set timeStamp(e) {
    this.class_2240 != null && (this.class_2240.timeStamp = e);
  }
  set _r40bd3df15f6cc1(e) {
    this._rdbc09c3a280c28 != null && (this._rdbc09c3a280c28.height = e ? 0 : 16);
  }
  refresh() {
    if (
      this.var_1341 ||
      this._rf8f9fc25599fa4 == null ||
      this.var_1635 == null ||
      this._r7627d55c763fff == null ||
      this._avatarWidget == null ||
      this._r30d18039c39cb9 == null ||
      this.createMessageWindow == null ||
      this._r4dc31c01e0d19c == null
    )
      return;
    ((this.var_1341 = !0),
      (this._rf8f9fc25599fa4.limits.minWidth = this._rf8f9fc25599fa4.width),
      (this._rf8f9fc25599fa4.limits.maxWidth = this._rf8f9fc25599fa4.width),
      (this._rf8f9fc25599fa4.height = this.var_1635.bottom),
      (this.var_1635.width = this._rf8f9fc25599fa4.width - this._r7627d55c763fff.width));
    let e = Math.trunc(this.var_1635.width / a.RESIZING_OFFSETS);
    if (e !== this.var_5468) {
      for (let r = 0; r < this.createMessageWindow.numListItems; r += 1) {
        let t = this.createMessageWindow.getListItemAt(r),
          i = UnkClass_b619bf.as({ value: t, guard: _iad8cb2b2a86b68 });
        i != null
          ? (i.width = this.var_1635.width - 5)
          : ((t.width = a.const_677), (t.height = a.const_677));
      }
      this.var_5468 = e;
    }
    ((this.createMessageWindow.width = this.var_1635.width),
      (this._r4dc31c01e0d19c.width = this.var_1635.width),
      (this._avatarWidget.direction = this._rb993e7589932e1 ? UnkConstants_6c0c96._r14fa2ce68e577a : UnkConstants_6c0c96._r20a7fb2cb94dc0),
      this._rb993e7589932e1
        ? ((this._r7627d55c763fff.x = this._rf8f9fc25599fa4.width - this._r7627d55c763fff.width),
          (this._r30d18039c39cb9.zoomX = 1),
          (this._r30d18039c39cb9.x = this._r7627d55c763fff.x),
          (this.var_1635.x = 0))
        : ((this._r7627d55c763fff.x = 0),
          (this._r30d18039c39cb9.zoomX = -1),
          (this._r30d18039c39cb9.x = this._r7627d55c763fff.right - this._r30d18039c39cb9.width),
          (this.var_1635.x = this._r7627d55c763fff.right)),
      this._rf8f9fc25599fa4.limits.setEmpty(),
      this._r30d18039c39cb9.invalidate(),
      (this.var_1341 = !1));
  }
  get _r9b781d964bd067() {
    return this._messages.length;
  }
  getMessage(e) {
    return this._messages[e];
  }
  _r29e781e2ff2575(e, r) {
    let t = this._rcc264e7a27dd3b(r);
    for (; e >= this._r9b781d964bd067;)
      (this._messages.push(no.text("")),
        this.createMessageWindow.addListItem(
          this.var_1188(this._messages[this._messages.length - 1]),
        ),
        this.numMessages.push(0));
    let i = this.numMessages[e],
      s = this._messages[e];
    ((this._messages[e] = t),
      s.type !== t.type
        ? (this.createMessageWindow.removeListItemAt(e).dispose(),
          this.createMessageWindow.addListItemAt(this.var_1188(t), e))
        : this._rd07251d3c63e60(e, t),
      this._r563040ef315d90(e, i));
  }
  appendMessage(e, r = !1, t = 0) {
    let i = this._rcc264e7a27dd3b(e),
      s;
    (r
      ? ((s = 0),
        this._messages.splice(s, 0, i),
        this.createMessageWindow.addListItemAt(this.var_1188(i), 0),
        this.numMessages.splice(s, 0, t))
      : ((s = this._r9b781d964bd067),
        this._messages.push(i),
        this.createMessageWindow.addListItem(this.var_1188(i)),
        this.numMessages.push(t)),
      this._r563040ef315d90(s, t));
  }
  _r563040ef315d90(e, r) {
    (this._ree6633f67d8275(e, r), (this.numMessages[e] = r));
  }
  _rfd69ffb30ed13c(e) {
    (this._ree6633f67d8275(e, 0), (this.numMessages[e] = 0));
  }
  _r58a61702a247b7(e) {
    return this.numMessages[e] ?? 0;
  }
  _r13ca249bd24f60 = n((e, r) => {
    switch (e.type) {
      case y.const_755:
      case y.const_906:
        this.refresh();
        break;
      case u.CLICK:
        this.userId > 0 &&
          r.name === "user_name_region" &&
          this._windowManager?.communication?.connection?.send(new class_2134(this.userId));
        break;
    }
  }, "_r13ca249bd24f60");
  _r9da032a685bb9b(e) {
    (this._r1f18d85fd49421(), (this._messages.length = 0), (this.numMessages.length = 0));
    for (let r of e) this.appendMessage(no.text(r));
  }
  _r00b81d89490d48() {
    return this._r8db3690128a71a();
  }
  _r8db3690128a71a() {
    let e = [];
    for (let r = 0; r < this._r9b781d964bd067; r += 1) {
      let t = this.getMessage(r);
      e.push(t.type === no.name_2 ? t._r590202b22defda : "");
    }
    return e;
  }
  var_1188(e) {
    if (e.type === no.const_135) return this._re4b5e6f8b6f1b2(e);
    let r = this._rc3b953963eb869.clone();
    return ((r.caption = e._r590202b22defda), r);
  }
  _rcc264e7a27dd3b(e) {
    return e instanceof no ? e : no.text(e == null ? "" : String(e));
  }
  _re4b5e6f8b6f1b2(e) {
    let r = this._rca9021bf8bd310.clone();
    return (
      (r.visible = !0),
      (r.width = a.const_677),
      (r.height = a.const_677),
      this._ra8f39c3f0e7b55(r, e.habbiconId),
      r
    );
  }
  _rd07251d3c63e60(e, r) {
    let t = this.createMessageWindow.getListItemAt(e);
    r.type === no.const_135
      ? this._ra8f39c3f0e7b55(t, r.habbiconId)
      : (t.caption = r._r590202b22defda);
  }
  _ra8f39c3f0e7b55(e, r) {
    ((e.width = a.const_677), (e.height = a.const_677));
    let t = e.findChildByName("habbicon_bitmap");
    ((t.disposesBitmap = !0), (t.bitmap = this._r348805445e4abb(r)));
  }
  _r348805445e4abb(e) {
    let r = new A(a.const_677, a.const_677, !0, 0),
      t = Dr.getPreviewBitmap(e, !1);
    if (t == null)
      return (
        this._r9048b627f1e0dc ||
          (Dr.addEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773), (this._r9048b627f1e0dc = !0)),
        r
      );
    let i = new Pe();
    return (
      this.shouldMirrorHabbicon(e)
        ? (i.scale(-a.const_794, a.const_794), i.translate(t.width * a.const_794, 0))
        : i.scale(a.const_794, a.const_794),
      r.draw(t, i, null, null, null, !1),
      r
    );
  }
  shouldMirrorHabbicon(e) {
    let r = this._rb993e7589932e1 ? a._r1e14c45307bbe8 : a.HABBICON_DIRECTION_RIGHT,
      t = Dr.getDirection(e);
    return t !== 0 && r !== t;
  }
  _r10a570e6c32773 = n(() => {
    if (
      (Dr.removeEventListener(Dr.ASSETS_LOADED, this._r10a570e6c32773),
      (this._r9048b627f1e0dc = !1),
      !this._disposed)
    )
      for (let e = 0; e < this._r9b781d964bd067; e++) {
        let r = this._messages[e];
        r.type === no.const_135 &&
          this._ra8f39c3f0e7b55(this.createMessageWindow.getListItemAt(e), r.habbiconId);
      }
  }, "_r10a570e6c32773");
  _ree6633f67d8275(e, r) {
    let t = this.createMessageWindow.getListItemAt(e),
      i = UnkClass_b619bf.as({ value: t, guard: _iad8cb2b2a86b68 }),
      s = r > 0 ? a.PENDING_MESSAGE_BLEND : 1;
    i != null
      ? (i.textColor = r > 0 ? 9079434 : 0)
      : ((t.blend = s), (t.findChildByName("habbicon_bitmap").blend = s));
  }
  _r1f18d85fd49421() {
    for (; this.createMessageWindow.numListItems > 0;) this.createMessageWindow.removeListItemAt(0).dispose();
  }
}
