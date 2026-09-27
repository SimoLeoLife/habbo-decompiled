// Extracted from HabboAirLauncher.deobf.js, line 143886.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i90c03c6cd1d6e0

class {
  static {
    n(this, "UnkClass_90c03c");
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
