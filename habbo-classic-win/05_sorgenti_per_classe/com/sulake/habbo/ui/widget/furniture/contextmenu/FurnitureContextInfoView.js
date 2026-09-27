// Extracted from HabboAirLauncher.deobf.js, line 314951.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/contextmenu/FurnitureContextInfoView.as
// Obfuscated name: _i2b2d1e5d121c0d

class extends mX {
  static {
    n(this, "FurnitureContextInfoView");
  }
  var_627 = null;
  var_606 = "";
  get roomObject() {
    return this.var_627;
  }
  constructor(e) {
    super(e);
  }
  dispose() {
    ((this.var_627 = null), super.dispose());
  }
  static setup(e, r, t = "") {
    ((e.var_627 = r), (e.var_606 = t), this.setupContext(e));
  }
}
