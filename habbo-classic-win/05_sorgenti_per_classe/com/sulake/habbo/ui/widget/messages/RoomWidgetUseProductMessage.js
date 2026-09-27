// Extracted from HabboAirLauncher.deobf.js, line 162089.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetUseProductMessage.as
// Obfuscated name: _if77f4c1b052149

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
