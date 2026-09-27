// Estratto da HabboAirLauncher.deobf.js, riga 135901.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/window/utils/XMLPropertyArrayParser.as
// Nome offuscato: _i8ae1494ec4b1c2

class extends class_3122 {
  static {
    n(this, "XMLPropertyArrayParser");
  }
  static parse(e) {
    let r = new B(),
      t = [],
      i = [],
      s = class_3122._r49e6f06a45fc47(e, r, t);
    for (let o = 0; o < s; o++)
      i.push(new ne(String(r.getKey(o) ?? ""), r.getWithIndex(o), String(t[o] ?? ""), !0));
    return i;
  }
}
