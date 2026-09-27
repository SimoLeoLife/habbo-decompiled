// Extracted from HabboAirLauncher.deobf.js, line 299231.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0bc3175e9533f6

class extends Qr {
  static {
    n(this, "UnkClass_0bc317");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.CREDITFURNI]);
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("credits");
    if (r.length() === 0) return;
    let [t] = r.toArray();
    if (t == null || !(t instanceof Object) || !("attribute" in t)) return;
    let i = Number(t.attribute("value"));
    this.object.getModelController().setNumber(RoomObjectVariableEnum.const_695, i);
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === UnkClass_fd7c12.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    (this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.CREDITFURNI, this.object)),
      super._rce2b5eb85a79e0());
  }
}
