// Estratto da HabboAirLauncher.deobf.js, riga 355264.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_trading/UbuntuPresetManager.as
// Nome offuscato: _i4c5af94826f5fe

class extends PresetManager {
  static {
    n(this, "UbuntuPresetManager");
  }
  var_4791;
  constructor(e) {
    (super(e), (this.var_4791 = e.presetManager._r80462c65db168d(ax.NAME)));
  }
  get wiredStyle() {
    return this.var_4791;
  }
}
