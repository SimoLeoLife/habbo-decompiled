// Estratto da HabboAirLauncher.deobf.js, riga 277681.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureCuboidVisualization.as
// Nome offuscato: _ic20945b9d0adc7

class extends bb {
  static {
    n(this, "FurnitureCuboidVisualization");
  }
  var_997 = null;
  _rac8ee552f8f91b = [];
  _rec50c40c704775 = !1;
  var_2474 = 0;
  dispose() {
    (super.dispose(), this.var_997?.dispose(), (this.var_997 = null));
    for (let e of this._rac8ee552f8f91b) e.dispose();
    this._rac8ee552f8f91b = [];
  }
  initialize(e) {
    return (this.reset(), !0);
  }
  update(e, r, t, i) {
    let s = this.object;
    s == null ||
      e == null ||
      (this.var_997 == null &&
        (this.var_997 = new Na(`furniture cuboid visualization - ${s.getInstanceId()}`)),
      this.initializePlanes(),
      this.updatePlanes(e, r));
  }
  defineSprites() {
    this._r68dbc243d37d4a(1);
  }
  initializePlanes() {
    if (this._rec50c40c704775) return;
    let e = this.object;
    if (e == null) return;
    let r = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_693),
      t = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_230),
      i = e.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_357);
    if (r == null || t == null || i == null || Number.isNaN(r) || Number.isNaN(t) || Number.isNaN(i)) return;
    let s = new k(r, 0, 0),
      o = new k(0, t, 0),
      d = new k(-0.5, -0.5, 0),
      c = new FurniturePlane(d, s, o);
    ((c.color = 16776960),
      this._rac8ee552f8f91b.push(c),
      (this._rec50c40c704775 = !0),
      this.defineSprites());
  }
  updatePlanes(e, r) {
    let t = this.object;
    if (t == null || this.var_997 == null) return;
    this.var_2474++;
    let i = r;
    for (let s = 0; s < this._rac8ee552f8f91b.length; s++) {
      let o = !1,
        d = `plane ${s} ${e.scale}`,
        c = this.var_997.getAssetByName(d);
      c == null &&
        ((c = new Qt(this.var_997.getAssetTypeDeclarationByClass(Qt))),
        this.var_997.setAsset(d, c));
      let f = this._rac8ee552f8f91b[s] ?? null;
      if (f != null) {
        let b = t.getDirection()?.x ?? 0;
        if ((f.setRotation(Math.trunc(b / 45) === 2 || Math.trunc(b / 45) === 6), f.update(e, i))) {
          let _ = f.bitmapData,
            h = c?.content;
          (_ == null ? (c = null) : (h != null && h !== _ && h.dispose(), c?.setUnknownContent(_)), (o = !0));
        }
      } else c = null;
      let l = this.getSprite(s);
      if (l != null) {
        if (f != null) {
          let b = f.offset;
          ((l.offsetX = -b.x), (l.offsetY = -b.y), (l.color = f.color), (l.visible = f.visible));
        } else l.visible = !1;
        ((l.asset = c != null ? c.content : null),
          o && (l.assetName = `${d}_${t.getInstanceId()}_${this.var_2474}`),
          (l._relativeDepth = f?._relativeDepth ?? 0));
      }
    }
  }
}
