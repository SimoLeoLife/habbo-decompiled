// Estratto da HabboAirLauncher.deobf.js, riga 208220.

class {
  static {
    n(this, "_i15990bb65f2b39");
  }
  initialize(e, r, t, i) {
    let s = r.widget;
    ((s.badgeId = t[1] ?? ""),
      (s.type = e.getBoolean("landing.view.rewardbadge.groupbadge") ? Wo.GROUP : Wo.NORMAL));
  }
  refresh() {}
}
