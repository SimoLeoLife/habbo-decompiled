// Estratto da HabboAirLauncher.deobf.js, riga 253257.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/inroom/RoomEventInfoCtrl.as
// Nome offuscato: _i4f2b80bf9a9f32

class a {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "RoomEventInfoCtrl");
  }
  static TOOLBAR_EXTENSION_ID = "room_event_info";
  _window = null;
  _expanded = !0;
  get disposed() {
    return this._navigator == null;
  }
  set expanded(e) {
    this._expanded = e;
  }
  dispose() {
    (this._navigator?.toolbar?.extensionView?._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID),
      (this._navigator = null),
      this._window?.dispose(),
      (this._window = null));
  }
  refresh() {
    if (
      this._navigator?.toolbar == null ||
      this._navigator.toolbar.extensionView == null ||
      !this.enabled
    )
      return;
    let e = this._navigator.data._rb6c91108c7cf2d != null,
      r = this._navigator.data._r9eda1e1e8e08ba || this._navigator.data._r428cd24285caa7,
      t = this._navigator.data._ra9e7830c65d383,
      i = this._navigator.roomSessionManager.getSession(t);
    if (i == null) return;
    i._rea9739215487be === RoomControllerLevelEnum.ROOM_CONTROLLER && (r = !0);
    let s = this._navigator.data._r9eda1e1e8e08ba;
    if (!e && !s && !r) {
      this._navigator.toolbar.extensionView._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID);
      return;
    }
    if ((this.prepareWindow(), this._window == null)) return;
    let o = this._expanded && e && s;
    this._window.findChildByName("event_bg_owner").visible = o;
    let d = this._expanded && e && !s;
    this._window.findChildByName("event_bg_visitor").visible = d;
    let c = !this._expanded || !e;
    this._window.findChildByName("event_bg_contracted").visible = c;
    let f = this._expanded && e && r;
    ((this._window.findChildByName("modify_link_region").visible = f),
      (this._window.findChildByName("extend_event_region").visible = f && this.canExtend()));
    let l = !e && r;
    ((this._window.findChildByName("get_event").visible = l),
      (this._window.findChildByName("create_link").visible = !1));
    let b = this._expanded && e && !r;
    this._window.findChildByName("in_progress_txt").visible = b;
    let _ = this._expanded && e;
    ((this._window.findChildByName("desc_txt").visible = _),
      (this._window.findChildByName("header_txt").visible = e),
      (this._window.visible = (e && (o || d || c || f || b || _)) || l),
      e &&
        ((this._window.findChildByName("header_txt").caption =
          this._navigator.data._rb6c91108c7cf2d.eventName),
        (this._window.findChildByName("desc_txt").caption =
          this._navigator.data._rb6c91108c7cf2d._rd6505b2bdb8ef3)),
      this._navigator.toolbar.extensionView._ra96f07968c4ed0(
        a.TOOLBAR_EXTENSION_ID,
        this._window,
        -1,
        ["next_quest_timer", "quest_tracker"],
      ),
      (this._window.x = 0),
      (this._window.y = 0),
      (this._window.height =
        this._expanded && e
          ? this._window.findChildByName("event_bg_visitor").height
          : this._window.findChildByName("event_bg_contracted").height));
  }
  close() {
    this._window != null &&
      this._window.visible &&
      ((this._window.visible = !1),
      this._navigator?.toolbar?.extensionView?._rb18768cf275a26(a.TOOLBAR_EXTENSION_ID));
  }
  get enabled() {
    let e =
      this._navigator?.getInteger("new.identity", 0) === 0 ||
      !this._navigator?.getBoolean("new.identity.hide.ui");
    return !!this._navigator?.getBoolean("eventinfo.enabled") && e;
  }
  canExtend() {
    let e = this._navigator?.data._rb6c91108c7cf2d ?? null;
    if (e == null) return !1;
    if (!this._navigator?.getBoolean("roomad.limit_total_time")) return !0;
    let r = Date.now(),
      t = this._navigator.getInteger("room_ad.duration.minutes", 120),
      i = this._navigator.getInteger("room_ad.maximum_total_time.minutes", 10080);
    return e._r0b68eafd63a7f7.getTime() + t * 60 * 1e3 < r + i * 60 * 1e3;
  }
  onGetEventClick = n((e) => {
    this._navigator != null &&
      (this._navigator.data._rb6c91108c7cf2d != null
        ? ((this._expanded = !this._expanded), this.refresh())
        : e.type === u.CLICK && this._navigator._r95e9ef312eb388());
  }, "onGetEventClick");
  prepareWindow() {
    if (!(this._window != null || this._navigator == null)) {
      if (
        ((this._window = this._navigator.getXmlWindow("iro_event_info")),
        this._window == null)
      )
        throw new Error("Failed to build iro_event_info");
      ((this._window.findChildByName("modify_link_region").procedure = this._rc050ebd17043b7),
        (this._window.findChildByName("extend_event_region").procedure = this.onExtend),
        this._window.findChildByName("bg_region").addEventListener(u.CLICK, this.onGetEventClick));
    }
  }
  _rc050ebd17043b7 = n((e, r) => {
    e.type === u.CLICK && this._navigator?.SimpleAlertView?.show();
  }, "_rc050ebd17043b7");
  onExtend = n((e, r) => {
    if (e.type !== u.CLICK || this._navigator?.data._rb6c91108c7cf2d == null) return;
    let t = this._navigator.data._rb6c91108c7cf2d;
    this._navigator._rcd7c3122876c17(
      t.eventName,
      t._rd6505b2bdb8ef3,
      t._r0b68eafd63a7f7,
      t.categoryId,
    );
  }, "onExtend");
}
