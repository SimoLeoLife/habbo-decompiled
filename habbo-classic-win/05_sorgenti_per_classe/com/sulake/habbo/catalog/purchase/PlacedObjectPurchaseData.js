// Estratto da HabboAirLauncher.deobf.js, riga 184849.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/purchase/PlacedObjectPurchaseData.as
// Nome offuscato: _i4c7de87b1264c6

class {
  constructor(e, r, t, i, s, o, d, c) {
    this.var_2440 = e;
    this.var_344 = r;
    this.var_163 = t;
    this.var_4144 = i;
    this._x = s;
    this._y = o;
    this.var_81 = d;
    this.setOfferData(c);
  }
  static {
    n(this, "PlacedObjectPurchaseData");
  }
  var_1271 = !1;
  _offerId = 0;
  var_3117 = 0;
  var_1920 = null;
  var_86 = null;
  var_1530 = "";
  dispose() {
    ((this.var_1271 = !0), (this.var_1920 = null), (this.var_86 = null));
  }
  get disposed() {
    return this.var_1271;
  }
  toString() {
    return [
      this.var_2440,
      this.var_344,
      this.var_163,
      this.var_4144,
      this._x,
      this._y,
      this.var_81,
      this._offerId,
      this.var_3117,
    ].toString();
  }
  get objectId() {
    return this.var_344;
  }
  get category() {
    return this.var_163;
  }
  get roomId() {
    return this.var_2440;
  }
  get _r8a8bd2d04c661f() {
    return this.var_4144;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get direction() {
    return this.var_81;
  }
  get offerId() {
    return this._offerId;
  }
  get productClassId() {
    return this.var_3117;
  }
  get _r82e8177c354fb4() {
    return this.var_1530;
  }
  get furniData() {
    return this.var_86;
  }
  setOfferData(e) {
    ((this._offerId = e.offerId),
      (this.var_3117 = e.product?.productClassId ?? 0),
      (this.var_1920 = e.product?.productData ?? null),
      (this.var_86 = e.product?.furnitureData ?? null),
      (this.var_1530 = e.product?.extraParam ?? ""));
  }
}
