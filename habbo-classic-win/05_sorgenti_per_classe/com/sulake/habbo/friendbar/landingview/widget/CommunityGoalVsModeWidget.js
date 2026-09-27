// Extracted from HabboAirLauncher.deobf.js, line 207489.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/CommunityGoalVsModeWidget.as
// Obfuscated name: _i77257fa6720e78

class a extends Nz {
  static {
    n(this, "CommunityGoalVsModeWidget");
  }
  static _r0d777edc9478df = [-3, -2, -1, 0, 1, 2, 3];
  static _r47d3e1c0c5fc50 = [0, 0, 4.75, 11.5, 16.25, 23, 23];
  constructor(e, r = !1) {
    super(e, r);
  }
  initialize() {
    super.initialize();
    let e = this.container?.findChildByName("community_total_status");
    e != null && (e.visible = !1);
  }
  update(e) {
    this.updateMeter(Math.floor(this.getCurrentNeedleFrame()), !1);
  }
  getCurrentNeedleFrame() {
    let e = this.communityProgress;
    if (e == null) return 0;
    let r = a._r0d777edc9478df,
      t = a._r47d3e1c0c5fc50,
      i = r[0] ?? 0,
      s = r[r.length - 1] ?? 0;
    if (e._r344df3534d9e24 <= i) return Math.round(t[0] ?? 0);
    if (e._r344df3534d9e24 >= s) return Math.round(t[t.length - 1] ?? 0);
    let o = e._r93e9fd9d59dab4 < 0 ? -1 : 1,
      d = e._r344df3534d9e24,
      c = r.indexOf(d),
      f = r.indexOf(d + o),
      l = t[c] ?? 0,
      b = Math.abs((t[f] ?? l) - l);
    return Math.round(l + (e.percentCompletionTowardsNextLevel / 100) * b * o);
  }
}
