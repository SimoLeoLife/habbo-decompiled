// Extracted from HabboAirLauncher.deobf.js, line 350812.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/slider_converter/SliderValuePulses.as
// Obfuscated name: _ic112cebaf59223

class {
  static {
    n(this, "SliderValuePulses");
  }
  toIntParam(e) {
    return Math.round(Number(e) * 2);
  }
  toString(e) {
    let r = Math.floor(e / 2);
    return e % 2 === 0 ? String(r) : `${r}.5`;
  }
  get precision() {
    return 1;
  }
  get endsWithFive() {
    return !0;
  }
}
