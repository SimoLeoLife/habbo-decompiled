// Estratto da HabboAirLauncher.deobf.js, riga 376904.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/utils/class_4245.as
// Nome offuscato: _i634e10e3784548

class a {
  static {
    n(this, "class_4245");
  }
  static const_1138 = 1e8;
  _x = 0;
  _y = 0;
  _z = 0;
  _sprite = null;
  name = "";
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e;
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e;
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e;
  }
  get sprite() {
    return this._sprite;
  }
  set sprite(e) {
    this._sprite = e;
  }
  dispose() {
    ((this._sprite = null), (this._z = -a.const_1138));
  }
}
