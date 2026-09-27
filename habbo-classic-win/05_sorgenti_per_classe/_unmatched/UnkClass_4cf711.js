// Extracted from HabboAirLauncher.deobf.js, line 300591.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i4cf711a6040ac6

class extends Qr {
  static {
    n(this, "UnkClass_4cf711");
  }
  _r06ab5b9951d792 = !1;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectWidgetRequestEvent.DIMMER,
      RoomObjectWidgetRequestEvent.REMOVE_DIMMER,
      a5.const_67,
    ]);
  }
  _rce2b5eb85a79e0() {
    this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.DIMMER, this.object));
  }
  dispose() {
    (this._r06ab5b9951d792 &&
      this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
      (this._r11e12b4ff1ca8e.dispatchEvent?.(new a5(this.object, 0, 1, 1, 16777215, 255)),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.REMOVE_DIMMER, this.object)),
      (this._r06ab5b9951d792 = !1)),
      super.dispose());
  }
  processUpdateMessage(e) {
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    if (r != null) {
      if (r.data != null && this.object != null) {
        let t = r.data.getLegacyString();
        (this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
          this._r34b9d6cdb6e710(t),
          super.processUpdateMessage(new UnkRoomObjectUpdateMessageSubclass_39f7ec(this._r7f8d75b8ff0e0a(t), r.data)));
      }
      return;
    }
    super.processUpdateMessage(e);
  }
  update(e) {
    if (
      (super.update(e),
      this.object != null && this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1)
    ) {
      let r = this.object.getModelController().getString(RoomObjectVariableEnum.FURNITURE_DATA);
      r != null &&
        r.length > 0 &&
        (this.object.getModelController().setString(RoomObjectVariableEnum.FURNITURE_DATA, ""), this._r34b9d6cdb6e710(r));
    }
  }
  _r34b9d6cdb6e710(e) {
    if (e == null || this._r11e12b4ff1ca8e == null || this.object == null) return;
    let r = e.split(",");
    if (r.length < 5) return;
    let t = this._r7f8d75b8ff0e0a(e),
      i = Number.parseInt(r[1] ?? "", 10),
      s = Number.parseInt(r[2] ?? "", 10),
      o = Number.parseInt((r[3] ?? "#FFFFFF").slice(1), 16),
      d = Number.parseInt(r[4] ?? "", 10);
    (t === 0 && ((o = 16777215), (d = 255)),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new a5(this.object, t, i, s, o, d)),
      (this._r06ab5b9951d792 = !0));
  }
  _r7f8d75b8ff0e0a(e) {
    if (e == null) return 0;
    let r = e.split(",");
    return r.length >= 5 ? Number.parseInt(r[0] ?? "", 10) - 1 : 0;
  }
}
