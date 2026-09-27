// Estratto da HabboAirLauncher.deobf.js, riga 169789.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/geometry/GeometryItem.as
// Nome offuscato: _i9cf08a11423103

class extends Node3D {
  static {
    n(this, "GeometryItem");
  }
  _id;
  _radius;
  _normal;
  _isDoubleSided = !1;
  _isDynamic = !1;
  constructor(e, r = !1) {
    (super(_iad9be79b4e3584(e, "x"), _iad9be79b4e3584(e, "y"), _iad9be79b4e3584(e, "z")),
      (this._id = _ifdbe20062cc5b0(e, "id")),
      (this._radius = _iad9be79b4e3584(e, "radius")),
      (this._normal = new Gu(_iad9be79b4e3584(e, "nx"), _iad9be79b4e3584(e, "ny"), _iad9be79b4e3584(e, "nz"))),
      (this._isDoubleSided = _i68c84906b18730(e, "double")),
      (this._isDynamic = r));
  }
  getDistance(e) {
    let r = Math.abs(e.z - this.transformedLocation.z - this._radius),
      t = Math.abs(e.z - this.transformedLocation.z + this._radius);
    return Math.min(r, t);
  }
  get id() {
    return this._id;
  }
  get normal() {
    return this._normal;
  }
  get isDoubleSided() {
    return this._isDoubleSided;
  }
  get isDynamic() {
    return this._isDynamic;
  }
  toString() {
    return `${this._id}: ${this.location} - ${this.transformedLocation}`;
  }
}
