// Extracted from HabboAirLauncher.deobf.js, line 158425.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/ActiveConversationsCountEvent.as
// Obfuscated name: _i2e425bff3e7315

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
