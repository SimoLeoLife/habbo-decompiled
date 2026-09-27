// Extracted from HabboAirLauncher.deobf.js, line 280428.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/game/SnowballVisualization.as
// Obfuscated name: _i0bb384571b8eca

class a extends bb {
  static {
    n(this, "SnowballVisualization");
  }
  static SNOWBALL_ASSET_NAME = "snowball_small_png";
  static SNOWBALL_SHADOW_ASSET_NAME = "snowball_small_shadow_png";
  static const_987 = 16;
  _r9425ff6094578f = null;
  initialize(e) {
    if (!(e instanceof UnkClass_66eb78)) return !1;
    ((this._r9425ff6094578f = e), this._r68dbc243d37d4a(2));
    let r = this.getSprite(0),
      t = this.getSprite(1),
      i = e.assets?.getAssetByName(a.SNOWBALL_ASSET_NAME),
      s = e.assets?.getAssetByName(a.SNOWBALL_SHADOW_ASSET_NAME);
    return (
      r != null && i?.content instanceof A && (r.asset = i.content),
      t != null &&
        s?.content instanceof A &&
        ((t.asset = s.content), (t.alpha = 100), (t._relativeDepth = 1)),
      !0
    );
  }
  dispose() {
    ((this._r9425ff6094578f = null), super.dispose());
  }
  update(e, r, t, i) {
    let s = this.getSprite(1),
      o = this.object?.getLocation()?.z ?? 0;
    s != null && ((s.offsetY = o * a.const_987), (s.alpha = Math.max(0, 100 - s.offsetY / 10)));
  }
}
