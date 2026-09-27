// Estratto da HabboAirLauncher.deobf.js, riga 162007.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetSelectEffectMessage.as
// Nome offuscato: _i7f14d10fdf63e0

class extends RoomWidgetMessage {
  constructor(r, t = -1) {
    super(r);
    this.effectType = t;
  }
  static {
    n(this, "RoomWidgetSelectEffectMessage");
  }
  static const_796 = "RWCM_MESSAGE_SELECT_EFFECT";
  static const_1075 = "RWCM_MESSAGE_UNSELECT_ALL_EFFECTS";
  static const_1318 = "RWCM_MESSAGE_UNSELECT_EFFECT";
}
