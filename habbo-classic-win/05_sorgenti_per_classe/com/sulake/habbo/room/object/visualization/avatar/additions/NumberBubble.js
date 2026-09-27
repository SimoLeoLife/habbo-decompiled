// Extracted from HabboAirLauncher.deobf.js, line 273117.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/avatar/additions/NumberBubble.as
// Obfuscated name: _i0e70e8f1f11de1

class {
  constructor(e, r, t) {
    this.id = e;
    this._number = r;
    this.var_204 = t;
  }
  static {
    n(this, "NumberBubble");
  }
  _asset = null;
  _scale = 64;
  var_978 = 0;
  var_3340 = !1;
  var_2154 = 0;
  get disposed() {
    return this.var_204 == null;
  }
  dispose() {
    ((this.var_204 = null), (this._asset = null));
  }
  update(e, r) {
    if (!(e == null || this.var_204 == null)) {
      if (((this._scale = r), this._number > 0)) {
        let t = -8,
          i = -105,
          s = 64;
        (r < 48
          ? ((this._asset = this.var_204.getAvatarRendererAsset(`number_${this._number}_small_png`)),
            (t = -6),
            (i = -52),
            (s = 32))
          : (this._asset = this.var_204.getAvatarRendererAsset(`number_${this._number}_png`)),
          this.var_204.posture === "sit"
            ? (i += s / 2)
            : this.var_204.posture === "lay" && (i += s));
        let o = this._asset?.nativeTexture ?? null;
        o != null
          ? ((e.visible = !0),
            (e.asset = null),
            (e.nativeTexture = o),
            (e.offsetX = t),
            (e.offsetY = i),
            (e._relativeDepth = -0.01),
            (this.var_978 = 1),
            (this.var_3340 = !0),
            (this.var_2154 = 0),
            (e.alpha = 0))
          : (e.visible = !1);
        return;
      }
      e.visible && (this.var_978 = -1);
    }
  }
  animate(e) {
    if (e == null) return !1;
    let r = this._asset?.nativeTexture ?? null;
    r != null && ((e.asset = null), (e.nativeTexture = r));
    let t = e.alpha,
      i = !1;
    if (this.var_3340) {
      if ((this.var_2154++, this.var_2154 < 10)) return !1;
      if (this.var_978 < 0) e.offsetY -= this._scale < 48 ? 2 : 4;
      else {
        let s = 4;
        (this._scale < 48 && (s = 8), this.var_2154 % s === 0 && ((e.offsetY -= 1), (i = !0)));
      }
    }
    return this.var_978 > 0
      ? (t < 255 && (t += 32), t >= 255 && ((t = 255), (this.var_978 = 0)), (e.alpha = t), !0)
      : this.var_978 < 0
        ? (t >= 0 && (t -= 32),
          t <= 0 && ((this.var_978 = 0), (this.var_3340 = !1), (t = 0), (e.visible = !1)),
          (e.alpha = t),
          !0)
        : i;
  }
}
