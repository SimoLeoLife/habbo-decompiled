// Estratto da HabboAirLauncher.deobf.js, riga 145225.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/events/FurniIconImageReadyEvent.as
// Nome offuscato: _i2ff5545a92af25

class a extends M {
  static {
    n(this, "FurniIconImageReadyEvent");
  }
  static const_882 = "FIIRE_ICON_READY";
  var_4798;
  var_4146;
  var_3191;
  _assetName;
  var_39;
  constructor(e, r, t, i, s, o = !1, d = !1) {
    (super(a.const_882, o, d),
      (this._assetName = e),
      (this.var_4798 = r),
      (this.var_4146 = t),
      (this.var_3191 = i),
      (this.var_39 = s));
  }
  get assetName() {
    return this._assetName;
  }
  get wallItem() {
    return this.var_4798;
  }
  get typeId() {
    return this.var_4146;
  }
  get extra() {
    return this.var_3191;
  }
  get _r5c06a2d64e9203() {
    return this.var_39;
  }
}
