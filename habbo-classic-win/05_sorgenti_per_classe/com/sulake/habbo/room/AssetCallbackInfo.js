// Estratto da HabboAirLauncher.deobf.js, riga 271799.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/AssetCallbackInfo.as
// Nome offuscato: _i6291062e40ad2e

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
