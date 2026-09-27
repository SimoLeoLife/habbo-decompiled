// Extracted from HabboAirLauncher.deobf.js, line 162450.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/events/HabboToolbarEvent.as
// Obfuscated name: _if357b9fab77cd6

class extends M {
  static {
    n(this, "HabboToolbarEvent");
  }
  static CAMERA_LAUNCH_ORIGIN_CHAT = "chatCameraCommand";
  static CAMERA_LAUNCH_ORIGIN_EIW_MAKE_OWN = "imageWidgetMakeOwn";
  static CAMERA_LAUNCH_ORIGIN_ROOM_TOOL = "roomToolsMenu";
  static CAMERA_LAUNCH_ORIGIN_TOOLBAR = "toolBarCameraIcon";
  static CAMERA_TOGGLE = "HTE_ICON_CAMERA";
  static GROUP_ROOM_INFO_CLICK = "HTE_GROUP_ROOM_INFO_CLICK";
  static RESIZED = "HTE_RESIZED";
  static TOOLBAR_CLICK = "HTE_TOOLBAR_CLICK";
  static const_85 = "HTIE_ICON_ZOOM";
  var_4098;
  _r1eacb0d8c16f14;
  constructor(e, r = !1, t = !1) {
    super(e, r, t);
  }
  set _re9c693c8b69b04(e) {
    this.var_4098 = e;
  }
  get _re9c693c8b69b04() {
    return this.var_4098;
  }
  set iconName(e) {
    this._r1eacb0d8c16f14 = e;
  }
  get iconName() {
    return this._r1eacb0d8c16f14;
  }
}
