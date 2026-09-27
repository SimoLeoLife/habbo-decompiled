// Estratto da HabboAirLauncher.deobf.js, riga 185080.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/utils/RentUtils.as
// Nome offuscato: _ib9ba39e25d55c7

class {
  static {
    n(this, "RentUtils");
  }
  static updateBuyCaption(e, r) {
    e == null ||
      r == null ||
      (r.caption = e.isRentOffer
        ? "${catalog.purchase_confirmation.rent}"
        : "${catalog.purchase_confirmation.buy}");
  }
}
