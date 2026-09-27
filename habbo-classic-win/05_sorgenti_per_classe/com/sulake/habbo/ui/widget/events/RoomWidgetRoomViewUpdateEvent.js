// Estratto da HabboAirLauncher.deobf.js, riga 161063.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRoomViewUpdateEvent.as
// Nome offuscato: _i3fcf1991b35c52

class extends RoomWidgetUpdateEvent {
  constructor(r, t = null, i = null, s = 0, o = !1, d = !1) {
    super(r, o, d);
    this.scale = s;
    ((this._r14a03de97f4f58 = t), (this._r013eb98ed5c8b7 = i));
  }
  static {
    n(this, "RoomWidgetRoomViewUpdateEvent");
  }
  static ROOM_VIEW_POSITION_CHANGED = "RWRVUE_ROOM_VIEW_POSITION_CHANGED";
  static ROOM_VIEW_SCALE_CHANGED = "RWRVUE_ROOM_VIEW_SCALE_CHANGED";
  static ROOM_VIEW_SIZE_CHANGED = "RWRVUE_ROOM_VIEW_SIZE_CHANGED";
  _r14a03de97f4f58;
  _r013eb98ed5c8b7;
  get rect() {
    return this._r14a03de97f4f58 ? this._r14a03de97f4f58.clone() : null;
  }
  get _r1c8a12059a2fca() {
    return this._r013eb98ed5c8b7 ? this._r013eb98ed5c8b7.clone() : null;
  }
}
