// Estratto da HabboAirLauncher.deobf.js, riga 207951.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4393.as
// Nome offuscato: _i40ccefe7ff9ec5

class extends class_4392 {
  static {
    n(this, "class_4393");
  }
  _timeStr = "";
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i),
      (this._timeStr = t[6] ?? ""),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3469((s) => {
          this.onTime(s);
        }),
      ));
  }
  refresh() {
    this.landingView.send(new class_3672(this._timeStr));
  }
  onTime(e) {
    let r = e.getParser();
    r?.timeStr === this._timeStr && this.setTimer(r._r87ac8bfd8368a8);
  }
}
