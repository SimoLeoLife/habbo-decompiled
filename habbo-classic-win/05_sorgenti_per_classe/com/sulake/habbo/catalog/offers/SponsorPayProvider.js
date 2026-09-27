// Estratto da HabboAirLauncher.deobf.js, riga 184390.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/offers/SponsorPayProvider.as
// Nome offuscato: _i4310779b617fa6

class a {
  constructor(e) {
    this._offerCenter = e;
    this.enabled &&
      (ur._r77b8521b16f762(a.LOADED_CALLBACK, this.sponsorPayLoaded),
      ur._r77b8521b16f762(a.ON_START_CALLBACK, this.sponsorPayOnStart),
      ur._r77b8521b16f762(a.NO_OFFERS_CALLBACK, this.sponsorPayNoOffers),
      ur._r77b8521b16f762(a.ON_CLOSE_CALLBACK, this.sponsorPayOnClose),
      ur._r77b8521b16f762(a.ON_CONVERSION_CALLBACK, this.sponsorPayOnConversion),
      (this._r300acd1025a107 = new _i05394ecc0c0c4d(a.const_798, 1)),
      this._r300acd1025a107.addEventListener(DeBouncer.addEventListener, this._rd5589bc990d006));
  }
  static {
    n(this, "SponsorPayProvider");
  }
  static LOADED_CALLBACK = "sponsorPayLoaded";
  static ON_START_CALLBACK = "sponsorPayOnStart";
  static NO_OFFERS_CALLBACK = "sponsorPayNoOffers";
  static ON_CLOSE_CALLBACK = "sponsorPayOnClose";
  static ON_CONVERSION_CALLBACK = "sponsorPayOnConversion";
  static const_853 = "SponsorPay.loadIntegration";
  static SHOW_VIDEO_FUNCTION = "SponsorPay.showVideo";
  static BACKGROUND_LOAD_FUNCTION = "SponsorPay.backgroundLoad";
  static const_798 = 15e4;
  _disposed = !1;
  _loaded = !1;
  var_2141 = !1;
  _rb44702fc79db9a = !1;
  _r300acd1025a107 = null;
  get disposed() {
    return this._disposed;
  }
  get _r5c558202fd8dc1() {
    return this.var_2141;
  }
  get var_1711() {
    return this._rb44702fc79db9a;
  }
  get enabled() {
    return this.appId !== "" && ur.available;
  }
  dispose() {
    this._disposed ||
      (ur.available &&
        (ur._r77b8521b16f762(a.LOADED_CALLBACK, null),
        ur._r77b8521b16f762(a.ON_START_CALLBACK, null),
        ur._r77b8521b16f762(a.NO_OFFERS_CALLBACK, null),
        ur._r77b8521b16f762(a.ON_CLOSE_CALLBACK, null),
        ur._r77b8521b16f762(a.ON_CONVERSION_CALLBACK, null)),
      this._r300acd1025a107 != null &&
        (this._r300acd1025a107.removeEventListener(DeBouncer.addEventListener, this._rd5589bc990d006),
        this._r300acd1025a107.stop(),
        (this._r300acd1025a107 = null)),
      (this._offerCenter = null),
      (this._disposed = !0));
  }
  load() {
    if (this._loaded) {
      this.sponsorPayLoaded();
      return;
    }
    if (this.enabled)
      try {
        (ur.call(a.const_853, this.appId), (this._loaded = !0));
      } catch {}
  }
  showVideo() {
    if (this._loaded && this.enabled)
      try {
        (ur.call(a.SHOW_VIDEO_FUNCTION),
          (this._rb44702fc79db9a = !0),
          this._r300acd1025a107?.reset(),
          this._r300acd1025a107?.start(),
          this.updateVideoStatus());
      } catch {}
  }
  get appId() {
    return this._offerCenter?.configuration.getProperty("offers.sponsorpay.appid") ?? "";
  }
  _rd5589bc990d006 = n(() => {
    this.sponsorPayOnClose();
  }, "_rd5589bc990d006");
  sponsorPayLoaded = n(() => {
    if (!this._rb44702fc79db9a) {
      this.var_2141 = !1;
      try {
        ur.available && ur.call(a.BACKGROUND_LOAD_FUNCTION);
      } catch {}
    }
  }, "sponsorPayLoaded");
  sponsorPayOnStart = n((e) => {
    ((this.var_2141 = !0), this.updateVideoStatus());
  }, "sponsorPayOnStart");
  sponsorPayNoOffers = n(() => {
    ((this.var_2141 = !1), this.updateVideoStatus());
  }, "sponsorPayNoOffers");
  sponsorPayOnClose = n(() => {
    ((this._rb44702fc79db9a = !1), this._r300acd1025a107?.stop());
    try {
      ur.available && ur.call(a.BACKGROUND_LOAD_FUNCTION);
    } catch {
    } finally {
      this.updateVideoStatus();
    }
  }, "sponsorPayOnClose");
  sponsorPayOnConversion = n(() => {
    this._offerCenter?._r223d0d34ff326a();
  }, "sponsorPayOnConversion");
  updateVideoStatus() {
    this._offerCenter?.updateVideoStatus();
  }
}
