// Estratto da HabboAirLauncher.deobf.js, riga 67474.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/pets/PetCustomPart.as
// Nome offuscato: _i1c9a407cdb6f4e

class {
  constructor(e, r, t) {
    this.var_3114 = e;
    this._partId = r;
    this.var_3268 = t;
  }
  static {
    n(this, "PetCustomPart");
  }
  get paletteId() {
    return this.var_3268;
  }
  set paletteId(e) {
    this.var_3268 = e;
  }
  get partId() {
    return this._partId;
  }
  set partId(e) {
    this._partId = e;
  }
  get layerId() {
    return this.var_3114;
  }
  set layerId(e) {
    this.var_3114 = e;
  }
}
