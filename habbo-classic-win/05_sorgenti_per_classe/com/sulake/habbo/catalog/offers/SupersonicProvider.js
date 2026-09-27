// Extracted from HabboAirLauncher.deobf.js, line 184502.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/offers/SupersonicProvider.as
// Obfuscated name: _ic717edd973de1a

class a {
  constructor(e) {
    this._offerCenter = e;
    this.enabled &&
      (ur._r77b8521b16f762(a.CAMPAIGN_READY_CALLBACK, this._r21ce4de570af29),
      ur._r77b8521b16f762(a.CAMPAIGN_COMPLETED_CALLBACK, this._r28147a479f08d5),
      ur._r77b8521b16f762(a.CAMPAIGN_OPEN_CALLBACK, this._re03645138e9b5a),
      ur._r77b8521b16f762(a.CAMPAIGN_CLOSE_CALLBACK, this._rb4c0d65a8dcdd0));
  }
  static {
    n(this, "SupersonicProvider");
  }
  static CAMPAIGN_READY_CALLBACK = "supersonicAdsOnCampaignsReady";
  static CAMPAIGN_COMPLETED_CALLBACK = "supersonicAdsOnCampaignCompleted";
  static CAMPAIGN_OPEN_CALLBACK = "supersonicAdsOnCampaignOpen";
  static CAMPAIGN_CLOSE_CALLBACK = "supersonicAdsOnCampaignClose";
  static const_777 = "supersonicAdsLoadCampaigns";
  static const_228 = "supersonicAdsCamapaignEngage";
  _disposed = !1;
  _offerCount = 0;
  _rb44702fc79db9a = !1;
  _loaded = !1;
  get disposed() {
    return this._disposed;
  }
  get enabled() {
    return !!this._offerCenter?.configuration.getBoolean("offers.supersonic.enabled") && ur.available;
  }
  get _r5c558202fd8dc1() {
    return this._offerCount > 0;
  }
  get var_1711() {
    return this._rb44702fc79db9a;
  }
  dispose() {
    this._disposed ||
      (ur.available &&
        (ur._r77b8521b16f762(a.CAMPAIGN_READY_CALLBACK, null),
        ur._r77b8521b16f762(a.CAMPAIGN_COMPLETED_CALLBACK, null),
        ur._r77b8521b16f762(a.CAMPAIGN_OPEN_CALLBACK, null),
        ur._r77b8521b16f762(a.CAMPAIGN_CLOSE_CALLBACK, null)),
      (this._offerCenter = null),
      (this._disposed = !0));
  }
  load() {
    if (this.enabled && !this._loaded)
      try {
        (ur.call(a.const_777), (this._loaded = !0));
      } catch {}
  }
  showVideo() {
    if (this.enabled && this._offerCount > 0)
      try {
        (ur.call(a.const_228), this._offerCount--);
      } catch {}
  }
  _r21ce4de570af29 = n((e) => {
    ((this._offerCount = Number.parseInt(String(e ?? ""), 10) || 0), this.updateVideoStatus());
  }, "_r21ce4de570af29");
  _re03645138e9b5a = n(() => {
    ((this._rb44702fc79db9a = !0), this.updateVideoStatus());
  }, "_re03645138e9b5a");
  _rb4c0d65a8dcdd0 = n(() => {
    ((this._rb44702fc79db9a = !1), this.updateVideoStatus());
  }, "_rb4c0d65a8dcdd0");
  _r28147a479f08d5 = n(() => {}, "_r28147a479f08d5");
  updateVideoStatus() {
    this._offerCenter?.updateVideoStatus();
  }
}
