// Extracted from HabboAirLauncher.deobf.js, line 159278.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionFavouriteGroupUpdateEvent.as
// Obfuscated name: _i1aab59f7cc3022

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o, d = !1, c = !1) {
    super(a.const_309, r, d, c);
    this.var_3632 = t;
    this.var_5273 = i;
    this._status = s;
    this._habboGroupName = o;
  }
  static {
    n(this, "RoomSessionFavouriteGroupUpdateEvent");
  }
  static const_309 = "rsfgue_favourite_group_update";
  get roomIndex() {
    return this.var_3632;
  }
  get habboGroupId() {
    return this.var_5273;
  }
  get _rc51a040212eb56() {
    return this._habboGroupName;
  }
  get status() {
    return this._status;
  }
}
