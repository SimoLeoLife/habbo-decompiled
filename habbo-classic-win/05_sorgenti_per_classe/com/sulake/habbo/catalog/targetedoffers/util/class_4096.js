// Extracted from HabboAirLauncher.deobf.js, line 187379.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/targetedoffers/util/class_4096.as
// Obfuscated name: _i0ef640f64f31aa

class {
  static {
    n(this, "class_4096");
  }
  static getStringFromSeconds(e, r) {
    if (e == null) return this.convertSecondsToTime(r);
    let t = Math.floor(r / 60 / 60);
    return t > 24
      ? ra.getFriendlyTime(e, r, "", 1)
      : t > 0
        ? ra.getLocalization(e, "friendlytime.hours.short", t)
        : this.convertSecondsToTime(r);
  }
  static convertSecondsToTime(e) {
    let r = Math.floor(e / 60 / 60),
      t = Math.floor((e - r * 60 * 60) / 60),
      i = e - r * 60 * 60 - t * 60,
      s = "";
    return (
      r > 0 && (s = `${r}:`),
      (s += t < 10 ? `0${t}` : `${t}`),
      r === 0 && ((s += ":"), (s += i < 10 ? `0${i}` : `${i}`)),
      s
    );
  }
}
