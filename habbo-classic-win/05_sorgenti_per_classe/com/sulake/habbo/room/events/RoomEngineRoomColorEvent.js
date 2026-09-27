// Estratto da HabboAirLauncher.deobf.js, riga 70636.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineRoomColorEvent.as
// Nome offuscato: _i229151c159c245

class a extends RoomEngineEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(a.ROOM_COLOR, r, o, d);
    this._color = t;
    this.var_3057 = i;
    this.var_4440 = s;
  }
  static {
    n(this, "RoomEngineRoomColorEvent");
  }
  static ROOM_COLOR = "REE_ROOM_COLOR";
  get color() {
    return this._color;
  }
  get brightness() {
    return this.var_3057;
  }
  get bgOnly() {
    return this.var_4440;
  }
}
