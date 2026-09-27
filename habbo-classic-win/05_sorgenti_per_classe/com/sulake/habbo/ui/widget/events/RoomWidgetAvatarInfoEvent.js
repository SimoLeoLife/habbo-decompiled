// Extracted from HabboAirLauncher.deobf.js, line 160014.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetAvatarInfoEvent.as
// Obfuscated name: _ica6d1e55cb40d3

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(a.AVATAR_INFO, d, c);
    this.userId = r;
    this.userName = t;
    this.userType = i;
    this.roomIndex = s;
    this.allowNameChange = o;
  }
  static {
    n(this, "RoomWidgetAvatarInfoEvent");
  }
  static AVATAR_INFO = "RWAIE_AVATAR_INFO";
}
