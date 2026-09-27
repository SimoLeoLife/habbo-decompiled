// Estratto da HabboAirLauncher.deobf.js, riga 243082.

class {
  constructor(e, r, t, i, s) {
    this.var_63 = e;
    this._communication = t;
    this._assets = i;
    this._roomEngine = s;
    (this._roomEngine?.events.addEventListener?.(RoomEngineObjectEvent.PLACED, this._rc2775dcd5b5ae0),
      (this._view = new npe(this, r, this._assets, this._roomEngine)));
  }
  static {
    n(this, "_i27a49090a9ceca");
  }
  _view;
  _rdc264f54a8d265 = new B();
  _r4853c9d101e50a = !1;
  _disposed = !1;
  _rfd41642392fc2d = !1;
  get disposed() {
    return this._disposed;
  }
  get controller() {
    if (this.var_63 == null) throw new Error("PetsModel has been disposed.");
    return this.var_63;
  }
  get pets() {
    return this._rdc264f54a8d265;
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
      this._rdc264f54a8d265.dispose(),
      (this.var_63 = null),
      (this._assets = null),
      (this._communication = null),
      (this._disposed = !0));
  }
  requestInitialization() {
    this._ra5b727875b00aa();
  }
  categorySwitch(e) {
    e === class_2106.PETS &&
      this.var_63?.isVisible &&
      this.var_63.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_PETS));
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
  _ra5b727875b00aa() {
    this._communication?.connection.send(new _i4e36d9ac411515());
  }
  _r0eb38c70cfe4dd(e) {
    (this._rdc264f54a8d265.add(e.id, e) && this._view?._r0eb38c70cfe4dd(e), this._view?.updateState());
  }
  _r0c52146e5316df(e) {
    let r = e.getKeys(),
      t = this._rdc264f54a8d265.getKeys();
    this.var_63?._rb2c2fb6f23bc56(class_2106.PETS);
    for (let i of t) r.includes(i) || (this._rdc264f54a8d265.remove(i), this._view?._rf7b69f01858c06(i));
    for (let i of r)
      if (!t.includes(i)) {
        let s = e.getValue(i);
        s != null && (this._rdc264f54a8d265.add(i, s), this._view?._r0eb38c70cfe4dd(s));
      }
    this._rec872260ff5419();
  }
  _rf7b69f01858c06(e) {
    (this._rdc264f54a8d265.remove(e), this._view?._rf7b69f01858c06(e), this._view?.updateState());
  }
  _re99ec0cc74990e(e, r = !1) {
    let t = this._r423d16b0844a30(e);
    if (t == null) return !1;
    let i = null;
    if (
      (t.typeId === class_3447.MONSTERPLANT && (i = t.level >= 7 ? "std" : `grw${t.level}`),
      this.var_63?._r2eac8239a09fe7?.isRoomOwner)
    ) {
      let s = t.id * -1;
      return (
        (this._r4853c9d101e50a =
          this._roomEngine?._re608f4ba68bdcb(
            RoomObjectPlacementSource.INVENTORY,
            s,
            RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
            RoomObjectTypeEnum.OBJECT_TYPE_PET,
            t.figureString,
            null,
            -1,
            -1,
            i,
          ) ?? !1),
        this.var_63._rcf87bdca169c00(),
        this._r4853c9d101e50a
      );
    }
    return this.var_63?._r2eac8239a09fe7?._r278a8fdc24e036
      ? (r || this._communication?.connection.send(new _iaf730ace5aff2d(t.id, 0, 0)), !0)
      : !1;
  }
  _rf359ff640d0ec2() {
    this._view?.update();
  }
  _r89f1d7f95c6807() {
    (this.var_63?._r349ca5f2f69601._r76597cac57aa73($t.PET),
      this.var_63?._rf085caf479da12(),
      this._view?.update());
  }
  isUnseen(e) {
    return this.var_63?._r349ca5f2f69601.isUnseen($t.PET, e) ?? !1;
  }
  _rc192f9aaf6c144(e) {
    let r = !1;
    return (
      this.isUnseen(e) &&
        ((r = this.var_63?._r349ca5f2f69601._r1726cb679cf29b($t.PET, e) ?? !1),
        r && this.var_63?._r349ca5f2f69601._r2d59b93ea65720($t.PET)),
      r
    );
  }
  _r423d16b0844a30(e) {
    return this._rdc264f54a8d265.getValues().find((r) => r.id === e) ?? null;
  }
  _rc2775dcd5b5ae0 = n((e) => {
    e instanceof M &&
      this._r4853c9d101e50a &&
      e.type === RoomEngineObjectEvent.PLACED &&
      (this.var_63?.showView(), (this._r4853c9d101e50a = !1));
  }, "_rc2775dcd5b5ae0");
}
