// Estratto da HabboAirLauncher.deobf.js, riga 160014.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetAvatarInfoEvent.as
// Nome offuscato: _ica6d1e55cb40d3

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
