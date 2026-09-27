// Estratto da HabboAirLauncher.deobf.js, riga 299389.

class extends Qr {
  static {
    n(this, "_ifc4f9166121c52");
  }
  initialize(e) {
    if ((super.initialize(e), e == null || this.object == null)) return;
    let r = e.child("action");
    if (r.length() !== 0) {
      let [t] = r.toArray();
      t != null &&
        t instanceof Object &&
        "attribute" in t &&
        this.object.getModelController().setString(RoomObjectVariableEnum.const_144, String(t.attribute("link")));
    }
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.ROOM_LINK]);
  }
  _rce2b5eb85a79e0() {
    this._r335a359614633d(1);
    let e = new _i05394ecc0c0c4d(2500);
    (e.addEventListener(DeBouncer.addEventListener, () => this._r0191c6d5f9d840()),
      e.start(),
      this.object != null &&
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.ROOM_LINK, this.object)));
  }
  _r335a359614633d(e) {
    if (this.object == null) return;
    this.object.getModelController()?.setNumber(RoomObjectVariableEnum.const_718, e, !1);
  }
  _r0191c6d5f9d840 = n(() => {
    this._r335a359614633d(0);
  }, "_r0191c6d5f9d840");
}
