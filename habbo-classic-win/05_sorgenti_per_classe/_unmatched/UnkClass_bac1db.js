// Extracted from HabboAirLauncher.deobf.js, line 284395.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _ibac1dba2e7d9ad

class a {
  constructor(e, r, t, i, s, o, d, c = null, f = -1, l = -1, b = -1) {
    this.category = e;
    this.style = r;
    this.renderer = t;
    this.width = i;
    this.color = s;
    this._r528f4963a1a948 = o;
    this._r5e470edbfdddac = d;
    this.categoryId = f;
    this.var_780 = l;
    this.rendererId = b;
    this.extra = c ?? new B();
  }
  static {
    n(this, "UnkClass_bac1db");
  }
  _r2eb2469c8940e1 = null;
  extra;
  _rd5d2dde928588d(e, r, t, i, s = null) {
    return new a(
      e,
      r,
      r,
      this.width,
      i,
      0,
      1,
      s ?? this.extra,
      this.categoryId,
      this.var_780,
      t,
    );
  }
}
