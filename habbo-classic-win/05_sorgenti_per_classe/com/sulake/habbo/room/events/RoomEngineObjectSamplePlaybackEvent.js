// Estratto da HabboAirLauncher.deobf.js, riga 70604.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineObjectSamplePlaybackEvent.as
// Nome offuscato: _i7e680fdeec6640

class extends RoomEngineObjectEvent {
  constructor(r, t, i, s, o, d = 1, c = !1, f = !1) {
    super(r, t, i, s);
    this.var_2756 = o;
    this.var_2260 = d;
  }
  static {
    n(this, "RoomEngineObjectSamplePlaybackEvent");
  }
  static ROOM_OBJECT_INITIALIZED = "REOSPE_ROOM_OBJECT_INITIALIZED";
  static ROOM_OBJECT_DISPOSED = "REOSPE_ROOM_OBJECT_DISPOSED";
  static PLAY_SAMPLE = "REOSPE_PLAY_SAMPLE";
  static CHANGE_PITCH = "REOSPE_CHANGE_PITCH";
  get sampleId() {
    return this.var_2756;
  }
  get pitch() {
    return this.var_2260;
  }
}
