// Estratto da HabboAirLauncher.deobf.js, riga 160028.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetChatInputContentUpdateEvent.as
// Nome offuscato: _i1ab98fc3414912

class a extends RoomWidgetUpdateEvent {
  constructor(r, t = null, i = !1, s = !1) {
    super(a.CHAT_INPUT_CONTENT, i, s);
    this.messageType = r;
    this.userName = t;
  }
  static {
    n(this, "RoomWidgetChatInputContentUpdateEvent");
  }
  static CHAT_INPUT_CONTENT = "RWWCIDE_CHAT_INPUT_CONTENT";
  static MESSAGE_TYPE_SHOUT = "shout";
  static MESSAGE_TYPE_WHISPER = "whisper";
}
