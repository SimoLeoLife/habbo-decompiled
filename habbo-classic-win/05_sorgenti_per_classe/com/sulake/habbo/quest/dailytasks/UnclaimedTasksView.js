// Estratto da HabboAirLauncher.deobf.js, riga 265659.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/dailytasks/UnclaimedTasksView.as
// Nome offuscato: _i523ef231f0415f

class {
  constructor(e, r) {
    this.var_63 = e;
    this._windowManager = r;
    ((this._window = this._windowManager.buildFromXML(
      this.var_63.assets.getAssetByName("dailytasks_unclaimed_xml")?.content,
    )),
      this.closeButton?.addEventListener(u.CLICK, this.onWindowClose),
      this.show(),
      this.hide(),
      this.tasksList != null && (this.tasksList.autoHideScrollBar = !1));
  }
  static {
    n(this, "UnclaimedTasksView");
  }
  _window;
  var_948 = [];
  _disposed = !1;
  tasksCleared() {
    this.tasksList?.removeListItems();
    for (let e of this.var_948) e.dispose();
    this.var_948 = [];
  }
  _r90501fc213622f(e) {
    let r = new kQ(e, this.var_63);
    (this.var_948.push(r), this.tasksList?.addListItem(r.window));
  }
  _rc701b693c2b118(e) {
    this._r75303f67af1eaf(e)?.updateStatusAndRepeatsUI();
  }
  _r75303f67af1eaf(e) {
    return this.var_948.find((r) => r._r69698bba4f84e1.taskId === e) ?? null;
  }
  show() {
    this._window != null &&
      ((this._window.x = Math.max(this._window.x, 0)),
      (this._window.y = Math.max(this._window.y, 0)),
      this._window.parent == null &&
        this._windowManager.getDesktop(SI.DESKTOP_WINDOW_LAYER)?.addChild(this._window),
      this._window.activate());
  }
  hide() {
    this._window == null ||
      this._window.parent == null ||
      this._windowManager.getDesktop(SI.DESKTOP_WINDOW_LAYER)?.removeChild(this._window);
  }
  get _r649b931e745b6b() {
    return this.var_948;
  }
  dispose() {
    if (!this._disposed) {
      for (let e of this.var_948) e.dispose();
      ((this.var_948 = []),
        this.hide(),
        this.closeButton?.removeEventListener(u.CLICK, this.onWindowClose),
        this._window?.dispose(),
        (this._window = null),
        (this._windowManager = null),
        (this.var_63 = null),
        (this._disposed = !0));
    }
  }
  get disposed() {
    return this._disposed;
  }
  onWindowClose = n((e) => {
    e.type === u.CLICK && this.hide();
  }, "onWindowClose");
  get closeButton() {
    return this._window?.findChildByName("header_button_close") ?? null;
  }
  get tasksList() {
    return this._window?.findChildByName("tasks_list");
  }
}
