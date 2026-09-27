// Estratto da HabboAirLauncher.deobf.js, riga 161742.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetGetObjectLocationMessage.as
// Nome offuscato: _ife79eaca438904

class extends RoomWidgetMessage {
  constructor(r, t, i) {
    super(r);
    this.objectId = t;
    this.objectType = i;
  }
  static {
    n(this, "RoomWidgetGetObjectLocationMessage");
  }
  static const_1052 = "RWGOI_MESSAGE_GET_GAME_OBJECT_LOCATION";
  static const_284 = "RWGOI_MESSAGE_GET_OBJECT_LOCATION";
}
