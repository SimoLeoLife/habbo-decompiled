// Estratto da HabboAirLauncher.deobf.js, riga 161955.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetRoomObjectMessage.as
// Nome offuscato: _i2911f85783abce

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetRoomObjectMessage");
  }
  static GET_AVATAR_LIST = "RWROM_GET_AVATAR_LIST";
  static GET_OBJECT_INFO = "RWROM_GET_OBJECT_INFO";
  static GET_OBJECT_NAME = "RWROM_GET_OBJECT_NAME";
  static GET_OWN_CHARACTER_INFO = "RWROM_GET_OWN_CHARACTER_INFO";
  static const_1117 = "RWROM_SELECT_OBJECT";
  _id;
  var_163;
  constructor(e, r, t) {
    (super(e), (this._id = r), (this.var_163 = t));
  }
  get id() {
    return this._id;
  }
  get category() {
    return this.var_163;
  }
}
