// Estratto da HabboAirLauncher.deobf.js, riga 272745.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/ExpressionAddition.as
// Nome offuscato: _ic91c09d87802b0

class {
  constructor(e, r, t) {
    this.id = e;
    this.type = r;
    this.avatar = t;
  }
  static {
    n(this, "ExpressionAddition");
  }
  get disposed() {
    return this.avatar == null;
  }
  dispose() {
    this.avatar = null;
  }
  update(e, r) {}
  animate(e) {
    return !1;
  }
}
