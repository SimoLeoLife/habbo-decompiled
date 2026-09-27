// Extracted from HabboAirLauncher.deobf.js, line 159198.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/RoomSessionDimmerPresetsEvent.as
// Obfuscated name: _ifa4be023e1e580

class extends RoomSessionEvent {
  static {
    n(this, "RoomSessionDimmerPresetsEvent");
  }
  static ROOM_DIMMER_PRESETS = "RSDPE_PRESETS";
  var_4427 = 0;
  var_1479 = [];
  var_2735;
  var_1427;
  constructor(e, r, t = !1, i = !1) {
    super(e, r, t, i);
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
    let s = new RoomSessionDimmerPresetsEventPresetItem(e, r, t, i);
    this.var_1479[e - 1] = s;
  }
  getPreset(e) {
    return e < 0 || e >= this.var_1479.length ? null : (this.var_1479[e] ?? null);
  }
}
