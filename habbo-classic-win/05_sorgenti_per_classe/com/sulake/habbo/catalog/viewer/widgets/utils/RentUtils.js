// Extracted from HabboAirLauncher.deobf.js, line 185080.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/viewer/widgets/utils/RentUtils.as
// Obfuscated name: _ib9ba39e25d55c7

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
