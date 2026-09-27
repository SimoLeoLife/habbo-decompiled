// Estratto da HabboAirLauncher.deobf.js, riga 274105.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/VariableFxVisualizer.as
// Nome offuscato: _i0171c8d3865eb5

class {
  constructor(e, r, t, i, s) {
    this._config = e;
    this._status = r;
    this.var_2234 = i;
    this._registry = s;
    this._context = this.createContext();
    let o = this._rf7b62a3f2000b2(e);
    if (o == null) throw new Error(this._r74bfd71909f69c(e));
    ((this._renderer = o(this._context)),
      (this.var_3944 = e._r2eb2469c8940e1),
      this._renderer.updateData(this._context, t));
  }
  static {
    n(this, "VariableFxVisualizer");
  }
  _context;
  _renderer;
  var_3944;
  var_776 = !0;
  get frame() {
    return this._renderer.frame;
  }
  get requiresAnimationTick() {
    return this.var_776;
  }
  updateData(e, r) {
    ((this._status = e),
      (this._context = this.createContext()),
      (this.var_776 = !0),
      this._renderer.updateData(this._context, r));
  }
  needsUpdate(e) {
    if (this.isRendererPrebakeStale()) return ((this.var_776 = !1), !1);
    let r = this._renderer.needsUpdate(e);
    return ((this.var_776 = r || this._renderer.isContinuous), r);
  }
  update(e) {
    if (this.isRendererPrebakeStale()) return ((this.var_776 = !1), !1);
    let r = this._renderer.update(e);
    return (
      (this.var_776 = r || this._renderer.isContinuous || this._renderer.needsUpdate(e)),
      r
    );
  }
  dispose() {
    this._renderer.dispose();
  }
  createContext() {
    let e = this._status._r42e7bea2fe4ef5,
      r = this._status.effectiveOverrideMinValue,
      t = e == null ? this._config._r528f4963a1a948 : Number(e),
      i = r == null ? this._config._r5e470edbfdddac : Number(r),
      s = this.calculateProgress(this._status.value, t, i);
    return new VariableFxRendererContext(
      this.var_2234,
      this._config,
      this._status,
      t,
      i,
      s,
      this._registry,
    );
  }
  _rf7b62a3f2000b2(e) {
    if (e.rendererId >= 0) {
      let r = this._registry._r53b0234aebe9d4(e.rendererId);
      if (r != null) return r;
    }
    return this._registry.resolve(e.category, e.renderer);
  }
  _r74bfd71909f69c(e) {
    return e.rendererId >= 0
      ? "No Variable FX renderer registered for server renderer id '" + e.rendererId + "'."
      : "No Variable FX renderer registered for category '" +
          e.category +
          "' and renderer '" +
          e.renderer +
          "'.";
  }
  isRendererPrebakeStale() {
    return this.var_3944 != null && this._config._r2eb2469c8940e1 !== this.var_3944;
  }
  calculateProgress(e, r, t) {
    return !isFinite(e) || !isFinite(r) || !isFinite(t) || t === r
      ? 0
      : Math.max(0, Math.min(1, (e - r) / (t - r)));
  }
}
