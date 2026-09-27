// Estratto da HabboAirLauncher.deobf.js, riga 161916.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetPollMessage.as
// Nome offuscato: _i2b5fc8d2a3e644

class extends RoomWidgetMessage {
  constructor(r, t) {
    super(r);
    this.id = t;
  }
  static {
    n(this, "RoomWidgetPollMessage");
  }
  static ANSWER = "RWPM_ANSWER";
  static REJECT = "RWPM_REJECT";
  static START = "RWPM_START";
  _re812cd9299d86c = 0;
  _r44ca599613a61a = null;
}
