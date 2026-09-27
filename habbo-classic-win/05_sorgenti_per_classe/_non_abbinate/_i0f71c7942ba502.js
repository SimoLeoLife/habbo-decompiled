// Estratto da HabboAirLauncher.deobf.js, riga 283547.

class extends u_ {
  static {
    n(this, "_i0f71c7942ba502");
  }
  initializePlanes() {
    let e = this.data?.child("floors") ?? null;
    e?.length() != null && e.length() > 0 && this._rf7942f34daa828(e.toArray()[0]);
  }
  render(e, r, t, i, s, o, d, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    let h = this._r25c26bee31a886(r);
    if ((h == null && (h = this._r25c26bee31a886(u_.DEFAULT_TYPE)), h == null)) return null;
    let p = h.render(e, t, i, s, o, d, c, f);
    return p != null ? new _i3fbc7ebaffb088(p, -1) : null;
  }
  _rf7942f34daa828(e) {
    if (e != null)
      for (let r of e.child("floor").toArray()) {
        let t = r,
          i = String(t.attribute("id") ?? "");
        if (i.length === 0) continue;
        let s = new _i6095d43a6309e2();
        (this._r04668c05d18864(s, t.child("visualization").toArray()),
          this._r5009c6796a3332(i, s) || s.dispose());
      }
  }
}
