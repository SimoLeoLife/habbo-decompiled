// Estratto da HabboAirLauncher.deobf.js, riga 70586.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineObjectPlaySoundEvent.as
// Nome offuscato: _i0e13e723840c9e

class extends RoomEngineObjectEvent {
  constructor(r, t, i, s, o, d = 1, c = !1, f = !1) {
    super(r, t, i, s);
    this.var_4394 = o;
    this.var_2260 = d;
  }
  static {
    n(this, "RoomEngineObjectPlaySoundEvent");
  }
  static PLAY_SOUND = "REPSE_PLAY_SOUND";
  static PLAY_SOUND_AT_PITCH = "REPSE_PLAY_SOUND_AT_PITCH";
  get soundId() {
    return this.var_4394;
  }
  get pitch() {
    return this.var_2260;
  }
}
