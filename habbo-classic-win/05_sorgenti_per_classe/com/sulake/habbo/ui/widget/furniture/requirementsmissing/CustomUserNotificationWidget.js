// Extracted from HabboAirLauncher.deobf.js, line 318951.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/furniture/requirementsmissing/CustomUserNotificationWidget.as
// Obfuscated name: _i16709fc29f2034

class a extends RoomWidgetBase {
  static {
    n(this, "CustomUserNotificationWidget");
  }
  static TYPE_VIPHOPPER = "viphopper";
  static const_310 = "vipgate";
  static TYPE_COSTUMEHOPPER = "costumehopper";
  static TYPE_RESPECT_VOTE_FAILED_NO_STAGE = "respectfailedstage";
  static const_415 = "respectfailedaudience";
  _window = null;
  localization;
  constructor(e, r, t = null) {
    (super(e, r, t), (this.localization = e), (this.localization.widget = this));
  }
  dispose() {
    (this.close(), super.dispose());
  }
  open(e = "") {
    if (this._window != null) return;
    switch (e) {
      case a.TYPE_VIPHOPPER:
        (this.buildWindow("viprequired_xml"), this.setVipRequiredSpecificLocalization("viphopper"));
        break;
      case a.const_310:
        (this.buildWindow("viprequired_xml"), this.setVipRequiredSpecificLocalization("gate"));
        break;
      case a.TYPE_COSTUMEHOPPER:
        this.buildWindow("costumehopper_costumerequired_xml");
        break;
      case a.TYPE_RESPECT_VOTE_FAILED_NO_STAGE:
        (this.buildWindow("respect_giving_failed_notification_xml"),
          this.setText("stage"),
          this.setBitmapUrl("stage"));
        break;
      case a.const_415:
        (this.buildWindow("respect_giving_failed_notification_xml"),
          this.setText("audience"),
          this.setBitmapUrl("audience"));
        break;
    }
    let r = this._window;
    r != null && (r.center(), (r.procedure = this.eventProc));
  }
  buildWindow(e) {
    let t = this.assets?.getAssetByName(e)?.content;
    t != null && (this._window = this.windowManager?.buildFromXML(t));
  }
  setVipRequiredSpecificLocalization(e) {
    let r = this._window?.findChildByName("title"),
      t = this._window?.findChildByName("bodytext");
    (r != null && (r.caption = "${" + e + ".viprequired.title}"),
      t != null && (t.caption = "${" + e + ".viprequired.bodytext}"));
  }
  setText(e) {
    let r = "respect.giving.failed.no." + e,
      t = this.localization.container?.localization?.getLocalization(r) ?? "",
      i = this.localization.container?.config?.getProperty("respect.talent.show.min.audience") ?? null;
    i != null && (t = t.replace("%users%", i));
    let s = this._window?.findChildByName("body_txt");
    s != null && (s.caption = t);
  }
  setBitmapUrl(e) {
    let r = this._window?.content?.getChildByName("respectFailedNotificationBitmap");
    r != null && (r.assetUri = "${image.library.url}notifications/habbo_talent_show_" + e + ".png");
  }
  close() {
    this._window != null && (this._window.dispose(), (this._window = null));
  }
  eventProc = n((e, r) => {
    if (!(e.type !== u.CLICK || r == null)) {
      switch (r.name) {
        case "buy_vip":
          (this.localization.container?.catalog?.openClubCenter(), this.close());
          break;
        case "vip_benefits":
          this._r2f32c038f482ef(this.localization.container?.catalog ?? null);
          break;
        case "buy_costumes":
          (this._rc92c49e36e836d(), this.close());
          break;
        case "close":
          this.close();
          break;
      }
      r.tags.indexOf("close") !== -1 && this.close();
    }
  }, "eventProc");
  _r2f32c038f482ef(e) {
    e?.showVipBenefits();
  }
  _rc92c49e36e836d() {
    let e = this.localization.container?.inventory?._r60766c255d6b8b() ?? [],
      r = !1;
    for (let i of e)
      if (i.subType === class_2465.COSTUME) {
        r = !0;
        break;
      }
    let t = this.localization.container?.avatarEditor ?? null;
    r ? this._r7435e95841ff9c(t) : this.localization.container?.catalog?.openCatalogPage("costumes");
  }
  _r7435e95841ff9c(e) {
    e != null &&
      (e._rdaf967f79ea08a(UnkConstants_c72396._r4a110ddb22fcf1, null, null, !0, null, class_1962.const_65),
      e._rb825ef6be7b35c(UnkConstants_c72396._r4a110ddb22fcf1));
  }
}
