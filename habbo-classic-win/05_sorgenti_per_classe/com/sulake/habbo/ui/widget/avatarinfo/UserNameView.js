// Extracted from HabboAirLauncher.deobf.js, line 309258.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/avatarinfo/UserNameView.as
// Obfuscated name: _iaca8ba9a335502

class a extends AvatarContextInfoView {
  static {
    n(this, "UserNameView");
  }
  static DEFAULT_BG_COLOR = 4288528218;
  static DEFAULT_FADE_DELAY_MS = 8e3;
  var_344 = 0;
  _isGameRoomMode = !1;
  constructor(e, r = !1) {
    (super(e), (this._isGameRoomMode = r));
  }
  get objectId() {
    return this.var_344;
  }
  get _r8dee1accb03a98() {
    return this._isGameRoomMode;
  }
  static setup(e, r, t, i, s, o = 0, d = a.DEFAULT_BG_COLOR, c = a.DEFAULT_FADE_DELAY_MS, f = !1) {
    ((e.var_344 = typeof o == "number" ? o : 0),
      (e.var_4275 = c),
      AvatarContextInfoView.setup(e, r, t, i, s, !1, typeof d == "boolean" ? d : f),
      e.window != null && (e.window.color = typeof d == "number" ? d : a.DEFAULT_BG_COLOR));
  }
  get maximumBlend() {
    return this._isGameRoomMode ? 0.75 : super.maximumBlend;
  }
}
