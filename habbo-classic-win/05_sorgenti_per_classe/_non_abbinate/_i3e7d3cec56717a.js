// Estratto da HabboAirLauncher.deobf.js, riga 299352.

class extends Qr {
  static {
    n(this, "_i3e7d3cec56717a");
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
    (e != null && e.type === _ifd7c1208e3417e.DOUBLE_CLICK && this._r335a359614633d(0), super.mouseEvent(e, r));
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.INTERNAL_LINK, this.object));
  }
  _r335a359614633d(e) {
    if (this.object == null) return;
    this.object.getModelController()?.setNumber(RoomObjectVariableEnum.const_718, e, !1);
  }
}
