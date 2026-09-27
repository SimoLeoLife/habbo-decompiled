// Extracted from HabboAirLauncher.deobf.js, line 343820.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/toolbar/offers/OfferExtension.as
// Obfuscated name: _ia41927851e178c

class {
  static {
    n(this, "OfferExtension");
  }
  _disposed = !1;
  _window;
  _toolbar;
  _offerCenter;
  var_122;
  constructor(e, r, t, i) {
    if (
      ((this._toolbar = e),
      (this._window = r.buildFromXML(t.getAssetByName("offer_extension_xml")?.content)),
      this._window == null)
    )
      throw new Error("Failed to construct offer extension from XML.");
    ((this._window.procedure = this.windowProcedure),
      (this._window.visible = !1),
      (this.var_122 = this._window.findChildByName("list")),
      (this._offerCenter = i._rd436cd79c08f80(this)),
      e.extensionView?._ra96f07968c4ed0(ToolbarDisplayExtensionIds.VIDEO_OFFERS, this.window, class_1954.SLOT_OFFERS),
      this.refresh());
  }
  get disposed() {
    return this._disposed;
  }
  get window() {
    if (this._window == null) throw new Error("Offer extension window is not available.");
    return this._window;
  }
  dispose() {
    this._disposed ||
      ((this.var_122 = null),
      this._window?.dispose(),
      (this._window = null),
      (this._offerCenter = null),
      (this._toolbar = null),
      (this._disposed = !0));
  }
  indicateRewards() {
    this._window != null &&
      ((this._window.visible = !0),
      (this._window.findChildByName("check_rewards").visible = !0),
      this.refresh());
  }
  indicateVideoAvailable(e) {
    if (this._window == null) return;
    this._window.visible ||= e;
    let r = this._window.findChildByName("start_video");
    (r != null &&
      ((r.visible = e),
      this._offerCenter?.showingVideo
        ? (r.disable(), (r.color = 10066329))
        : (r.enable(), (r.color = 12932417))),
      this.refresh());
  }
  windowProcedure = n((e, r) => {
    if (e.type === u.CLICK)
      switch (r.name) {
        case "start_video":
          this._offerCenter?.showVideo();
          break;
        case "check_rewards":
          this._offerCenter?.showRewards();
          break;
      }
  }, "windowProcedure");
  refresh() {
    if (
      (this.var_122?.arrangeListItems(),
      this._window != null && this.var_122 != null)
    ) {
      let e = this.var_122.getListItemAt(0),
        r = this.var_122.getListItemAt(1);
      this._window.visible = (e?.visible ?? !1) || (r?.visible ?? !1);
    }
    this._toolbar?.extensionView?._re232476c03a26b();
  }
}
