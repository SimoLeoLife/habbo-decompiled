// Estratto da HabboAirLauncher.deobf.js, riga 80503.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/RoomPlaneBitmapMaskParser.as
// Nome offuscato: _i91ea5b82f9757b

class {
  static {
    n(this, "RoomPlaneBitmapMaskParser");
  }
  _masks;
  constructor() {
    this._masks = new B();
  }
  get maskCount() {
    return this._masks?.length ?? 0;
  }
  dispose() {
    this._masks != null && (this.reset(), this._masks.dispose(), (this._masks = null));
  }
  initialize(e) {
    if (e == null || this._masks == null) return !1;
    this._masks.reset();
    let r = ["id", "type", "category"],
      t = ["x", "y", "z"],
      i = e.child("planeMask").toArray();
    for (let s of i) {
      if (typeof s == "string") continue;
      if (!da.checkRequiredAttributes(s, r)) return !1;
      let o = String(s.attribute("id")),
        d = String(s.attribute("type")),
        c = String(s.attribute("category")),
        f = s.child("location").toArray();
      if (f.length !== 1) return !1;
      let l = f[0];
      if (typeof l == "string" || !da.checkRequiredAttributes(l, t)) return !1;
      let b = new k(
        Number(String(l.attribute("x"))),
        Number(String(l.attribute("y"))),
        Number(String(l.attribute("z"))),
      );
      this._masks.add(o, new RoomPlaneBitmapMaskData(d, b, c));
    }
    return !0;
  }
  reset() {
    if (this._masks != null) {
      for (let e = 0; e < this._masks.length; e++) this._masks.getWithIndex(e)?.dispose();
      this._masks.reset();
    }
  }
  addMask(e, r, t, i) {
    if (this._masks == null || e == null || e === "" || r == null || r === "" || t == null) return !1;
    let s = new RoomPlaneBitmapMaskData(r, t, i);
    return (this._masks.remove(e)?.dispose(), this._masks.add(e, s), !0);
  }
  _r82e2c6412d4695(e) {
    let r = this._masks?.remove(e) ?? null;
    return r != null ? (r.dispose(), !0) : !1;
  }
  getXML() {
    let e = _id7a5b884da4a02("planeMasks");
    for (let r = 0; r < this.maskCount; r++) {
      let t = this.getMaskType(r),
        i = this.getMaskCategory(r),
        s = this.getMaskLocation(r);
      if (t == null || i == null || s == null) continue;
      let o = _id7a5b884da4a02("planeMask", { id: r, type: t, category: i });
      (o.appendChildElement("location", { x: s.x, y: s.y, z: s.z }), e.appendChild(o));
    }
    return e;
  }
  getMaskLocation(e) {
    return e < 0 || e >= this.maskCount ? null : (this._masks?.getWithIndex(e)?.loc ?? null);
  }
  getMaskType(e) {
    return e < 0 || e >= this.maskCount ? null : (this._masks?.getWithIndex(e)?.type ?? null);
  }
  getMaskCategory(e) {
    return e < 0 || e >= this.maskCount ? null : (this._masks?.getWithIndex(e)?.category ?? null);
  }
}
