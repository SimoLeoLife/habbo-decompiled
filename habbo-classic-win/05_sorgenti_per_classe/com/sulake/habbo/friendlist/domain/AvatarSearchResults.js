// Estratto da HabboAirLauncher.deobf.js, riga 216122.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/AvatarSearchResults.as
// Nome offuscato: _i9652dbec46c048

class {
  static {
    n(this, "AvatarSearchResults");
  }
  var_630;
  var_474 = [];
  _others = [];
  _r83d96c0635c28d = new globalThis.Map();
  constructor(e) {
    this.var_630 = e;
  }
  _rfd4de41390587e(e) {
    for (let r of this.var_474) if (r.avatarId === e) return r;
    for (let r of this._others) if (r.avatarId === e) return r;
    return null;
  }
  searchReceived(e, r) {
    ((this.var_474 = e),
      (this._others = r),
      this.var_630.view?.refreshList());
  }
  setFriendRequestSent(e) {
    this._r83d96c0635c28d.set(e, "yes");
  }
  var_3816(e) {
    return this._r83d96c0635c28d.has(e);
  }
  get friends() {
    return this.var_474;
  }
  get others() {
    return this._others;
  }
}
