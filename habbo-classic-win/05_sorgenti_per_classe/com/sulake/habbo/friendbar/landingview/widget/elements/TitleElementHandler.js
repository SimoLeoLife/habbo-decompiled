// Estratto da HabboAirLauncher.deobf.js, riga 207572.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/landingview/widget/elements/TitleElementHandler.as
// Nome offuscato: _ia456f77227c0bd

class {
  static {
    n(this, "TitleElementHandler");
  }
  var_5568 = !1;
  initialize(e, r, t, i) {
    let s = r,
      o = t[1] ?? "";
    ((this.var_5568 = t.length > 2 ? t[2] === "true" : !1),
      s.findChildByName("title_txt")?.setParamFlag?.(0, !0),
      (s.findChildByName("title_txt").caption = "${" + o + "}"),
      HabboLandingView.positionAfterAndStretch(s, "title_txt", "hdr_line"));
  }
  isFloating(e) {
    return e || this.var_5568;
  }
  refresh() {}
}
