// Estratto da HabboAirLauncher.deobf.js, riga 335518.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/session/BlockedUsersManager.as
// Nome offuscato: _i6133bf74eed29e

class {
  constructor(e) {
    this._sessionDataManager = e;
    this._sessionDataManager?.communication != null &&
      ((this._r849ab2072e9947 = this._sessionDataManager.communication._r2e106e2349a0b6(
        new class_2404(this._r8075b3e08d96d0),
      )),
      (this._rde7bd1484674e9 = this._sessionDataManager.communication._r2e106e2349a0b6(
        new class_2867(this._reb6f103206d9f7),
      )));
  }
  static {
    n(this, "BlockedUsersManager");
  }
  _r849ab2072e9947 = null;
  _rde7bd1484674e9 = null;
  var_998 = new Set();
  get disposed() {
    return this._sessionDataManager == null;
  }
  dispose() {
    this.disposed ||
      (this._sessionDataManager?.communication?._r7668362bf55fdd(this._r849ab2072e9947),
      this._sessionDataManager?.communication?._r7668362bf55fdd(this._rde7bd1484674e9),
      (this._r849ab2072e9947 = null),
      (this._rde7bd1484674e9 = null),
      this.var_998.clear(),
      (this._sessionDataManager = null));
  }
  initBlockList() {
    this._sessionDataManager?.send(new class_3375());
  }
  blockUser(e) {
    this._sessionDataManager?.send(new class_2755(e));
  }
  unblockUser(e) {
    this._sessionDataManager?.send(new class_2483(e));
  }
  isBlocked(e) {
    return this.var_998.has(e);
  }
  _reb6f103206d9f7 = n((e) => {
    this.var_998.clear();
    for (let r of e.blockedUserIds) this.var_998.add(r);
  }, "_reb6f103206d9f7");
  _r8075b3e08d96d0 = n((e) => {
    switch (e.result) {
      case class_2404.const_659:
        (this.var_998.add(e.userId),
          this._sessionDataManager?.notifications?.addItem("${notification.blocked_player}", NotificationType.INFO));
        break;
      case class_2404.const_598:
        (this.var_998.delete(e.userId),
          this._sessionDataManager?.notifications?.addItem("${notification.unblocked_player}", NotificationType.INFO));
        break;
    }
  }, "_r8075b3e08d96d0");
}
