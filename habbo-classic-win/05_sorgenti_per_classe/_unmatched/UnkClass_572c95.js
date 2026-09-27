// Extracted from HabboAirLauncher.deobf.js, line 283595.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i572c95e7d59877

class extends u_ {
  static {
    n(this, "UnkClass_572c95");
  }
  initializePlanes() {
    let e = this.data?.child("walls") ?? null;
    e?.length() != null && e.length() > 0 && this._r1341af8b47c996(e.toArray()[0]);
  }
  render(e, r, t, i, s, o, d, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    let h = this._r25c26bee31a886(r);
    if ((h == null && (h = this._r25c26bee31a886(u_.DEFAULT_TYPE)), h == null)) return null;
    let p = h.render(e, t, i, s, o, d);
    return p != null ? new UnkClass_3fbc7e(p, -1) : null;
  }
  _rb67ca682c77f71(e, r) {
    return r != null ? `${e}_${r.x}_${r.y}_${r.z}` : super._rb67ca682c77f71(e, r);
  }
  _r1341af8b47c996(e) {
    if (e != null)
      for (let r of e.child("wall").toArray()) {
        let t = r,
          i = String(t.attribute("id") ?? "");
        if (i.length === 0) continue;
        let s = new UnkPlaneSubclass_5bfc79();
        (this._r04668c05d18864(s, t.child("visualization").toArray()),
          this._r5009c6796a3332(i, s) || s.dispose());
      }
  }
}
