// Estratto da HabboAirLauncher.deobf.js, riga 321125.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/class_3912.as
// Nome offuscato: _i907e4f6ee4d4d2

class {
  static {
    n(this, "class_3912");
  }
  static formatSeconds(e) {
    let r = Math.floor(e),
      t = Math.floor(r / 3600),
      i = t * 3600,
      s = Math.floor((r - i) / 60),
      o = r - i - s * 60,
      d = `${t}:`,
      c = `${s < 10 ? "0" : ""}${s}:`,
      f = `${o < 10 ? "0" : ""}${o}`;
    return `${d}${c}${f}`;
  }
}
