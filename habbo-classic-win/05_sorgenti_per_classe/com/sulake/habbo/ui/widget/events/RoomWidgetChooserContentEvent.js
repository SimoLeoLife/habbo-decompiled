// Estratto da HabboAirLauncher.deobf.js, riga 160041.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetChooserContentEvent.as
// Nome offuscato: _icb2a21034d9d2b

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i = !1, s = !1, o = !1) {
    super(r, s, o);
    this.isAnyRoomController = i;
    this._items = t.slice();
  }
  static {
    n(this, "RoomWidgetChooserContentEvent");
  }
  static FURNI_CHOOSER_CONTENT = "RWCCE_FURNI_CHOOSER_CONTENT";
  static FURNI_CHOOSER_CONTENT_ADD = "RWCCE_FURNI_CHOOSER_CONTENT_ADD";
  static USER_CHOOSER_CONTENT = "RWCCE_USER_CHOOSER_CONTENT";
  _items;
  get items() {
    return this._items;
  }
}
