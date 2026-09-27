// Estratto da HabboAirLauncher.deobf.js, riga 282696.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/Plane.as
// Nome offuscato: _i9de2a0b833c85a

class {
  static {
    n(this, "Plane");
  }
  var_824 = new B();
  _sizes = [];
  var_1700 = null;
  var_4162 = -1;
  isStatic(e) {
    return !0;
  }
  dispose() {
    for (let e of this.var_824.getValues()) e.dispose();
    (this.var_824.dispose(), (this.var_1700 = null), (this._sizes = []));
  }
  clearCache() {
    for (let e of this.var_824.getValues()) e.clearCache();
  }
  createPlaneVisualization(e, r, t) {
    if (this.var_824.getValue(String(e)) != null) return null;
    let i = new PlaneVisualization(e, r, t);
    return (
      this.var_824.add(String(e), i),
      this._sizes.push(e),
      this._sizes.sort((s, o) => s - o),
      i
    );
  }
  _rc77cca44f7df44() {
    return this._rd45e0cbe764a83(this.var_4162)?._rc77cca44f7df44() ?? [];
  }
  _rd45e0cbe764a83(e) {
    if (e === this.var_4162) return this.var_1700;
    let r = this._rb3b1f8fb656e89(e);
    return (
      (this.var_1700 =
        r < this._sizes.length ? (this.var_824.getValue(String(this._sizes[r])) ?? null) : null),
      (this.var_4162 = e),
      this.var_1700
    );
  }
  _rb3b1f8fb656e89(e) {
    let r = 0;
    for (let t = 1; t < this._sizes.length; t++) {
      let i = this._sizes[t] ?? 0,
        s = this._sizes[t - 1] ?? 0;
      if (i > e) {
        i - e < e - s && (r = t);
        break;
      }
      r = t;
    }
    return r;
  }
}
