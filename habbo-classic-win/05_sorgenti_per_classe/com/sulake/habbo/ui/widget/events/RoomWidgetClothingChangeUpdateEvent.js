// Extracted from HabboAirLauncher.deobf.js, line 160058.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetClothingChangeUpdateEvent.as
// Obfuscated name: _ia3ff0e0952ad19

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
