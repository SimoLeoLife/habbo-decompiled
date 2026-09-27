// Estratto da HabboAirLauncher.deobf.js, riga 282633.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/room/rasterizer/basic/PlaneVisualization.as
// Nome offuscato: _i5cf472141dd32d

class {
  constructor(e, r, t) {
    this.geometry = t;
    let i = Math.max(0, r);
    for (let s = 0; s < i; s++) this._layers.push(null);
  }
  static {
    n(this, "PlaneVisualization");
  }
  _layers = [];
  _r7e109503f924e7 = new k();
  var_3157 = !1;
  _r9828170e21d037 = !1;
  get _r5af632d2dfd642() {
    return this._r9828170e21d037;
  }
  dispose() {
    for (let e of this._layers) e?.dispose();
    this._layers = [];
  }
  clearCache() {
    if (this.var_3157) {
      this._r7e109503f924e7.assign(new k());
      for (let e of this._layers) e?.clearCache();
      this.var_3157 = !1;
    }
  }
  setLayer(e, r, t, i, s = 0) {
    return e < 0 || e > this._layers.length
      ? !1
      : (this._layers[e]?.dispose(), (this._layers[e] = new pl(r, t, i, s)), !0);
  }
  setAnimationLayer(e, r, t) {
    return e < 0 || e > this._layers.length
      ? !1
      : (this._layers[e]?.dispose(),
        (this._layers[e] = new _ic6c731df9e72d6(r, t)),
        (this._r9828170e21d037 = !0),
        !0);
  }
  _rc77cca44f7df44() {
    return this._layers;
  }
  render(e, r, t, i, s, o = 0, d = 0, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    if (
      ((r = Math.max(1, r)),
      (t = Math.max(1, t)),
      (e == null || e.width !== r || e.height !== t) && (e = null),
      (this.var_3157 = !0),
      e == null)
    )
      e = _ie26e140b784b4c(r, t);
    else if (!_ib4e6c41bf9a436(e, 16777215, 0)) return null;
    this._r7e109503f924e7.assign(i);
    for (let h = 0; h < this._layers.length; h++) {
      let p = this._layers[h];
      p instanceof pl
        ? p.render(`${h}`, e, r, t, i, s, o, d)
        : p instanceof _ic6c731df9e72d6 && p.render(e, r, t, i, o, d, c, f, l, b, _);
    }
    return e;
  }
}
