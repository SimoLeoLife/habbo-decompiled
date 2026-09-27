// Estratto da HabboAirLauncher.deobf.js, riga 283624.

class extends _i572c95e7d59877 {
  static {
    n(this, "_ifc8c1f2c209595");
  }
  _rb67ca682c77f71(e, r) {
    return String(e);
  }
  initializePlanes() {
    let e = this.data?.child("wallAds") ?? null;
    e?.length() != null && e.length() > 0 && this._r1341af8b47c996(e.toArray()[0]);
  }
  _r1341af8b47c996(e) {
    if (e != null)
      for (let r of e.child("wallAd").toArray()) {
        let t = r,
          i = String(t.attribute("id") ?? "");
        if (i.length === 0) continue;
        let s = new _i5bfc79a9dfe578();
        (this._r04668c05d18864(s, t.child("visualization").toArray()),
          this._r25c26bee31a886(i) == null ? this._r5009c6796a3332(i, s) : s.dispose());
      }
  }
  render(e, r, t, i, s, o, d, c = 0, f = 0, l = 0, b = 0, _ = 0) {
    let h = this._r25c26bee31a886(r);
    if ((h == null && (h = this._r25c26bee31a886(u_.DEFAULT_TYPE)), h == null)) return null;
    let p = h.render(e, t, i, s, o, d);
    return p != null ? new _i3fbc7ebaffb088(p, -1) : null;
  }
}
