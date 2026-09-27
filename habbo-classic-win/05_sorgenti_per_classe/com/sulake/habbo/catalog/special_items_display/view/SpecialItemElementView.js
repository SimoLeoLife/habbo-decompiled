// Estratto da HabboAirLauncher.deobf.js, riga 186548.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/special_items_display/view/SpecialItemElementView.as
// Nome offuscato: _i48e544d5a3574a

class a {
  static {
    n(this, "SpecialItemElementView");
  }
  static BLEND_BUFFERING = 0.05;
  _view;
  _window;
  var_183;
  var_3109 = 0;
  _r307c22957dff4f = new E();
  _disposed = !1;
  constructor(e, r) {
    ((this._view = e), (this.var_183 = r), (this._window = e._redd4f40fc7d8d4?.clone()));
    let t = this._window?.widget;
    t != null && ((t.productInfo = r), (t.pivot = Vt.BOTTOM_CENTER));
  }
  get focusValue() {
    return this.var_3109;
  }
  get item() {
    return this.var_183;
  }
  get window() {
    return this._window;
  }
  get disposed() {
    return this._disposed;
  }
  _r2a99c71aae7e03(e) {
    if ((this._r7d0ec584595e17(e), this._window == null)) return;
    ((this._window.x = this._r307c22957dff4f.x * 216 - 80 + 42),
      (this._window.y = this._r307c22957dff4f.y * 73 - 113));
    let r = this._window.widget;
    if (r == null) return;
    let t = this._r307c22957dff4f.y;
    ((this._view?._r70b5849a7ca2e3 ?? 0) <= 4 ? (t = Math.max(0.25, t)) : t < 0.05 && (t = 0),
      (t = Math.min(t, 1)),
      (Math.abs(r.blend - t) > a.BLEND_BUFFERING ||
        (t === 0 && r.blend !== 0) ||
        (t === 1 && r.blend !== 1)) &&
        (r.blend = t));
  }
  dispose() {
    this._disposed ||
      (this._window?.dispose(),
      (this._window = null),
      (this._view = null),
      (this._disposed = !0));
  }
  _r7d0ec584595e17(e) {
    let r = this._view?._r70b5849a7ca2e3 ?? 0,
      t = this.var_183.index - e,
      i = t + r,
      s = t - r;
    (Math.abs(i) < Math.abs(t) ? (t = i) : Math.abs(s) < Math.abs(t) && (t = s),
      (this.var_3109 = Math.abs(t) < 0.5 ? 1 - Math.abs(t) * 2 : 0));
    let o = 180 + 90 * t;
    o = Math.min(Math.max(o, 0), 360);
    let d = (o * Math.PI) / 180;
    ((this._r307c22957dff4f.x = 0.5 - 0.5 * Math.sin(d)),
      (this._r307c22957dff4f.y = 0.5 - 0.5 * Math.cos(d)));
  }
}
