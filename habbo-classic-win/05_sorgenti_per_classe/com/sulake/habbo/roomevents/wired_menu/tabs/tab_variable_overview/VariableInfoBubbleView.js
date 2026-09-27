// Estratto da HabboAirLauncher.deobf.js, riga 356055.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_menu/tabs/tab_variable_overview/VariableInfoBubbleView.as
// Nome offuscato: _i50e092fba08e38

class a {
  constructor(e) {
    this._roomEvents = e;
    let r = this._roomEvents.assets.getAssetByName("variable_value_info_bubble_xml");
    ((this._window = this._roomEvents.windowManager.buildFromXML(r?.content, 0)),
      (this._window.ignoreMouseEvents = !0));
  }
  static {
    n(this, "VariableInfoBubbleView");
  }
  static const_378 = 18;
  static const_100 = 3;
  static MAX_VERTICAL_LEAD_RATIO = 0.05;
  static DESKTOP_WINDOW_LAYER = 1;
  static STATE_IDLE = 0;
  static STATE_AWAIT_TARGET_RECT = 1;
  static STATE_ACTIVE = 1;
  _disposed = !1;
  _state = a.STATE_IDLE;
  var_344 = 0;
  var_163 = 0;
  var_5708 = !1;
  _window;
  var_3030 = 0;
  var_2209 = new _i5ebf87fd288769(a.const_378);
  get disposed() {
    return this._disposed;
  }
  get objectId() {
    return this.var_344;
  }
  get category() {
    return this.var_163;
  }
  _rfa3b19870e1121(e) {
    this._state !== a.STATE_IDLE && (this.valueText.text = e);
  }
  setActive(e, r, t, i) {
    this._state === a.STATE_IDLE &&
      ((this.valueText.text = e),
      (this.var_344 = r),
      (this.var_163 = t),
      (this.var_5708 = i),
      (this._state = a.STATE_AWAIT_TARGET_RECT));
  }
  setInactive() {
    ((this.valueText.text = ""),
      (this.var_344 = 0),
      (this.var_163 = 0),
      (this.var_3030 = 0),
      this.var_2209.reset(),
      (this._state = a.STATE_IDLE),
      this.hide());
  }
  update(e) {
    if (this._state === a.STATE_IDLE) return;
    let r = this._roomEvents.roomEngine,
      t = this._roomEvents._r15b2ea2c393fea,
      i = r._r37626001a0be81(
        r.activeRoomId,
        this.var_344,
        this.var_163,
        t.getFirstCanvasId(),
      ),
      s = r.getRoomObjectScreenLocation(
        r.activeRoomId,
        this.var_344,
        this.var_163,
        t.getFirstCanvasId(),
      ),
      o = t.getRoomViewRect();
    if (
      (i != null && s != null && o != null && (i.offset(o.x, o.y), s.offset(o.x, o.y)),
      i == null || s == null)
    )
      return;
    let d = this.getOffset(i),
      c = s.y - i.top;
    this.var_2209.addValue(c);
    let f = this.var_2209._r26e48faa0dc4fb();
    f < this.var_3030 - a.const_100 && (f = this.var_3030 - a.const_100);
    let l = s.y - f;
    this.var_3030 = f;
    let _ = i.top + d - this._r7cc4e51a423d11(i),
      h = l + d;
    (h < _ && (h = _),
      (this._window.x = s.x - this._window.width / 2),
      (this._window.y = h),
      this._state === a.STATE_AWAIT_TARGET_RECT && ((this._state = a.STATE_ACTIVE), this.show()));
  }
  dispose() {
    this._disposed ||
      (this.hide(),
      this._window?.dispose(),
      (this._window = null),
      (this._roomEvents = null),
      (this.var_2209 = null),
      (this._disposed = !0));
  }
  show() {
    if (((this._window.visible = !0), this._window.parent == null)) {
      let e = this._roomEvents.windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      e?.addChild(this._window);
    } else this._window.activate();
  }
  hide() {
    if (
      this._window != null &&
      ((this._window.visible = !1), this._window.parent != null)
    ) {
      let e = this._roomEvents?.windowManager.getDesktop(a.DESKTOP_WINDOW_LAYER);
      e?.removeChild(this._window);
    }
  }
  get valueText() {
    return this._window.findChildByName("value");
  }
  getOffset(e) {
    let r = -this._window.height;
    return (this.var_5708 ? (r -= 10) : (r -= 4), r);
  }
  _r7cc4e51a423d11(e) {
    return Math.trunc(e.height * a.MAX_VERTICAL_LEAD_RATIO);
  }
}
