// Estratto da HabboAirLauncher.deobf.js, riga 283573.

class extends Plane {
  static {
    n(this, "_i5bfc79a9dfe578");
  }
  static DEFAULT_COLOR = 16777215;
  static _r9519ddaa6bb42e = 45;
  static _rd71d30b14bb04d = 30;
  render(e, r, t, i, s, o) {
    let d = this._rd45e0cbe764a83(i);
    if (d?.geometry == null) return null;
    let c = d.geometry._r2c974b4bf77b84(new k(0, 0, 0)),
      f = d.geometry._r2c974b4bf77b84(new k(0, 0, t / d.geometry.scale)),
      l = d.geometry._r2c974b4bf77b84(new k(0, r / d.geometry.scale, 0));
    return (
      c != null &&
        f != null &&
        l != null &&
        ((r = Math.round(Math.abs(c.x - l.x))), (t = Math.round(Math.abs(c.y - f.y)))),
      d.render(e, r, t, s, o)
    );
  }
}
