// Estratto da HabboAirLauncher.deobf.js, riga 162560.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/advertisement/AdImageRequest.as
// Nome offuscato: _i9c7cec161ab2fa

class {
  constructor(e, r = null, t = null, i = -1, s = -1) {
    this.var_2440 = e;
    this._r3ee265b9df25d6 = r;
    this._r2a283626fd1451 = t;
    this.var_344 = i;
    this.var_4410 = s;
  }
  static {
    n(this, "AdImageRequest");
  }
  get roomId() {
    return this.var_2440;
  }
  get objectId() {
    return this.var_344;
  }
  get objectCategory() {
    return this.var_4410;
  }
  get _r96e37c569d69cb() {
    return this._r3ee265b9df25d6 ?? "";
  }
  get _raf59276acdf2ee() {
    return this._r2a283626fd1451 ?? "";
  }
}
