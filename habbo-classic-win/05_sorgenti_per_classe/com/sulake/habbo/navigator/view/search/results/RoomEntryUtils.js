// Estratto da HabboAirLauncher.deobf.js, riga 260339.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/view/search/results/RoomEntryUtils.as
// Nome offuscato: _ia543ca7619b1d5

class {
  static {
    n(this, "RoomEntryUtils");
  }
  static getDoorModeIconAsset(e) {
    switch (e) {
      case Sd.const_95:
        return "newnavigator_doormode_doorbell_small";
      case Sd.const_133:
        return "newnavigator_doormode_password_small";
      case Sd.const_139:
        return "newnavigator_doormode_invisible_small";
    }
    return "";
  }
  static getModulatedBackgroundColor(e, r) {
    if (e === -1) return r;
    let t = ((16711680 & r) >> 16) / 255,
      i = ((65280 & r) >> 8) / 255,
      s = (255 & r) / 255,
      o = ((16711680 & e) >> 16) / 255,
      d = ((65280 & e) >> 8) / 255,
      c = (255 & e) / 255,
      f = t * Math.min(1, o * 1.5),
      l = i * Math.min(1, d * 1.5),
      b = s * Math.min(1, c * 1.5);
    return (((f * 255) << 16) + ((l * 255) << 8) + b * 255 + 4278190080) >>> 0;
  }
  static getFavoriteIcon(e) {
    return `newnavigator_icon_fav_${e ? "yes" : "no"}`;
  }
}
