// Extracted from HabboAirLauncher.deobf.js, line 161181.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetUpdateEffectsUpdateEvent.as
// Obfuscated name: _icbad873ac0e715

class a extends RoomWidgetUpdateEvent {
  constructor(r = null, t = !1, i = !1) {
    super(a.const_899, t, i);
    this.effects = r;
  }
  static {
    n(this, "RoomWidgetUpdateEffectsUpdateEvent");
  }
  static const_899 = "RWUEUE_UPDATE_EFFECTS";
}
