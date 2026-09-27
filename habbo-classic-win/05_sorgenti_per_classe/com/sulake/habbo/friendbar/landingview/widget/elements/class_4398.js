// Extracted from HabboAirLauncher.deobf.js, line 207914.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/class_4398.as
// Obfuscated name: _ibb75601e66744d

class {
  static {
    n(this, "class_4398");
  }
  var_39 = null;
  initialize(e, r, t, i) {
    ((this.var_39 = r),
      (this.var_39.assetUri = t[1] ?? ""),
      (this.var_39.x = t.length > 2 ? Number.parseInt(t[2] ?? "0") : 0),
      (this.var_39.y = t.length > 3 ? Number.parseInt(t[3] ?? "0") : 0),
      e._rf3db13932bfb60?._r2e106e2349a0b6(
        new class_3033((s) => {
          this.onConcurrentUsersGoalProgress(s);
        }),
      ));
  }
  refresh() {}
  isFloating(e) {
    return !0;
  }
  onConcurrentUsersGoalProgress(e) {
    let r = e.getParser();
    if (this.var_39 == null || r == null || r.userCountGoal <= 0) return;
    let t = (r.userCount / r.userCountGoal) * 100;
    ((t = Math.max(20, Math.min(100, t))),
      (t = Math.floor(t / 10) * 10),
      (this.var_39.assetUri = "${image.library.url}reception/challenge_meter_" + t + ".png"));
  }
}
