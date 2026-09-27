// Estratto da HabboAirLauncher.deobf.js, riga 158771.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/messenger/events/ActiveConversationEvent.as
// Nome offuscato: _idbdba57ee3b03f

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
