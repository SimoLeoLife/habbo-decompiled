// Estratto da HabboAirLauncher.deobf.js, riga 200544.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/freeflowchat/viewer/enum/ChatBubbleWidth.as
// Nome offuscato: _iacf874ac30f50e

class a {
  static {
    n(this, "ChatBubbleWidth");
  }
  static NORMAL = 350;
  static THIN = 240;
  static WIDE = 2e3;
  static accordingToRoomChatSetting(e) {
    switch (e) {
      case at._r95dc862ed837a8:
        return a.NORMAL;
      case at._rbe61fba9de54f3:
        return a.THIN;
      case at._r5ea9a0db632f69:
        return a.WIDE;
      default:
        return a.NORMAL;
    }
  }
}
