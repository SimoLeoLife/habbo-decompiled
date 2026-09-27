// Estratto da HabboAirLauncher.deobf.js, riga 319501.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/trophy/TrophyFurniWidget.as
// Nome offuscato: _if225c4fdd9e945

class a extends RoomWidgetBase {
  constructor(r, t, i, s, o) {
    super(r, t, i, s);
    this._configuration = o;
  }
  static {
    n(this, "TrophyFurniWidget");
  }
  static VIEW_NIKO_SILVER = 10;
  static VIEW_NIKO_GOLD = 20;
  _name = "";
  var_1696 = "";
  var_1065 = "";
  _r1bd877b0f0c0ec = tn.GOLD;
  _view = null;
  _r9213a44374ce7e = 0;
  get name() {
    return this._name;
  }
  get date() {
    return this.var_1696;
  }
  get message() {
    return this.var_1065;
  }
  get color() {
    return tn.DEFAULT_BACKGROUND_TINT;
  }
  get frameTitle() {
    return this.localizations?.getLocalization("widget.furni.trophy.title", "Trophy") ?? "Trophy";
  }
  get _headerColor() {
    return tn._r54508071f4d27b(this._r1bd877b0f0c0ec);
  }
  get _r17fe2fbbdc1d1b() {
    return this._r1bd877b0f0c0ec;
  }
  get configuration() {
    return this._configuration;
  }
  dispose() {
    (this._view?.dispose(), (this._view = null), (this._configuration = null), super.dispose());
  }
  registerUpdateEvents(r) {
    r != null &&
      (r.addEventListener?.(RoomWidgetTrophyDataUpdateEvent.UPDATE_TROPHY_DATA, this._r89f0690ee52550), super.registerUpdateEvents(r));
  }
  unregisterUpdateEvents(r) {
    r?.removeEventListener?.(RoomWidgetTrophyDataUpdateEvent.UPDATE_TROPHY_DATA, this._r89f0690ee52550);
  }
  _r89f0690ee52550 = n((r) => {
    ((this._name = r.name),
      (this.var_1696 = r.date),
      (this.var_1065 = r.message),
      (this._r1bd877b0f0c0ec = tn.normalize(r.color - 1)),
      (this._r9213a44374ce7e = r.var_3948),
      this.updateInterface());
  }, "_r89f0690ee52550");
  updateInterface() {
    switch ((this._view?.dispose(), this._r9213a44374ce7e)) {
      case a.VIEW_NIKO_GOLD:
      case a.VIEW_NIKO_SILVER:
        this._view = new NikoTrophyView(this, this._r9213a44374ce7e);
        break;
      default:
        this._view = new TrophyView(this);
    }
    this._view.showInterface();
  }
}
