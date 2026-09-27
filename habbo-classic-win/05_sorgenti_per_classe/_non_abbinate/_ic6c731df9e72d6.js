// Estratto da HabboAirLauncher.deobf.js, riga 282574.

class {
  static {
    n(this, "_ic6c731df9e72d6");
  }
  _r117eeea1d6cf8d = !1;
  _items = [];
  get disposed() {
    return this._r117eeea1d6cf8d;
  }
  constructor(e, r) {
    if (!(e == null || r == null))
      for (let t of e.child("item").toArray()) {
        if (!this._r291a932119ee17(t)) continue;
        let i = r.getAsset(String(t.attribute("asset") ?? "")),
          s = i?.nativeTexture ?? i?.asset?.content?.texture ?? null;
        s != null &&
          this._items.push(
            new _i4748bc4375ad27(
              Number.parseFloat(String(t.attribute("x") ?? "0")),
              Number.parseFloat(String(t.attribute("y") ?? "0")),
              Number.parseFloat(String(t.attribute("speedX") ?? "0")),
              Number.parseFloat(String(t.attribute("speedY") ?? "0")),
              s,
            ),
          );
      }
  }
  dispose() {
    this._r117eeea1d6cf8d = !0;
    for (let e of this._items) e.dispose();
    this._items = [];
  }
  clearCache() {}
  render(e, r, t, i, s, o, d, c, f, l, b) {
    if (e == null) return null;
    if (d > 0 && c > 0)
      for (let _ of this._items) {
        let h = _.texture;
        if (h == null) continue;
        let p = _.getPosition(d, c, f, l, b);
        ((p.x = Math.trunc(p.x - s)), (p.y = Math.trunc(p.y - o)));
        let m = [
          [p.x, p.y],
          [p.x - d, p.y],
          [p.x, p.y - c],
          [p.x - d, p.y - c],
        ];
        for (let [v, w] of m)
          if (v > -h.width && v < e.width && w > -h.height && w < e.height) {
            let I = new Jt(h);
            (I.position.set(v, w), _ifa78568353bcfc(e, I, !1), I.destroy());
          }
      }
    return e;
  }
  _r291a932119ee17(e) {
    return e != null && typeof e == "object" && "attribute" in e && "child" in e;
  }
}
