// Estratto da HabboAirLauncher.deobf.js, riga 272858.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/class_3337.as
// Nome offuscato: _i217a6fb7139b3f

class a {
  static {
    n(this, "class_3337");
  }
  static WAVE = 1;
  static BLOW = 2;
  static LAUGH = 3;
  static CRY = 4;
  static const_19 = 5;
  static make(e, r, t) {
    switch (r) {
      case a.BLOW:
        return new Kge(e, r, t);
      default:
        return new ExpressionAddition(e, r, t);
    }
  }
}
