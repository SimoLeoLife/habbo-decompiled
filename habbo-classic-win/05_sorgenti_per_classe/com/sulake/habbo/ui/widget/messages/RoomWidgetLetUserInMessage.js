// Estratto da HabboAirLauncher.deobf.js, riga 161772.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetLetUserInMessage.as
// Nome offuscato: _if5640ae59f807f

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetLetUserInMessage");
  }
  static LET_USER_IN = "RWLUIM_LET_USER_IN";
  _userName;
  var_5673;
  constructor(e, r) {
    (super(a.LET_USER_IN), (this._userName = e), (this.var_5673 = r));
  }
  get userName() {
    return this._userName;
  }
  get canEnter() {
    return this.var_5673;
  }
}
