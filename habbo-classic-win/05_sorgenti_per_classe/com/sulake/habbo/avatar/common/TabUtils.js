// Estratto da HabboAirLauncher.deobf.js, riga 163013.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/TabUtils.as
// Nome offuscato: _i15778776e8d498

class {
  static {
    n(this, "TabUtils");
  }
  static setElementImage(e, r) {
    let t = e?.assetUri?.replace("_off", "") ?? null;
    e == null || t == null || (e.assetUri = r ? t : `${t}_off`);
  }
}
