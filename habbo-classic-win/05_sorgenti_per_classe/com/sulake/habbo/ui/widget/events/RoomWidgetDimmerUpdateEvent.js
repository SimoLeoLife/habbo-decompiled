// Extracted from HabboAirLauncher.deobf.js, line 160199.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/events/RoomWidgetDimmerUpdateEvent.as
// Obfuscated name: _icb250839cc48c7

class extends RoomWidgetUpdateEvent {
  static {
    n(this, "RoomWidgetDimmerUpdateEvent");
  }
  static const_825 = "RWDUE_PRESETS";
  static DIMMER_HIDE = "RWDUE_HIDE";
  var_4427 = 0;
  var_1479 = [];
  var_2735 = 0;
  var_1427 = !1;
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
  get _ree0dc0daf170e4() {
    return this.var_4427;
  }
  set _ree0dc0daf170e4(e) {
    this.var_4427 = e;
  }
  get presetCount() {
    return this.var_1479.length;
  }
  get presets() {
    return this.var_1479;
  }
  get itemId() {
    return this.var_2735;
  }
  set itemId(e) {
    this.var_2735 = e;
  }
  get isOn() {
    return this.var_1427;
  }
  set isOn(e) {
    this.var_1427 = e;
  }
  storePreset(e, r, t, i) {
    let s = new RoomWidgetDimmerUpdateEventPresetItem(e, r, t, i);
    this.var_1479[e - 1] = s;
  }
  getPreset(e) {
    return e < 0 || e >= this.var_1479.length ? null : (this.var_1479[e] ?? null);
  }
}
