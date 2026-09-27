// Extracted from HabboAirLauncher.deobf.js, line 161144.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetToolbarClickedUpdateEvent.as
// Obfuscated name: _ic39f15ceaa820c

class a extends RoomWidgetUpdateEvent {
  constructor(r, t = !1, i = !1, s = !1) {
    super(a.REQUEST_ME_MENU_TOOLBAR_CLICKED_EVENT, i, s);
    this._r3bca5bc54b4260 = r;
    this.active = t;
  }
  static {
    n(this, "RoomWidgetToolbarClickedUpdateEvent");
  }
  static ICON_TYPE_ME_MENU = "ICON_TYPE_ME_MENU";
  static ICON_TYPE_ROOM_INFO = "ICON_TYPE_ROOM_INFO";
  static REQUEST_ME_MENU_TOOLBAR_CLICKED_EVENT = "RWUE_REQUEST_ME_MENU_TOOLBAR_CLICKED";
}
