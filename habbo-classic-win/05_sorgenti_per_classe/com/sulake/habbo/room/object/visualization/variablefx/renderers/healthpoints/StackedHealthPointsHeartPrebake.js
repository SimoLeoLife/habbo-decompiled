// Extracted from HabboAirLauncher.deobf.js, line 288115.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/variablefx/renderers/healthpoints/StackedHealthPointsHeartPrebake.as
// Obfuscated name: _i4ee873a01ce766

class {
  constructor(e) {
    this._assets = e;
    ((this.heartWidth = e.background.width), (this._r650efaf638394f = e.background.height));
  }
  static {
    n(this, "StackedHealthPointsHeartPrebake");
  }
  _r650efaf638394f;
  heartWidth;
  var_1939 = {};
  _r316a1335076288(e) {
    let r = String(e >>> 0);
    return this.var_1939[r] ?? (this.var_1939[r] = this._r5cf4c5606b69e7(e));
  }
  dispose() {
    for (let e of Object.values(this.var_1939)) e.dispose();
    ((this.var_1939 = {}), (this._assets = null));
  }
  _r5cf4c5606b69e7(e) {
    let r = new A(this.heartWidth, this._r650efaf638394f, !0, 0),
      t = this._assets;
    r.lock();
    try {
      let i = new Tt(r);
      (i.clear(0),
        i.drawTintedLayer(t.background, 0, 0, e, ie.NORMAL, 255),
        t.metallic != null && i.drawLayer(t.metallic, 0, 0, ie.ADD, 255));
      for (let s of t.overlays) i.drawLayer(s.layer, 0, 0, s.blendMode, 255);
    } finally {
      r.unlock();
    }
    return r;
  }
}
