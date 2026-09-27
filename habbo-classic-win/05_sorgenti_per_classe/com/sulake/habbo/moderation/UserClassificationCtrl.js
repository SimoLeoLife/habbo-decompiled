// Extracted from HabboAirLauncher.deobf.js, line 249285.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/UserClassificationCtrl.as
// Obfuscated name: _i1aac1079950aa3

class a {
  constructor(e, r) {
    this._main = e;
    this.var_3989 = r;
  }
  static {
    n(this, "UserClassificationCtrl");
  }
  static CLASSIFICATION_ROW_POOL = [];
  static CLASSIFICATION_ROW_POOL_MAX_SIZE = 200;
  _frame = null;
  var_122 = null;
  var_5851 = [];
  _disposed = !1;
  _rdd77714b42f9d3 = null;
  var_994 = null;
  var_2599 = [];
  get disposed() {
    return this._disposed;
  }
  show() {
    ((this.var_994 = new UnkEventDispatcherWrapperSubclass_05394e(300, 1)),
      this.var_994.addEventListener(DeBouncer.addEventListener, this.onResizeTimer),
      this._main.messageHandler._rd692b381641435(this),
      (this._frame = this._main.getXmlWindow("userclassification_frame")),
      (this.var_122 = this._frame?.findChildByName("userclassification_list")),
      (this._rdd77714b42f9d3 = this.var_122?.getListItemAt(0)),
      this.var_122?.removeListItems(),
      this._frame != null && (this._frame.procedure = this._rd401b81ca16652),
      this._frame?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose));
  }
  _r5fd41ee35bc422(e, r) {
    e !== this.var_3989 ||
      this._disposed ||
      ((this.var_5851 = r),
      this._frame != null && (this._frame.caption = ""),
      this.populate(),
      this.onResizeTimer(),
      this._frame != null && (this._frame.visible = !0),
      this._main.messageHandler._r9d57cbb6b580fd(this));
  }
  getType() {
    return WindowTracker.const_1277;
  }
  getId() {
    return `${this.var_3989}`;
  }
  getFrame() {
    return this._frame;
  }
  dispose() {
    if (!this._disposed) {
      ((this._disposed = !0),
        this.var_122 != null &&
          (this.var_122.removeListItems(),
          this.var_122.dispose(),
          (this.var_122 = null)),
        this._frame?.destroy(),
        (this._frame = null),
        this.var_994?.stop(),
        this.var_994?.removeEventListener(DeBouncer.addEventListener, this.onResizeTimer),
        (this.var_994 = null));
      for (let e of this.var_2599) this.storeClassificationRowWindow(e);
      (this._rdd77714b42f9d3?.dispose(), (this._rdd77714b42f9d3 = null), (this.var_2599 = []));
    }
  }
  populate() {
    let e = !0;
    for (let r of this.var_5851) (this.populateRoomRow(r, e), (e = !e));
  }
  populateRoomRow(e, r) {
    let t = this.getRoomRowWindow(),
      i = r ? 4288861930 : 4294967295;
    t.color = i;
    let s = t.findChildByName("user_name_txt");
    s != null && ((s.caption = e.username), (s.color = i));
    let o = t.findChildByName("visit_room_txt");
    o != null && (o.color = i);
    let d = t.findChildByName("user_classification_txt");
    (d != null && (d.text = e._r35f8c7df03c28f),
      d != null &&
        o != null &&
        !this._main.isModerator &&
        ((d.visible = !1), (o.visible = !1)),
      this.addClassificationRowToList(t, this.var_122),
      this._main.isModerator &&
        (s != null && new UnkClass_38eebe(this._frame, this._main, s, e.userId),
        o != null &&
          (o.procedure = (c, f) => {
            (this._main.connection?.send(new UnkMessageComposer_1args_31de52(e.username)),
              f?.removeEventListener?.(u.CLICK, null));
          })));
  }
  addClassificationRowToList(e, r) {
    (r?.addListItem(e), this.var_2599.push(e));
  }
  getRoomRowWindow() {
    return a.CLASSIFICATION_ROW_POOL.length > 0 ? a.CLASSIFICATION_ROW_POOL.pop() : this._rdd77714b42f9d3?.clone();
  }
  storeClassificationRowWindow(e) {
    if (a.CLASSIFICATION_ROW_POOL.length < a.CLASSIFICATION_ROW_POOL_MAX_SIZE && this._rdd77714b42f9d3 != null) {
      let r = e.findChildByName("user_name_txt"),
        t = e.findChildByName("visit_room_txt");
      (r != null && (r.procedure = null),
        t != null && (t.procedure = null),
        (e.width = this._rdd77714b42f9d3.width),
        (e.height = this._rdd77714b42f9d3.height),
        a.CLASSIFICATION_ROW_POOL.push(e));
      return;
    }
    e.dispose();
  }
  onClose = n((e) => {
    e.type === u.CLICK && this.dispose();
  }, "onClose");
  _rd401b81ca16652 = n((e, r) => {
    e.type !== y.const_755 ||
      r !== this._frame ||
      this.var_994?.running ||
      (this.var_994?.reset(), this.var_994?.start());
  }, "_rd401b81ca16652");
  onResizeTimer = n(() => {
    let r = this.var_122?.parent?.getChildByName("scroller") ?? null,
      t = (this.var_122?.visibleRegion.height ?? 0) > (this.var_122?.height ?? 0),
      i = 17;
    (r?.visible ?? !1)
      ? !t && this.var_122 != null && ((r.visible = !1), (this.var_122.width += i))
      : t &&
        this.var_122 != null &&
        r != null &&
        ((r.visible = !0), (this.var_122.width -= i));
  }, "onResizeTimer");
}
