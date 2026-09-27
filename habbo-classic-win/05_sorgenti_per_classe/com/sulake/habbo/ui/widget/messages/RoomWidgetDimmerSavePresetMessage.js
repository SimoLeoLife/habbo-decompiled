// Extracted from HabboAirLauncher.deobf.js, line 161587.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/messages/RoomWidgetDimmerSavePresetMessage.as
// Obfuscated name: _ida1d376bc23f37

class a extends RoomWidgetMessage {
  static {
    n(this, "RoomWidgetDimmerSavePresetMessage");
  }
  static WIDGET_MESSAGE_SAVE_DIMMER_PRESET = "RWSDPM_SAVE_PRESET";
  _presetNumber;
  var_5075;
  _color;
  var_3057;
  var_4901;
  var_344;
  constructor(e, r, t, i, s, o) {
    (super(a.WIDGET_MESSAGE_SAVE_DIMMER_PRESET),
      (this._presetNumber = e),
      (this.var_5075 = r),
      (this._color = t),
      (this.var_3057 = i),
      (this.var_4901 = s),
      (this.var_344 = o));
  }
  get _r2c12a4fd09880b() {
    return this._presetNumber;
  }
  get _r9c445ab20be08f() {
    return this.var_5075;
  }
  get color() {
    return this._color;
  }
  get brightness() {
    return this.var_3057;
  }
  get apply() {
    return this.var_4901;
  }
  get objectId() {
    return this.var_344;
  }
}
