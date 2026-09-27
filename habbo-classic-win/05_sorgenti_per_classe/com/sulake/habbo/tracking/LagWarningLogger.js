// Estratto da HabboAirLauncher.deobf.js, riga 181868.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/LagWarningLogger.as
// Nome offuscato: _i7cdbc447a7047c

class {
  static {
    n(this, "LagWarningLogger");
  }
  _lastWarning = 0;
  _rfa92f2590229b4 = 0;
  _r49621084c4a423;
  constructor(e) {
    this._r49621084c4a423 = e;
  }
  _r74ee831af16cd2(e) {
    !this.enabled || this.warningInterval <= 0 || (this._rfa92f2590229b4++, this.reportWarningsAsNeeded(e));
  }
  update(e) {
    this.reportWarningsAsNeeded(e);
  }
  reportWarningsAsNeeded(e) {
    if (
      this._rfa92f2590229b4 !== 0 &&
      (this._lastWarning === 0 || e - this._lastWarning > this.warningInterval)
    ) {
      let r = new _iff8249d1c3f58b(this._rfa92f2590229b4);
      (this._r49621084c4a423.send(r), (this._lastWarning = e), (this._rfa92f2590229b4 = 0));
    }
  }
  get enabled() {
    return this._r49621084c4a423.getBoolean("lagWarningLog.enabled");
  }
  get warningInterval() {
    return this._r49621084c4a423.getInteger("lagWarningLog.interval.seconds", 10) * 1e3;
  }
}
