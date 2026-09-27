// Estratto da HabboAirLauncher.deobf.js, riga 161653.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetFurniActionMessage.as
// Nome offuscato: _i8ae8cc81172b69

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetFurniActionMessage");
  }
  static const_1405 = "RWFAM_EJECT";
  static MOVE = "RWFAM_MOVE";
  static const_837 = "RWFAM_PICKUP";
  static ROTATE = "RWFUAM_ROTATE";
  static SAVE_STUFF_DATA = "RWFAM_SAVE_STUFF_DATA";
  static USE = "RWFAM_USE";
  static const_126 = "RWFAM_WIRED_INSPECT";
  var_2287;
  var_5448;
  _offerId;
  var_4982;
  constructor(e, r, t, i = -1, s = null) {
    (super(e),
      (this.var_2287 = r),
      (this.var_5448 = t),
      (this._offerId = i),
      (this.var_4982 = s));
  }
  get furniId() {
    return this.var_2287;
  }
  get _rff5343f27e8e24() {
    return this.var_5448;
  }
  get objectData() {
    return this.var_4982;
  }
  get offerId() {
    return this._offerId;
  }
}
