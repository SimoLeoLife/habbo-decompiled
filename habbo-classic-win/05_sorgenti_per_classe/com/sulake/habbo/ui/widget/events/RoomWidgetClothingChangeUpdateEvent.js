// Estratto da HabboAirLauncher.deobf.js, riga 160058.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetClothingChangeUpdateEvent.as
// Nome offuscato: _ia3ff0e0952ad19

class extends RoomWidgetUpdateEvent {
  constructor(r, t = 0, i = 0, s = 0, o = !1, d = !1) {
    super(r, o, d);
    this.objectId = t;
    this.objectCategory = i;
    this.roomId = s;
  }
  static {
    n(this, "RoomWidgetClothingChangeUpdateEvent");
  }
  static SHOW_CLOTHING_EDITOR = "RWCCUE_SHOW_CLOTHING_EDITOR";
  static SHOW_GENDER_SELECTION = "RWCCUE_SHOW_GENDER_SELECTION";
}
