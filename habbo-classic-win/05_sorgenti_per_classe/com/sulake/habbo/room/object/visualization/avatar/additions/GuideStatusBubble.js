// Extracted from HabboAirLauncher.deobf.js, line 273032.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/GuideStatusBubble.as
// Obfuscated name: _ie98f7f86fd3c3a

class {
  constructor(e, r, t) {
    this.id = e;
    this.var_204 = r;
    this._status = t;
  }
  static {
    n(this, "GuideStatusBubble");
  }
  _relativeDepth = 0;
  _asset = null;
  get disposed() {
    return this.var_204 == null;
  }
  dispose() {
    ((this.var_204 = null), (this._asset = null));
  }
  animate(e) {
    let r = this._asset?.nativeTexture ?? null;
    return (e != null && r != null && ((e.asset = null), (e.nativeTexture = r)), !1);
  }
  update(e, r) {
    if (e == null || this.var_204 == null) return;
    ((e.visible = !0), (e._relativeDepth = this._relativeDepth), (e.alpha = 255));
    let t = -19,
      i = -120,
      s = 64,
      o = this._status === UnkConstants_3dbacb.GUIDE ? "user_guide_bubble_png" : "user_guide_requester_bubble_png";
    (r < 48
      ? ((this._asset = this.var_204.getAvatarRendererAsset(o)), (i = -80), (s = 32))
      : (this._asset = this.var_204.getAvatarRendererAsset(o)),
      this.var_204.posture === ve.POSTURE_SIT
        ? (i += s / 2)
        : this.var_204.posture === ve.POSTURE_LAY && (i += s));
    let d = this._asset?.nativeTexture ?? null;
    if (d == null) {
      e.visible = !1;
      return;
    }
    ((e.asset = null), (e.nativeTexture = d), (e.offsetX = t), (e.offsetY = i), (e._relativeDepth = -0.02));
  }
}
