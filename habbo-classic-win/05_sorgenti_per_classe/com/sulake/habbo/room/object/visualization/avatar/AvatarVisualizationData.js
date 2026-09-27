// Extracted from HabboAirLauncher.deobf.js, line 275274.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/AvatarVisualizationData.as
// Obfuscated name: _i035958745d5a2f

class {
  static {
    n(this, "AvatarVisualizationData");
  }
  _avatarRenderer = null;
  get avatarRenderer() {
    return this._avatarRenderer;
  }
  set avatarRenderer(e) {
    this._avatarRenderer = e;
  }
  initialize(e) {
    return !0;
  }
  dispose() {
    this._avatarRenderer = null;
  }
  getAvatar(e, r, t = null, i = null, s = null, o = !1) {
    if (this._avatarRenderer == null) return null;
    let d = r > 48 ? fr.LARGE : fr.LARGE_TO_SMALL;
    return o
      ? this._avatarRenderer._r4c2be8de7358b0(e, d)
      : this._avatarRenderer._r274f6640e76241(e, d, t, i, s);
  }
  _rf96292fa4b48da(e) {
    return 0;
  }
  getAvatarRendererAsset(e) {
    return this._avatarRenderer?.assets?.getAssetByName(e) ?? null;
  }
}
