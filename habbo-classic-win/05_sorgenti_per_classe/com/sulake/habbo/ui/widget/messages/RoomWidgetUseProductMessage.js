// Estratto da HabboAirLauncher.deobf.js, riga 162089.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetUseProductMessage.as
// Nome offuscato: _if77f4c1b052149

class extends RoomWidgetMessage {
  constructor(r, t, i = -1) {
    super(r);
    this._r2fdf1f24b1e612 = t;
    this.petId = i;
  }
  static {
    n(this, "RoomWidgetUseProductMessage");
  }
  static MONSTERPLANT_SEED = "RWUPM_MONSTERPLANT_SEED";
  static PET_PRODUCT = "RWUPM_PET_PRODUCT";
}
