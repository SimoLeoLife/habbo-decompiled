// Extracted from HabboAirLauncher.deobf.js, line 254652.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/navigator/UserCountRenderer.as
// Obfuscated name: _i2813a92184edc7

class a {
  constructor(e) {
    this._navigator = e;
  }
  static {
    n(this, "UserCountRenderer");
  }
  static USERCOUNT_ELEMENT_NAME = "usercount";
  dispose() {
    this._navigator = null;
  }
  refreshUserCount(e, r, t, i, s, o) {
    let d = r.findChildByName(a.USERCOUNT_ELEMENT_NAME);
    if (d == null) {
      if (((d = this._navigator?.getXmlWindow("grs_usercount")), d == null)) return;
      ((d.name = a.USERCOUNT_ELEMENT_NAME), (d.x = s), (d.y = o), r.addChild(d));
    }
    d.toolTipCaption = i;
    let c = d.findChildByName("txt");
    (c != null && (c.text = `${t}`), this.refreshBg(d, this.getBgColor(e, t)), (d.visible = !0));
  }
  getBgColor(e, r) {
    return r === 0
      ? "b"
      : this.isOverBgColorLimit(e, r, "red", 92)
        ? "r"
        : this.isOverBgColorLimit(e, r, "orange", 80)
          ? "o"
          : this.isOverBgColorLimit(e, r, "yellow", 50)
            ? "y"
            : "g";
  }
  isOverBgColorLimit(e, r, t, i) {
    let s = `navigator.colorlimit.${t}`,
      o = this._navigator?.getInteger(s, i) ?? i,
      d = (e * o) / 100;
    return r >= d;
  }
  refreshBg(e, r) {
    let t = e.findChildByName("usercount_bg");
    t == null ||
      t.tags[0] === r ||
      (t.tags.splice(0, t.tags.length),
      t.tags.push(r),
      (t.bitmap = this._navigator?._r6bd8f6d6bfdbb5(`usercount_fixed_${r}`) ?? null),
      (t.disposesBitmap = !1),
      t.invalidate());
  }
}
