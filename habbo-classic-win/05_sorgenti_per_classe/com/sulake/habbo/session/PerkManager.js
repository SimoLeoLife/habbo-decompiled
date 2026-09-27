// Estratto da HabboAirLauncher.deobf.js, riga 335757.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/PerkManager.as
// Nome offuscato: _ibae911be0a4b7c

class {
  constructor(e) {
    this._sessionDataManager = e;
    this._sessionDataManager?.communication != null &&
      (this.communication = this._sessionDataManager.communication._r2e106e2349a0b6(
        new _i2c7b489ce44a85(this._r773ce30a57f0a5),
      ));
  }
  static {
    n(this, "PerkManager");
  }
  _ready = !1;
  communication = null;
  var_1005 = new Map();
  get disposed() {
    return this._sessionDataManager == null;
  }
  get isReady() {
    return this._ready;
  }
  dispose() {
    this.disposed ||
      (this.var_1005.clear(),
      this._sessionDataManager?.communication?._r7668362bf55fdd(this.communication),
      (this.communication = null),
      (this._sessionDataManager = null));
  }
  isPerkAllowed(e) {
    return this.var_1005.get(e)?.isAllowed ?? !1;
  }
  getPerkErrorMessage(e) {
    return this.var_1005.get(e)?.errorMessage ?? "";
  }
  _r773ce30a57f0a5 = n((e) => {
    for (let r of e.getParser().getPerks()) this.var_1005.set(r.code, r);
    ((this._ready = !0), this._sessionDataManager?.events.dispatchEvent?.(new d0()));
  }, "_r773ce30a57f0a5");
}
