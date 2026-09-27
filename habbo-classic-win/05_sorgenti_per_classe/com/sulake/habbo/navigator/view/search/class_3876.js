// Estratto da HabboAirLauncher.deobf.js, riga 260019.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/class_3876.as
// Nome offuscato: _i31b9212f856bf0

class a {
  static {
    n(this, "class_3876");
  }
  static DEFAULT = 0;
  static OWNER = 1;
  static ROOMNAME = 2;
  static TAG = 3;
  static GROUP = 4;
  static ANYTHING = 5;
  static FILTER_PREFIX = ["", "owner:", "roomname:", "tag:", "group:", ""];
  static filterInInput(e) {
    for (let r = 1; r < a.FILTER_PREFIX.length; r++) if (e.indexOf(a.FILTER_PREFIX[r]) === 0) return r;
    return a.DEFAULT;
  }
}
