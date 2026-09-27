// Extracted from HabboAirLauncher.deobf.js, line 190547.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/marketplace/MarketplaceChart.as
// Obfuscated name: _iad343899b1a78a

class {
  constructor(e, r) {
    this._x = e;
    this._y = r;
    ((this._x = e.slice()), (this._y = r.slice()));
  }
  static {
    n(this, "MarketplaceChart");
  }
  _chartWidth = 0;
  var_2199 = 0;
  _xMin = -30;
  _yMax = 0;
  draw(e, r) {
    let t = new A(e, r, !0, 16777215);
    if (!this.available) return t;
    this._yMax = 0;
    for (let l of this._y) l > this._yMax && (this._yMax = l);
    let i = Math.pow(10, Math.max(this._yMax.toString().length - 1, 0));
    this._yMax = Math.ceil(this._yMax / i) * i;
    let s = new Pt();
    s.embedFonts = !0;
    let o = new _i();
    ((o.font = "Volter"),
      (o.size = 9),
      (s.defaultTextFormat = o),
      (s.text = this._yMax.toString()),
      t.draw(s),
      (this._chartWidth = e - s.textWidth - 2),
      (this.var_2199 = r - s.textHeight));
    let d = s.textWidth;
    ((s.text = "0"),
      t.draw(s, { a: 1, b: 0, c: 0, d: 1, tx: d - s.textWidth + 1, ty: r - s.textHeight - 1 }));
    let f = t._r1450a5f82d6108?.()?.getContext?.("2d") ?? null;
    if (f == null) return t;
    (f.save(),
      f.translate(e - this._chartWidth, (r - this.var_2199) / 2),
      (f.strokeStyle = "#cccccc"),
      (f.lineWidth = 1),
      f.beginPath(),
      f.moveTo(0, 0),
      f.lineTo(0, this.var_2199));
    for (let l = 0; l <= 5; l++) {
      let b = ((this.var_2199 - 1) / 5) * l;
      (f.moveTo(0, b), f.lineTo(this._chartWidth - 1, b));
    }
    (f.stroke(),
      (f.strokeStyle = "#0000ff"),
      (f.lineWidth = 2),
      f.beginPath(),
      f.moveTo(this.getX(0), this.getY(0)));
    for (let l = 1; l < this._x.length; l++) f.lineTo(this.getX(l), this.getY(l));
    return (f.stroke(), f.restore(), t);
  }
  get available() {
    return this._x != null && this._y != null && this._x.length > 1;
  }
  getX(e) {
    return this._chartWidth + (this._chartWidth / -this._xMin) * this._x[e];
  }
  getY(e) {
    return this.var_2199 - (this.var_2199 / this._yMax) * this._y[e];
  }
}
