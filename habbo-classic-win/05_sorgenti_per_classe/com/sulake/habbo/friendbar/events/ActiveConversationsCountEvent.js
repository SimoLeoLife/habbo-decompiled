// Estratto da HabboAirLauncher.deobf.js, riga 158425.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/ActiveConversationsCountEvent.as
// Nome offuscato: _i2e425bff3e7315

class a extends M {
  constructor(r, t) {
    super(a.ACTIVE_MESSENGER_CONVERSATION_EVENT);
    this.var_4825 = r;
    this._hasUnread = t;
  }
  static {
    n(this, "ActiveConversationsCountEvent");
  }
  static ACTIVE_MESSENGER_CONVERSATION_EVENT = "AMC_EVENT";
}
