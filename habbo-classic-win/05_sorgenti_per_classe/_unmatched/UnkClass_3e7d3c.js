// Extracted from HabboAirLauncher.deobf.js, line 299352.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i3e7d3cec56717a

class extends Qr {
  static {
    n(this, "UnkClass_3e7d3c");
  }
  _re103fb18d32394 = !1;
  _ra6920e94228e89 = 0;
  initialize(e) {
    if ((super.initialize(e), e == null)) return;
    let r = e.child("action");
    if (r.length() !== 0) {
      let [t] = r.toArray();
      t != null &&
        t instanceof Object &&
        "attribute" in t &&
        (this._re103fb18d32394 = String(t.attribute("startState")) === "1");
    }
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.INTERNAL_LINK]);
  }
  update(e) {
    (super.update(e),
      this._re103fb18d32394 &&
        (this._ra6920e94228e89++,
        this._ra6920e94228e89 > 20 && (this._r335a359614633d(1), (this._re103fb18d32394 = !1))));
  }
  mouseEvent(e, r) {
    (e != null && e.type === UnkClass_fd7c12.DOUBLE_CLICK && this._r335a359614633d(0), super.mouseEvent(e, r));
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.INTERNAL_LINK, this.object));
  }
  _r335a359614633d(e) {
    if (this.object == null) return;
    this.object.getModelController()?.setNumber(RoomObjectVariableEnum.const_718, e, !1);
  }
}
