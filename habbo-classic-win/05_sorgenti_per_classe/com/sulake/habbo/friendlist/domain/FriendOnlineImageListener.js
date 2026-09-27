// Estratto da HabboAirLauncher.deobf.js, riga 216310.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendOnlineImageListener.as
// Nome offuscato: _ib2807bf778297f

class {
  static {
    n(this, "FriendOnlineImageListener");
  }
  var_144;
  _friendCategories;
  _disposed = !1;
  constructor(e, r) {
    ((this.var_144 = e), (this._friendCategories = r));
  }
  avatarImageReady(e) {
    if (this._friendCategories == null || this.var_144 == null) return;
    let r = this._friendCategories.deps.avatarManager._r274f6640e76241(
      this.var_144.figure,
      fr.LARGE,
      null,
      null,
    );
    r && !r._re9580ee607591e()
      ? this._friendCategories.notifyFriendOnline(this.var_144, r)
      : r?.dispose();
  }
  dispose() {
    ((this.var_144 = null), (this._friendCategories = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
}
