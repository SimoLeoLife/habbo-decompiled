// Extracted from HabboAirLauncher.deobf.js, line 162508.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/roomevents/events/WiredUserClickHandledEvent.as
// Obfuscated name: _idca851ea11b274

class extends M {
  static {
    n(this, "WiredUserClickHandledEvent");
  }
  static WIRED_USER_CLICK_HANDLED = "WIRED_USER_CLICK_HANDLED";
  _index;
  var_3309;
  constructor(e, r, t, i = !1, s = !1) {
    (super(e, i, s), (this._index = r), (this.var_3309 = t));
  }
  get index() {
    return this._index;
  }
  get openMenu() {
    return this.var_3309;
  }
}
