// Estratto da HabboAirLauncher.deobf.js, riga 273074.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/MutedBubble.as
// Nome offuscato: _ie3e46b47c57e8d

class {
  constructor(e, r) {
    this.id = e;
    this.var_204 = r;
  }
  static {
    n(this, "MutedBubble");
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
    let t = -15,
      i = -110,
      s = 64;
    (r < 48
      ? ((this._asset = this.var_204.getAvatarRendererAsset("user_muted_small_png")),
        (t = -12),
        (i = -66),
        (s = 32))
      : (this._asset = this.var_204.getAvatarRendererAsset("user_muted_png")),
      this.var_204.posture === ve.POSTURE_SIT
        ? (i += s / 2)
        : this.var_204.posture === ve.POSTURE_LAY && (i += s));
    let o = this._asset?.nativeTexture ?? null;
    if (o == null) {
      e.visible = !1;
      return;
    }
    ((e.asset = null), (e.nativeTexture = o), (e.offsetX = t), (e.offsetY = i), (e._relativeDepth = -0.02));
  }
}
