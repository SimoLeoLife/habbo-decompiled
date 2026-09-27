// Estratto da HabboAirLauncher.deobf.js, riga 180752.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectDimmerStateUpdateEvent.as
// Nome offuscato: _i0b05b553fd9d92

class a extends RoomObjectEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(a.const_67, r, c, f);
    this._state = t;
    this.var_5046 = i;
    this.var_2503 = s;
    this._color = o;
    this.var_3057 = d;
  }
  static {
    n(this, "RoomObjectDimmerStateUpdateEvent");
  }
  static const_67 = "RODSUE_DIMMER_STATE";
  get state() {
    return this._state;
  }
  get _r906ad459546ee7() {
    return this.var_5046;
  }
  get effectId() {
    return this.var_2503;
  }
  get color() {
    return this._color;
  }
  get brightness() {
    return this.var_3057;
  }
}
