// Extracted from HabboAirLauncher.deobf.js, line 271799.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/AssetCallbackInfo.as
// Obfuscated name: _i6291062e40ad2e

class {
  static {
    n(this, "AssetCallbackInfo");
  }
  _id;
  _listeners;
  constructor(e) {
    ((this._id = e), (this._listeners = []));
  }
  get id() {
    return this._id;
  }
  get listeners() {
    return this._listeners;
  }
}
