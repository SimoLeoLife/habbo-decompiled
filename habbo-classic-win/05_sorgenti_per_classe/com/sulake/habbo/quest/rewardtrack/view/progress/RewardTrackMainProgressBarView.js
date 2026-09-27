// Extracted from HabboAirLauncher.deobf.js, line 266585.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/quest/rewardtrack/view/progress/RewardTrackMainProgressBarView.as
// Obfuscated name: _i3550f322b86ebb

class extends TQ {
  static {
    n(this, "RewardTrackMainProgressBarView");
  }
  var_1967;
  constructor(e) {
    (super(e), (this.var_1967 = e.findChildByName("shape")));
  }
  refreshByX(e, r) {
    this.setRatio(Math.trunc(e) / this._container.width, r);
  }
  render() {
    (super.render(),
      this.var_1639.width >= this._container.width - 4
        ? (this.var_1967.width = this._container.width)
        : this.var_1967.width !== this.var_1639.width + 4 &&
          (this.var_1967.width = this.var_1639.width + 4));
  }
}
