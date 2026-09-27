// Estratto da HabboAirLauncher.deobf.js, riga 276209.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureVisualizationData.as
// Nome offuscato: _ide9637b1b21cad

class {
  static {
    n(this, "FurnitureVisualizationData");
  }
  static LAYER_LIMIT = 1e3;
  static _r59c89ffb81405c = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  _r195209b917c26b = new B();
  _sizes = [];
  _r14d780e6f99470 = null;
  _r4ffdb993848d60 = -1;
  var_4162 = -1;
  var_5195 = -1;
  var_236 = "";
  dispose() {
    for (let e = 0; e < this._r195209b917c26b.length; e++) this._r195209b917c26b.getWithIndex(e)?.dispose();
    (this._r195209b917c26b.dispose(), (this._r14d780e6f99470 = null), (this._sizes = null));
  }
  initialize(e) {
    if ((this.reset(), e == null)) return !1;
    let r = String(e.attribute("type") ?? "");
    return r.length === 0
      ? !1
      : ((this.var_236 = r), this.defineVisualizations(e) ? !0 : (this.reset(), !1));
  }
  getType() {
    return this.var_236;
  }
  getSize(e) {
    if (e === this.var_5195) return this.var_4162;
    let r = this._rb3b1f8fb656e89(e),
      t = r < this._sizes.length ? (this._sizes[r] ?? -1) : -1;
    return ((this.var_5195 = e), (this.var_4162 = t), t);
  }
  _rf96292fa4b48da(e) {
    return this.getSizeData(e)?.layerCount ?? 0;
  }
  getDirectionValue(e, r) {
    return this.getSizeData(e)?.getDirectionValue(r) ?? 0;
  }
  getTag(e, r, t) {
    return this.getSizeData(e)?.getTag(r, t) ?? qt._r6e5d65472a15a2;
  }
  _rfcbae7e0d7ff05(e, r, t) {
    return this.getSizeData(e)?._rfcbae7e0d7ff05(r, t) ?? qt._rb70b6db4a5082b;
  }
  _rdcf30128fdeaa9(e, r, t) {
    return this.getSizeData(e)?._rdcf30128fdeaa9(r, t) ?? qt._r867909bf9f4491;
  }
  getColor(e, r, t) {
    return this.getSizeData(e)?.getColor(r, t) ?? k0.DEFAULT_COLOR;
  }
  _refa91ef7deb9e0(e, r, t) {
    return this.getSizeData(e)?._refa91ef7deb9e0(r, t) ?? qt._rf55f55bd54a874;
  }
  _r2acf02aae84c5e(e, r, t) {
    return this.getSizeData(e)?._r2acf02aae84c5e(r, t) ?? qt._r870d6a59ee15e6;
  }
  _r39e48c695dc1c1(e, r, t) {
    return this.getSizeData(e)?._r39e48c695dc1c1(r, t) ?? qt._r5ac5d65538c4b0;
  }
  _r3cb1c15a773382(e, r, t) {
    return this.getSizeData(e)?._r3cb1c15a773382(r, t) ?? qt._rb6be903bbb8b1e;
  }
  _r59226314e6df0d(e, r, t) {
    return new HQ(r, t);
  }
  processVisualizationElement(e, r) {
    if (e == null || r == null) return !1;
    switch (String(r.name())) {
      case "layers":
        return e.defineLayers(r);
      case "directions":
        return e.defineDirections(r);
      case "colors":
        return e.defineColors(r);
      default:
        return !0;
    }
  }
  getSizeData(e) {
    if (e === this._r4ffdb993848d60) return this._r14d780e6f99470;
    let r = this._rb3b1f8fb656e89(e);
    return (
      (this._r14d780e6f99470 =
        r < this._sizes.length ? (this._r195209b917c26b.getValue(String(this._sizes[r])) ?? null) : null),
      (this._r4ffdb993848d60 = e),
      this._r14d780e6f99470
    );
  }
  reset() {
    this.var_236 = "";
    for (let e = 0; e < this._r195209b917c26b.length; e++) this._r195209b917c26b.getWithIndex(e)?.dispose();
    (this._r195209b917c26b.reset(),
      (this._sizes = []),
      (this._r14d780e6f99470 = null),
      (this._r4ffdb993848d60 = -1),
      (this.var_4162 = -1),
      (this.var_5195 = -1));
  }
  defineVisualizations(e) {
    let r = e.child("graphics").child("visualization");
    if (r.length() === 0) return !1;
    for (let t of r.toArray()) {
      if (
        !(t instanceof Object) ||
        !("attribute" in t) ||
        !da.checkRequiredAttributes(t, ["size", "layerCount", "angle"])
      )
        return !1;
      let i = t,
        s = Number.parseInt(String(i.attribute("size") ?? "1"), 10),
        o = Number.parseInt(String(i.attribute("layerCount") ?? "0"), 10),
        d = Number.parseInt(String(i.attribute("angle") ?? "0"), 10);
      if ((s < 1 && (s = 1), this._r195209b917c26b.getValue(String(s)) != null)) return !1;
      let c = this._r59226314e6df0d(s, o, d);
      if (c == null) return !1;
      for (let f of i.children().toArray())
        if (!(f == null || typeof f != "object") && !this.processVisualizationElement(c, f)) return (c.dispose(), !1);
      (this._r195209b917c26b.add(String(s), c), this._sizes.push(s), this._sizes.sort((f, l) => f - l));
    }
    return !0;
  }
  _rb3b1f8fb656e89(e) {
    let r = 0;
    if (e > 0)
      for (let t = 1; t < this._sizes.length; t++) {
        let i = this._sizes[t] ?? 0,
          s = this._sizes[t - 1] ?? 0;
        if (i > e) {
          i / e < e / s && (r = t);
          break;
        }
        r = t;
      }
    return r;
  }
}
