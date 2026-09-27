// Estratto da HabboAirLauncher.deobf.js, riga 159566.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionPresentEvent.as
// Nome offuscato: _if2c352b907d139

class extends RoomSessionEvent {
  constructor(r, t, i, s, o, d, c, f, l, b = !1, _ = !1) {
    super(r, t, b, _);
    this.var_1062 = i;
    this.var_828 = s;
    this._productCode = o;
    this.var_191 = d;
    this.var_1059 = c;
    this._redd20a0b59a048 = f;
    this._petFigureString = l;
  }
  static {
    n(this, "RoomSessionPresentEvent");
  }
  static ROOM_SESSION_PRESENT_OPENED = "RSPE_PRESENT_OPENED";
  get classId() {
    return this.var_1062;
  }
  get itemType() {
    return this.var_828;
  }
  get _raeb033db5aa083() {
    return this._productCode;
  }
  get _r2c53800a52f206() {
    return this.var_191;
  }
  get _rc6f3ed5751b766() {
    return this.var_1059;
  }
  get _r176bfeda3ea21e() {
    return this._redd20a0b59a048;
  }
  get _r48777043299a0c() {
    return this._petFigureString;
  }
}
