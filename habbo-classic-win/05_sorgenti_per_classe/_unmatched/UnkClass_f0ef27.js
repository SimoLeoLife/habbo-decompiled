// Extracted from HabboAirLauncher.deobf.js, line 299869.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _if0ef273109016c

class extends Qr {
  static {
    n(this, "UnkClass_f0ef27");
  }
  _re103fb18d32394 = !1;
  _ra6920e94228e89 = 0;
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("action");
    if (r.length() !== 0) {
      let [t] = r.toArray();
      if (t == null || !(t instanceof Object) || !("attribute" in t)) return;
      let i = t;
      (this.object.getModelController().setString(RoomObjectVariableEnum.const_144, String(i.attribute("link"))),
        String(i.attribute("startState")) === "1" && (this._re103fb18d32394 = !0));
    }
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.INTERNAL_LINK]);
  }
  _rce2b5eb85a79e0() {
    this.object != null && this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.INTERNAL_LINK, this.object));
  }
  update(e) {
    (super.update(e),
      this._re103fb18d32394 &&
        (this._ra6920e94228e89++, this._ra6920e94228e89 === 20 && this._r335a359614633d(1)));
  }
  mouseEvent(e, r) {
    (e != null && e.type === UnkClass_fd7c12.DOUBLE_CLICK && this._re103fb18d32394 && this._r335a359614633d(0),
      super.mouseEvent(e, r));
  }
  _r335a359614633d(e) {
    if (this.object == null) return;
    this.object.getModelController()?.setNumber(RoomObjectVariableEnum.const_718, e, !1);
  }
}
