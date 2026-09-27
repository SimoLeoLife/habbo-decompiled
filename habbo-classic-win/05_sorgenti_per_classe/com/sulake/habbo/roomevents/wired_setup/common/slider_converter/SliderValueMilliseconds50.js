// Extracted from HabboAirLauncher.deobf.js, line 369138.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/slider_converter/SliderValueMilliseconds50.as
// Obfuscated name: _ib0c5c337fbd1f8

class {
  static {
    n(this, "SliderValueMilliseconds50");
  }
  toIntParam(e) {
    return Math.trunc(Number(e) / 50);
  }
  toString(e) {
    return String(e * 50);
  }
  get precision() {
    return -1;
  }
  get endsWithFive() {
    return !0;
  }
}
