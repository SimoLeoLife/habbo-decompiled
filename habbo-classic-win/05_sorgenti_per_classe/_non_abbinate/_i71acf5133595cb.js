// Estratto da HabboAirLauncher.deobf.js, riga 299028.

class extends _ieead78a21202a2 {
  static {
    n(this, "_i71acf5133595cb");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.const_1303]);
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
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.const_1303, this.object));
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === _ifd7c1208e3417e.DOUBLE_CLICK) {
        let t = null;
        (e.RoomObjectStateChangeEvent === "turn_on" || e.RoomObjectStateChangeEvent === "turn_off"
          ? (t = new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object))
          : (t = new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.const_1303, this.object)),
          this._r11e12b4ff1ca8e?.dispatchEvent?.(t));
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rae150594157323() {
    if (this.object == null) return;
    let e = this.object.getModelController(),
      r = new h9(),
      t = this.object.getStringToStringMap();
    if (t == null) return;
    r._r8476f6049cdad6(t);
    let i = r.getValue(0),
      s = r.getValue(1),
      o = r.getValue(2),
      d = r.getValue(3),
      c = r.getValue(4),
      f = r.getValue(5) === 1,
      l = r.getValue(6) === 1,
      b = r.getValue(7) === 1;
    (e.setNumber(RoomObjectVariableEnum.const_449, s),
      e.setNumber(RoomObjectVariableEnum.const_910, o),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_WIDTH, d),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_LENGTH, c),
      e.setNumber(RoomObjectVariableEnum.const_312, f ? 1 : 0),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_WALL_ITEMS, l ? 1 : 0),
      e.setNumber(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_INVERT, b ? 1 : 0),
      this.object.setState(i, 0));
  }
}
