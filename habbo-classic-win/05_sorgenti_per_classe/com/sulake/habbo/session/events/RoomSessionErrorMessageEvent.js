// Estratto da HabboAirLauncher.deobf.js, riga 159254.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionErrorMessageEvent.as
// Nome offuscato: _i0b8cba6725ba5d

class extends RoomSessionEvent {
  constructor(r, t, i = null, s = !1, o = !1) {
    super(r, t, s, o);
    this.var_1065 = i;
  }
  static {
    n(this, "RoomSessionErrorMessageEvent");
  }
  static KICKED_BY_OWNER = "RSEME_KICKED";
  static PETS_FORBIDDEN_IN_HOTEL = "RSEME_PETS_FORBIDDEN_IN_HOTEL";
  static PETS_FORBIDDEN_IN_FLAT = "RSEME_PETS_FORBIDDEN_IN_FLAT";
  static MAX_NUMBER_OF_PETS = "RSEME_MAX_PETS";
  static MAX_NUMBER_OF_OWN_PETS = "RSEME_MAX_NUMBER_OF_OWN_PETS";
  static NO_FREE_TILES_FOR_PET = "RSEME_NO_FREE_TILES_FOR_PET";
  static SELECTED_TILE_NOT_FREE_FOR_PET = "RSEME_SELECTED_TILE_NOT_FREE_FOR_PET";
  static BOTS_FORBIDDEN_IN_HOTEL = "RSEME_BOTS_FORBIDDEN_IN_HOTEL";
  static BOTS_FORBIDDEN_IN_FLAT = "RSEME_BOTS_FORBIDDEN_IN_FLAT";
  static BOT_LIMIT_REACHED = "RSEME_BOT_LIMIT_REACHED";
  static const_666 = "RSEME_SELECTED_TILE_NOT_FREE_FOR_BOT";
  static BOT_NAME_NOT_ACCEPTED = "RSEME_BOT_NAME_NOT_ACCEPTED";
  get message() {
    return this.var_1065;
  }
}
