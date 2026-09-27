// Estratto da HabboAirLauncher.deobf.js, riga 160852.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetPresentDataUpdateEvent.as
// Nome offuscato: _i4f603d10898f78

class extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s = !1, o = null, d = null, c = null, f = !1, l = !1, b = !1) {
    super(r, f, l);
    this.var_344 = t;
    this._text = i;
    this.var_63 = s;
    this._r9e6c79bfefef63 = o;
    this._purchaserName = d;
    this.var_5353 = c;
    this.var_3063 = b;
  }
  static {
    n(this, "RoomWidgetPresentDataUpdateEvent");
  }
  static UPDATE_PACKAGEINFO = "RWPDUE_PACKAGEINFO";
  static const_128 = "RWPDUE_CONTENTS";
  static const_470 = "RWPDUE_CONTENTS_CLUB";
  static const_1073 = "RWPDUE_CONTENTS_FLOOR";
  static UPDATE_CONTENTS_LANDSCAPE = "RWPDUE_CONTENTS_LANDSCAPE";
  static UPDATE_CONTENTS_WALLPAPER = "RWPDUE_CONTENTS_WALLPAPER";
  static UPDATE_CONTENTS_IMAGE = "RWPDUE_CONTENTS_IMAGE";
  var_1062 = 0;
  var_828 = "";
  var_191 = -1;
  var_1059 = "";
  _redd20a0b59a048;
  get objectId() {
    return this.var_344;
  }
  get classId() {
    return this.var_1062;
  }
  set classId(r) {
    this.var_1062 = r;
  }
  get itemType() {
    return this.var_828;
  }
  set itemType(r) {
    this.var_828 = r;
  }
  get text() {
    return this._text;
  }
  get controller() {
    return this.var_63;
  }
  get _r9b96440f25f1f8() {
    return this._r9e6c79bfefef63;
  }
  get _r650357badb431d() {
    return this._purchaserName;
  }
  get _r1e91157013a14e() {
    return this.var_5353;
  }
  get _r2c53800a52f206() {
    return this.var_191;
  }
  set _r2c53800a52f206(r) {
    this.var_191 = r;
  }
  get _r176bfeda3ea21e() {
    return this._redd20a0b59a048;
  }
  set _r176bfeda3ea21e(r) {
    this._redd20a0b59a048 = r;
  }
  get _rc6f3ed5751b766() {
    return this.var_1059;
  }
  set _rc6f3ed5751b766(r) {
    this.var_1059 = r;
  }
  get _rfc5c7e8c5fbb3e() {
    return this.var_3063;
  }
}
