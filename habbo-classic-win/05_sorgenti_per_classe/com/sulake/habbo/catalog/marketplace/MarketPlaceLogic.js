// Extracted from HabboAirLauncher.deobf.js, line 183426.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/catalog/marketplace/MarketPlaceLogic.as
// Obfuscated name: _i49f48a48f819f3

class a {
  constructor(e, r, t) {
    this._catalog = e;
    this._windowManager = r;
    this._roomEngine = t;
    this.getConfiguration();
  }
  static {
    n(this, "MarketPlaceLogic");
  }
  _redd979b244523f = 1;
  PURCHASE_CONFIRM_TYPE_HIGHER = 2;
  const_741 = 3;
  static TYPE_POSTER = "poster";
  _visualization = null;
  var_69 = null;
  _rf55924e8fcaf26 = null;
  _latestOwnOffers = null;
  var_4912 = 0;
  _rbffed5108c79eb = -1;
  _r4b8b5a5ddef79a = null;
  _r4bc27bcfcc1d2e = 0;
  _rd528622ca25a41 = 0;
  var_5276 = 0;
  _r1283cf0d0d614d = Tc.OPEN;
  var_3683 = 0;
  _minPrice = 0;
  _maxPrice = 0;
  _searchString = "";
  var_4652 = -1;
  _combineUniques = !0;
  _disposed = !1;
  get disposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed ||
      ((this._catalog = null),
      (this._windowManager = null),
      (this._roomEngine = null),
      this._rc98421312245a9(this._rf55924e8fcaf26),
      (this._rf55924e8fcaf26 = null),
      this._rc98421312245a9(this._latestOwnOffers),
      (this._latestOwnOffers = null),
      this.var_69?.dispose(),
      (this.var_69 = null),
      (this._visualization = null),
      (this._r4b8b5a5ddef79a = null),
      (this._disposed = !0));
  }
  get windowManager() {
    return this._windowManager;
  }
  get localization() {
    return this._catalog?.localization ?? null;
  }
  registerVisualization(e = null) {
    e != null && (this._visualization = e);
  }
  _rdebe4d9658f74e(e, r = !0) {
    this.requestOffers(-1, -1, e, -1, r);
  }
  requestOffersByPrice(e, r = !0) {
    this.requestOffers(e, -1, "", -1, r);
  }
  requestOffers(e, r, t, i, s = !0) {
    ((this._minPrice = e),
      (this._maxPrice = r),
      (this._searchString = t),
      (this.var_4652 = i),
      (this._combineUniques = s),
      this._catalog?._r0bd15f171f0e2d(e, r, t, i, s));
  }
  refreshOffers() {
    this.requestOffers(
      this._minPrice,
      this._maxPrice,
      this._searchString,
      this.var_4652,
      this._combineUniques,
    );
  }
  _r6e7099fa61e764(e = Tc.OPEN) {
    ((this._r1283cf0d0d614d = e), this._catalog?._r41190c02ac808f(e));
  }
  _rea5d52439a8fab(e) {
    if (this._catalog == null || e == null) return;
    ((this._rd528622ca25a41 = e.furniId), (this._r4bc27bcfcc1d2e = this._r33882fc536bc33(e)));
    let r = null;
    (this.isPosterItem(e) && (r = e.extraData),
      this._catalog._r6936c7498ed04e(this._r4bc27bcfcc1d2e, e.furniId, r));
  }
  _r204822acd10e1a(e) {
    if (this._rf55924e8fcaf26 == null || this._catalog == null) return;
    let r = this._rf55924e8fcaf26.getValue(e) ?? null;
    if (r != null) {
      if (this._catalog.getPurse().credits < r.price) {
        this._catalog.showNotEnoughCreditsAlert();
        return;
      }
      this.showConfirmation(this._redd979b244523f, r);
    }
  }
  _r3733d9b0c15928(e) {
    this._catalog?._r1d412253b15601(e);
  }
  _r514081b502d32b() {
    this._catalog?._r0895eb206aefc8();
  }
  _rb22cc684d94725(e) {
    this._catalog == null ||
      !Tc._raddac581a397b1(e) ||
      ((this.var_3683 = e), this._catalog._r5bbeb2324e3603(e));
  }
  _r5891395098af12(e) {
    let r = ClassUtils.getParser(e, Nl);
    if (r != null) {
      (this._rc98421312245a9(this._rf55924e8fcaf26), (this._rf55924e8fcaf26 = new B()));
      for (let t of r.offers) {
        let i = new MarketPlaceOfferData(
          t.offerId,
          t.furniId,
          t.furniType,
          t.extraData,
          t.stuffData,
          t.price,
          t.status,
          t._r4696ae664425c4,
          t.offerCount,
          t.isUsable,
          t._rd59f342c907b0b,
        );
        ((i.timeLeftMinutes = t.timeLeftMinutes), this._rf55924e8fcaf26.add(t.offerId, i));
      }
      ((this.var_5276 = r.totalItemsFound), this._visualization?._rd4d60b7cf07f13());
    }
  }
  _rcf036808b2f54f(e) {
    let r = ClassUtils.getParser(e, yk);
    if (r != null) {
      (this._rc98421312245a9(this._latestOwnOffers),
        (this._latestOwnOffers = new B()),
        (this.var_4912 = r.creditsWaiting));
      for (let t of r.offers) {
        let i = new MarketPlaceOfferData(
          t.offerId,
          t.furniId,
          t.furniType,
          t.extraData,
          t.stuffData,
          t.price,
          t.status,
          t._r4696ae664425c4,
        );
        ((i.timeLeftMinutes = t.timeLeftMinutes),
          (i.statusTime = t.statusTime),
          this._latestOwnOffers.add(t.offerId, i));
      }
      this._visualization?._rd4d60b7cf07f13();
    }
  }
  onBuyResult(e) {
    let r = ClassUtils.getParser(e, class_3829);
    if (r != null) {
      if (r.result === 1) {
        this.refreshOffers();
        return;
      }
      if (r.result === 2) {
        ((this._rf55924e8fcaf26?.remove(r._r44eed779fb526e) ?? null)?.dispose(),
          this._visualization?._rd4d60b7cf07f13(),
          this._windowManager?.alert(
            "${catalog.marketplace.not_available_title}",
            "${catalog.marketplace.not_available_header}",
            0,
            (i, s) => {
              i.dispose();
            },
          ));
        return;
      }
      if (r.result === 3) {
        let t = this._rf55924e8fcaf26?.getValue(r._r44eed779fb526e) ?? null;
        (t != null &&
          ((t.offerId = r.offerId),
          (t.price = r.newPrice),
          t.offerCount--,
          this._rf55924e8fcaf26?.add(r.offerId, t)),
          this._rf55924e8fcaf26?.remove(r._r44eed779fb526e),
          this.showConfirmation(this.PURCHASE_CONFIRM_TYPE_HIGHER, t),
          this._visualization?._rd4d60b7cf07f13());
        return;
      }
      r.result === 4 &&
        this._windowManager?.alert(
          "${catalog.alert.notenough.title}",
          "${catalog.alert.notenough.credits.description}",
          0,
          (t, i) => {
            t.dispose();
          },
        );
    }
  }
  onCancelResult(e) {
    let r = ClassUtils.getParser(e, class_2371);
    if (r != null) {
      if (r.success) {
        ((this._latestOwnOffers?.remove(r.offerId) ?? null)?.dispose(),
          this._visualization?._r872030cd20b464([r.offerId]));
        return;
      }
      this._windowManager?.alert(
        "${catalog.marketplace.operation_failed.topic}",
        "${catalog.marketplace.cancel_failed}",
        0,
        (t, i) => {
          t.dispose();
        },
      );
    }
  }
  onCancelAllResult(e) {
    let r = ClassUtils.getParser(e, class_3217);
    if (r != null) {
      if (r.success) {
        let t = [];
        if (this._latestOwnOffers != null)
          for (let i of r.offerIds ?? []) {
            let s = this._latestOwnOffers.remove(i) ?? null;
            s != null && (t.push(i), s.dispose());
          }
        this._visualization?._r872030cd20b464(t);
        return;
      }
      this._windowManager?.alert(
        "${catalog.marketplace.operation_failed.topic}",
        "${shop.marketplace.recall.failed}",
        0,
        (t, i) => {
          t.dispose();
        },
      );
    }
  }
  onClearOwnHistoryResult(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_B_02c315);
    if (r == null) return;
    let t = this.var_3683;
    if (((this.var_3683 = 0), r.success)) {
      if (t !== this._r1283cf0d0d614d || this._latestOwnOffers == null) return;
      let i = this._latestOwnOffers.getKeys() ?? [];
      for (let s of i) (this._latestOwnOffers.remove(s) ?? null)?.dispose();
      this._visualization?._r872030cd20b464(i);
      return;
    }
    this._windowManager?.alert(
      "${catalog.marketplace.operation_failed.topic}",
      "${shop.marketplace.mark.as.seen.failed}",
      0,
      (i, s) => {
        i.dispose();
      },
    );
  }
  _r519068b3bc73ed() {
    return this._rf55924e8fcaf26;
  }
  _rd62f0c7e54490a() {
    return this._latestOwnOffers;
  }
  totalItemsFound() {
    return this.var_5276;
  }
  get _re67ea9f06a5cad() {
    return this._r4b8b5a5ddef79a;
  }
  set _re67ea9f06a5cad(e) {
    if (e == null) {
      this._r4b8b5a5ddef79a = null;
      return;
    }
    e._r0dab2cd380900c !== this._r4bc27bcfcc1d2e ||
      e._r0010c2e2cf3a43 !== this._rd528622ca25a41 ||
      ((this._r4b8b5a5ddef79a = e), this._visualization?.updateStats());
  }
  get creditsWaiting() {
    return this.var_4912;
  }
  get _rd28de61b856590() {
    return this._r1283cf0d0d614d;
  }
  get _rccca8d1e540a76() {
    return this._rbffed5108c79eb;
  }
  set _rccca8d1e540a76(e) {
    this._rbffed5108c79eb = e;
  }
  _r33882fc536bc33(e) {
    return e._r651925293e1d0b
      ? class_2127.const_383
      : e.furniType === MarketPlaceOfferData.const_103
        ? class_2127.const_129
        : class_2127.const_84;
  }
  getNameLocalizationKey(e) {
    return e == null
      ? ""
      : this.isPosterItem(e)
        ? `poster_${e.extraData}_name`
        : e.furniType === MarketPlaceOfferData.const_86
          ? `roomItem.name.${e.furniId}`
          : e.furniType === MarketPlaceOfferData.const_103
            ? `wallItem.name.${e.furniId}`
            : "";
  }
  getDescriptionLocalizationKey(e) {
    return e == null
      ? ""
      : this.isPosterItem(e)
        ? `poster_${e.extraData}_desc`
        : e.furniType === MarketPlaceOfferData.const_86
          ? `roomItem.desc.${e.furniId}`
          : e.furniType === MarketPlaceOfferData.const_103
            ? `wallItem.desc.${e.furniId}`
            : "";
  }
  isAccountSafetyLocked() {
    return this._catalog?.sessionDataManager?.isAccountSafetyLocked() ?? !1;
  }
  getConfiguration() {
    this._catalog?.connection?.send(new class_3140());
  }
  showConfirmation(e, r) {
    r == null ||
      this._catalog == null ||
      (this.var_69 == null &&
        (this.var_69 = new MarketplaceConfirmationDialog(this, this._catalog, this._roomEngine)),
      this.var_69.showConfirmation(e, r));
  }
  _rc98421312245a9(e) {
    if (e != null) {
      for (let r of e.getKeys()) e.getValue(r)?.dispose();
      e.dispose();
    }
  }
  isPosterItem(e) {
    return e.furniType !== MarketPlaceOfferData.const_103 || e.extraData == null
      ? !1
      : (this._catalog?.products(e.furniId, class_1803.PRODUCT_TYPE_ITEM) ?? null)
          ?.className === a.TYPE_POSTER;
  }
}
