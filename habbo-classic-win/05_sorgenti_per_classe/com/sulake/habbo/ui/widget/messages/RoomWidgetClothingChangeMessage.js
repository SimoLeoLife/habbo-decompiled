// Extracted from HabboAirLauncher.deobf.js, line 161462.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetClothingChangeMessage.as
// Obfuscated name: _iaa638cd3bdf861

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetClothingChangeMessage");
  }
  static REQUEST_EDITOR = "RWCCM_REQUEST_EDITOR";
  var_106;
  var_344;
  var_4410;
  var_2440;
  constructor(e, r, t, i, s) {
    (super(e),
      (this.var_106 = r),
      (this.var_344 = t),
      (this.var_4410 = i),
      (this.var_2440 = s));
  }
  get gender() {
    return this.var_106;
  }
  get objectId() {
    return this.var_344;
  }
  get objectCategory() {
    return this.var_4410;
  }
  get roomId() {
    return this.var_2440;
  }
}
