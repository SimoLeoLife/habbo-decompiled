// Extracted from HabboAirLauncher.deobf.js, line 287194.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/bar/MaskedHeartFillFramePrebake.as
// Obfuscated name: _ibd01b8c7c90da6

class a {
  constructor(e) {
    this._assets = e;
    ((this.frameWidth = e.background.width),
      (this.frameHeight = e.background.height),
      (this.progressPixelWidth = Math.max(0, this.frameWidth - a._rc074d9e67a9397 - a._r7e288ef5fa1e7d)));
  }
  static {
    n(this, "MaskedHeartFillFramePrebake");
  }
  static _rc074d9e67a9397 = 2;
  static _r7e288ef5fa1e7d = 2;
  static const_330 = 1;
  static _r6a42487ef00f55 = 2;
  frameWidth;
  frameHeight;
  progressPixelWidth;
  var_1955 = {};
  _rdbb21d643e0f1f(e, r) {
    let t = Math.max(0, Math.min(this.progressPixelWidth, r | 0)),
      i = String(e >>> 0),
      s = this.var_1955[i] ?? (this.var_1955[i] = {});
    return s[String(t)] ?? (s[String(t)] = this.createFrame(e, t));
  }
  dispose() {
    for (let e of Object.values(this.var_1955)) for (let r of Object.values(e)) r.dispose();
    ((this.var_1955 = {}), (this._assets = null));
  }
  createFrame(e, r) {
    let t = new A(this.frameWidth, this.frameHeight, !0, 0),
      i = this.createProgressClip(r),
      s = this._assets;
    t.lock();
    try {
      let o = new Tt(t);
      if ((o.drawLayer(s.background, 0, 0, ie.NORMAL, 255), r > 0 && i != null)) {
        (o.drawTintedLayer(s.bar, 0, 0, e, ie.NORMAL, 255, i),
          this.drawEndPointer(o, s._r86b9a074980637, s.mask, r),
          s.metallic != null && o.drawLayer(s.metallic, 0, 0, ie.ADD, 255, i));
        for (let d of s.overlays) o.drawLayer(d.layer, 0, 0, d.blendMode, 255, i);
      }
    } finally {
      t.unlock();
    }
    return t;
  }
  drawEndPointer(e, r, t, i) {
    let s = a._rc074d9e67a9397 + i - 1,
      o = t.width >= this.frameWidth ? 0 : s - ((t.width / 2) | 0),
      d = t.height >= this.frameHeight ? 0 : ((this.frameHeight - t.height) / 2) | 0;
    e._radd7e99a481d87(
      r,
      t,
      s - a.const_330,
      0,
      o,
      d,
      ie.MULTIPLY,
      255,
      new VariableFxClipRect(s, a._r6a42487ef00f55, 1, Math.max(0, this.frameHeight - a._r6a42487ef00f55 * 2)),
    );
  }
  createProgressClip(e) {
    return e <= 0 ? null : new VariableFxClipRect(a._rc074d9e67a9397, 0, e, this.frameHeight);
  }
}
