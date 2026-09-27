// Extracted from HabboAirLauncher.deobf.js, line 242276.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/marketplace/MarketplaceModel.as
// Obfuscated name: _i10ab26bd6c6dc0

class a {
  constructor(e, r, t, i, s, o) {
    this.var_63 = e;
    this._communication = t;
    this._view = new MarketplaceView(this, r, i, s, o, this.var_63);
  }
  static {
    n(this, "MarketplaceModel");
  }
  static DEFAULT_BULK_OFFER_LIMIT = 500;
  _disposed = !1;
  _r2a19d3769df7bd = null;
  releaseItems = null;
  var_3915 = !1;
  _r471dc91f07711a = 0;
  _r6a0004b6d22280 = 0;
  _r3d478dbadc036f = 0;
  _r09b5610907c3f5 = 0;
  _r32a71cd5b2c521 = 0;
  _r96019af79cbab8 = 0;
  _rbffed5108c79eb = 0;
  _r76fc5393f231b3 = 0;
  _r623ebf45bf5d06 = 0;
  _r7b011b52ea87b0 = 0;
  _r4bc27bcfcc1d2e = 0;
  _rd528622ca25a41 = 0;
  _view;
  _ra4fb5d72c8d344 = !1;
  get id() {
    return class_2106.MARKETPLACE;
  }
  get disposed() {
    return this._disposed;
  }
  get controller() {
    return this.var_63;
  }
  get isEnabled() {
    return this.var_3915;
  }
  set isEnabled(e) {
    this.var_3915 = e;
  }
  get _rc78a9710d98367() {
    return this._r471dc91f07711a;
  }
  set _rc78a9710d98367(e) {
    this._r471dc91f07711a = e;
  }
  get _rfa37188cae1632() {
    return this._r6a0004b6d22280;
  }
  set _rfa37188cae1632(e) {
    this._r6a0004b6d22280 = e;
  }
  get _rac800e17bfe7c0() {
    return this._r3d478dbadc036f;
  }
  set _rac800e17bfe7c0(e) {
    this._r3d478dbadc036f = e;
  }
  get _ra450591baf0c72() {
    return this._r09b5610907c3f5;
  }
  set _ra450591baf0c72(e) {
    this._r09b5610907c3f5 = e;
  }
  get _r742515fbd69d4b() {
    return this._r32a71cd5b2c521;
  }
  set _r742515fbd69d4b(e) {
    this._r32a71cd5b2c521 = e;
  }
  get _r006253b58c8103() {
    return this._r96019af79cbab8;
  }
  set _r006253b58c8103(e) {
    this._r96019af79cbab8 = e;
  }
  get _rccca8d1e540a76() {
    return this._rbffed5108c79eb;
  }
  set _rccca8d1e540a76(e) {
    this._rbffed5108c79eb = e;
  }
  get _r6c2fda63c2e23c() {
    return this._r76fc5393f231b3;
  }
  set _r6c2fda63c2e23c(e) {
    this._r76fc5393f231b3 = e;
  }
  get _rc0e274bac9c617() {
    return this._r623ebf45bf5d06;
  }
  set _rc0e274bac9c617(e) {
    this._r623ebf45bf5d06 = e;
  }
  get _rf6fc7b262ce24c() {
    return this._r7b011b52ea87b0;
  }
  set _rf6fc7b262ce24c(e) {
    this._r7b011b52ea87b0 = e;
  }
  get bulkOfferLimit() {
    let e = this.var_63?.getInteger("marketplace.bulkOfferLimit", 0) ?? 0;
    return e > 0 ? e : a.DEFAULT_BULK_OFFER_LIMIT;
  }
  dispose() {
    this._disposed ||
      (this._rc62fbd899c6085(),
      this._view?.dispose(),
      (this._view = null),
      (this.var_63 = null),
      (this._communication = null),
      (this._disposed = !0));
  }
  _rc62fbd899c6085() {
    if (
      this.var_63?._r9275a8e42af3cc != null &&
      this.releaseItems != null &&
      this._r2a19d3769df7bd != null
    ) {
      let e = new Set();
      for (let r of this.releaseItems) e.add(r.id);
      this.var_63._r9275a8e42af3cc._r55b21c7d0e6744(this._r2a19d3769df7bd, e);
    }
    ((this.releaseItems = null), (this._r2a19d3769df7bd = null));
  }
  _r251dfdbb44946b() {
    this._rc62fbd899c6085();
  }
  _rcb5911238817f8(e) {
    this._r2a19d3769df7bd != null ||
      e == null ||
      (this.var_63?._r9275a8e42af3cc != null && ((this._r2a19d3769df7bd = e), this.send(new UnkMessageComposer_0args_fdcc6e())));
  }
  _rd5e717522e480e() {
    (this.send(new UnkMessageComposer_0args_6c0568()), (this._ra4fb5d72c8d344 = !0));
  }
  makeOffer(e, r) {
    if (this.releaseItems == null || this.releaseItems.length === 0) return;
    let t = Math.max(1, Math.min(Math.trunc(r), this.releaseItems.length)),
      i = [];
    for (let o = 0; o < t; o++) i.push(this.releaseItems[o].ref);
    let s = this.releaseItems[0].isWallItem ? UnkMessageComposer_3args_b652a2._rea0492d8723e0e : UnkMessageComposer_3args_b652a2._r91f4af675534a9;
    (this.send(new UnkMessageComposer_3args_b652a2(e, s, i)), this._rc62fbd899c6085());
  }
  rarityLevel() {
    let e = this._rd5049fe2b449a4();
    if (e == null) return;
    let r = this._r33882fc536bc33(e),
      t = null;
    (e.category === class_1901.POSTER &&
      (e.stuffData != null
        ? (t = e.stuffData.getLegacyString())
        : Number.isNaN(e.extra) || (t = String(Math.trunc(e.extra)))),
      (this._r4bc27bcfcc1d2e = r),
      (this._rd528622ca25a41 = e.type),
      this.send(new class_2127(r, e.type, t)));
  }
  proceedOfferMaking(e, r) {
    switch (((this._ra4fb5d72c8d344 = !1), e)) {
      case 1:
        if (this._r2a19d3769df7bd == null || this.var_63?._r9275a8e42af3cc == null) {
          this._rc62fbd899c6085();
          return;
        }
        if (
          ((this.releaseItems = this.var_63._r9275a8e42af3cc._r8e40a37d54a851(
            this._r2a19d3769df7bd,
          )),
          this.releaseItems == null || this.releaseItems.length === 0)
        ) {
          this._rc62fbd899c6085();
          return;
        }
        this._view?.showMakeOffer(
          this.releaseItems[0],
          Math.min(this.releaseItems.length, this.bulkOfferLimit),
        );
        break;
      case 2:
        this._view?.showAlert(
          "${inventory.marketplace.no_trading_privilege.title}",
          "${inventory.marketplace.no_trading_privilege.info}",
        );
        break;
      case 3:
        this._view?.showAlert(
          "${inventory.marketplace.no_trading_pass.title}",
          "${inventory.marketplace.no_trading_pass.info}",
        );
        break;
      case 4:
        this._view?.showBuyTokens(this._r6a0004b6d22280, this._r3d478dbadc036f);
        break;
      case 5:
        this._rc62fbd899c6085();
        break;
      case 6:
        this._view?.showAlert(
          "${inventory.marketplace.trading_lock.title}",
          "${inventory.marketplace.trading_lock.info}",
        );
        break;
    }
  }
  _rdbb2f67bc30740(e) {
    this._view?.showResult(e);
  }
  _r2b347d3d065702(e) {
    e != null &&
      (e._r0dab2cd380900c !== this._r4bc27bcfcc1d2e ||
        e._r0010c2e2cf3a43 !== this._rd528622ca25a41 ||
        this._view?.updateItemStats(e, this._rbffed5108c79eb));
  }
  _r0ed042101e0bfc(e, r, t) {
    let i = new class_2201();
    ((i._r0dab2cd380900c = e), (i._r0010c2e2cf3a43 = r), (i._r4696ae664425c4 = t), this._r2b347d3d065702(i));
  }
  _r33882fc536bc33(e) {
    return e != null && e.stuffData != null && e.stuffData.uniqueSerialNumber > 0
      ? class_2127.const_383
      : e != null && e.isWallItem
        ? class_2127.const_129
        : class_2127.const_84;
  }
  _r20be5b026e24a3() {
    this._ra4fb5d72c8d344 && ((this._ra4fb5d72c8d344 = !1), this._rc62fbd899c6085());
  }
  requestInitialization() {
    this.send(new class_3140());
  }
  _rd5049fe2b449a4() {
    return this.releaseItems != null && this.releaseItems.length > 0
      ? (this.releaseItems[0] ?? null)
      : this._r2a19d3769df7bd != null
        ? this._r2a19d3769df7bd._r674cd6d940b6f9()
        : null;
  }
  _rfff55da31bf48d() {
    let e = [];
    if (this.releaseItems == null) return e;
    for (let r of this.releaseItems) e.push(r.ref);
    return e;
  }
  getWindowContainer() {
    return null;
  }
  categorySwitch(e) {}
  subCategorySwitch(e) {}
  closingInventoryView() {}
  updateView() {}
  selectItemById(e) {}
  send(e) {
    e != null && this._communication?.connection != null && this._communication.connection.send(e);
  }
}
