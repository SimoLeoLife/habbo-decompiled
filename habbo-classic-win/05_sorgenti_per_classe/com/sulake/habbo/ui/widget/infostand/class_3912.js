// Estratto da HabboAirLauncher.deobf.js, riga 125513.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/infostand/class_3912.as
// Nome offuscato: _i907e4f6ee4d4d2

class {
    static {
      n(this, "class_3912");
    }
    static {
      Bwt(this, "class_3912");
    }
    static _rcc448dab1e268d(e) {
      return e == null || (e.length !== 10 && e.length !== 19)
        ? null
        : ((e = e.replace("-", "/")),
          (e = e.replace("-", "/")),
          (e = e.replace("T", " ")),
          new Date(Date.parse(e)));
    }
  }
