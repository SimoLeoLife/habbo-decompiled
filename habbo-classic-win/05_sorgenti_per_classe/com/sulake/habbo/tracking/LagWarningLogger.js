// Extracted from HabboAirLauncher.deobf.js, line 181868.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/LagWarningLogger.as
// Obfuscated name: _i7cdbc447a7047c

class {
  static {
    n(this, "LagWarningLogger");
  }
  _lastWarning = 0;
  var_2386 = 0;
  _r49621084c4a423;
  constructor(e) {
    this._r49621084c4a423 = e;
  }
  _r74ee831af16cd2(e) {
    !this.enabled || this.warningInterval <= 0 || (this.var_2386++, this.reportWarningsAsNeeded(e));
  }
  update(e) {
    this.reportWarningsAsNeeded(e);
  }
  reportWarningsAsNeeded(e) {
    if (
      this.var_2386 !== 0 &&
      (this._lastWarning === 0 || e - this._lastWarning > this.warningInterval)
    ) {
      let r = new class_3773(this.var_2386);
      (this._r49621084c4a423.send(r), (this._lastWarning = e), (this.var_2386 = 0));
    }
  }
  get enabled() {
    return this._r49621084c4a423.getBoolean("lagWarningLog.enabled");
  }
  get warningInterval() {
    return this._r49621084c4a423.getInteger("lagWarningLog.interval.seconds", 10) * 1e3;
  }
}
