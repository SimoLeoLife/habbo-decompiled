// Estratto da HabboAirLauncher.deobf.js, riga 159175.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionDimmerPresetsEventPresetItem.as
// Nome offuscato: _i8426cd0b3cd690

class {
  constructor(e, r, t, i) {
    this._id = e;
    this._type = r;
    this._color = t;
    this.var_1803 = i;
  }
  static {
    n(this, "RoomSessionDimmerPresetsEventPresetItem");
  }
  get id() {
    return this._id;
  }
  get type() {
    return this._type;
  }
  get color() {
    return this._color;
  }
  get light() {
    return this.var_1803;
  }
}
