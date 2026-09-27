// Extracted from HabboAirLauncher.deobf.js, line 160975.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetRentableBotSkillListUpdateEvent.as
// Obfuscated name: _i682a2fdd6da34a

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1) {
    super(a.SKILL_LIST, i, s);
    this.botId = r;
    this._r4477d7dca92621 = t;
  }
  static {
    n(this, "RoomWidgetRentableBotSkillListUpdateEvent");
  }
  static SKILL_LIST = "RWRBSLUE_SKILL_LIST";
}
