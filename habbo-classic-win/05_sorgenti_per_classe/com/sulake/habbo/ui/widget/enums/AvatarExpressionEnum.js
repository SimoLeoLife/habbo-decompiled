// Estratto da HabboAirLauncher.deobf.js, riga 159790.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/enums/AvatarExpressionEnum.as
// Nome offuscato: _icac11f11495634

class a {
  constructor(e) {
    this.var_3642 = e;
  }
  static {
    n(this, "AvatarExpressionEnum");
  }
  static NONE = new a(0);
  static WAVE = new a(1);
  static BLOW = new a(2);
  static EXPRESSION_67 = new a(67);
  static LAUGH = new a(3);
  static CRY = new a(4);
  static const_19 = new a(5);
  static _r9a5a815d592966 = new a(6);
  static RESPECT = new a(7);
  get ordinal() {
    return this.var_3642;
  }
  equals(e) {
    return e != null && e.var_3642 === this.var_3642;
  }
}
