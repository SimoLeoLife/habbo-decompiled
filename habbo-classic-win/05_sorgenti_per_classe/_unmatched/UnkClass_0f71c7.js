// Extracted from HabboAirLauncher.deobf.js, line 283547.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i0f71c7942ba502

class extends u_ {
  static {
    n(this, "UnkClass_0f71c7");
  }
  initializePlanes() {
    let e = this.data?.child("floors") ?? null;
    e?.length() != null && e.length() > 0 && this._rf7942f34daa828(e.toArray()[0]);
  }
  render(e, r, t, i, s, o, d, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    let h = this._r25c26bee31a886(r);
    if ((h == null && (h = this._r25c26bee31a886(u_.DEFAULT_TYPE)), h == null)) return null;
    let p = h.render(e, t, i, s, o, d, c, f);
    return p != null ? new UnkClass_3fbc7e(p, -1) : null;
  }
  _rf7942f34daa828(e) {
    if (e != null)
      for (let r of e.child("floor").toArray()) {
        let t = r,
          i = String(t.attribute("id") ?? "");
        if (i.length === 0) continue;
        let s = new UnkPlaneSubclass_6095d4();
        (this._r04668c05d18864(s, t.child("visualization").toArray()),
          this._r5009c6796a3332(i, s) || s.dispose());
      }
  }
}
