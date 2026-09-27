// Extracted from HabboAirLauncher.deobf.js, line 70444.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomEngineDimmerStateEvent.as
// Obfuscated name: _icc603d6edb30df

class a extends RoomEngineEvent {
  constructor(r, t, i, s, o, d, c, f = !1, l = !1) {
    super(a.const_67, r, f, l);
    this.var_344 = t;
    this._state = i;
    this.var_5046 = s;
    this.var_2503 = o;
    this._color = d;
    this.var_3057 = c;
  }
  static {
    n(this, "RoomEngineDimmerStateEvent");
  }
  static const_67 = "REDSE_ROOM_COLOR";
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
  get objectId() {
    return this.var_344;
  }
}
