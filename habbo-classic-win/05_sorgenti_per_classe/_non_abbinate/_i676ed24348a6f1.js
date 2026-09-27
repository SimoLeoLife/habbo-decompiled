// Estratto da HabboAirLauncher.deobf.js, riga 283449.

class extends Plane {
  static {
    n(this, "_i676ed24348a6f1");
  }
  static DEFAULT_COLOR = 16777215;
  static _r9519ddaa6bb42e = 45;
  static _rd71d30b14bb04d = 30;
  _rd24dc2ee6f6c1e = 0;
  _r4007f9b1e28e5b = 0;
  isStatic(e) {
    let r = this._rd45e0cbe764a83(e);
    return r != null ? !r._r5af632d2dfd642 : super.isStatic(e);
  }
  _rafc56c240e6f7b(e, r) {
    ((this._rd24dc2ee6f6c1e = Math.max(0, e)), (this._r4007f9b1e28e5b = Math.max(0, r)));
  }
  render(e, r, t, i, s, o, d, c, f, l, b) {
    let _ = this._rd45e0cbe764a83(i);
    if (_?.geometry == null) return null;
    let h = _.geometry._r2c974b4bf77b84(new k(0, 0, 0)),
      p = _.geometry._r2c974b4bf77b84(new k(0, 0, 1)),
      m = _.geometry._r2c974b4bf77b84(new k(0, 1, 0));
    if (h == null || p == null || m == null) return null;
    ((r = Math.round((Math.abs(h.x - m.x) * r) / _.geometry.scale)),
      (t = Math.round((Math.abs(h.y - p.y) * t) / _.geometry.scale)));
    let v = d * Math.abs(h.x - m.x),
      w = c * Math.abs(h.y - p.y),
      I = f * Math.abs(h.x - m.x),
      C = l * Math.abs(h.y - p.y);
    return _.render(e, r, t, s, o, v, w, I, C, f, l, b);
  }
}
