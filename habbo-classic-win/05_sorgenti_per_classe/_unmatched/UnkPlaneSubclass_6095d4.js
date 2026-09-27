// Extracted from HabboAirLauncher.deobf.js, line 282751.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i6095d43a6309e2

class extends Plane {
  static {
    n(this, "UnkPlaneSubclass_6095d4");
  }
  static DEFAULT_COLOR = 16777215;
  static _r9519ddaa6bb42e = 45;
  static _rd71d30b14bb04d = 30;
  render(e, r, t, i, s, o, d, c) {
    let f = this._rd45e0cbe764a83(i);
    if (f?.geometry == null) return null;
    let l = f.geometry._r2c974b4bf77b84(new k(0, 0, 0)),
      b = f.geometry._r2c974b4bf77b84(new k(0, t / f.geometry.scale, 0)),
      _ = f.geometry._r2c974b4bf77b84(new k(r / f.geometry.scale, 0, 0)),
      h = 0,
      p = 0;
    if (l != null && b != null && _ != null) {
      ((r = Math.round(Math.abs(l.x - _.x))), (t = Math.round(Math.abs(l.x - b.x))));
      let m = l.x - (f.geometry._r2c974b4bf77b84(new k(1, 0, 0))?.x ?? l.x);
      ((h = d * Math.trunc(Math.abs(m))), (p = c * Math.trunc(Math.abs(m))));
    }
    return f.render(e, r, t, s, o, h, p);
  }
}
