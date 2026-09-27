// Estratto da HabboAirLauncher.deobf.js, riga 215490.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/FriendRemoveView.as
// Nome offuscato: _iede55c4a384997

class extends jm {
  static {
    n(this, "FriendRemoveView");
  }
  _selected;
  constructor(e) {
    (super(e, "friend_remove_confirm"), (this._selected = e.categories._r9a803fab68a4db()));
  }
  dispose() {
    ((this._selected = []), super.dispose());
  }
  setupContent(e) {
    let r = e.findChildByName("cancel"),
      t = e.findChildByName("ok");
    (r != null && (r.procedure = this.onClose.bind(this)),
      t != null && (t.procedure = this.onRemove.bind(this)));
    let i = this._selected.map((o) => o.name),
      s = Util.arrayToString(i);
    this.host?._r43eae9731f5b27("friendlist.removefriendconfirm.userlist", "user_names", s);
  }
  onRemove(e, r) {
    if (e.type !== u.CLICK) return;
    let t = new class_1900();
    for (let i of this._selected) t.addRemovedFriend(i.id);
    (this.host?.send(t), this.dispose());
  }
  get host() {
    return this.friendList;
  }
}
