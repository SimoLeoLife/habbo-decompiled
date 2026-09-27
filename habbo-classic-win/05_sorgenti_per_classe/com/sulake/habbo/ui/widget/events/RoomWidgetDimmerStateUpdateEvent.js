// Extracted from HabboAirLauncher.deobf.js, line 160143.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetDimmerStateUpdateEvent.as
// Obfuscated name: _i26b919b971d9f3

class a extends RoomWidgetUpdateEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(a.const_67, c, f);
    this.var_344 = r;
    this._state = t;
    this.var_5046 = i;
    this.var_2503 = s;
    this._color = o;
    this.var_3057 = d;
  }
  static {
    n(this, "RoomWidgetDimmerStateUpdateEvent");
  }
  static const_67 = "RWDSUE_DIMMER_STATE";
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
