// Estratto da HabboAirLauncher.deobf.js, riga 243303.

class a {
  constructor(e, r, t, i, s, o) {
    this._inventory = e;
    this._communication = t;
    this.var_997 = i;
    this._roomEngine = s;
    this._localization = o;
  }
  static {
    n(this, "_icb252c9d40cca3");
  }
  static STATE_READY = 0;
  static STATE_ACTIVE = 1;
  static NUMBER_OF_SLOTS = 5;
  _disposed = !1;
  _state = a.STATE_READY;
  _itemList = null;
  get running() {
    return this._state === a.STATE_ACTIVE;
  }
  get active() {
    return this.running;
  }
  get state() {
    return this._state;
  }
  set state(e) {
    this._state = e;
  }
  get disposed() {
    return this._disposed;
  }
  get _r6d8ad6fbc67842() {
    return a.NUMBER_OF_SLOTS;
  }
  get _r4e19bea37092ca() {
    return !1;
  }
  get ducketCost() {
    return 0;
  }
  get timeout() {
    return 0;
  }
  dispose() {
    this._disposed ||
      (this._r37a7f52dcb3124(),
      (this._inventory = null),
      (this._communication = null),
      (this.var_997 = null),
      (this._roomEngine = null),
      (this._localization = null),
      (this._disposed = !0));
  }
  _r224ebb954465c4() {
    this._inventory?._r9275a8e42af3cc != null &&
      ((this._state = a.STATE_ACTIVE),
      (this._itemList = new B()),
      this._inventory._r9275a8e42af3cc._r3dea0695a334e2(!0));
  }
  _r37a7f52dcb3124() {
    if (!(this._itemList == null || this._inventory?._r9275a8e42af3cc == null)) {
      ((this._state = a.STATE_READY), this._inventory._r9275a8e42af3cc._r3dea0695a334e2(!1));
      for (let e of this._itemList.getKeys())
        this._inventory._r9275a8e42af3cc._ra57b905430d0ae(e);
      (this._itemList.dispose(), (this._itemList = null));
    }
  }
  _r2470a3d341b2ac() {
    if (this._itemList == null || this._inventory?._r9275a8e42af3cc == null) return 0;
    let e = this._inventory._r9275a8e42af3cc._r1eb551585cedeb();
    return e == null ? 0 : (this._itemList.hasKey(e.id) || this._itemList.add(e.id, e), e.id);
  }
  _r5c29ba3d97bcff(e) {
    if (this._itemList == null) return !0;
    let r = this._itemList.getValue(e),
      t = this._inventory?._r9275a8e42af3cc;
    return r == null || t == null ? !1 : (t._ra57b905430d0ae(e), this._itemList.remove(e), !0);
  }
  _rb0de4dcc7f92fc() {
    return this._itemList?.getKeys() ?? [];
  }
  init(e = null) {}
  activate() {
    this._r224ebb954465c4();
  }
  cancel() {
    this._r37a7f52dcb3124();
  }
  _r0050a2f6cf4e2b() {
    if (this._itemList != null)
      for (let e of [...this._itemList.getKeys()]) this._r5c29ba3d97bcff(e);
  }
  empty() {
    this._r0050a2f6cf4e2b();
  }
  _rf838572cd63994() {
    return 0;
  }
  _re94affc56360a7(e) {}
  setSystemStatus(e, r) {}
  setFinished(e, r) {}
  requestInitialization() {}
  categorySwitch(e) {}
  subCategorySwitch(e) {}
  closingInventoryView() {}
  getWindowContainer() {
    return null;
  }
  updateView() {}
  selectItemById(e) {}
  numberOfSlots(e) {
    if (this._itemList == null || e < 0 || e >= this._r6d8ad6fbc67842) return null;
    let r = this._itemList.getWithIndex(e);
    return r == null ? null : new FurniSlotItem(r.id, r.category, r.type, r.stuffData.getLegacyString());
  }
  releaseSlot(e) {
    let r = this._itemList?.getWithIndex(e);
    r != null && this._r5c29ba3d97bcff(r.id);
  }
  placeObjectAtSlot(e, r, t, i, s, o = !1) {
    e < 0 || e >= this._r6d8ad6fbc67842 || !this.running || this._r2470a3d341b2ac();
  }
  _r5d3a9525143232() {}
  isReadyToRecycle() {
    return this.running && (this._itemList?.length ?? 0) === this._r6d8ad6fbc67842;
  }
  _ra9cd267b63b6f4() {
    return !0;
  }
  _r951f64a31ecf46(e) {}
  _r017b617c0a77a3(e) {}
  _r7261aac1a38a08(e) {
    return (e?.([]), []);
  }
}
