// Estratto da HabboAirLauncher.deobf.js, riga 70657.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineSoundMachineEvent.as
// Nome offuscato: _ide561b9394ea23

class extends RoomEngineObjectEvent {
  static {
    n(this, "RoomEngineSoundMachineEvent");
  }
  static SOUND_MACHINE_INIT = "ROSM_SOUND_MACHINE_INIT";
  static SOUND_MACHINE_SWITCHED_ON = "ROSM_SOUND_MACHINE_SWITCHED_ON";
  static SOUND_MACHINE_SWITCHED_OFF = "ROSM_SOUND_MACHINE_SWITCHED_OFF";
  static SOUND_MACHINE_DISPOSE = "ROSM_SOUND_MACHINE_DISPOSE";
  static JUKEBOX_INIT = "ROSM_JUKEBOX_INIT";
  static const_1035 = "ROSM_JUKEBOX_SWITCHED_ON";
  static const_1408 = "ROSM_JUKEBOX_SWITCHED_OFF";
  static const_73 = "ROSM_JUKEBOX_DISPOSE";
  constructor(e, r, t, i, s = !1, o = !1) {
    super(e, r, t, i, s, o);
  }
}
