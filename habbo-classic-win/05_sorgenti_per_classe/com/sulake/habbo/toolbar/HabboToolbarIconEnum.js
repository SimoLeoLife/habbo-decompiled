// Extracted from HabboAirLauncher.deobf.js, line 162364.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/HabboToolbarIconEnum.as
// Obfuscated name: _i9e8d2dfa2de5b8

class a {
  static {
    n(this, "HabboToolbarIconEnum");
  }
  static ACHIEVEMENTS = "HTIE_ICON_ACHIEVEMENTS";
  static BUILDER = "HTIE_ICON_BUILDER";
  static CAMERA = "HTIE_ICON_CAMERA";
  static CATALOGUE = "HTIE_ICON_CATALOGUE";
  static EXT_GROUP = "HTIE_EXT_GROUP";
  static GAMES = "HTIE_ICON_GAMES";
  static GUIDE = "HTIE_ICON_GUIDE";
  static HELP = "HTIE_ICON_HELP";
  static HOME = "HTIE_ICON_HOME";
  static INVENTORY = "HTIE_ICON_INVENTORY";
  static MEMENU = "HTIE_ICON_MEMENU";
  static NAVIGATOR = "HTIE_ICON_NAVIGATOR";
  static NAVIGATOR_ME_TAB = "HTIE_ICON_NAVIGATOR_ME_TAB";
  static PROGRESSION = "HTIE_ICON_PROGRESSION";
  static RECEPTION = "HTIE_ICON_RECEPTION";
  static ROOMINFO = "HTIE_ICON_ROOMINFO";
  static STORIES = "HTIE_ICON_STORIES";
  static WIRED_MENU = "HTIE_ICON_WIRED_MENU";
  static _TOOLBAR_NAMES = {
    [a.HELP]: "HELP",
    [a.NAVIGATOR]: "NAVIGATOR",
    [a.CATALOGUE]: "CATALOGUE",
    [a.INVENTORY]: "INVENTORY",
    [a.PROGRESSION]: "PROGRESSION",
    [a.ACHIEVEMENTS]: "ACHIEVEMENTS",
    [a.MEMENU]: "MEMENU",
    [a.GAMES]: "GAMES",
    [a.STORIES]: "STORIES",
    [a.RECEPTION]: "RECEPTION",
    [a.HOME]: "HOME",
    [a.GUIDE]: "GUIDE",
    [a.BUILDER]: "BUILDER",
    [a.CAMERA]: "CAMERA",
    [a.WIRED_MENU]: "WIRED_MENU",
  };
  static getIconName(e) {
    return a._TOOLBAR_NAMES[e] ?? "";
  }
}
