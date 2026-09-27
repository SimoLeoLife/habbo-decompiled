// Estratto da HabboAirLauncher.deobf.js, riga 161327.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetMessage.as
// Nome offuscato: _ic890471105ecf8

class {
  static {
    n(this, "RoomWidgetMessage");
  }
  static WIDGET_MESSAGE_TEST = "RWM_MESSAGE_TEST";
  _type;
  constructor(e) {
    this._type = e;
  }
  get type() {
    return this._type;
  }
}
