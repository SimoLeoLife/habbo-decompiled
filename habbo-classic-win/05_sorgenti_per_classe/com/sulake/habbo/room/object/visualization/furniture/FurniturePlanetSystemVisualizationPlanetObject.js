// Estratto da HabboAirLauncher.deobf.js, riga 279317.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurniturePlanetSystemVisualizationPlanetObject.as
// Nome offuscato: _i2acdb34b9f83b6

class a {
  constructor(e, r, t, i, s, o) {
    this._name = e;
    this._index = r;
    this._radius = t;
    this._height = o;
    ((this._rc3fe3b86a34b68 = (i * Math.PI * 2) / 360), (this.var_4069 = (s * Math.PI * 2) / 360));
  }
  static {
    n(this, "FurniturePlanetSystemVisualizationPlanetObject");
  }
  static SYSTEM_TEMPO = 30;
  _position = 0;
  var_1892 = new k(0, 0, 0);
  _children = [];
  _rc3fe3b86a34b68;
  var_4069;
  get name() {
    return this._name;
  }
  dispose() {
    for (; this._children.length > 0;) this._children.shift()?.dispose();
  }
  update(e, r, t) {
    ((this._position += this._rc3fe3b86a34b68 / a.SYSTEM_TEMPO),
      (e[this._index] = this.getPositionVector(r, t)));
    for (let i of this._children) i.update(e, this.var_1892, t);
  }
  getPositionVector(e, r) {
    let t = this._radius * Math.cos(this._position + this.var_4069),
      i = this._radius * Math.sin(this._position + this.var_4069);
    return (
      (this.var_1892.x = (t - i) * (r / 2)),
      (this.var_1892.y = (i + t) * (r / 2) * 0.5 - this._height * (r / 2)),
      (this.var_1892.z = -Math.trunc(4 * (t + i) - 0.7)),
      e != null && this.var_1892.add(e),
      this.var_1892
    );
  }
  addChild(e) {
    this._children.includes(e) || this._children.push(e);
  }
  _rb7fafba2137ed2(e) {
    for (let r of this._children) if (r.name === e || r._rb7fafba2137ed2(e)) return !0;
    return !1;
  }
  _rf193bc18af5e2f(e) {
    for (let r of this._children) {
      if (r.name === e) return r;
      if (r._rb7fafba2137ed2(e)) return r._rf193bc18af5e2f(e);
    }
    return null;
  }
}
