// Estratto da HabboAirLauncher.deobf.js, riga 193950.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/franksemotions/FrankRecyclerEmotion.as
// Nome offuscato: _ic17bf475d2c9f2

class a {
  constructor(e) {
    this._bitmap = e;
    if (this._bitmap == null) {
      this.var_4365 = 0;
      return;
    }
    a.var_3545.length > 0 &&
      (this._bitmap = a.var_3545.pop() ?? this._bitmap);
    let r = ["franks_emotions_blush", "franks_emotions_heart"],
      t = r[Math.floor(Math.random() * r.length)] ?? r[0];
    ((this._bitmap.assetUri = t),
      (this._bitmap.x += Math.floor(Math.random() * 70) - 20),
      (this.var_4365 = -(Math.random() * 80 + 30)),
      (this._bitmap.blend = 0));
  }
  static {
    n(this, "FrankRecyclerEmotion");
  }
  static var_3545 = [];
  var_382 = null;
  _startTime = 0;
  var_3995 = 0;
  var_4365;
  static _r408c585bb43143(e) {
    if (e == null) return new a(null);
    let r = null;
    return (
      a.var_3545.length > 0 && ((r = a.var_3545.pop() ?? null), r != null && (r.y = e.y)),
      r == null && (r = e.clone()),
      new a(r)
    );
  }
  start(e) {
    this._bitmap == null ||
      e == null ||
      (e.addChild(this._bitmap),
      (this._startTime = Date.now()),
      (this.var_3995 = this._bitmap.y),
      (this.var_382 = new _i05394ecc0c0c4d(1e3 / 60)),
      this.var_382.addEventListener(DeBouncer.addEventListener, this.onTick),
      this.var_382.start());
  }
  onTick = n((e) => {
    if (this._bitmap == null) {
      this.stop();
      return;
    }
    if (this._bitmap.disposed) {
      (this.stop(), (this._bitmap = null));
      return;
    }
    let r = (Date.now() - this._startTime) / 1e3,
      t = Math.min(1, r * 1.25);
    if (
      ((t > this._bitmap.blend + 0.1 || (this._bitmap.blend < 1 && t === 1)) &&
        (this._bitmap.blend = t),
      (this._bitmap.y = this.var_3995 + this.var_4365 * r),
      this._bitmap.y >= -50)
    )
      return;
    let i = this._bitmap;
    (this.stop(), i.parent != null && i.parent.removeChild(i), a.var_3545.push(i));
  }, "onTick");
  stop() {
    this.var_382 != null &&
      (this.var_382.stop(),
      this.var_382.removeEventListener(DeBouncer.addEventListener, this.onTick),
      (this.var_382 = null));
  }
}
