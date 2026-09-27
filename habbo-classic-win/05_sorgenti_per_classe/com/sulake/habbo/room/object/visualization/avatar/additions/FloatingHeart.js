// Extracted from HabboAirLauncher.deobf.js, line 272765.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/FloatingHeart.as
// Obfuscated name: _i3be64fb43d22c9

class a extends ExpressionAddition {
  static {
    n(this, "FloatingHeart");
  }
  static DELAY_BEFORE_ANIMATION = 300;
  static STATE_DELAY = 0;
  static STATE_FADE_IN = 1;
  static STATE_FLOAT = 2;
  static STATE_COMPLETE = 3;
  _asset = null;
  _startTime = _ia411d8d8194a3a();
  var_400 = 0;
  _offsetY = 0;
  _scale = 64;
  _state = a.STATE_DELAY;
  constructor(e, r, t) {
    super(e, r, t);
  }
  dispose() {
    (super.dispose(), (this._asset = null));
  }
  animate(e) {
    if (e == null) return !1;
    let r = this._asset?.nativeTexture ?? null;
    if ((r != null && ((e.asset = null), (e.nativeTexture = r)), this._state === a.STATE_DELAY))
      return _ia411d8d8194a3a() - this._startTime < a.DELAY_BEFORE_ANIMATION
        ? !1
        : ((this._state = a.STATE_FADE_IN),
          (e.alpha = 0),
          (e.visible = !0),
          (this.var_400 = 0),
          !0);
    if (this._state === a.STATE_FADE_IN)
      return (
        (this.var_400 += 0.1),
        (e.offsetY = this._offsetY),
        (e.alpha = Math.pow(this.var_400, 0.9) * 255),
        this.var_400 >= 1 &&
          ((this.var_400 = 0), (e.alpha = 255), (this._state = a.STATE_FLOAT)),
        !0
      );
    if (this._state === a.STATE_FLOAT) {
      let t = Math.pow(this.var_400, 0.9);
      this.var_400 += 0.05;
      let i = this._scale < 48 ? -30 : -40;
      return (
        (e.offsetY = this._offsetY + (this.var_400 < 1 ? t : 1) * i),
        (e.alpha = (1 - t) * 255),
        e.alpha <= 0 && ((e.visible = !1), (this._state = a.STATE_COMPLETE)),
        !0
      );
    }
    return !1;
  }
  update(e, r) {
    if (e == null || this.avatar == null) return;
    this._scale = r;
    let t = 0,
      i = 64;
    (r < 48
      ? ((this._asset = this.avatar.getAvatarRendererAsset("user_blowkiss_small_png")),
        this.avatar.angle === 90 || this.avatar.angle === 270
          ? (t = 0)
          : this.avatar.angle === 135 || this.avatar.angle === 180 || this.avatar.angle === 225
            ? (t = 6)
            : (t = -6),
        (this._offsetY = -38),
        (i = 32))
      : ((this._asset = this.avatar.getAvatarRendererAsset("user_blowkiss_png")),
        this.avatar.angle === 90 || this.avatar.angle === 270
          ? (t = -3)
          : this.avatar.angle === 135 || this.avatar.angle === 180 || this.avatar.angle === 225
            ? (t = 22)
            : (t = -30),
        (this._offsetY = -70)),
      this.avatar.posture === "sit"
        ? (this._offsetY += i / 2)
        : this.avatar.posture === "lay" && (this._offsetY += i));
    let s = this._asset?.nativeTexture ?? null;
    if (s == null) {
      e.visible = !1;
      return;
    }
    ((e.asset = null),
      (e.nativeTexture = s),
      (e.offsetX = t),
      (e.offsetY = this._offsetY),
      (e._relativeDepth = -0.02),
      (e.alpha = 0));
    let o = this.var_400;
    (this.animate(e), (this.var_400 = o));
  }
}
