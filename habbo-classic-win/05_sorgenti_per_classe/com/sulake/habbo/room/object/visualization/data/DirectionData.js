// Extracted from HabboAirLauncher.deobf.js, line 275899.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/data/DirectionData.as
// Obfuscated name: _i005445f9600522

class {
  static {
    n(this, "DirectionData");
  }
  static USE_DEFAULT_DIRECTION = -1;
  _layers = [];
  constructor(e) {
    for (let r = 0; r < e; r++) this._layers.push(new qt());
  }
  dispose() {
    this._layers = null;
  }
  get layerCount() {
    return this._layers.length;
  }
  getTag(e) {
    return this.getLayer(e)?.tag ?? qt._r6e5d65472a15a2;
  }
  setTag(e, r) {
    let t = this.getLayer(e);
    t != null && (t.tag = r);
  }
  _rfcbae7e0d7ff05(e) {
    return this.getLayer(e)?.ink ?? qt._rb70b6db4a5082b;
  }
  _re6444473cee2e5(e, r) {
    let t = this.getLayer(e);
    t != null && (t.ink = r);
  }
  _rdcf30128fdeaa9(e) {
    return this.getLayer(e)?.alpha ?? qt._r867909bf9f4491;
  }
  setAlpha(e, r) {
    let t = this.getLayer(e);
    t != null && (t.alpha = r);
  }
  _refa91ef7deb9e0(e) {
    return this.getLayer(e)?.ignoreMouse ?? qt._rf55f55bd54a874;
  }
  _r83701c3b05c0dd(e, r) {
    let t = this.getLayer(e);
    t != null && (t.ignoreMouse = r);
  }
  _r2acf02aae84c5e(e) {
    return this.getLayer(e)?.xOffset ?? qt._r870d6a59ee15e6;
  }
  _r00d929aad3bd7e(e, r) {
    let t = this.getLayer(e);
    t != null && (t.xOffset = r);
  }
  _r39e48c695dc1c1(e) {
    return this.getLayer(e)?.yOffset ?? qt._r5ac5d65538c4b0;
  }
  _r95bfe96b59c297(e, r) {
    let t = this.getLayer(e);
    t != null && (t.yOffset = r);
  }
  _r3cb1c15a773382(e) {
    return this.getLayer(e)?.zOffset ?? qt._rb6be903bbb8b1e;
  }
  _r9511aeb9fea39d(e, r) {
    let t = this.getLayer(e);
    t != null && (t.zOffset = r);
  }
  copyValues(e) {
    if (!(e == null || this.layerCount !== e.layerCount))
      for (let r = 0; r < this.layerCount; r++)
        this.getLayer(r)?.copyValues(e.getLayer(r));
  }
  getLayer(e) {
    return e < 0 || e >= this.layerCount ? null : (this._layers[e] ?? null);
  }
}
