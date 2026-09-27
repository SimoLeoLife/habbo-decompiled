// Extracted from HabboAirLauncher.deobf.js, line 59174.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/core/runtime/events/ErrorEvent.as
// Obfuscated name: _i022ca667b18953

class extends WarningEvent {
  constructor(r, t, i, s, o = null) {
    super(r, t);
    this.var_4097 = i;
    this.var_163 = s;
    this._error = o;
  }
  static {
    n(this, "ErrorEvent");
  }
  get category() {
    return this.var_163;
  }
  get critical() {
    return this.var_4097;
  }
  get error() {
    return this._error;
  }
}
