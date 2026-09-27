// Extracted from HabboAirLauncher.deobf.js, line 208220.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i15990bb65f2b39

class {
  static {
    n(this, "UnkClass_15990b");
  }
  initialize(e, r, t, i) {
    let s = r.widget;
    ((s.badgeId = t[1] ?? ""),
      (s.type = e.getBoolean("landing.view.rewardbadge.groupbadge") ? Wo.GROUP : Wo.NORMAL));
  }
  refresh() {}
}
