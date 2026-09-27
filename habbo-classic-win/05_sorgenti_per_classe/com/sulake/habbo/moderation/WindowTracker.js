// Extracted from HabboAirLauncher.deobf.js, line 247555.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/moderation/WindowTracker.as
// Obfuscated name: _i58406f37d2a825

class {
  static {
    n(this, "WindowTracker");
  }
  static TYPE_USERINFO = 1;
  static const_868 = 2;
  static const_1236 = 3;
  static const_1136 = 4;
  static const_1070 = 5;
  static const_1277 = 6;
  static const_686 = 7;
  static TYPE_ISSUEHANDLER = 8;
  static TYPE_ROOMINFO = 9;
  var_4035 = new Map();
  show(e, r, t, i, s, o = !1, d = 0, c = 0, f = 0, l = 0) {
    let b = this.removeWindow(e.getType(), e.getId());
    if (b != null && !b.disposed) {
      if (s) {
        (e.dispose(), b.dispose());
        return;
      }
      e.show();
      let h = b.getFrame(),
        p = e.getFrame();
      ((p.x = o ? d : h.x),
        (p.y = o ? c : h.y),
        (p.width = o ? f : h.width),
        (p.height = o ? l : h.height),
        this.getWindowsForType(e.getType()).set(e.getId(), e),
        b.dispose());
      return;
    }
    if (i) return;
    if ((e.show(), r != null))
      t
        ? ((e.getFrame().x = o ? d : r.x), (e.getFrame().y = o ? c : r.y + r.height + 5))
        : ((e.getFrame().x = o ? d : r.x + r.width + 5), (e.getFrame().y = o ? c : r.y));
    else if (o) ((e.getFrame().x = d), (e.getFrame().y = c));
    else {
      let h = e.getFrame().desktop;
      ((e.getFrame().x = h.width / 2 - e.getFrame().width / 2),
        (e.getFrame().y = h.height / 2 - e.getFrame().height / 2));
    }
    let _ = e.getFrame().desktop;
    ((e.getFrame().x = Math.max(
      0,
      Math.min(e.getFrame().x, _.width - e.getFrame().width),
    )),
      (e.getFrame().y = Math.max(
        0,
        Math.min(e.getFrame().y, _.height - e.getFrame().height),
      )),
      this.getWindowsForType(e.getType()).set(e.getId(), e));
  }
  removeWindow(e, r) {
    let t = this.getWindowsForType(e),
      i = t.get(r) ?? null;
    return (t.delete(r), i);
  }
  getWindowsForType(e) {
    let r = this.var_4035.get(e) ?? null;
    return (r == null && ((r = new Map()), this.var_4035.set(e, r)), r);
  }
}
