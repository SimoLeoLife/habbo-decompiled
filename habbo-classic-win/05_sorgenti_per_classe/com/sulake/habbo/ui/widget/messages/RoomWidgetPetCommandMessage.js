// Extracted from HabboAirLauncher.deobf.js, line 161871.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetPetCommandMessage.as
// Obfuscated name: _icc997f75e3dd02

class extends RoomWidgetMessage {
  constructor(r, t, i = null) {
    super(r);
    this.petId = t;
    this.value = i;
  }
  static {
    n(this, "RoomWidgetPetCommandMessage");
  }
  static BREED_TRAIN_COMMAND_ID = 46;
  static PET_COMMAND = "RWPCM_PET_COMMAND";
  static REQUEST_COMMANDS = "RWPCM_REQUEST_PET_COMMANDS";
}
