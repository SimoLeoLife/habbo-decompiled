// Extracted from HabboAirLauncher.deobf.js, line 158592.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/events/FriendRequestEvent.as
// Obfuscated name: _i5d3db49d7508c7

class extends M {
  static {
    n(this, "FriendRequestEvent");
  }
  static ACCEPTED = "FRE_ACCEPTED";
  static DECLINED = "FRE_DECLINED";
  _requestId;
  constructor(e, r, t = !1, i = !1) {
    (super(e, t, i), (this._requestId = r));
  }
  get requestId() {
    return this._requestId;
  }
}
