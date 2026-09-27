// Extracted from HabboAirLauncher.deobf.js, line 186229.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/recycler/RecyclerLogic.as
// Obfuscated name: _id1ad0c5605e2cc

class a {
  constructor(e, r) {
    this._catalog = e;
    this._windowManager = r;
    this.var_1992 = this._catalog?.getInteger("recycler.number_of_slots", 5) ?? 5;
  }
  static {
    n(this, "RecyclerLogic");
  }
  static STATUS_OFF = 0;
  static STATUS_READY = 1;
  static STATUS_WAITING_FOR_SERVER = 2;
  _localStatus = a.STATUS_OFF;
  setupInventoryForRecycler = class_2000.const_1212;
  _r0c86a19a7fa42e = 0;
  var_158 = [];
  _view = null;
  _prizes = null;
  _r092732aae1fa2f = null;
  var_1992;
  get active() {
    return this.statusActive && this._r08e081f83e0cd4;
  }
  get _r6d8ad6fbc67842() {
    return this.var_1992;
  }
  get _r4e19bea37092ca() {
    return !this._r08e081f83e0cd4;
  }
  get ducketCost() {
    return this._catalog?.getInteger("recycler.ducket_cost", 0) ?? 0;
  }
  get timeout() {
    return this._catalog?.getInteger("recycler.timeout_seconds", 10) ?? 10;
  }
  dispose() {
    ((this.var_158 = []),
      (this._catalog = null),
      (this._windowManager = null),
      (this._view = null),
      (this._prizes = null),
      (this._r092732aae1fa2f = null));
  }
  init(e = null) {
    ((this._localStatus = a.STATUS_WAITING_FOR_SERVER),
      (this.var_158 = new Array(this.var_1992).fill(null)),
      e != null && ((this._view = e), this._catalog?._r6cbd0d8395bac6()));
  }
  activate() {
    this._r08e081f83e0cd4 && (this._localStatus = a.STATUS_READY);
  }
  cancel() {
    (this._catalog?._rea93b305be2f40(!1),
      this._r0050a2f6cf4e2b(),
      (this._localStatus = a.STATUS_OFF));
  }
  _r0050a2f6cf4e2b() {
    if (this.ready) {
      for (let e = 0; e < this.var_1992; e++) {
        let r = this.var_158[e];
        r != null && (this._catalog?._rad6dab0d78ac23(r.id), (this.var_158[e] = null));
      }
      (this.updateRecyclerSlots(), this.updateRecyclerButton());
    }
  }
  empty() {
    for (let e = 0; e < this.var_1992; e++) this.releaseSlot(e);
    (this.updateRecyclerSlots(), this.updateRecyclerButton());
  }
  _rf838572cd63994() {
    return this.setupInventoryForRecycler === class_2000.const_1060
      ? Math.max(0, Math.ceil((this._r0c86a19a7fa42e - _ia411d8d8194a3a()) / 1e3))
      : 0;
  }
  _re94affc56360a7(e) {
    ((this._r0c86a19a7fa42e = e),
      this._r0c86a19a7fa42e > _ia411d8d8194a3a() && (this.setupInventoryForRecycler = class_2000.const_1060));
  }
  setSystemStatus(e, r) {
    if (((this.setupInventoryForRecycler = e), this._re94affc56360a7(_ia411d8d8194a3a() + r * 1e3), !this._r08e081f83e0cd4)) {
      if (this._view == null || this._view.disposed) return;
      this._view.updateUI();
      return;
    }
    ((this._localStatus = a.STATUS_READY),
      !(this._view == null || this._view.disposed) &&
        (this._view.updateUI(),
        this._catalog?._rea93b305be2f40(this.setupInventoryForRecycler !== class_2000.const_1212),
        this.verifyRoomSessionStatus(),
        this.updateRecyclerSlots(),
        this.updateRecyclerButton()));
  }
  setFinished(e, r) {
    if (this.statusActive && ((this._localStatus = a.STATUS_READY), !!this._r08e081f83e0cd4)) {
      switch (e) {
        case class_2066.const_863:
          this._view?.updateUI();
          break;
        case class_2066.const_1027:
          (this._windowManager?.alert(
            "${generic.alert.title}",
            "${recycler.info.closed}",
            0,
            this._r9d8a83a2f57c04,
          ),
            this._view?.updateUI());
          break;
        default:
          break;
      }
      this._r0050a2f6cf4e2b();
    }
  }
  numberOfSlots(e) {
    return e < 0 || e >= this.var_158.length ? null : this.var_158[e];
  }
  placeObjectAtSlot(e, r, t, i, s, o = !1) {
    if (!this.ready) return;
    let d;
    if (!o) ((d = this.var_158[e]), d != null && this.releaseSlot(e));
    else if (this.var_158.length > 0) {
      d = this.var_158[0];
      let f = 0;
      for (; d != null && f < this.var_1992;) ((d = this.var_158[f]), d != null && f++);
      if (d == null) e = f;
      else return;
    }
    let c = this._catalog?._rff03647462b156() ?? 0;
    if (c === 0) {
      this._windowManager?.alert(
        "${generic.alert.title}",
        "${recycler.alert.non.recyclable}",
        0,
        this._r9d8a83a2f57c04,
      );
      return;
    }
    ((this.var_158[e] = new FurniSlotItem(c, t, i, s)), this.updateRecyclerSlots(), this.updateRecyclerButton());
  }
  releaseSlot(e) {
    if (!this.ready) return;
    let r = this.var_158[e];
    r != null &&
      this._catalog?._rad6dab0d78ac23(r.id) &&
      ((this.var_158[e] = null), this.updateRecyclerSlots(), this.updateRecyclerButton());
  }
  _r5d3a9525143232() {
    if (!this.isReadyToRecycle()) return;
    ((this._localStatus = a.STATUS_WAITING_FOR_SERVER), this.updateRecyclerButton());
    let e = [];
    for (let r of this.var_158) {
      if (r == null) return;
      e.push(r.id);
    }
    (this._catalog?._r9e7b2525d70167(e), this._view?.updateUI());
  }
  isReadyToRecycle() {
    return !this.ready || !this._catalog?._rd5809bdabd44c9
      ? !1
      : this.privateRoomSessionActive()
        ? (this._windowManager?.alert(
            "${generic.alert.title}",
            "${recycler.alert.trading}",
            0,
            this._r9d8a83a2f57c04,
          ),
          !1)
        : this._r90320689bdde4e();
  }
  _ra9cd267b63b6f4() {
    return (
      (this._catalog?.getPurse().getActivityPointsForType(et.DUCKET) ?? 0) >=
      this.ducketCost
    );
  }
  _r951f64a31ecf46(e) {
    (e || (this.empty(), this.verifyRoomSessionStatus()), this.updateRecyclerButton());
  }
  _r017b617c0a77a3(e) {
    ((this._prizes = e.map((r) => new UnkClass_1dfe4f(r, this._catalog))),
      this._r092732aae1fa2f != null &&
        (this._r092732aae1fa2f(this._prizes), (this._r092732aae1fa2f = null)));
  }
  _r7261aac1a38a08(e) {
    return this._prizes == null
      ? ((this._r092732aae1fa2f = e), this._catalog?._rc0be76048f3fbb(), null)
      : this._prizes;
  }
  get statusActive() {
    return this._localStatus !== a.STATUS_OFF;
  }
  get _r08e081f83e0cd4() {
    return this.setupInventoryForRecycler !== class_2000.const_1212;
  }
  get ready() {
    return this.active && this._localStatus === a.STATUS_READY;
  }
  verifyRoomSessionStatus() {
    !this._catalog?._rd5809bdabd44c9 &&
      this.ready &&
      this._windowManager?.alert(
        "${generic.alert.title}",
        "${recycler.alert.privateroom}",
        0,
        this._r9d8a83a2f57c04,
      );
  }
  updateRecyclerSlots() {
    this._view == null || !this.statusActive || this._view.updateSlots();
  }
  updateRecyclerButton() {
    this._view == null || !this.statusActive || this._view.updateRecycleButton();
  }
  _r90320689bdde4e() {
    return this.var_158.length < this.var_1992
      ? !1
      : this.var_158.every((e) => e != null);
  }
  privateRoomSessionActive() {
    return this._catalog?._r08dbc43175f2ed ?? !1;
  }
  _r9d8a83a2f57c04 = n((e, r) => {
    e?.dispose();
  }, "_r9d8a83a2f57c04");
}
