// Estratto da HabboAirLauncher.deobf.js, riga 161355.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetAvatarExpressionMessage.as
// Nome offuscato: _ib208f969fda319

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetAvatarExpressionMessage");
  }
  static const_372 = "RWCM_MESSAGE_AVATAR_EXPRESSION";
  var_2117;
  constructor(e) {
    (super(a.const_372), (this.var_2117 = e));
  }
  get animation() {
    return this.var_2117;
  }
}
