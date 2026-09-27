// Estratto da HabboAirLauncher.deobf.js, riga 235658.

class {
  constructor(e, r, t, i, s, o) {
    this.var_63 = e;
    this._communication = t;
    this._assets = i;
    this._roomEngine = s;
    (this._roomEngine?.events.addEventListener?.(RoomEngineObjectEvent.PLACED, this._rc2775dcd5b5ae0),
      (this._view = new V7e(this, r, this._assets, this._roomEngine, o)));
  }
  static {
    n(this, "_i3bf5e28ee38044");
  }
  _view;
  _items = new B();
  _r4853c9d101e50a = !1;
  _disposed = !1;
  _rfd41642392fc2d = !1;
  get disposed() {
    return this._disposed;
  }
  get controller() {
    if (this.var_63 == null) throw new Error("BotsModel has been disposed.");
    return this.var_63;
  }
  get items() {
    return this._items;
  }
  get _r2eac8239a09fe7() {
    return this.var_63?._r2eac8239a09fe7 ?? null;
  }
  _rbbe2e53c82e0a2() {
    return this._rfd41642392fc2d;
  }
  _rec872260ff5419() {
    ((this._rfd41642392fc2d = !0), this._view?.updateState());
  }
  dispose() {
    this._disposed ||
      (this._view?.dispose(),
      (this._view = null),
      this._roomEngine?.events.removeEventListener?.(RoomEngineObjectEvent.PLACED, this._rc2775dcd5b5ae0),
      (this._roomEngine = null),
      this._items.dispose(),
      (this.var_63 = null),
      (this._assets = null),
      (this._communication = null),
      (this._disposed = !0));
  }
  requestInitialization() {
    this._rf3166340856bbf();
  }
  categorySwitch(e) {
    e === class_2106.BOTS &&
      this.var_63?.isVisible &&
      this.var_63.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_BOTS));
  }
  getWindowContainer() {
    return this._view?.getWindowContainer() ?? null;
  }
  closingInventoryView() {
    this._view?.isVisible && this._r89f1d7f95c6807();
  }
  subCategorySwitch(e) {}
  updateView() {
    this._view?.update();
  }
  selectItemById(e) {
    this._view?._rd3edb7973b5a25(Number.parseInt(e, 10));
  }
  _rf3166340856bbf() {
    this._communication?.connection.send(new _iea321aa930506c());
  }
  addItem(e) {
    (this._items.add(e.id, e) && this._view?.addItem(e), this._view?.updateState());
  }
  _rcf1ff05cdd2531(e) {
    let r = e.getKeys(),
      t = this._items.getKeys();
    for (let i of t) r.includes(i) || (this._items.remove(i), this._view?.removeItem(i));
    for (let i of r)
      if (!t.includes(i)) {
        let s = e.getValue(i);
        s != null && (this._items.add(i, s), this._view?.addItem(s));
      }
  }
  removeItem(e) {
    (this._items.remove(e), this._view?.removeItem(e), this._view?.updateState());
  }
  _rc5e177849ba0cd(e, r = !1) {
    let t = this._re64782e7366593(e);
    if (t == null || !this.var_63?._r2eac8239a09fe7?._r6354e1a24791d4) return !1;
    if (this.var_63._r2eac8239a09fe7.isRoomOwner) {
      let i = t.id * -1;
      return (
        (this._r4853c9d101e50a =
          this._roomEngine?._re608f4ba68bdcb(
            RoomObjectPlacementSource.INVENTORY,
            i,
            RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
            RoomObjectTypeEnum.const_965,
            t.figure,
          ) ?? !1),
        this.var_63._rcf87bdca169c00(),
        this._r4853c9d101e50a
      );
    }
    return (r || this._communication?.connection.send(new _i1e136a9cb5d399(t.id, 0, 0)), !0);
  }
  _r89f1d7f95c6807() {
    (this.var_63?._r349ca5f2f69601._r76597cac57aa73($t.BOT),
      this.var_63?._rf085caf479da12(),
      this._view?.update());
  }
  isUnseen(e) {
    return this.var_63?._r349ca5f2f69601.isUnseen($t.BOT, e) ?? !1;
  }
  _re64782e7366593(e) {
    return this._items.getValues().find((r) => r.id === e) ?? null;
  }
  _rc2775dcd5b5ae0 = n((e) => {
    e instanceof M &&
      this._r4853c9d101e50a &&
      e.type === RoomEngineObjectEvent.PLACED &&
      (this.var_63?.showView(), (this._r4853c9d101e50a = !1));
  }, "_rc2775dcd5b5ae0");
}
