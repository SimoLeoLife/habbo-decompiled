// Estratto da HabboAirLauncher.deobf.js, riga 205881.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendbar/groupforums/ForumsListData.as
// Nome offuscato: _ida6151b10f20db

class {
  static {
    n(this, "ForumsListData");
  }
  _listCode = 0;
  _totalAmount = 0;
  var_402 = 0;
  _forums = [];
  constructor(e) {
    ((this._listCode = e.listCode),
      (this._totalAmount = e.totalAmount),
      (this.var_402 = e.startIndex),
      (this._forums = e.forums ?? []));
  }
  get listCode() {
    return this._listCode;
  }
  get totalAmount() {
    return this._totalAmount;
  }
  get startIndex() {
    return this.var_402;
  }
  get forums() {
    return this._forums;
  }
  get _r2599717433efcc() {
    let e = 0;
    for (let r of this._forums) r.unreadMessages > 0 && e++;
    return e;
  }
  getForumData(e) {
    for (let r of this._forums) if (r.groupId === e) return r;
    return null;
  }
  updateUnreadMessages(e, r) {
    let t = this.getForumData(e.groupId);
    t != null && (t.updateFrom(e), (t.lastReadMessageId = r));
  }
}
