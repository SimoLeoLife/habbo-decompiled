// Estratto da HabboAirLauncher.deobf.js, riga 170244.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/structure/figure/class_2253.as
// Nome offuscato: _ic792608a47b5b3

class {
  static {
    n(this, "class_2253");
  }
  _id;
  _r0965e8b4af4e87 = new Map();
  constructor(e) {
    ((this._id = _i897b98cdeac318(e, "id")), this.append(e));
  }
  append(e) {
    for (let r of _ib5ee1bd09422e6(e, "color")) this._r0965e8b4af4e87.set(_i897b98cdeac318(r, "id"), new PartColor(r));
  }
  get id() {
    return this._id;
  }
  getColor(e) {
    return this._r0965e8b4af4e87.get(e) ?? null;
  }
  get colors() {
    return this._r0965e8b4af4e87;
  }
}
