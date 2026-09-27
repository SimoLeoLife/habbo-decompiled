// Extracted from HabboAirLauncher.deobf.js, line 369099.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/slider_converter/SliderValueSeconds5.as
// Obfuscated name: _i40e84e85a3c328

class {
  static {
    n(this, "SliderValueSeconds5");
  }
  toIntParam(e) {
    return Math.round(Number(e) / 5);
  }
  toString(e) {
    return String(e * 5);
  }
  get precision() {
    return 0;
  }
  get endsWithFive() {
    return !0;
  }
}
