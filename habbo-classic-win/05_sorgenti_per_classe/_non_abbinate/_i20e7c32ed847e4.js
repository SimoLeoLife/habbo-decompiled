// Estratto da HabboAirLauncher.deobf.js, riga 302288.

class extends BaseHandler {
  static {
    n(this, "_i20e7c32ed847e4");
  }
  constructor(e, r) {
    (super(e, r),
      e.addMessageEvent(new class_3193((t) => this._r58915104c2750b(t))),
      e.addMessageEvent(new class_2411((t) => this._rdb04c850f47196(t))));
  }
  _r58915104c2750b(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(this._r48494125bd335d);
    r == null ||
      t == null ||
      this.dispatch(new RoomSessionPetPackageEvent(RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_REQUESTED, t, r.objectId, r.figureData, 0, null));
  }
  _rdb04c850f47196(e) {
    let r = e.getParser(),
      t = r == null ? null : this.listener?.getSession(this._r48494125bd335d);
    r == null ||
      t == null ||
      this.dispatch(new RoomSessionPetPackageEvent(RoomSessionPetPackageEvent.ROOM_SESSION_OPEN_PET_PACKAGE_RESULT, t, r.objectId, null, r._r008c105caa5e72, r._r549e697cdd257f));
  }
}
