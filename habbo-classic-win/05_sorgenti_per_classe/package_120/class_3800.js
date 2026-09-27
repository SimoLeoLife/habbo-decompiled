// Estratto da HabboAirLauncher.deobf.js, riga 67502.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/package_120/class_3800.as
// Nome offuscato: _i7e7a88d357df66

class {
  static {
    n(this, "class_3800");
  }
  var_4146;
  var_3268;
  _color;
  PetCustomPart;
  _rf6b382cddcf1ee;
  var_3343;
  var_3215;
  _headOnly;
  constructor(e) {
    ((this.var_4146 = this.getTypeId(e)),
      (this.var_3268 = this.getPaletteId(e)),
      (this._color = this.getColor(e)),
      (this._headOnly = this.getHeadOnly(e)));
    let r = this.getCustomData(e);
    ((this._rf6b382cddcf1ee = this.getCustomLayerIds(r)),
      (this.var_3343 = this.getCustomPartIds(r)),
      (this.var_3215 = this._r807aac08355593(r)),
      (this.PetCustomPart = []));
    for (let t = 0; t < this._rf6b382cddcf1ee.length; ++t)
      this.PetCustomPart.push(
        new PetCustomPart(this._rf6b382cddcf1ee[t], this.var_3343[t], this.var_3215[t]),
      );
  }
  get typeId() {
    return this.var_4146;
  }
  get paletteId() {
    return this.var_3268;
  }
  get color() {
    return this._color;
  }
  get _ra07c7d9b3783e1() {
    return this._rf6b382cddcf1ee;
  }
  get _r277c39797bd982() {
    return this.var_3343;
  }
  get _r23313da862e394() {
    return this.var_3215;
  }
  get customParts() {
    return this.PetCustomPart;
  }
  get _r09f63cbb67efe2() {
    return this._rf6b382cddcf1ee.length > 0;
  }
  get _r174f75c83127f3() {
    return this._headOnly;
  }
  getCustomPart(e) {
    for (let r of this.PetCustomPart) if (r.layerId === e) return r;
    return null;
  }
  get figureString() {
    let e = `${this.typeId} ${this.paletteId} ${this.color.toString(16)}`;
    e += ` ${this.customParts.length}`;
    for (let r of this.customParts) e += ` ${r.layerId} ${r.partId} ${r.paletteId}`;
    return e;
  }
  getCustomData(e) {
    if (e == null) return [];
    let r = e.split(" "),
      t = this._headOnly ? 1 : 0,
      i = 4 + t;
    if (r.length > i) {
      let s = 3 + t,
        o = parseInt(r[s] ?? "0", 10);
      return r.slice(i, i + o * 3);
    }
    return [];
  }
  getCustomLayerIds(e) {
    let r = [];
    for (let t = 0; t < e.length; t += 3) r.push(parseInt(e[t] ?? "0", 10));
    return r;
  }
  getCustomPartIds(e) {
    let r = [];
    for (let t = 0; t < e.length; t += 3) r.push(parseInt(e[t + 1] ?? "0", 10));
    return r;
  }
  _r807aac08355593(e) {
    let r = [];
    for (let t = 0; t < e.length; t += 3) r.push(parseInt(e[t + 2] ?? "0", 10));
    return r;
  }
  getTypeId(e) {
    let r = e?.split(" ") ?? [];
    return r.length >= 1 ? parseInt(r[0] ?? "0", 10) : 0;
  }
  getPaletteId(e) {
    let r = e?.split(" ") ?? [];
    return r.length >= 2 ? parseInt(r[1] ?? "0", 10) : 0;
  }
  getColor(e) {
    let r = e?.split(" ") ?? [];
    return r.length >= 3 ? parseInt(r[2] ?? "ffffff", 16) : 16777215;
  }
  getHeadOnly(e) {
    let r = e?.split(" ") ?? [];
    return r.length >= 4 ? r[3] === "head" : !1;
  }
}
