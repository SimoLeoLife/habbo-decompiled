// Extracted from HabboAirLauncher.deobf.js, line 342157.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/extensions/CitizenshipVipQuestsPromoExtension.as
// Obfuscated name: _i4b719a04aad1e9

class {
  static {
    n(this, "CitizenshipVipQuestsPromoExtension");
  }
  _windowManager;
  _assets;
  _events;
  _localization;
  var_36;
  var_471;
  _view = null;
  _disposed = !1;
  _expanded = !0;
  _originalHeight = 216;
  _vipQuestsCampaignName;
  var_2390 = null;
  constructor(e, r, t, i, s, o) {
    ((this._windowManager = r),
      (this._assets = t),
      (this._events = i),
      (this._localization = s),
      (this.var_36 = o),
      (this.var_471 = e.extensionView),
      (this.var_2390 = new class_2980(this.class_2980)),
      this.var_36.addMessageEvent(this.var_2390),
      (this._vipQuestsCampaignName = e.getProperty("citizenship.vip.tutorial.quest.campaign.name")));
  }
  dispose() {
    this._disposed ||
      (this.var_36 != null &&
        this.var_2390 != null &&
        (this.var_36.removeMessageEvent(this.var_2390),
        this.var_2390.dispose(),
        (this.var_2390 = null)),
      this.destroyWindow(),
      (this._localization = null),
      (this._assets = null),
      (this._events = null),
      (this._windowManager = null),
      (this.var_36 = null),
      (this.var_471 = null),
      (this._disposed = !0));
  }
  createWindow() {
    let e = this._assets?.getAssetByName("vip_quests_promo_xml"),
      r = this._windowManager?.buildFromXML(e?.content, 1);
    if (r == null) throw new Error("Failed to construct citizenship VIP quests promo from XML.");
    return (
      r.findChildByName("quests_button")?.addEventListener(u.CLICK, this.onButtonClicked),
      r.findChildByName("minimize_region")?.addEventListener(u.CLICK, this.onMinMax),
      r.findChildByName("maximize_region")?.addEventListener(u.CLICK, this.onMinMax),
      (this._originalHeight = r.height),
      r
    );
  }
  destroyWindow() {
    (this.var_471?._rb18768cf275a26(ToolbarDisplayExtensionIds.VIP_QUESTS),
      this._view?.dispose(),
      (this._view = null));
  }
  onButtonClicked = n((e) => {
    (this.var_36?.send(new class_2922(this._vipQuestsCampaignName)), this.destroyWindow());
  }, "onButtonClicked");
  onMinMax = n((e) => {
    ((this._expanded = !this._expanded), this.assignState());
  }, "onMinMax");
  assignState() {
    this._view != null &&
      ((this._view.findChildByName("content_itemlist").visible = this._expanded),
      (this._view.findChildByName("promo_img").visible = this._expanded),
      (this._view.height = this._expanded ? this._originalHeight : 33));
  }
  class_2980 = n((e) => {
    (this._view == null && (this._view = this.createWindow()),
      this.assignState(),
      this.var_471?._rb18768cf275a26(ToolbarDisplayExtensionIds.CLUB_PROMO),
      this.var_471?._ra96f07968c4ed0(ToolbarDisplayExtensionIds.VIP_QUESTS, this._view, class_1954.SLOT_CLUB_PROMO));
  }, "class_2980");
}
