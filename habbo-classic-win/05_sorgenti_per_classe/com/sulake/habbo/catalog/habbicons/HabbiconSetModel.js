// Estratto da HabboAirLauncher.deobf.js, riga 177821.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/habbicons/HabbiconSetModel.as
// Nome offuscato: _icfa6cbeee6f558

class {
  static {
    n(this, "HabbiconSetModel");
  }
  id = null;
  collectionId = 0;
  name = null;
  title = null;
  description = null;
  var_2362 = null;
  habbicons = [];
  rewardHabbicon = null;
  completed = 0;
  total = 0;
  priceCredits = 0;
  priceActivityPoints = 0;
  activityPointType = 0;
  canBuy = !1;
  get complete() {
    return this.total > 0 && this.completed >= this.total;
  }
  get progressRatio() {
    return this.total <= 0 ? 0 : Math.max(0, Math.min(1, this.completed / this.total));
  }
}
