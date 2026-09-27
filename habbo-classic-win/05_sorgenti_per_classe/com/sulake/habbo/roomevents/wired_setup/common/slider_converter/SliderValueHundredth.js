// Estratto da HabboAirLauncher.deobf.js, riga 364984.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/wired_setup/common/slider_converter/SliderValueHundredth.as
// Nome offuscato: _iffeab41eedf882

class {
  static {
    n(this, "SliderValueHundredth");
  }
  toIntParam(e) {
    return Math.round(Number(e) * 100);
  }
  toString(e) {
    return (e / 100).toFixed(2);
  }
  get precision() {
    return 2;
  }
  get endsWithFive() {
    return !1;
  }
}
