// Extracted from HabboAirLauncher.deobf.js, line 342588.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/purse/PurseClubArea.as
// Obfuscated name: _i1f3e580416c21f

class a extends kg {
  static {
    n(this, "PurseClubArea");
  }
  static BG_COLOR_LIGHT = 4286084205;
  static BG_COLOR_DARK = 4283781966;
  static ICON_STYLE_CLUB = 13;
  static ICON_STYLE_VIP = 14;
  static ICON_ANIMATION = [
    "toolbar_hc_icon_0",
    "toolbar_hc_icon_1",
    "toolbar_hc_icon_2",
    "toolbar_hc_icon_1",
    "toolbar_hc_icon_0",
  ];
  var_4145 = -1;
  _clubMinutes = 0;
  _toolbar;
  constructor(e, r) {
    (super(e.windowManager, e.assets),
      (this._toolbar = e),
      (this._window = r),
      (this._r49d167ac2cb5e2 = a.BG_COLOR_LIGHT),
      (this._r761b35156780ed = a.BG_COLOR_DARK),
      (this.textElementName = "days"),
      (this.iconAnimationSequence = a.ICON_ANIMATION),
      (this.iconAnimationDelay = 50),
      (this.amountZeroText =
        e.localization?.getLocalization("purse.clubdays.zero.amount.text", "Get") ?? "Get"),
      this.onClubChanged(new HabboInventoryHabboClubEvent()));
  }
  dispose() {
    ((this._toolbar = null), super.dispose());
  }
  onClubChanged(e = null) {
    if (this._toolbar?.inventory == null) return;
    let r =
        this._toolbar.inventory.clubDays * 31 +
        this._toolbar.inventory.clubPeriods,
      t = this._toolbar.inventory._rb6cef0460c1b1c;
    if (this.var_4145 !== -1 && this._toolbar.inventory.clubLevel !== dr.NO_CLUB) {
      this.setAmount(r, t);
      let i = this._window?.findChildByName("hc_join_button");
      i != null && us.runMotion(i) == null && us.DropBounce(new UnkClass_506da2(i, 900, 16));
    }
    switch (
      ((this.var_4145 = r), (this._clubMinutes = t), this._toolbar.inventory.clubLevel)
    ) {
      case dr.NO_CLUB:
        (this.setClubIcon(a.ICON_STYLE_VIP), this.setText(this.amountZeroText ?? "Get"));
        break;
      case dr.CLUB:
        this.setClubIcon(a.ICON_STYLE_CLUB);
        break;
      case dr.VIP:
        this.setClubIcon(a.ICON_STYLE_VIP);
        break;
    }
  }
  setAmount(e, r = -1) {
    if (e < 1) {
      let t = this._window?.findChildByName("days") ?? null,
        i = this._window?.findChildByName("join") ?? null;
      (t != null && (t.visible = !1),
        i != null && (i.visible = !0),
        (this.textElementName = "join"),
        this.setText(this.amountZeroText ?? "Get"));
    } else {
      let t = this._window?.findChildByName("days") ?? null,
        i = this._window?.findChildByName("join") ?? null;
      (t != null && (t.visible = !0),
        i != null && (i.visible = !1),
        (this.textElementName = "days"),
        this._toolbar?.localization != null &&
          (r !== -1 && r < 1440
            ? this.setText(ra.getShortFriendlyTime(this._toolbar.localization, r * 60))
            : this.setText(ra.getShortFriendlyTime(this._toolbar.localization, e * 86400))));
    }
  }
  setClubIcon(e) {
    let r = this._window?.findChildByName("club_icon");
    r != null && ((r.style = e), r.invalidate());
  }
}
