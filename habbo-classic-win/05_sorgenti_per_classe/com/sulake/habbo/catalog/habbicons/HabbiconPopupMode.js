// Estratto da HabboAirLauncher.deobf.js, riga 178687.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconPopupMode.as
// Nome offuscato: _i574ea976cf85f7

class {
  static {
    n(this, "HabbiconPopupMode");
  }
  static CLAIM = "claim";
  static PURCHASE = "purchase";
  static ADD_FAVORITE = "add_favorite";
  static REMOVE_FAVORITE = "remove_favorite";
  static INFO = "info";
  static resolve(e) {
    return e
      ? e.favorite
        ? this.REMOVE_FAVORITE
        : e.owned
          ? e.favorite
            ? this.REMOVE_FAVORITE
            : this.ADD_FAVORITE
          : e.claimable
            ? this.CLAIM
            : e.isReward || !e.purchasable
              ? this.INFO
              : this.PURCHASE
      : this.PURCHASE;
  }
}
