// Extracted from HabboAirLauncher.deobf.js, line 196879.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/VideoOfferManager.as
// Obfuscated name: _id9d3527ebb6cd0

class a {
  constructor(e) {
    this._catalog = e;
    (this._catalog?.connection?.addMessageEvent(new class_2271(this._r97aecc27368072)),
      this._r3dbe09e98a2236());
  }
  static {
    n(this, "VideoOfferManager");
  }
  static CAMPAIGN_READY_CALLBACK = "supersaverAdsOnCampaignsReady";
  static CAMPAIGN_COMPLETE_CALLBACK = "supersaverAdsOnCampaignCompleted";
  static CAMPAIGN_OPEN_CALLBACK = "supersaverAdsOnCampaignOpen";
  static CAMPAIGN_CLOSE_CALLBACK = "supersaverAdsOnCampaignClose";
  static const_777 = "supersaverAdsLoadCampaigns";
  static const_228 = "supersaverAdsCamapaignEngage";
  _disposed = !1;
  var_1285 = !1;
  _offersAvailable = 0;
  _offersViewed = 0;
  _offersRequested = !1;
  _offersReceived = !1;
  _launchers = [];
  _callbacksAdded = !1;
  get disposed() {
    return this._disposed;
  }
  get enabled() {
    return this.var_1285;
  }
  dispose() {
    this._disposed ||
      ((this._catalog = null),
      (this._launchers = []),
      (this.var_1285 = !1),
      this._callbacksAdded &&
        ur.available &&
        (Reflect.deleteProperty(globalThis, a.CAMPAIGN_READY_CALLBACK),
        Reflect.deleteProperty(globalThis, a.CAMPAIGN_COMPLETE_CALLBACK),
        Reflect.deleteProperty(globalThis, a.CAMPAIGN_OPEN_CALLBACK),
        Reflect.deleteProperty(globalThis, a.CAMPAIGN_CLOSE_CALLBACK),
        (this._callbacksAdded = !1)),
      (this._disposed = !0));
  }
  load(e) {
    if (this.var_1285) {
      if (this._offersRequested && this._offersReceived) {
        e.offersAvailable(this._offersAvailable);
        return;
      }
      (!this._offersRequested && ur.available && (ur.call(a.const_777), (this._offersRequested = !0)),
        this._launchers.push(e));
    }
  }
  launch(e) {
    return !this.var_1285 || this._offersAvailable < 1 || !ur.available
      ? !1
      : ((this._offersViewed += 1),
        ur.call(a.const_228),
        this._r538ebb88d869f0(),
        this._catalog?.connection?.send(
          new class_2154("SuperSaverAds", "client_action", "supersaverads.video.promo.launched"),
        ),
        this._offersAvailable > this._offersViewed);
  }
  _r21ce4de570af29 = n((...e) => {
    let r = String(e[0] ?? "0");
    for (
      this._offersReceived = !0,
        this._offersAvailable = Number.parseInt(r, 10),
        Number.isNaN(this._offersAvailable) && (this._offersAvailable = 0);
      this._launchers.length > 0;
    )
      this._launchers.pop()?.offersAvailable(this._offersAvailable);
  }, "_r21ce4de570af29");
  _re03645138e9b5a = n(() => {}, "_re03645138e9b5a");
  _rb4c0d65a8dcdd0 = n(() => {
    (this._r813b31b75a9ba9(),
      this._catalog?.connection?.send(
        new class_2154("SuperSaverAds", "client_action", "supersaverads.video.promo.close"),
      ));
  }, "_rb4c0d65a8dcdd0");
  _r05ae6e06a776e7 = n(() => {
    (this._r813b31b75a9ba9(),
      this._catalog?.connection?.send(
        new class_2154("SuperSaverAds", "client_action", "supersaverads.video.promo.complete"),
      ));
  }, "_r05ae6e06a776e7");
  _r3dbe09e98a2236() {
    !this.var_1285 ||
      this._callbacksAdded ||
      !ur.available ||
      (ur._r77b8521b16f762(a.CAMPAIGN_READY_CALLBACK, this._r21ce4de570af29),
      ur._r77b8521b16f762(a.CAMPAIGN_COMPLETE_CALLBACK, this._r05ae6e06a776e7),
      ur._r77b8521b16f762(a.CAMPAIGN_OPEN_CALLBACK, this._re03645138e9b5a),
      ur._r77b8521b16f762(a.CAMPAIGN_CLOSE_CALLBACK, this._rb4c0d65a8dcdd0),
      (this._callbacksAdded = !0));
  }
  _r97aecc27368072 = n((e) => {
    e.securityLevel >= class_1794.const_842 && ((this.var_1285 = !1), this._r3dbe09e98a2236());
  }, "_r97aecc27368072");
  _r538ebb88d869f0() {
    this._catalog?.musicController?.mute(!0);
  }
  _r813b31b75a9ba9() {
    this._catalog?.musicController?.mute(!1);
  }
}
