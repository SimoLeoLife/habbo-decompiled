// Estratto da HabboAirLauncher.deobf.js, riga 161396.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetChatMessage.as
// Nome offuscato: _i9403852188305a

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetChatMessage");
  }
  static CHAT_TYPE_SHOUT = 2;
  static CHAT_TYPE_SPEAK = 0;
  static CHAT_TYPE_WHISPER = 1;
  static WIDGET_MESSAGE_CHAT = "RWCM_MESSAGE_CHAT";
  var_4535;
  _text;
  _recipientName;
  var_3616;
  constructor(e, r, t = a.CHAT_TYPE_SPEAK, i = "", s = 0) {
    (super(e),
      (this._text = r),
      (this.var_4535 = t),
      (this._recipientName = i),
      (this.var_3616 = s));
  }
  get chatType() {
    return this.var_4535;
  }
  get text() {
    return this._text;
  }
  get _r5aa2a2ba87ba6f() {
    return this._recipientName;
  }
  get styleId() {
    return this.var_3616;
  }
}
