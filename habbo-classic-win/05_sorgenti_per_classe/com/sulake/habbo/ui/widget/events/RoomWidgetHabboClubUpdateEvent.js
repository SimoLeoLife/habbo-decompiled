// Extracted from HabboAirLauncher.deobf.js, line 160333.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetHabboClubUpdateEvent.as
// Obfuscated name: _i1319c3e5194dca

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(a.const_79, d, c);
    this._rc213862a5a8e4e = r;
    this._r7adc9208907f2a = t;
    this._r1e155e379259aa = i;
    this._r20e88b22bff84c = s;
    this.clubLevel = o;
  }
  static {
    n(this, "RoomWidgetHabboClubUpdateEvent");
  }
  static const_79 = "RWBIUE_HABBO_CLUB";
}
