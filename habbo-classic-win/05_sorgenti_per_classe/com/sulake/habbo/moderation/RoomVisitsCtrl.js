// Extracted from HabboAirLauncher.deobf.js, line 247889.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/RoomVisitsCtrl.as
// Obfuscated name: _i3246fba6366324

class a {
  constructor(e, r) {
    this._main = e;
    this._userId = r;
  }
  static {
    n(this, "RoomVisitsCtrl");
  }
  static ROOM_ROW_POOL = [];
  static ROOM_ROW_POOL_MAX_SIZE = 200;
  _frame = null;
  var_122 = null;
  _rooms = [];
  _disposed = !1;
  _rdd77714b42f9d3 = null;
  var_994 = null;
  var_2835 = [];
  get disposed() {
    return this._disposed;
  }
  show() {
    ((this.var_994 = new UnkEventDispatcherWrapperSubclass_05394e(300, 1)),
      this.var_994.addEventListener(DeBouncer.addEventListener, this.onResizeTimer),
      this._main.messageHandler._r1286a18737519d(this),
      this._main.connection?.send(new UnkMessageComposer_1args_1d2021(this._userId)),
      (this._frame = this._main.getXmlWindow("roomvisits_frame")),
      (this.var_122 = this._frame?.findChildByName("visits_list")),
      (this._rdd77714b42f9d3 = this.var_122?.getListItemAt(0)),
      this.var_122?.removeListItems(),
      this._frame != null && (this._frame.procedure = this._rd401b81ca16652),
      this._frame?.findChildByTag("close")?.addEventListener(u.CLICK, this.onClose));
  }
  onRoomVisits(e) {
    e.userId !== this._userId ||
      this._disposed ||
      ((this._rooms = e.rooms ?? []),
      this._frame != null && (this._frame.caption = `Room visits: ${e.userName}`),
      this.populate(),
      this.onResizeTimer(),
      this._frame != null && (this._frame.visible = !0),
      this._main.messageHandler._r8fff74dd4932f5(this));
  }
  getType() {
    return WindowTracker.const_1277;
  }
  getId() {
    return `${this._userId}`;
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
      for (let e of this.var_2835) this.storeRoomRowWindow(e);
      (this._rdd77714b42f9d3?.dispose(), (this._rdd77714b42f9d3 = null), (this.var_2835 = []));
    }
  }
  static getFormattedTime(e, r) {
    return `${a.padToTwoDigits(e)}:${a.padToTwoDigits(r)}`;
  }
  static padToTwoDigits(e) {
    return e < 10 ? `0${e}` : `${e}`;
  }
  populate() {
    let e = !0;
    for (let r of this._rooms) (this.populateRoomRow(r, e), (e = !e));
  }
  populateRoomRow(e, r) {
    let t = this.getRoomRowWindow(),
      i = r ? 4288861930 : 4294967295;
    t.color = i;
    let s = t.findChildByName("room_name_txt");
    s != null &&
      ((s.caption = e.roomName), (s.color = i), new OpenRoomTool(this._frame, this._main, s, e.roomId));
    let o = t.findChildByName("time_txt");
    o != null && (o.text = a.getFormattedTime(e._r7b6fba2edbfb73, e._r36fa33ea0d8140));
    let d = t.findChildByName("view_room_txt");
    (d != null && ((d.color = i), new OpenRoomInSpectatorMode(this._main, d, e.roomId)),
      this._r534a04ecca13e1(t, this.var_122));
  }
  _r534a04ecca13e1(e, r) {
    (r?.addListItem(e), this.var_2835.push(e));
  }
  getRoomRowWindow() {
    return a.ROOM_ROW_POOL.length > 0 ? a.ROOM_ROW_POOL.pop() : this._rdd77714b42f9d3?.clone();
  }
  storeRoomRowWindow(e) {
    if (a.ROOM_ROW_POOL.length < a.ROOM_ROW_POOL_MAX_SIZE && this._rdd77714b42f9d3 != null) {
      let r = e.findChildByName("room_name_txt"),
        t = e.findChildByName("view_room_txt");
      (r != null && (r.procedure = null),
        t != null && (t.procedure = null),
        (e.width = this._rdd77714b42f9d3.width),
        (e.height = this._rdd77714b42f9d3.height),
        a.ROOM_ROW_POOL.push(e));
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
