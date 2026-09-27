// Extracted from HabboAirLauncher.deobf.js, line 216339.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/domain/FriendCategories.as
// Obfuscated name: _i0b7d3518a2f21e

class a {
  static {
    n(this, "FriendCategories");
  }
  static STOP_SORTING_FRIENDLIST = 200;
  var_630;
  _categories = [];
  _r46f899024b0eee = new globalThis.Map();
  constructor(e) {
    this.var_630 = e;
  }
  addFriend(e) {
    let r = e.online ? e.categoryId : _c._r9f6f78959f0306,
      t = this.findCategory(r);
    return t != null ? (t.addFriend(e), this._r46f899024b0eee.set(e.id, e), t) : null;
  }
  sort(e = !1) {
    for (let r of this._categories) (!e || r.friends.length < a.STOP_SORTING_FRIENDLIST) && r.sort();
  }
  _r9a803fab68a4db() {
    let e = [];
    for (let r of this._categories) r._r9a803fab68a4db(e);
    return e;
  }
  _r52c870ff85cb99() {
    let e = this._r9a803fab68a4db();
    return e.length === 1 ? e[0] : null;
  }
  _r3c1bb30d3e52f8() {
    return this._r46f899024b0eee;
  }
  getFriendCount(e, r = !1) {
    let t = 0;
    for (let i of this._categories) t += i.getFriendCount(e, r);
    return t;
  }
  _rce5da95ddf8754() {
    return this._categories;
  }
  addCategory(e) {
    this._categories.push(e);
  }
  _r6c6a0b9c455198(e) {
    return this._r46f899024b0eee.get(e) ?? null;
  }
  findCategory(e) {
    for (let r of this._categories) if (r.id === e) return r;
    return null;
  }
  _re2d4f827ef2413(e) {
    let r = ClassUtils.getParser(e, UnkMessageParser_IIII_7720fd);
    if (r != null) {
      this._rf8dcb7f97deeb7(r._r78d655af73c8d5);
      for (let t of r._r4c37a8f59cd58b) this.removeFriend(t, !0);
      for (let t of r._rbefba214d28621) {
        this.var_630.messenger._r20348e9f5a1097(t.id, t.followingAllowed && t.online);
        let i = this._r2d2b4292ed8aa7(t.id);
        (i && !t.online && this.var_630.messenger._r2e759163b29bb3(t.id, t.online),
          !i &&
            t.online &&
            (this.var_630.messenger._r2e759163b29bb3(t.id, t.online),
            this.var_630.view?.setNewMessageArrived()));
        let s = this.removeFriend(t.id, !0),
          o = new Friend(t);
        ((o.selected = s == null ? !1 : s.selected),
          this.addFriend(o),
          s != null && !s.online && o.online && this.notifyFriendOnline(o));
      }
      for (let t of r._r4635d11ec0fc56) {
        let i = new Friend(t);
        (this.removeFriend(t.id, !0), this.addFriend(i));
      }
      (this.sort(!0), this.var_630.view?.refreshList());
    }
  }
  notifyFriendOnline(e, r = null) {
    if (
      !this.var_630.messenger.getBoolean("friend_online_indicator.enabled") ||
      !this._rae825967355d3b(e)
    )
      return;
    let t = r,
      i = null;
    if (t == null) {
      let o = new FriendOnlineImageListener(e, this);
      t = this.var_630.avatarManager._r274f6640e76241(e.figure, fr.LARGE, null, o);
    }
    if (t == null || t._re9580ee607591e()) {
      t?.dispose();
      return;
    }
    ((i = Jd.focusUserFace(t, class_2123.HEAD, 2, 1)), (i = Jd.cutCircleFromBitmap(i, 22)), t.dispose());
    let s = this.var_630.localizations.getLocalizationWithParams(
      "notifications.friend_online",
      "",
      "name",
      e.name,
    );
    this.var_630.notifications.addItemWithBitmap(s, NotificationType.FRIEND_ONLINE, i, `messenger/${e.id}`);
  }
  _rae825967355d3b(e) {
    switch (this.var_630.messenger._r12ae61c60526eb()) {
      case class_2191.RELATIONSHIP_STATUS:
        return e._r13d8beafe06ba1 !== en.NONE;
      case class_2191.NOBODY:
        return !1;
      default:
        return !0;
    }
  }
  _rf8dcb7f97deeb7(e) {
    this._r4e216577f9d821();
    let r = this.findCategory(_c._r9f6f78959f0306),
      t = this.findCategory(_c._r2a8d0988824e63);
    (r != null && (r.received = !0), t != null && (t.received = !0));
    for (let i of e) {
      let s = this.findCategory(i.id);
      s != null && ((s.received = !0), s.name !== i.name && (s.name = i.name));
    }
    for (let i of this._reb4229dbb071ca())
      i.friends.length > 0 || (Util.remove(this._categories, i), i.dispose());
  }
  removeFriend(e, r) {
    r && this._r46f899024b0eee.delete(e);
    let t = null;
    for (let i of this._categories) ((t = i.removeFriend(e)), t != null && r && t.dispose());
    return t;
  }
  _r4e216577f9d821() {
    for (let e of this._categories) e.received = !1;
  }
  _reb4229dbb071ca() {
    return this._categories.filter((e) => !e.received);
  }
  _r2d2b4292ed8aa7(e) {
    let r = this._r6c6a0b9c455198(e);
    return r == null ? !1 : r.online;
  }
  _rab99fafd046469() {
    let e = [];
    for (let r of this._r46f899024b0eee.values()) e.push(r.name);
    return e;
  }
  get view() {
    return this.var_630.view;
  }
  get deps() {
    return this.var_630;
  }
}
