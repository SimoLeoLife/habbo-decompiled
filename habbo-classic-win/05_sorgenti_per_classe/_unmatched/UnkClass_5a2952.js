// Extracted from HabboAirLauncher.deobf.js, line 312657.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i5a2952878a9191

class a extends UnkRoomWidgetBaseSubclass_9e9170 {
  static {
    n(this, "UnkClass_5a2952");
  }
  static _rd1926aacb5c7fc = 0;
  static _r66bff38b52da4f = 1;
  _rb081676ceb54a4 = null;
  _items = null;
  constructor(e, r, t = null, i = null) {
    super(e, r, t, i);
  }
  dispose() {
    (this._rb081676ceb54a4?.dispose(), (this._rb081676ceb54a4 = null), (this._items = null), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetChooserContentEvent.USER_CHOOSER_CONTENT, this._ref72b22e3209e3),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_REMOVED, this._r2294906b066152),
      e.addEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_ADDED, this._r2294906b066152),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetChooserContentEvent.USER_CHOOSER_CONTENT, this._ref72b22e3209e3),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_REMOVED, this._r2294906b066152),
      e.removeEventListener?.(RoomWidgetRoomObjectUpdateEvent.USER_ADDED, this._r2294906b066152));
  }
  get items() {
    return this._items;
  }
  initialize(e = 0) {
    (super.initialize(e),
      !this._r16afd202c77c85?.isChooserDisabled() &&
        e === a._r66bff38b52da4f &&
        this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_USER_CHOOSER)));
  }
  get state() {
    return this._rb081676ceb54a4 != null && this._rb081676ceb54a4.isOpen()
      ? a._r66bff38b52da4f
      : a._rd1926aacb5c7fc;
  }
  _ref72b22e3209e3 = n((e) => {
    if (!(e == null || e.items == null)) {
      (this._rb081676ceb54a4 == null &&
        (this._rb081676ceb54a4 = new $I(this, "${widget.chooser.user.title}")),
        (this._items = []));
      for (let r of e.items) this._items.push(r);
      (this._items.sort((r, t) =>
        r.lowerCaseName < t.lowerCaseName
          ? -1
          : r.lowerCaseName > t.lowerCaseName
            ? 1
            : r.id - t.id,
      ),
        this._rb081676ceb54a4._rffc4c0fb753b54());
    }
  }, "_ref72b22e3209e3");
  _r2294906b066152 = n((e) => {
    if (this._rb081676ceb54a4 == null || !this._rb081676ceb54a4.isOpen()) return;
    let r = new UnkEventDispatcherWrapperSubclass_05394e(100, 1);
    (r.addEventListener(DeBouncer.addEventListener, () => {
      this.disposed || this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetRequestWidgetMessage(RoomWidgetRequestWidgetMessage.REQUEST_USER_CHOOSER));
    }),
      r.start());
  }, "_r2294906b066152");
}
