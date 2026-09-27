// Estratto da HabboAirLauncher.deobf.js, riga 376402.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/room/renderer/cache/class_3945.as
// Nome offuscato: _i146300a17c82c6

class {
  constructor(e) {
    this.var_4412 = e;
  }
  static {
    n(this, "class_3945");
  }
  var_3208 = -1;
  var_5499 = -1;
  _r002dedb4c80070 = new k();
  var_1184 = new k();
  var_2691 = new k();
  var_5649 = !1;
  get locationChanged() {
    return this.var_5649;
  }
  dispose() {}
  getScreenLocation(e, r) {
    if (e == null || r == null) return null;
    let t = !1,
      i = e.getLocation();
    if (i == null) return null;
    if (
      ((r.updateId !== this.var_3208 || e.getUpdateID() !== this.var_5499) &&
        ((this.var_5499 = e.getUpdateID()),
        (r.updateId !== this.var_3208 ||
          i.x !== this._r002dedb4c80070.x ||
          i.y !== this._r002dedb4c80070.y ||
          i.z !== this._r002dedb4c80070.z) &&
          ((this.var_3208 = r.updateId), this._r002dedb4c80070.assign(i), (t = !0))),
      (this.var_5649 = t),
      !t)
    )
      return this.var_1184;
    let s = r._rd0d22ff45cecac(i);
    if (s == null) return null;
    let o =
      this.var_4412 == null
        ? Number.NaN
        : (e.getStringToStringMap()?._ra3dc9a405b5c73(this.var_4412) ?? Number.NaN);
    if (Number.isNaN(o) || o === 0)
      if (
        ((this.var_2691.x = Math.round(i.x)),
        (this.var_2691.y = Math.round(i.y)),
        (this.var_2691.z = i.z),
        this.var_2691.x !== i.x || this.var_2691.y !== i.y)
      ) {
        let d = r._rd0d22ff45cecac(this.var_2691);
        (this.var_1184.assign(s), d != null && (this.var_1184.z = d.z));
      } else this.var_1184.assign(s);
    else this.var_1184.assign(s);
    return (
      (this.var_1184.x = Math.round(this.var_1184.x)),
      (this.var_1184.y = Math.round(this.var_1184.y)),
      this.var_1184
    );
  }
}
