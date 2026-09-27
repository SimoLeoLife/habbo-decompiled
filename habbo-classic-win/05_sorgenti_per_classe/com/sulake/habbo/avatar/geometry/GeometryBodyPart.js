// Estratto da HabboAirLauncher.deobf.js, riga 169827.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/geometry/GeometryBodyPart.as
// Nome offuscato: _if1bfae441c74ac

class extends Node3D {
  static {
    n(this, "GeometryBodyPart");
  }
  _id;
  _parts = new Map();
  _radius;
  _dynamicParts = new WeakMap();
  constructor(e) {
    (super(_iad9be79b4e3584(e, "x"), _iad9be79b4e3584(e, "y"), _iad9be79b4e3584(e, "z")), (this._radius = _iad9be79b4e3584(e, "radius")), (this._id = _ifdbe20062cc5b0(e, "id")));
    for (let r of _i4a80536b1445be(e, "item")) {
      let t = new GeometryItem(r);
      this._parts.set(_ifdbe20062cc5b0(r, "id"), t);
    }
  }
  getDynamicParts(e) {
    return e == null ? [] : Array.from(this._dynamicParts.get(e)?.values() ?? []);
  }
  getPartIds(e) {
    let r = Array.from(this._parts.values()).map((t) => t.id);
    return (
      e != null && r.push(...Array.from(this._dynamicParts.get(e)?.values() ?? []).map((t) => t.id)),
      r
    );
  }
  removeDynamicParts(e) {
    return (e != null && this._dynamicParts.delete(e), !0);
  }
  addPart(e, r) {
    if (r == null) return !1;
    let t = _ifdbe20062cc5b0(e, "id");
    if (this.hasPart(t, r)) return !1;
    let i = this._dynamicParts.get(r);
    return (i == null && ((i = new Map()), this._dynamicParts.set(r, i)), i.set(t, new GeometryItem(e, !0)), !0);
  }
  hasPart(e, r) {
    return this._parts.has(e) ? !0 : r == null ? !1 : (this._dynamicParts.get(r)?.has(e) ?? !1);
  }
  getParts(e, r, t, i) {
    let s = [];
    for (let o of this._parts.values()) (o.applyTransform(e), s.push([o.getDistance(r), o]));
    for (let o of this.getDynamicParts(i)) (o.applyTransform(e), s.push([o.getDistance(r), o]));
    return (s.sort((o, d) => o[0] - d[0]), s.map(([, o]) => o.id));
  }
  getDistance(e) {
    let r = Math.abs(e.z - this.transformedLocation.z - this._radius),
      t = Math.abs(e.z - this.transformedLocation.z + this._radius);
    return Math.min(r, t);
  }
  get id() {
    return this._id;
  }
  get radius() {
    return this._radius;
  }
}
