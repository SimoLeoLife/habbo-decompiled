// Extracted from HabboAirLauncher.deobf.js, line 182122.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/tracking/ToolbarClickTracker.as
// Obfuscated name: _i4ae2a1c8ab79be

class {
  static {
    n(this, "ToolbarClickTracker");
  }
  _tracking;
  var_4332 = 0;
  constructor(e) {
    this._tracking = e;
  }
  track(e) {
    this._tracking.getBoolean("toolbar.tracking.enabled") &&
      (this.var_4332++,
      this.var_4332 <= this._tracking.getInteger("toolbar.tracking.max.events", 100) &&
        this._tracking.trackGoogle("toolbar", e));
  }
}
