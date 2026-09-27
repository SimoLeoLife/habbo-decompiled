// Extracted from HabboAirLauncher.deobf.js, line 184572.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/offers/OfferCenter.as
// Obfuscated name: _ia161e2c03e4887

class a {
  constructor(e, r, t) {
    this._windowManager = e;
    this._assets = r;
    this._catalog = t;
    ((this._offerRewardDeliveredMessageEvent = new class_2485(this._r0205d10c9b2304)),
      this._catalog?.connection?.addMessageEvent(this._offerRewardDeliveredMessageEvent),
      (this._r10b40ac216ac3e = [new F8e(this), new O8e(this)]),
      (this.var_2771 = []),
      (this.var_1174 = new UnkEventDispatcherWrapperSubclass_05394e(a.PROVIDER_POLLING_FREQUENCY)),
      this.var_1174.addEventListener(DeBouncer.addEventListener, this.onPollTimer),
      this.var_1174.start(),
      this.onPollTimer());
  }
  static {
    n(this, "OfferCenter");
  }
  static PROVIDER_POLLING_FREQUENCY = 18e5;
  _disposed = !1;
  _offerExtension = null;
  _window = null;
  _r1c2187606754d8 = null;
  _r10b40ac216ac3e = null;
  var_2771 = null;
  var_2608 = null;
  var_1174 = null;
  _offerRewardDeliveredMessageEvent = null;
  get disposed() {
    return this._disposed;
  }
  set offerExtension(e) {
    this._offerExtension = e;
  }
  get showingVideo() {
    return this._r1c2187606754d8 != null && this._r1c2187606754d8.var_1711;
  }
  get configuration() {
    return this._catalog;
  }
  dispose() {
    if (!this._disposed) {
      if (
        (this._window != null && (this._window.dispose(), (this._window = null)),
        this._r10b40ac216ac3e != null)
      ) {
        for (let e of this._r10b40ac216ac3e) e.dispose();
        this._r10b40ac216ac3e = null;
      }
      (this.var_1174 != null && (this.var_1174.stop(), (this.var_1174 = null)),
        this._offerRewardDeliveredMessageEvent != null &&
          (this._catalog?.connection?.removeMessageEvent(this._offerRewardDeliveredMessageEvent),
          (this._offerRewardDeliveredMessageEvent = null)),
        (this.var_2771 = null),
        (this._offerExtension = null),
        (this._windowManager = null),
        (this._catalog = null),
        (this._assets = null),
        (this._disposed = !0));
    }
  }
  showRewards() {
    this.hide();
    let e = this._assets?.getAssetByName("offer_center_xml")?.content;
    if (
      e == null ||
      ((this._window = this._windowManager?.buildFromXML(e)), this._window == null)
    )
      return;
    ((this._window.procedure = this.windowProcedure), this._window.center());
    let r = this._window.findChildByName("reward_list");
    r != null && ((this.var_2608 = r.removeListItemAt(0)), this.populateRewardList());
  }
  showVideo() {
    this._r1c2187606754d8?.showVideo();
  }
  _r223d0d34ff326a() {}
  updateVideoStatus() {
    this._offerExtension != null &&
      ((this._r1c2187606754d8 = this._r15621f26678be2()),
      this._offerExtension.indicateVideoAvailable(
        this._r1c2187606754d8 != null && this._r1c2187606754d8._r5c558202fd8dc1,
      ));
  }
  get visible() {
    return this._window != null && !this._window.disposed && this._window.visible;
  }
  onPollTimer = n(() => {
    if (this._r10b40ac216ac3e != null) for (let e of this._r10b40ac216ac3e) e.enabled && e.load();
  }, "onPollTimer");
  _r15621f26678be2() {
    if (this._r10b40ac216ac3e == null) return null;
    for (let e of this._r10b40ac216ac3e) if (e.enabled && e._r5c558202fd8dc1) return e;
    return null;
  }
  _r0205d10c9b2304 = n((e) => {
    let r = ClassUtils.getParser(e, class_3571);
    r != null && this.addReward(r.name ?? "", r.contentType ?? "", r.classId);
  }, "_r0205d10c9b2304");
  windowProcedure = n((e, r) => {
    e.type !== u.CLICK || !this.visible || (r.name === "header_button_close" && this.hide());
  }, "windowProcedure");
  hide() {
    this._window != null &&
      (this.var_2608?.dispose(),
      (this.var_2608 = null),
      this._window.dispose(),
      (this._window = null));
  }
  addReward(e, r, t) {
    let i = new OfferReward(e, r, t);
    if ((this.var_2771?.unshift(i), this.visible)) {
      let s = this._window?.findChildByName("reward_list"),
        o = this.createRewardItem(i);
      s != null && o != null && s.addListItemAt(o, 0);
    } else this._offerExtension?.indicateRewards();
  }
  populateRewardList() {
    if (!this.visible) return;
    let e = this._window?.findChildByName("reward_list");
    if (e != null) {
      e.destroyListItems();
      for (let r of this.var_2771 ?? []) {
        let t = this.createRewardItem(r);
        t != null && e.addListItem(t);
      }
    }
  }
  createRewardItem(e) {
    let r = this.var_2608?.clone();
    if (r == null) return null;
    let t = r.findChildByName("reward_date"),
      i = r.findChildByName("reward_name");
    (t != null && (t.caption = new Date().toLocaleString()), i != null && (i.caption = e.name));
    let s = r.findChildByName("reward_icon");
    return (s != null && this._catalog?._r79cad450bdc61b(e.contentType, e.classId, s), r);
  }
}
