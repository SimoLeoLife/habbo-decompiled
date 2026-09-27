// Extracted from HabboAirLauncher.deobf.js, line 273194.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/TypingBubble.as
// Obfuscated name: _i5b21762ad26d73

class {
  constructor(e, r) {
    this.id = e;
    this.var_204 = r;
  }
  static {
    n(this, "TypingBubble");
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
    let t = 14,
      i = -83,
      s = 64;
    (r < 48
      ? ((this._asset = this.var_204.getAvatarRendererAsset("user_typing_small_png")),
        (t = 3),
        (i = -42),
        (s = 32))
      : (this._asset = this.var_204.getAvatarRendererAsset("user_typing_png")),
      this.var_204.posture === "sit"
        ? (i += s / 2)
        : this.var_204.posture === "lay" && (i += s));
    let o = this._asset?.nativeTexture ?? null;
    if (o == null) {
      e.visible = !1;
      return;
    }
    ((e.asset = null), (e.nativeTexture = o), (e.offsetX = t), (e.offsetY = i), (e._relativeDepth = -0.02));
  }
}
