// Extracted from HabboAirLauncher.deobf.js, line 319356.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/trophy/AchievementResolutionTrophyFurniWidget.as
// Obfuscated name: _i52f30627109492

class extends RoomWidgetBase {
  constructor(r, t, i, s, o) {
    super(r, t, i, s);
    this._configuration = o;
  }
  static {
    n(this, "AchievementResolutionTrophyFurniWidget");
  }
  _name = "";
  var_1696 = "";
  var_1065 = "";
  _r4d80ee570bb841 = "";
  _r202198bf08513d = tn._r54508071f4d27b(tn.GOLD);
  _r1bd877b0f0c0ec = tn.GOLD;
  _backgroundColor = tn.DEFAULT_BACKGROUND_TINT;
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
    return this._backgroundColor;
  }
  get frameTitle() {
    return this._r4d80ee570bb841;
  }
  get _headerColor() {
    return this._r202198bf08513d;
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
      (r.addEventListener?.(RoomWidgetAchievementResolutionTrophyDataUpdateEvent.UPDATE_TROPHY_DATA, this._r89f0690ee52550), super.registerUpdateEvents(r));
  }
  unregisterUpdateEvents(r) {
    r?.removeEventListener?.(RoomWidgetAchievementResolutionTrophyDataUpdateEvent.UPDATE_TROPHY_DATA, this._r89f0690ee52550);
  }
  _r89f0690ee52550 = n((r) => {
    ((this._name = r.name),
      (this.var_1696 = r.date),
      (this.var_1065 = r.message),
      (this._r9213a44374ce7e = r.var_3948),
      (this._r1bd877b0f0c0ec = tn.normalize(
        r._r17fe2fbbdc1d1b >= 0 ? r._r17fe2fbbdc1d1b : Math.trunc(r.color) - 1,
      )),
      (this._r4d80ee570bb841 =
        r.frameTitle !== ""
          ? r.frameTitle
          : (this.localizations?.getLocalization("widget.furni.trophy.title", "Trophy") ?? "Trophy")),
      (this._r202198bf08513d =
        r._headerColor !== 0 ? r._headerColor : tn._r54508071f4d27b(this._r1bd877b0f0c0ec)),
      (this._backgroundColor = r.backgroundColor !== 0 ? r.backgroundColor : tn.DEFAULT_BACKGROUND_TINT),
      this.updateInterface());
  }, "_r89f0690ee52550");
  updateInterface() {
    switch ((this._view?.dispose(), this._r9213a44374ce7e)) {
      default:
        this._view = new TrophyView(this);
    }
    this._view.showInterface();
  }
}
