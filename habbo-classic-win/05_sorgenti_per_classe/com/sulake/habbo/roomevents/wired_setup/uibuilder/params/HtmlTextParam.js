// Estratto da HabboAirLauncher.deobf.js, riga 351302.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/uibuilder/params/HtmlTextParam.as
// Nome offuscato: _i361e840b433998

class a extends Se {
  constructor(r, t = !1, i = 0) {
    super(r, !1, i);
    this.var_5324 = t;
  }
  static {
    n(this, "HtmlTextParam");
  }
  static DEFAULT = new a(Se.MODE_MULTILINE);
  get selectable() {
    return this.var_5324;
  }
}
