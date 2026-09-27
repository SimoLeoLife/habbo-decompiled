// Estratto da HabboAirLauncher.deobf.js, riga 272876.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/FloatingIdleZ.as
// Nome offuscato: _i4902c6922dcd81

class a {
  constructor(e, r) {
    this.id = e;
    this.var_204 = r;
  }
  static {
    n(this, "FloatingIdleZ");
  }
  static DELAY_BEFORE_ANIMATION = 2e3;
  static _r74c2b854499e25 = 2e3;
  static STATE_DELAY = 0;
  static STATE_FRAME_A = 1;
  static STATE_FRAME_B = 2;
  _asset = null;
  _startTime = _ia411d8d8194a3a();
  _offsetY = 0;
  _scale = 64;
  _state = a.STATE_DELAY;
  get disposed() {
    return this.var_204 == null;
  }
  dispose() {
    ((this.var_204 = null), (this._asset = null));
  }
  animate(e) {
    if (e == null || this.var_204 == null) return !1;
    (this._state === a.STATE_DELAY &&
      _ia411d8d8194a3a() - this._startTime >= a.DELAY_BEFORE_ANIMATION &&
      ((this._state = a.STATE_FRAME_A),
      (this._startTime = _ia411d8d8194a3a()),
      (this._asset = this.var_204.getAvatarRendererAsset(this.getAssetNameForFrame(1)))),
      this._state === a.STATE_FRAME_A &&
        _ia411d8d8194a3a() - this._startTime >= a._r74c2b854499e25 &&
        ((this._state = a.STATE_FRAME_B),
        (this._startTime = _ia411d8d8194a3a()),
        (this._asset = this.var_204.getAvatarRendererAsset(this.getAssetNameForFrame(2)))),
      this._state === a.STATE_FRAME_B &&
        _ia411d8d8194a3a() - this._startTime >= a._r74c2b854499e25 &&
        ((this._state = a.STATE_FRAME_A),
        (this._startTime = _ia411d8d8194a3a()),
        (this._asset = this.var_204.getAvatarRendererAsset(this.getAssetNameForFrame(1)))));
    let r = this._asset?.nativeTexture ?? null;
    return (
      r != null
        ? ((e.asset = null), (e.nativeTexture = r), (e.alpha = 255), (e.visible = !0))
        : (e.visible = !1),
      !1
    );
  }
  update(e, r) {
    if (e == null || this.var_204 == null) return;
    ((this._scale = r),
      (this._asset = this.var_204.getAvatarRendererAsset(
        this.getAssetNameForFrame(this._state === a.STATE_FRAME_A ? 1 : 2),
      )));
    let t = 0,
      i = 64;
    (r < 48
      ? ((t = this._r533a89aeef4053() ? 10 : -16), (this._offsetY = -38), (i = 32))
      : ((t = this._r533a89aeef4053() ? 22 : -30), (this._offsetY = -70)),
      this.var_204.posture === "sit"
        ? (this._offsetY += i / 2)
        : this.var_204.posture === "lay" && (this._offsetY += i - 0.3 * i));
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
  }
  _r533a89aeef4053() {
    return this.var_204 == null
      ? !1
      : this.var_204.angle === 135 ||
          this.var_204.angle === 180 ||
          this.var_204.angle === 225 ||
          this.var_204.angle === 270;
  }
  getAssetNameForFrame(e) {
    return `user_idle_${this._r533a89aeef4053() ? "right" : "left"}_${e}${this._scale < 48 ? "_small" : ""}_png`;
  }
}
