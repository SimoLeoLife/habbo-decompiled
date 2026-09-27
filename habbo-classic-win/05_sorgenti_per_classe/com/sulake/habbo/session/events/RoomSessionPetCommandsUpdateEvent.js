// Extracted from HabboAirLauncher.deobf.js, line 159379.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPetCommandsUpdateEvent.as
// Obfuscated name: _i02af583ad41a98

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o = !1, d = !1) {
    super(a.PET_COMMANDS, r, o, d);
    this.var_3113 = t;
    this.var_4812 = i;
    this.var_5501 = s;
  }
  static {
    n(this, "RoomSessionPetCommandsUpdateEvent");
  }
  static PET_COMMANDS = "RSPIUE_ENABLED_PET_COMMANDS";
  get petId() {
    return this.var_3113;
  }
  get _r779246794134a5() {
    return this.var_4812;
  }
  get _r67346f7e899abb() {
    return this.var_5501;
  }
}
