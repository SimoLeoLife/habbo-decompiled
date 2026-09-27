// Estratto da HabboAirLauncher.deobf.js, riga 173464.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/clubcenter/ClubCenterView.as
// Nome offuscato: _i7097d913eb08dd

class {
  constructor(e, r, t) {
    this.var_63 = e;
    this.var_1129 = t;
    let i = this.var_63;
    if (
      i == null ||
      ((this._window = r.buildFromXML(i.assets.getAssetByName("club_center_xml")?.content)),
      this.container == null)
    )
      return;
    let s = this._window;
    if (s == null) return;
    (i.isKickbackEnabled()
      ? (this.setElementVisibility("special_amount_icon", !1),
        this.setElementVisibility("special_amount_title", !1),
        this.setElementVisibility("special_amount_content", !1),
        this.setElementVisibility("special_breakdown_link", !1),
        this.setElementVisibility("special_time_content", !1))
      : (this._rcb129ec8a8ea22("special_breakdown_link"),
        this._rcb129ec8a8ea22("special_content"),
        this._rcb129ec8a8ea22("special_content_postit"),
        this.container.invalidate()),
      this.setElementVisibility("btn_earn", !1),
      i._rb0b9b572bdd5be(),
      s.center(),
      s.addEventListener?.(y.const_848, this._r1bb10d2557f427),
      (this.var_17 = s.findChildByName("avatar")?.widget ?? null));
    let o = i._rf0eb5f07c94cfb?._r274f6640e76241(t, fr.LARGE, null, this) ?? null;
    (o != null &&
      (o.setDirection(class_2123.const_252, 4),
      this.var_17?.createAvatarImage(o._rb2bd48e3b4d265(class_2123.const_252))),
      (this.container.procedure = this._r64e450f8ad70fb));
  }
  static {
    n(this, "ClubCenterView");
  }
  _window = null;
  var_17 = null;
  var_1129;
  dispose() {
    (this._window != null &&
      (this._window.removeEventListener?.(y.const_848, this._r1bb10d2557f427),
      this._window.dispose(),
      (this._window = null)),
      (this.var_63 = null),
      (this.var_17 = null));
  }
  dataReceived(e, r, t, i) {
    let s = this.var_63?._r247821088f6ffc() ?? ClubStatus.NONE;
    if ((this.setElementText("status_title", "${hccenter.status." + s + "}"), e == null || r == null)) {
      (this.setElementVisibility("gift_content", !1), this.setElementVisibility("special_container", !1));
      return;
    }
    this.setElementVisibility("gift_content", !0);
    let o = this.getLocalization("hccenter.status." + s + ".info");
    ((o = o.replace("%timeleft%", this.formatMinutes(r.minutesUntilExpiration ?? 0))),
      (o = o.replace("%joindate%", e._rcfd60e886bcfeb)),
      (o = o.replace("%streakduration%", this.formatDays(e.var_4435))),
      this.setElementText("status_info", o));
    let d = this.container?.findChildByName("hc_badge");
    if ((d != null && i != null && (d.bitmap = i), this.var_63?.isKickbackEnabled())) {
      (e.var_4950 < 60
        ? this.setElementText("special_time_content", this.getLocalization("hccenter.special.time.soon"))
        : this.setElementText("special_time_content", this.formatMinutes(e.var_4950)),
        this.setElementVisibility("special_time_content", !0));
      let f = e.var_4397 + e.var_5685;
      f > 0 &&
        (this.setElementVisibility("special_amount_icon", !0),
        this.setElementVisibility("special_amount_title", !0),
        this.setElementVisibility("special_amount_content", !0),
        this.setElementVisibility("special_breakdown_link", !0),
        this.setElementText(
          "special_amount_content",
          this.getLocalization("hccenter.special.sum").replace("%credits%", String(f)),
        ));
    }
    let c = this.container?.findChildByName("btn_gift");
    (s === ClubStatus.ACTIVE && t > 0
      ? (c != null && (c.caption = "${hccenter.btn.gifts.redeem}"),
        this.setElementText(
          "gift_info",
          this.getLocalization("hccenter.unclaimedgifts").replace("%unclaimedgifts%", String(t)),
        ))
      : (c != null && (c.caption = "${hccenter.btn.gifts.view}"),
        this.setElementText("gift_info", this.getLocalization("hccenter.gift.info"))),
      (c = this.container?.findChildByName("btn_buy")),
      c != null &&
        (c.caption = s === ClubStatus.ACTIVE ? "${hccenter.btn.extend}" : "${hccenter.btn.buy}"));
  }
  avatarImageReady(e) {
    if (e !== this.var_1129) return;
    let r =
      this.var_63?._rf0eb5f07c94cfb?._r274f6640e76241(
        this.var_1129,
        fr.LARGE,
        null,
        this,
      ) ?? null;
    r != null &&
      (r.setDirection(class_2123.const_252, 4),
      this.var_17?.createAvatarImage(r._rb2bd48e3b4d265(class_2123.const_252)));
  }
  getSpecialCalloutAnchor() {
    return this.container?.findChildByName("special_content_postit") ?? null;
  }
  get disposed() {
    return this.var_63 == null;
  }
  setVideoOfferButtonVisibility(e, r) {
    let t = this._window?.findChildByName("btn_earn");
    t != null && ((t.visible = e), r ? (t.enable(), (t.alpha = 0)) : (t.disable(), (t.alpha = 0.2 * 255)));
  }
  _r64e450f8ad70fb = n((e, r) => {
    let t = e,
      i = r;
    if (!(t == null || i == null || this.var_63 == null) && t.type === u.CLICK)
      switch ((t.stopImmediatePropagation(), t.stopPropagation(), i.name)) {
        case "header_button_close":
          this.var_63.removeView();
          break;
        case "special_infolink":
          this.var_63.openPaydayHelpPage();
          break;
        case "special_breakdown_link":
          this.var_63._r41f4957abfe4b0();
          break;
        case "general_infolink":
          this.var_63.openHelpPage();
          break;
        case "btn_gift":
          this.var_63._rba6204214b1247();
          break;
        case "btn_buy":
          this.var_63._r4237df539849c5();
          break;
        case "btn_earn":
          this.var_63._r433abe11f15a47?.showVideo();
          break;
        default:
          return;
      }
  }, "_r64e450f8ad70fb");
  _r1bb10d2557f427 = n(() => {
    this.var_63?._re1ff9ebb42c02f();
  }, "_r1bb10d2557f427");
  get container() {
    return this._window;
  }
  setElementText(e, r) {
    let t = this.container?.findChildByName(e);
    t != null && (t.text = r);
  }
  setElementVisibility(e, r) {
    let t = this.container?.findChildByName(e);
    t != null && (t.visible = r);
  }
  _rcb129ec8a8ea22(e) {
    let r = this.container?.findChildByName(e),
      t = r?.parent;
    r != null && t != null && t.removeChild(r);
  }
  getLocalization(e) {
    return this.var_63?.localization?.getLocalization(e, e) ?? "";
  }
  formatMinutes(e) {
    return ra.getShortFriendlyTime(this.var_63?.localization, e * 60);
  }
  formatDays(e) {
    return ra.getShortFriendlyTime(this.var_63?.localization, e * 86400);
  }
}
