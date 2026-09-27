// Estratto da HabboAirLauncher.deobf.js, riga 159061.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionChatEvent.as
// Nome offuscato: _i2ba5a6e5c8c678

class a extends RoomSessionEvent {
  constructor(r, t, i, s, o = a.CHAT_TYPE_SPEAK, d = 0, c = null, f = -1, l = at.const_1293) {
    super(r, t, !1, !1);
    this._userId = i;
    this._text = s;
    this.var_4535 = o;
    this._style = d;
    this.var_2803 = c;
    this.var_645 = f;
    this._chatBubbleWidthOverride = l;
  }
  static {
    n(this, "RoomSessionChatEvent");
  }
  static CHAT_TYPE_HAND_ITEM_RECEIVED = 5;
  static CHAT_TYPE_MUTE_REMAINING = 10;
  static CHAT_TYPE_PING = 11;
  static CHAT_TYPE_PET_REBREED_FERTILIZE = 8;
  static CHAT_TYPE_PET_SPEED_FERTILIZE = 9;
  static CHAT_TYPE_PETRESPECT = 4;
  static CHAT_TYPE_PETREVIVE = 7;
  static CHAT_TYPE_SPECIAL_SYSTEM = 12;
  static CHAT_TYPE_PETTREAT = 6;
  static CHAT_TYPE_RESPECT = 3;
  static CHAT_TYPE_SHOUT = 2;
  static CHAT_TYPE_SPEAK = 0;
  static CHAT_TYPE_WHISPER = 1;
  static ROOM_SESSION_CHAT_EVENT = "RSCE_CHAT_EVENT";
  static ROOM_SESSION_FLOODCONTROL_EVENT = "RSCE_FLOOD_EVENT";
  get userId() {
    return this._userId;
  }
  get text() {
    return this._text;
  }
  get chatType() {
    return this.var_4535;
  }
  get links() {
    return this.var_2803;
  }
  get extraParam() {
    return this.var_645;
  }
  get style() {
    return this._style;
  }
  get _r16bf11e1236c9d() {
    return this._chatBubbleWidthOverride;
  }
}
