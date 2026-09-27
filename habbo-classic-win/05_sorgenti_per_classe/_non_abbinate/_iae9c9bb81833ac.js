// Estratto da HabboAirLauncher.deobf.js, riga 300410.

class extends _ieead78a21202a2 {
  static {
    n(this, "_iae9c9bb81833ac");
  }
  _r06ab5b9951d792 = !1;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.BACKGROUND_COLOR, RoomObjectHSLColorEnableEvent.ROOM_BACKGROUND_COLOR]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
    r != null &&
      r.data != null &&
      this.object != null &&
      (r.data._r22048429087864(this.object.getModelController()),
      this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 && this._rae150594157323());
  }
  dispose() {
    (this._r06ab5b9951d792 &&
      this.object != null &&
      (this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectHSLColorEnableEvent(RoomObjectHSLColorEnableEvent.ROOM_BACKGROUND_COLOR, this.object, !1, 0, 0, 0)),
      (this._r06ab5b9951d792 = !1)),
      super.dispose());
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === _ifd7c1208e3417e.DOUBLE_CLICK) {
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.BACKGROUND_COLOR, this.object));
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rae150594157323() {
    if (this.object == null) return;
    let e = this.object.getStringToStringMap();
    if (e == null) return;
    let r = new h9();
    r._r8476f6049cdad6(e);
    let t = r.getValue(0),
      i = r.getValue(1),
      s = r.getValue(2),
      o = r.getValue(3);
    if (t > -1 && i > -1 && s > -1 && o > -1) {
      let d = this.object.getModelController();
      (d.setNumber(RoomObjectVariableEnum.const_556, i),
        d.setNumber(RoomObjectVariableEnum.const_663, s),
        d.setNumber(RoomObjectVariableEnum.FURNITURE_ROOM_BACKGROUND_COLOR_LIGHTNESS, o),
        this.object.setState(t, 0),
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectHSLColorEnableEvent(RoomObjectHSLColorEnableEvent.ROOM_BACKGROUND_COLOR, this.object, !!t, i, s, o)),
        (this._r06ab5b9951d792 = !0));
    }
  }
}
