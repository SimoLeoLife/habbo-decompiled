// Estratto da HabboAirLauncher.deobf.js, riga 180725.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectBadgeAssetEvent.as
// Nome offuscato: _i8648eb6df0e7e4

class extends RoomObjectEvent {
  constructor(r, t, i, s = !0, o = !1, d = !1) {
    super(r, t, o, d);
    this.var_595 = i;
    this.var_5168 = s;
  }
  static {
    n(this, "RoomObjectBadgeAssetEvent");
  }
  static LOAD_BADGE = "ROGBE_LOAD_BADGE";
  get badgeId() {
    return this.var_595;
  }
  get groupBadge() {
    return this.var_5168;
  }
}
