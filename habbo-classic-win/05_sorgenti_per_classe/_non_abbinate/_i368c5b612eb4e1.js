// Estratto da HabboAirLauncher.deobf.js, riga 331117.

class {
  static {
    n(this, "_i368c5b612eb4e1");
  }
  var_1271 = !1;
  _container = null;
  var_17 = null;
  _r2a0c5919ffa32d = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.const_121;
  }
  get container() {
    return this._container;
  }
  set widget(e) {
    this.var_17 = e;
  }
  set container(e) {
    (this._container?._r6d3762cbc9bcf8(this), (this._container = e), this._container?._red6812ce45e270(this));
  }
  dispose() {
    (this._container?._r6d3762cbc9bcf8(this),
      (this.var_1271 = !0),
      (this._container = null),
      (this.var_17 = null),
      (this._r2a0c5919ffa32d = null));
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_HIGH_SCORE_DISPLAY, RoomEngineToWidgetEvent.REQUEST_HIDE_HIGH_SCORE_DISPLAY];
  }
  _r9b1b0209eb1b5a(e) {
    if (!(this.disposed || e == null))
      switch (e.type) {
        case RoomEngineToWidgetEvent.REQUEST_HIGH_SCORE_DISPLAY: {
          let r = e,
            t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
          if (t != null) {
            let i = t.getStringToStringMap();
            if (i != null) {
              let s = new SW();
              (s._r8476f6049cdad6(i), this.var_17?.open(r.objectId, r.roomId, s));
            }
            this._r2a0c5919ffa32d = r;
          }
          break;
        }
        case RoomEngineToWidgetEvent.REQUEST_HIDE_HIGH_SCORE_DISPLAY: {
          let r = e;
          r.roomId === this.var_17?.roomId &&
            r.objectId === this.var_17?._r113316b8f49e75 &&
            this.var_17.close();
          break;
        }
      }
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  update() {
    if (
      this._r2a0c5919ffa32d == null ||
      this.var_17 == null ||
      !this.var_17.isOpen ||
      this.var_17.roomId !== this._r2a0c5919ffa32d.roomId ||
      this.var_17._r113316b8f49e75 !== this._r2a0c5919ffa32d.objectId
    )
      return;
    let e = this._container?.roomEngine?.getRoomObjectScreenLocation(
      this._r2a0c5919ffa32d.roomId,
      this._r2a0c5919ffa32d.objectId,
      this._r2a0c5919ffa32d.category,
    );
    e != null && this.var_17.setRelativePositionToRoomObjectAt(e.x, e.y);
  }
}
