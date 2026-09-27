// Extracted from HabboAirLauncher.deobf.js, line 158484.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/events/NewMessageEvent.as
// Obfuscated name: _ic5607a72e312d6

class a extends M {
  constructor(r, t) {
    super(a.NEW_INSTANT_MESSAGE, !1, !1);
    this.notify = r;
    this.senderId = t;
  }
  static {
    n(this, "NewMessageEvent");
  }
  static NEW_INSTANT_MESSAGE = "FBE_MESSAGE";
}
