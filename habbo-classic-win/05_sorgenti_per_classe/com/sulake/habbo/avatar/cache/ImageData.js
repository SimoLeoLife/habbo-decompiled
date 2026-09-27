// Estratto da HabboAirLauncher.deobf.js, riga 166938.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/cache/ImageData.as
// Nome offuscato: _id0752657a29fd9

class {
  static {
    n(this, "ImageData");
  }
  _bitmap;
  _r14a03de97f4f58;
  _regPoint;
  _flipH;
  var_536;
  constructor(e, r, t, i, s) {
    ((this._bitmap = e),
      (this._r14a03de97f4f58 = r.clone()),
      (this._regPoint = t.clone()),
      (this._flipH = i),
      (this.var_536 = s),
      i && this._regPoint != null && (this._regPoint.x = -this._regPoint.x + r.width));
  }
  dispose() {
    ((this._bitmap = null), (this._regPoint = null), (this.var_536 = null));
  }
  get bitmap() {
    return this._bitmap;
  }
  get rect() {
    return this._r14a03de97f4f58;
  }
  get regPoint() {
    return this._regPoint?.clone() ?? new E();
  }
  get flipH() {
    return this._flipH;
  }
  get colorTransform() {
    return this.var_536;
  }
  get _r7924b7c0e3a830() {
    let e = new D(0, 0, this._r14a03de97f4f58.width, this._r14a03de97f4f58.height),
      r = this._regPoint ?? new E();
    return (e.offset(-r.x, -r.y), e);
  }
}
