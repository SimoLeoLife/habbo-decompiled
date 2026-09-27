// Estratto da HabboAirLauncher.deobf.js, riga 127564.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/localization/BadgeBaseAndLevel.as
// Nome offuscato: _i139f091a4569ee

class {
  static {
    n(this, "BadgeBaseAndLevel");
  }
  var_2990 = "";
  var_1655 = 1;
  constructor(e) {
    let r = e.length - 1;
    for (; r > 0 && this.isNumber(e.charAt(r));) r -= 1;
    this.var_2990 = e.substring(0, r + 1);
    let t = e.substring(r + 1);
    t.length > 0 && (this.var_1655 = Number.parseInt(t, 10));
  }
  get base() {
    return this.var_2990;
  }
  get level() {
    return this.var_1655;
  }
  set level(e) {
    this.var_1655 = Math.max(1, e);
  }
  get badgeId() {
    return `${this.var_2990}${this.var_1655}`;
  }
  isNumber(e) {
    let r = e.charCodeAt(0);
    return r >= 48 && r <= 57;
  }
}
