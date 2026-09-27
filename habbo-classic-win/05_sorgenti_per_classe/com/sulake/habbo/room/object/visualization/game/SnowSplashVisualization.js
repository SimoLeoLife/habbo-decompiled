// Extracted from HabboAirLauncher.deobf.js, line 280395.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/game/SnowSplashVisualization.as
// Obfuscated name: _i37726337c7aa7b

class a extends bb {
  static {
    n(this, "SnowSplashVisualization");
  }
  static FRAME_ASSET_NAMES = ["snowball_splash_1", "snowball_splash_2", "snowball_splash_3"];
  _frameNumber = 0;
  _r9425ff6094578f = null;
  get isDone() {
    return this._frameNumber >= a.FRAME_ASSET_NAMES.length;
  }
  initialize(e) {
    return e instanceof UnkClass_66eb78
      ? ((this._r9425ff6094578f = e), this._r68dbc243d37d4a(1), this.updateFrame(), !0)
      : !1;
  }
  dispose() {
    ((this._r9425ff6094578f = null), super.dispose());
  }
  update(e, r, t, i) {
    (this._frameNumber++, this.updateFrame());
  }
  updateFrame() {
    let e = this.getSprite(0);
    if (e == null) return;
    if (this.isDone) {
      e.asset = null;
      return;
    }
    let r = a.FRAME_ASSET_NAMES[this._frameNumber] ?? "",
      t = this._r9425ff6094578f?.assets?.getAssetByName(r);
    e.asset = t?.content instanceof A ? t.content : null;
  }
}
