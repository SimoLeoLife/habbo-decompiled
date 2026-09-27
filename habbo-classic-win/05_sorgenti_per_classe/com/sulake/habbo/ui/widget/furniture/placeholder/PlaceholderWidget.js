// Estratto da HabboAirLauncher.deobf.js, riga 318347.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/placeholder/PlaceholderWidget.as
// Nome offuscato: _i12c58bc80d1a99

class extends RoomWidgetBase {
  static {
    n(this, "PlaceholderWidget");
  }
  _view = null;
  constructor(e, r, t = null, i = null) {
    super(e, r, t, i);
  }
  dispose() {
    (this._view?.dispose(), (this._view = null), super.dispose());
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetShowPlaceholderEvent.SHOW_PLACEHOLDER, this._r9ea7de2c6a2f03), super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e?.removeEventListener?.(RoomWidgetShowPlaceholderEvent.SHOW_PLACEHOLDER, this._r9ea7de2c6a2f03);
  }
  _r9ea7de2c6a2f03 = n((e) => {
    this.showInterface();
  }, "_r9ea7de2c6a2f03");
  showInterface() {
    (this._view == null && (this._view = new PlaceholderView(this.assets, this.windowManager)),
      this._view.showWindow());
  }
}
