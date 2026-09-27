// Extracted from HabboAirLauncher.deobf.js, line 267124.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/progress/RewardTrackTaskProgressBarView.as
// Obfuscated name: _i46ffd8a8158eb3

class extends TQ {
  static {
    n(this, "RewardTrackTaskProgressBarView");
  }
  var_1973 = -1;
  constructor(e) {
    super(e, !0);
  }
  _r3650e352fda488(e, r, t = !1) {
    if (t && r) {
      ((this.var_1973 = e), this.setRatio(1, !0));
      return;
    }
    ((this.var_1973 = -1), this.setRatio(e, r));
  }
  _r997813a092d3e4(e, r, t = -1) {
    let i = t !== -1 && t !== e._r76ecf2833aa0e5;
    this._r3650e352fda488(e.progressRatioFor(e._rb7d6125d6db3f4), r, i);
  }
  update(e) {
    if ((super.update(e), this.var_1973 >= 0 && !this.isUpdating)) {
      let r = this.var_1973;
      ((this.var_1973 = -1), this.setRatio(r, !1));
    }
  }
}
