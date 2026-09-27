// Estratto da HabboAirLauncher.deobf.js, riga 161381.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetChangePostureMessage.as
// Nome offuscato: _i9656bf7acfc73e

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetChangePostureMessage");
  }
  static POSTURE_SIT = 1;
  static POSTURE_STAND = 0;
  static WIDGET_MESSAGE_CHANGE_POSTURE = "RWCPM_MESSAGE_CHANGE_POSTURE";
  var_391;
  constructor(e) {
    (super(a.WIDGET_MESSAGE_CHANGE_POSTURE), (this.var_391 = e));
  }
  get posture() {
    return this.var_391;
  }
}
