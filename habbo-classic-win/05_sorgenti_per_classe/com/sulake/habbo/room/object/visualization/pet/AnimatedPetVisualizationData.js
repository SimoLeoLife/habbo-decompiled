// Estratto da HabboAirLauncher.deobf.js, riga 280536.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/pet/AnimatedPetVisualizationData.as
// Nome offuscato: _ic235894631ff9c

class extends AnimatedFurnitureVisualizationData {
  static {
    n(this, "AnimatedPetVisualizationData");
  }
  var_5622 = null;
  _ra17cdfea802699 = !0;
  set commonAssets(e) {
    this.var_5622 = e;
  }
  get commonAssets() {
    return this.var_5622;
  }
  get _r179f81fe927633() {
    return this._ra17cdfea802699;
  }
  defineVisualizations(e) {
    let r = e.child("graphics").toArray()[0];
    return (
      r != null && typeof r == "object" && "attribute" in r
        ? (this._ra17cdfea802699 = String(r.attribute("disableheadturn") ?? "") !== "1")
        : (this._ra17cdfea802699 = !0),
      super.defineVisualizations(e)
    );
  }
  _r59226314e6df0d(e, r, t) {
    return e > 1 ? new hl(r, t) : new AnimationSizeData(r, t);
  }
  processVisualizationElement(e, r) {
    if (e == null || r == null) return !1;
    let t = e instanceof hl ? e : null;
    switch (String(r.name())) {
      case "postures":
        return t?.definePostures(r) ?? !1;
      case "gestures":
        return t?.defineGestures(r) ?? !1;
      default:
        return super.processVisualizationElement(e, r);
    }
  }
  _rac5052e541a5c2(e, r) {
    let t = this.getSizeData(e);
    return t instanceof hl ? t._rac5052e541a5c2(r) : hl.const_187;
  }
  getGestureDisabled(e, r) {
    let t = this.getSizeData(e);
    return t instanceof hl ? t.getGestureDisabled(r) : !1;
  }
  _r2d43f7d91e32f5(e, r) {
    let t = this.getSizeData(e);
    return t instanceof hl ? t._r2d43f7d91e32f5(r) : hl.const_187;
  }
  getPostureForAnimation(e, r, t) {
    let i = this.getSizeData(e);
    return i instanceof hl ? i.getPostureForAnimation(r, t) : null;
  }
  _r9a4755b7650147(e, r) {
    let t = this.getSizeData(e);
    return t instanceof hl ? t._r9a4755b7650147(r) : null;
  }
  _rd0e34ea4fa9508(e, r) {
    let t = this.getSizeData(e);
    return t instanceof hl ? t._rd0e34ea4fa9508(r) : null;
  }
  _r4ab498fd84bcaf(e) {
    let r = this.getSizeData(e);
    return r instanceof hl ? r._r4ab498fd84bcaf() : 0;
  }
  _rbbcfa957424c0a(e) {
    let r = this.getSizeData(e);
    return r instanceof hl ? r._rbbcfa957424c0a() : 0;
  }
}
