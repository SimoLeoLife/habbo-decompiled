// Estratto da HabboAirLauncher.deobf.js, riga 61445.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/class_2768.as
// Nome offuscato: _ib7e5bfe0e020db

class a {
  static {
    n(this, "class_2768");
  }
  static _rf201f27a0c2886(e, r) {
    let t = new A(Math.round(e.width * r), Math.round(e.height * r), !0, 16777215),
      i = new Pe(t.width / e.width, 0, 0, t.height / e.height, 0, 0);
    return (t.draw(e, i, null, null, null, !0), t);
  }
  static resampleBitmapData(e, r) {
    if (r >= 1) return a._rf201f27a0c2886(e, r);
    let t = e.clone(),
      i = 1;
    do
      r < 0.5 * i
        ? ((t = a._rf201f27a0c2886(t, 0.5)), (i = 0.5 * i))
        : ((t = a._rf201f27a0c2886(t, r / i)), (i = r));
    while (i !== r);
    return t;
  }
}
