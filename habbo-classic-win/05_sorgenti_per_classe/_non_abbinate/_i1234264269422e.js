// Estratto da HabboAirLauncher.deobf.js, riga 181367.

class extends RoomObjectUpdateMessage {
  constructor(r, t, i, s = Number.NaN, o = !1, d = !1, c = Number.NaN, f = Number.NaN) {
    super(r, i);
    this.var_349 = t;
    this._animationTime = s;
    this._r46326350b52208 = o;
    this._skipPositionUpdate = d;
    this._rec99166323a31b = c;
    this._curveStrength = f;
  }
  static {
    n(this, "_i1234264269422e");
  }
  get targetLoc() {
    return this.var_349 ?? this.loc;
  }
  get _r9e15eba291e935() {
    return this.var_349;
  }
  get _ra842c511fa067c() {
    return this._r46326350b52208;
  }
  get _rff74398609cf6a() {
    return this._animationTime;
  }
  get _rd42ca276af45f8() {
    return this._skipPositionUpdate;
  }
  get _rea4fd85046c6f4() {
    return this._rec99166323a31b;
  }
  get _r17b77566c1fdcb() {
    return this._curveStrength;
  }
}
