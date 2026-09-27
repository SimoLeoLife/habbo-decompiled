// Estratto da HabboAirLauncher.deobf.js, riga 161449.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetChatTypingMessage.as
// Nome offuscato: _i8883f968de1bc5

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetChatTypingMessage");
  }
  static TYPING_STATUS = "RWCTM_TYPING_STATUS";
  var_680;
  constructor(e) {
    (super(a.TYPING_STATUS), (this.var_680 = e));
  }
  get isTyping() {
    return this.var_680;
  }
}
