// Extracted from HabboAirLauncher.deobf.js, line 158771.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/events/ActiveConversationEvent.as
// Obfuscated name: _idbdba57ee3b03f

class extends M {
  constructor(r, t, i) {
    super(r, !1, !1);
    this.var_4825 = t;
    this._hasUnread = i;
  }
  static {
    n(this, "ActiveConversationEvent");
  }
  static ACTIVE_CONVERSATION_COUNT_CHANGED = "ACCE_changed";
}
