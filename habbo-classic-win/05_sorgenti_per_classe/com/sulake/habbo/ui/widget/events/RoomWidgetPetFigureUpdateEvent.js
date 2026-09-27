// Extracted from HabboAirLauncher.deobf.js, line 160441.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPetFigureUpdateEvent.as
// Obfuscated name: _i025f24f3de1b6e

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.PET_FIGURE_UPDATE, i, s);
    this.var_3113 = r;
    this.var_39 = t;
  }
  static {
    n(this, "RoomWidgetPetFigureUpdateEvent");
  }
  static PET_FIGURE_UPDATE = "RWPIUE_PET_FIGURE_UPDATE";
  get petId() {
    return this.var_3113;
  }
  get image() {
    return this.var_39;
  }
}
