// Extracted from HabboAirLauncher.deobf.js, line 207758.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4400.as
// Obfuscated name: _i2b51ddd1c2b237

class extends class_4392 {
  static {
    n(this, "class_4400");
  }
  initialize(e, r, t, i) {
    (super.initialize(e, r, t, i),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3726((s) => {
          this.onCommunityGoalProgress(s);
        }),
      ));
  }
  refresh() {
    this.landingView.send(new class_2982());
  }
  onCommunityGoalProgress(e) {
    let r = e.getParser()?.data;
    this.setTimer(r?._rd9ef39e02c0446 ? 0 : (r?._r6930b826135416 ?? 0));
  }
}
