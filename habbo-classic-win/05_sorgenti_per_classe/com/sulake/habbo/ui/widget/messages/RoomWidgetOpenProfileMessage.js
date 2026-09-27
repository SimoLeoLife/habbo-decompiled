// Extracted from HabboAirLauncher.deobf.js, line 161854.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetOpenProfileMessage.as
// Obfuscated name: _ia84072880195f0

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetOpenProfileMessage");
  }
  static const_1290 = "RWOPEM_OPEN_USER_PROFILE";
  _userId;
  var_5396;
  constructor(e, r, t) {
    (super(e), (this._userId = r), (this.var_5396 = t));
  }
  get userId() {
    return this._userId;
  }
  get trackingLocation() {
    return this.var_5396;
  }
}
