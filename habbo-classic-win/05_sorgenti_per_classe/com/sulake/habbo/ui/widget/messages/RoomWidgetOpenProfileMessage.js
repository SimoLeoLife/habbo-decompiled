// Estratto da HabboAirLauncher.deobf.js, riga 161854.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetOpenProfileMessage.as
// Nome offuscato: _ia84072880195f0

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
