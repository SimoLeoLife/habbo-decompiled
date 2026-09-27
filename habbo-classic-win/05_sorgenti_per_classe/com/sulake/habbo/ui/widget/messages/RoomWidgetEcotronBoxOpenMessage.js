// Extracted from HabboAirLauncher.deobf.js, line 161626.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetEcotronBoxOpenMessage.as
// Obfuscated name: _ie7f4f968665606

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetEcotronBoxOpenMessage");
  }
  static const_1345 = "RWEBOM_OPEN_ECOTRONBOX";
  var_344;
  constructor(e, r) {
    (super(e), (this.var_344 = r));
  }
  get objectId() {
    return this.var_344;
  }
}
