// Estratto da HabboAirLauncher.deobf.js, riga 208145.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4394.as
// Nome offuscato: _i3701490b675904

class extends class_4383 {
  static {
    n(this, "class_4394");
  }
  var_933 = "";
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i), (this.var_933 = t[2] ?? ""));
  }
  onClick() {
    this.var_933.length > 0 && this.landingView.context._r6b6c989018eb05(this.var_933);
  }
}
