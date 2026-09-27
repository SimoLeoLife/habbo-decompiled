// Estratto da HabboAirLauncher.deobf.js, riga 285869.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/window/utils/AnimatedColor.as
// Nome offuscato: _i34b5455b6fee5a

class {
  static {
    n(this, "AnimatedColor");
  }
  _durationMs;
  _source = 0;
  var_2562 = 0;
  var_203 = 0;
  _value = 0;
  constructor(e) {
    this._durationMs = Math.max(0, Math.trunc(e));
  }
  get value() {
    return this._value;
  }
  var_1190(e, r) {
    let t = this.normalizeColor(e);
    ((this._source = t), (this.var_2562 = r), (this.var_203 = t), (this._value = t));
  }
  setTarget(e, r) {
    (this.update(r),
      (this._source = this._value),
      (this.var_2562 = r),
      (this.var_203 = this.normalizeColor(e)));
  }
  needsUpdate(e) {
    return this._value !== this.var_203;
  }
  update(e) {
    let r = this._value;
    if (this._durationMs === 0 || e >= this.var_2562 + this._durationMs)
      return ((this._value = this.var_203), r !== this._value);
    let t = Math.max(0, (e - this.var_2562) / this._durationMs);
    return (
      (this._value = this.fromRgb(
        this.interpolateChannel((this._source >> 16) & 255, (this.var_203 >> 16) & 255, t),
        this.interpolateChannel((this._source >> 8) & 255, (this.var_203 >> 8) & 255, t),
        this.interpolateChannel(this._source & 255, this.var_203 & 255, t),
      )),
      r !== this._value
    );
  }
  fromRgb(e, r, t) {
    return (e << 16) | (r << 8) | t;
  }
  interpolateChannel(e, r, t) {
    return Math.round(e + (r - e) * t);
  }
  normalizeColor(e) {
    return e & 16777215;
  }
}
