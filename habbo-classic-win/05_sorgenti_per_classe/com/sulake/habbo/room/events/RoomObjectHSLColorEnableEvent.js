// Extracted from HabboAirLauncher.deobf.js, line 180836.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/events/RoomObjectHSLColorEnableEvent.as
// Obfuscated name: _ia94bd85b25a7ce

class extends RoomObjectEvent {
  constructor(r, t, i, s, o, d, c = !1, f = !1) {
    super(r, t, c, f);
    this.var_4539 = i;
    this._hue = s;
    this.var_2419 = o;
    this.var_2379 = d;
  }
  static {
    n(this, "RoomObjectHSLColorEnableEvent");
  }
  static ROOM_BACKGROUND_COLOR = "ROHSLCEE_ROOM_BACKGROUND_COLOR";
  get enable() {
    return this.var_4539;
  }
  get hue() {
    return this._hue;
  }
  get saturation() {
    return this.var_2419;
  }
  get lightness() {
    return this.var_2379;
  }
}
