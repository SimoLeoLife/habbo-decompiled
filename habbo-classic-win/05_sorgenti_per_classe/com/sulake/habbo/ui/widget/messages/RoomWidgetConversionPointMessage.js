// Extracted from HabboAirLauncher.deobf.js, line 161491.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetConversionPointMessage.as
// Obfuscated name: _ia4fb66dd542d3a

class extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetConversionPointMessage");
  }
  static const_534 = "RWCPM_CONVERSION_POINT";
  var_163;
  var_5189;
  _action;
  _extraString;
  var_4692;
  constructor(e, r, t, i, s = "", o = 0) {
    (super(e),
      (this.var_163 = r),
      (this.var_5189 = t),
      (this._action = i),
      (this._extraString = s),
      (this.var_4692 = o));
  }
  get category() {
    return this.var_163;
  }
  get _ra2bcef9f38acce() {
    return this.var_5189;
  }
  get action() {
    return this._action;
  }
  get _r7d70ec716ad48a() {
    return this._extraString;
  }
  get _r5002f054757d5a() {
    return this.var_4692;
  }
}
