// Estratto da HabboAirLauncher.deobf.js, riga 160752.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPlayListEditorEvent.as
// Nome offuscato: _ie386e16be415c5

class extends RoomWidgetUpdateEvent {
  constructor(r, t = -1, i = !1, s = !1) {
    super(r, i, s);
    this.furniId = t;
  }
  static {
    n(this, "RoomWidgetPlayListEditorEvent");
  }
  static const_1104 = "RWPLEE_HIDE_PLAYLIST_EDITOR";
  static INVENTORY_UPDATED = "RWPLEE_INVENTORY_UPDATED";
  static PLAY_LIST_FULL = "RWPLEE_PLAY_LIST_FULL";
  static PLAY_LIST_UPDATED = "RWPLEE_PLAY_LIST_UPDATED";
  static SHOW_PLAYLIST_EDITOR = "RWPLEE_SHOW_PLAYLIST_EDITOR";
  static SONG_DISK_INVENTORY_UPDATED = "RWPLEE_SONG_DISK_INVENTORY_UPDATED";
}
