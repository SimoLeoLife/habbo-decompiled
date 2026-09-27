// Estratto da HabboAirLauncher.deobf.js, riga 279649.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/visualization/furniture/FurnitureRoomBackgroundVisualization.as
// Nome offuscato: _i96754a2cc5c77c

class extends dg {
  static {
    n(this, "FurnitureRoomBackgroundVisualization");
  }
  var_1404 = new Map();
  dispose() {
    (super.dispose(), this.var_1404.clear());
  }
  getAdClickUrl(e) {
    return null;
  }
  imageReady(e, r) {
    if ((super.imageReady(e, r), e == null)) return;
    this.var_1404.clear();
    let t = 64,
      i = e.width,
      s = e.height;
    (this._rd7fabf756899f2(t, s, i), (t = 32), (i /= 2), (s /= 2), this._rd7fabf756899f2(t, s, i));
  }
  getSpriteXOffset(e, r, t) {
    let i = this.var_1404.get(this.getSize(e)) ?? null;
    return i != null
      ? i._r86af7c54c73816(r, 0) + this._reaf67561f53b9c(this._rf6c61bdb1bbdff, e)
      : super.getSpriteXOffset(e, r, t) + this._reaf67561f53b9c(this._rf6c61bdb1bbdff, e);
  }
  getSpriteYOffset(e, r, t) {
    let i = this.var_1404.get(this.getSize(e)) ?? null;
    return i != null
      ? i._rcfe225b0c7a896(r, 0) + this._reaf67561f53b9c(this._r28ff61a56eaebe, e)
      : super.getSpriteYOffset(e, r, t) + this._reaf67561f53b9c(this._r28ff61a56eaebe, e);
  }
  _rff74d56770433c(e, r, t) {
    return super._rff74d56770433c(e, r, t) + this._r8eadcd81fae7c5 * -1;
  }
  _rddb79ec03402f8(e, r, t) {
    return !1;
  }
  _rd7fabf756899f2(e, r, t) {
    let i = new class_2861();
    (i.setOffset(1, 0, -r),
      i.setOffset(3, 0, 0),
      i.setOffset(5, -t, 0),
      i.setOffset(7, -t, -r),
      i.setOffset(4, -t / 2, -r / 2),
      this.var_1404.set(e, i));
  }
  _reaf67561f53b9c(e, r) {
    return (e * r) / Rd.SCALE_ZOOMED_IN;
  }
}
