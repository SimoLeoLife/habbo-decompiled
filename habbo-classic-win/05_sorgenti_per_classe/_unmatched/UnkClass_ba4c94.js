// Extracted from HabboAirLauncher.deobf.js, line 236362.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iba4c94629214f9

class {
  constructor(e, r, t, i, s, o) {
    this.var_63 = e;
    this._communication = r;
    this._assets = t;
    this._roomEngine = i;
    this._catalog = s;
    (this._assets, this._roomEngine, this._catalog, (this._view = new z7e(this, o)));
  }
  static {
    n(this, "UnkClass_ba4c94");
  }
  _view;
  _disposed = !1;
  _isLoaded = !1;
  _items = new B();
  _r948ba27220351b = !1;
  _selected = null;
  get disposed() {
    return this._disposed;
  }
  get controller() {
    if (this.var_63 == null) throw new Error("CollectiblesModel has been disposed.");
    return this.var_63;
  }
  get items() {
    return this._items;
  }
  get selected() {
    return this._selected;
  }
  _rbbe2e53c82e0a2() {
    return this._isLoaded;
  }
  _rec872260ff5419() {
    ((this._isLoaded = !0), this._view?.updateState());
  }
  dispose() {
    this._disposed ||
      (this._view?.dispose(),
      (this._view = null),
      this._items.dispose(),
      (this.var_63 = null),
      (this._catalog = null),
      (this._assets = null),
      (this._communication = null),
      (this._roomEngine = null),
      (this._disposed = !0));
  }
  _r265e5028e1f363() {
    ((this._isLoaded = !1),
      this.controller._rb2c2fb6f23bc56(class_2106.COLLECTIBLES, !1),
      this._view?.updateState());
  }
  _re7a96344d58b12(e) {
    let r = e.getKeys(),
      t = this._items.getKeys(),
      i = [],
      s = [];
    for (let o of t)
      if (!r.includes(o)) {
        let d = this._items.remove(o);
        d != null && i.push(d);
      }
    for (let o of r)
      if (!t.includes(o)) {
        let d = e.getValue(o);
        d != null && (this._items.add(o, d), s.push(d));
      }
    (this._view?._re7a96344d58b12(s, i),
      this.controller._r9fc90ede19317b(class_2106.COLLECTIBLES) ||
        (this.controller._rb2c2fb6f23bc56(class_2106.COLLECTIBLES), this._rec872260ff5419()));
  }
  _rd7adde26163d88(e, r) {
    if (e == null || r < 1 || r > e._rcd5da7ed1ad363) return;
    let t = e.pop(r);
    t.length > 0 && this.controller._r5a2088db32911f?._rd81a68895835ba(t);
  }
  _rc4b19b364e6310() {
    this._view?._r28af190239d0f6();
    let e = this.controller._r5a2088db32911f;
    if (!(e == null || !e.running)) {
      for (let r of e._r6d75f838a2611e.getValues()) {
        let t = this._view?._r7d121128e5d38d(r.item, !1) ?? null;
        if (t != null) for (let i of r._r2e115ccbab01eb) t._r38453430cd22d3(i);
      }
      this._view?.updatePreview();
    }
  }
  setSelected(e) {
    e !== this._selected &&
      (this._selected != null && ((this._selected.isSelected = !1), (this._selected = null)),
      e != null && ((e.isSelected = !0), (this._selected = e)),
      this._view?.updatePreview());
  }
  requestInitialization() {}
  categorySwitch(e) {
    e === class_2106.COLLECTIBLES &&
      this.var_63?.isVisible &&
      (this.var_63.events.dispatchEvent?.(new M(HabboInventoryTrackingEvent.HABBO_INVENTORY_TRACKING_EVENT_COLLECTIBLES)),
      this._rf3d4b78ed8c1fa(),
      this._view?.updateContainerVisibility());
  }
  getWindowContainer() {
    return this._view?.getWindowContainer() ?? null;
  }
  closingInventoryView() {
    this._view?.isVisible && this._r89f1d7f95c6807();
  }
  subCategorySwitch(e) {
    switch (e) {
      case class_2245.TRADING:
        ((this._r948ba27220351b = !1), this._view?.isVisible && this._rf3d4b78ed8c1fa());
        break;
      case class_2245.EMPTY:
        this._view?._r28af190239d0f6();
        break;
    }
  }
  _rf3d4b78ed8c1fa() {
    this._r948ba27220351b || ((this._r948ba27220351b = !0), this._communication?.connection.send(new UnkMessageComposer_0args_b53fc6()));
  }
  updateView() {}
  _r9610713348f76f(e) {
    let r = this._items.getValue(e) ?? null;
    return r == null ? null : (this._view?._r7d121128e5d38d(r) ?? null);
  }
  _r89f1d7f95c6807() {
    (this.var_63?._r349ca5f2f69601._r76597cac57aa73($t.COLLECTIBLES),
      this.var_63?._rf085caf479da12());
  }
  isUnseen(e) {
    return this.var_63?._r349ca5f2f69601.isUnseen($t.BOT, e) ?? !1;
  }
  selectItemById(e) {}
}
