// Estratto da HabboAirLauncher.deobf.js, riga 180872.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectPlaySoundIdEvent.as
// Nome offuscato: _i05c9bf0603b298

class extends RoomObjectFurnitureActionEvent {
  constructor(r, t, i, s = 1, o = !1, d = !1) {
    super(r, t, o, d);
    this.var_4394 = i;
    this.var_2260 = s;
  }
  static {
    n(this, "RoomObjectPlaySoundIdEvent");
  }
  static PLAY_SOUND = "ROPSIE_PLAY_SOUND";
  static PLAY_SOUND_AT_PITCH = "ROPSIE_PLAY_SOUND_AT_PITCH";
  get soundId() {
    return this.var_4394;
  }
  get pitch() {
    return this.var_2260;
  }
}
