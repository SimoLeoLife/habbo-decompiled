// Estratto da HabboAirLauncher.deobf.js, riga 299801.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureHockeyScoreLogic.as
// Nome offuscato: _i8240c31fcb03d1

class extends Qr {
  static {
    n(this, "FurnitureHockeyScoreLogic");
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE]);
  }
  mouseEvent(e, r) {
    if (e == null || r == null || this.object == null) return;
    let t = null;
    switch (e.type) {
      case _ifd7c1208e3417e.DOUBLE_CLICK:
        e.RoomObjectStateChangeEvent === "off" && (t = 3);
        break;
      case _ifd7c1208e3417e.CLICK:
        e.RoomObjectStateChangeEvent === "inc" ? (t = 2) : e.RoomObjectStateChangeEvent === "dec" && (t = 1);
        break;
    }
    if (t != null) {
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object, t));
      return;
    }
    super.mouseEvent(e, r);
  }
  _rce2b5eb85a79e0() {
    this.object != null &&
      this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object, 3));
  }
}
