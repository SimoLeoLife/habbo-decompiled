// Extracted from HabboAirLauncher.deobf.js, line 160418.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetCommandsUpdateEvent.as
// Obfuscated name: _i7ea9cd93bd311d

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s = !1, o = !1) {
    super(a.PET_COMMANDS, s, o);
    this._id = r;
    this.var_2684 = t;
    this.var_2627 = i;
  }
  static {
    n(this, "RoomWidgetPetCommandsUpdateEvent");
  }
  static PET_COMMANDS = "RWPCUE_PET_COMMANDS";
  static OPEN_PET_TRAINING = "RWPCUE_OPEN_PET_TRAINING";
  static CLOSE_PET_TRAINING = "RWPCUE_CLOSE_PET_TRAINING";
  get id() {
    return this._id;
  }
  get _r779246794134a5() {
    return this.var_2684;
  }
  get _r67346f7e899abb() {
    return this.var_2627;
  }
}
