// Estratto da HabboAirLauncher.deobf.js, riga 160675.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetLevelUpdateEvent.as
// Nome offuscato: _i7647a6d0b52f13

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.PET_LEVEL_UPDATE, i, s);
    this.var_3113 = r;
    this.var_1655 = t;
  }
  static {
    n(this, "RoomWidgetPetLevelUpdateEvent");
  }
  static PET_LEVEL_UPDATE = "RWPLUE_PET_LEVEL_UPDATE";
  get petId() {
    return this.var_3113;
  }
  get level() {
    return this.var_1655;
  }
}
