// Estratto da HabboAirLauncher.deobf.js, riga 243544.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/requirements/TradeRequirementWrapper.as
// Nome offuscato: _i8fbecaee227a95

class {
  constructor(e) {
    this.var_2261 = e;
    if (this.var_2261.rules?._r6f70d655857f72 != null) {
      ((this.var_3645 = new Set()),
        (this.var_3805 = new Set()),
        (this.var_3397 = new Set()));
      for (let r of this.var_2261.rules._r6f70d655857f72)
        for (let t of r.nodes ?? [])
          t.type === xn.TYPE_COIN
            ? (this.var_5410 = !0)
            : t.type === xn.TYPE_FURNI &&
              t.itemType != null &&
              (t.itemType.isWallItem
                ? (t.itemType.legacyPosterId.length > 0 &&
                    this.var_3397.add(t.itemType.legacyPosterId),
                  this.var_3645.add(t.itemType.typeId))
                : this.var_3805.add(t.itemType.typeId));
    }
  }
  static {
    n(this, "TradeRequirementWrapper");
  }
  var_5410 = !1;
  var_3645 = null;
  var_3805 = null;
  var_3397 = null;
  get type() {
    return this.var_2261.type;
  }
  get requirements() {
    return this.var_2261;
  }
  canOfferCreditFurni() {
    return this.var_5410;
  }
  canOfferNormalFurni(e) {
    if (this.var_3645 == null || this.var_3805 == null || this.var_3397 == null)
      return !1;
    let r = e.peek();
    return r == null
      ? !1
      : r.isWallItem
        ? r.category === class_1901.POSTER &&
          !this.var_3397.has(r.stuffData.getLegacyString())
          ? !1
          : this.var_3645.has(r.type)
        : this.var_3805.has(r.type);
  }
}
