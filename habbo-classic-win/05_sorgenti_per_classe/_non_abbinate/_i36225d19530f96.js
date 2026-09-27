// Estratto da HabboAirLauncher.deobf.js, riga 312407.

class extends _i9e9170b64ef712 {
  static {
    n(this, "_i36225d19530f96");
  }
  _r08bbeadb17a7f1 = null;
  _items = null;
  _re5984ab86f373e = null;
  constructor(e, r, t = null, i = null) {
    super(e, r, t, i);
  }
  dispose() {
    (this._r08bbeadb17a7f1?.dispose(),
      (this._r08bbeadb17a7f1 = null),
      (this._items = null),
      (this._re5984ab86f373e = null),
      super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetChooserContentEvent.FURNI_CHOOSER_CONTENT, this._ref72b22e3209e3),
      e.addEventListener?.(RoomWidgetChooserContentEvent.FURNI_CHOOSER_CONTENT_ADD, this._r3fde64d8c72c01),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this._rf28424345f54c2),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_739, this._rf28424345f54c2),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetChooserContentEvent.FURNI_CHOOSER_CONTENT, this._ref72b22e3209e3),
      e.removeEventListener?.(RoomWidgetChooserContentEvent.FURNI_CHOOSER_CONTENT_ADD, this._r3fde64d8c72c01),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_912, this._rf28424345f54c2),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.const_739, this._rf28424345f54c2));
  }
  get items() {
    return this._items;
  }
  _ref72b22e3209e3 = n((e) => {
    if (!(e == null || e.items == null)) {
      (this._r08bbeadb17a7f1 == null &&
        (this._r08bbeadb17a7f1 = new Ig(this, "${widget.chooser.furni.title}")),
        (this._items = []),
        (this._re5984ab86f373e = new Map()));
      for (let r of e.items) r.id > 0 && (this._items.push(r), this._re5984ab86f373e.set(r.id, !0));
      (this._items.sort((r, t) =>
        r.lowerCaseName < t.lowerCaseName
          ? -1
          : r.lowerCaseName > t.lowerCaseName
            ? 1
            : r.id - t.id,
      ),
        this._r08bbeadb17a7f1._rffc4c0fb753b54());
    }
  }, "_ref72b22e3209e3");
  _r3fde64d8c72c01 = n((e) => {
    if (
      e == null ||
      e.items == null ||
      this._r08bbeadb17a7f1 == null ||
      this._items == null ||
      this._re5984ab86f373e == null
    )
      return;
    let r = !1;
    for (let t of e.items)
      t.id > 0 &&
        !this._re5984ab86f373e.has(t.id) &&
        (this._items.push(t), this._re5984ab86f373e.set(t.id, !0), (r = !0));
    r && this._r08bbeadb17a7f1._rffc4c0fb753b54();
  }, "_r3fde64d8c72c01");
  _rf28424345f54c2 = n((e) => {
    if (!(this._r08bbeadb17a7f1 == null || !this._r08bbeadb17a7f1.isOpen()))
      if (e.type === RoomWidgetRoomObjectUpdateEvent.const_912) {
        if (this._items != null)
          for (let r = 0; r < this._items.length; r += 1) {
            let t = this._items[r];
            if (t.id === e.id && t.category === e.category) {
              (this._items.splice(r, 1),
                this._re5984ab86f373e?.delete(t.id),
                this._r08bbeadb17a7f1._rffc4c0fb753b54());
              return;
            }
          }
      } else
        e.type === RoomWidgetRoomObjectUpdateEvent.const_739 &&
          this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_FURNI_CHOOSER_ADD, e.id, e.category));
  }, "_rf28424345f54c2");
}
