// Estratto da HabboAirLauncher.deobf.js, riga 79968.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/utils/class_4281.as
// Nome offuscato: _i3ca06ec73e8e43

class {
  static {
    n(this, "class_4281");
  }
  static line(e, r, t, i) {
    let s = t.x - r.x,
      o = t.y - r.y,
      d = s > 0 ? 1 : -1,
      c = o > 0 ? 1 : -1,
      f = 0,
      l = r.x,
      b = r.y;
    if (
      ((s = Math.abs(s)), (o = Math.abs(o)), e.lock(), e.setPixel32(l, b, i), !(s === 0 && o === 0))
    ) {
      if (s > o)
        for (let _ = s - 1; _ >= 0; _--)
          ((f += o), (l += d), f >= s / 2 && ((f -= s), (b += c)), e.setPixel32(l, b, i));
      else
        for (let _ = o - 1; _ >= 0; _--)
          ((f += s), (b += c), f >= o / 2 && ((f -= o), (l += d)), e.setPixel32(l, b, i));
      (e.setPixel32(t.x, t.y, i), e.unlock());
    }
  }
  static _r4dc9bc55df3b49(e) {
    if (e == null) return null;
    let r = new A(e.width, e.height, !0, 16777215),
      t = new Pe();
    return (t.scale(-1, 1), t.translate(e.width, 0), r.draw(e, t), r);
  }
  static _ra894809c12a2d6(e) {
    if (e == null) return null;
    let r = new A(e.width, e.height, !0, 16777215),
      t = new Pe();
    return (t.scale(1, -1), t.translate(0, e.height), r.draw(e, t), r);
  }
  static _r6d890092fda3ff(e) {
    if (e == null) return null;
    let r = new A(e.width, e.height, !0, 16777215),
      t = new Pe();
    return (t.scale(-1, -1), t.translate(e.width, e.height), r.draw(e, t), r);
  }
}
