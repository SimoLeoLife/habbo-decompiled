// Extracted from HabboAirLauncher.deobf.js, line 180914.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectSamplePlaybackEvent.as
// Obfuscated name: _ie8ed8cfac2bf75

class extends RoomObjectFurnitureActionEvent {
  constructor(r, t, i, s = 1, o = !1, d = !1) {
    super(r, t, o, d);
    this.var_2756 = i;
    this.var_2260 = s;
  }
  static {
    n(this, "RoomObjectSamplePlaybackEvent");
  }
  static CHANGE_PITCH = "ROPSPE_CHANGE_PITCH";
  static PLAY_SAMPLE = "ROPSPE_PLAY_SAMPLE";
  static ROOM_OBJECT_DISPOSED = "ROPSPE_ROOM_OBJECT_DISPOSED";
  static ROOM_OBJECT_INITIALIZED = "ROPSPE_ROOM_OBJECT_INITIALIZED";
  get sampleId() {
    return this.var_2756;
  }
  get pitch() {
    return this.var_2260;
  }
}
