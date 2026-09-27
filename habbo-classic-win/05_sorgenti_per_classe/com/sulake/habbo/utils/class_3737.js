// Estratto da HabboAirLauncher.deobf.js, riga 67198.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/utils/class_3737.as
// Nome offuscato: _i7cdf90d8ddccca

class a {
  static {
    n(this, "class_3737");
  }
  static setup(e, r) {
    let t = e.findChildByName("user_info_region");
    (t?.addEventListener(u.OVER, a._r5a6035839483ab),
      t?.addEventListener(u.OUT, a._r692d52c8491d92),
      t?.addEventListener(u.CLICK, r));
  }
  static setUserInfoState(e, r) {
    let t = r.findChildByName("icon_eye_off"),
      i = r.findChildByName("icon_eye_over");
    (t && (t.visible = !e), i && (i.visible = e));
  }
  static onEntry(e, r) {
    let t = r.parent;
    t != null &&
      (e.type === u.OVER ? a.setUserInfoState(!0, t) : e.type === u.OUT && a.setUserInfoState(!1, t));
  }
  static _r1186b28d7a4703 = n((e) => {
    let r = e.target;
    r != null && a.setUserInfoState(!0, r);
  }, "_r1186b28d7a4703");
  static _r1da79c58cb7848 = n((e) => {
    let r = e.target;
    r != null && a.setUserInfoState(!1, r);
  }, "_r1da79c58cb7848");
  static _r5a6035839483ab = n((...e) => {
    a._r1186b28d7a4703(e[0]);
  }, "_r5a6035839483ab");
  static _r692d52c8491d92 = n((...e) => {
    a._r1da79c58cb7848(e[0]);
  }, "_r692d52c8491d92");
}
