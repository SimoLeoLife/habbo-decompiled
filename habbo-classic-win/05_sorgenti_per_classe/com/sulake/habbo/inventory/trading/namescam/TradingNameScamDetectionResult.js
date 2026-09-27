// Extracted from HabboAirLauncher.deobf.js, line 240077.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/inventory/trading/namescam/TradingNameScamDetectionResult.as
// Obfuscated name: _i21eb7d755ced95

class a {
  static {
    n(this, "TradingNameScamDetectionResult");
  }
  static NO_MATCHES = new a(null, null);
  _similarInRoom;
  var_3932;
  constructor(e, r) {
    ((this._similarInRoom = e != null ? e.slice() : []),
      (this.var_3932 = r != null ? r.slice() : []));
  }
  get _re4fba834f26aa5() {
    return this._similarInRoom.length > 0 || this.var_3932.length > 0;
  }
  get similarInRoom() {
    return this._similarInRoom.slice();
  }
  get similarInFriends() {
    return this.var_3932.slice();
  }
}
