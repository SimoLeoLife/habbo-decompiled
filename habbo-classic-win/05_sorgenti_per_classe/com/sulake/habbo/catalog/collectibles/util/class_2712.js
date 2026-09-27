// Estratto da HabboAirLauncher.deobf.js, riga 174053.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/collectibles/util/class_2712.as
// Nome offuscato: _ie4ab4296010e5f

class a {
  static {
    n(this, "class_2712");
  }
  static _r5992f34ac006f2 = {
    common: 6187373,
    uncommon: 24916,
    rare: 1202293,
    epic: 7150694,
    legendary: 8526848,
    "legendary+": 11167744,
  };
  static getRarityColor(e) {
    let r = e.toUpperCase();
    return Object.prototype.hasOwnProperty.call(a._r5992f34ac006f2, r)
      ? (a._r5992f34ac006f2[r] ?? 8947848)
      : 8947848;
  }
}
