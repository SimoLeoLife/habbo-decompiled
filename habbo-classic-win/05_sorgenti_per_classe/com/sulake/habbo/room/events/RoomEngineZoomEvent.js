// Extracted from HabboAirLauncher.deobf.js, line 70691.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineZoomEvent.as
// Obfuscated name: _i7a5a6743cace4a

class a extends RoomEngineEvent {
  constructor(r, t, i = !1, s = !1, o = !1) {
    super(a.ROOM_ZOOM, r, s, o);
    this.var_1655 = t;
    this.var_5660 = i;
  }
  static {
    n(this, "RoomEngineZoomEvent");
  }
  static ROOM_ZOOM = "REE_ROOM_ZOOM";
  get level() {
    return this.var_1655;
  }
  get isFlipForced() {
    return this.var_5660;
  }
}
