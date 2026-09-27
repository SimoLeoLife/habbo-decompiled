// Estratto da HabboAirLauncher.deobf.js, riga 244268.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/wired_trading/requirements/WiredTradeRequirementsModel.as
// Nome offuscato: _i23d6c4838490fb

class {
  constructor(e) {
    this._r302f5b4f2cc605 = e;
    this._view = new _pe(this);
  }
  static {
    n(this, "WiredTradeRequirementsModel");
  }
  _disposed = !1;
  var_907 = null;
  _view;
  get disposed() {
    return this._disposed;
  }
  get _r5a2088db32911f() {
    if (this._r302f5b4f2cc605 == null) throw new Error("WiredTradeRequirementsModel has been disposed.");
    return this._r302f5b4f2cc605;
  }
  get _r4013f23453854c() {
    return this.var_907?.requirements ?? null;
  }
  get view() {
    return this._view;
  }
  setRequirements(e, r) {
    ((this.var_907 = new TradeRequirementWrapper(e)), this._view?.requirementsUpdated(e, r));
  }
  requirementsStateUpdated() {
    this._view?.requirementsStateUpdated();
  }
  _ra83cb240bf3b47() {
    this._view?._ra83cb240bf3b47();
  }
  canOfferFurni(e) {
    return this.var_907 == null
      ? !0
      : e._rc274ef95328596(!1) === 0
        ? !1
        : this.var_907.type === jf.var_5775
          ? !0
          : this.var_907.type === jf.var_5767
            ? e.className.indexOf("CF_") !== 0
            : this.var_907.type === jf.var_5789
              ? e.className.indexOf("CF_") === 0
              : this.var_907.type === jf.var_3917
                ? e.className.indexOf("CF_") === 0
                  ? this.var_907.canOfferCreditFurni()
                  : this.var_907.canOfferNormalFurni(e)
                : !0;
  }
  dispose() {
    this._disposed ||
      (this._view?.dispose(),
      (this._view = null),
      (this._r302f5b4f2cc605 = null),
      (this.var_907 = null),
      (this._disposed = !0));
  }
}
