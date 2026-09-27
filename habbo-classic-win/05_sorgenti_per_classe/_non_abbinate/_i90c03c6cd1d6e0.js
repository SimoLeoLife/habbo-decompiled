// Estratto da HabboAirLauncher.deobf.js, riga 143886.

class {
  static {
    n(this, "_i90c03c6cd1d6e0");
  }
  static _cache = new class_3656();
  static get(e, r, t, i, s, o, d, c, f, l, b) {
    let _ = (r << 16) | t,
      h = this._cache.getValue(_) ?? null;
    return h == null || ((h = h.clone()), h == null)
      ? null
      : ((h.id = b),
        (h.tags = l),
        (h.name = e),
        h.setParamFlag(i, !0),
        (h.properties = f),
        h.setRectangle(o.x, o.y, o.width, o.height),
        (h.parent = d),
        (h.procedure = c),
        h);
  }
  static set(e, r) {}
}
