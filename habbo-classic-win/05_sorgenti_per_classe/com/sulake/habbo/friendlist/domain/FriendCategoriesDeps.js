// Estratto da HabboAirLauncher.deobf.js, riga 216489.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendCategoriesDeps.as
// Nome offuscato: _i76e56c2c24bcce

class {
  static {
    n(this, "FriendCategoriesDeps");
  }
  _friendList;
  constructor(e) {
    this._friendList = e;
  }
  get view() {
    return this._friendList.tabs.findTab(_ia4c17117df4f10._ra8c8b3cdc9c268)?._r547724a31de035;
  }
  get messenger() {
    return this._friendList.messenger;
  }
  get notifications() {
    return this._friendList.notifications;
  }
  get avatarManager() {
    return this._friendList.avatarManager;
  }
  get localizations() {
    return this._friendList.localization;
  }
}
