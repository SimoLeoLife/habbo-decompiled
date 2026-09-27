// Extracted from HabboAirLauncher.deobf.js, line 163013.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/avatar/common/TabUtils.as
// Obfuscated name: _i15778776e8d498

class {
  static {
    n(this, "TabUtils");
  }
  static setElementImage(e, r) {
    let t = e?.assetUri?.replace("_off", "") ?? null;
    e == null || t == null || (e.assetUri = r ? t : `${t}_off`);
  }
}
