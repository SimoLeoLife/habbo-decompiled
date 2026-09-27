// Estratto da HabboAirLauncher.deobf.js, riga 216560.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/friendlist/class_3626.as
// Nome offuscato: _i0739d382225a0b

class {
  static {
    n(this, "class_3626");
  }
  _friendList = null;
  var_122 = null;
  _re98a4650ac9b58 = null;
  var_4014 = null;
  init(e) {
    this._friendList = e;
  }
  _r3bccd06cf0fd7b() {
    return this._friendList?.friendRequests._rf97e254fea641d() ?? 0;
  }
  fillFooter(e) {
    ((this._re98a4650ac9b58 = e.findChildByName("accept_all_but")),
      (this.var_4014 = e.findChildByName("reject_all_but")),
      this.var_4014 != null && (this.var_4014.procedure = this._r07a9c1720ec1f5.bind(this)),
      this._re98a4650ac9b58 != null && (this._re98a4650ac9b58.procedure = this._rbd958fafd00bb4.bind(this)),
      this.refreshButtons());
  }
  _r8f8aa0d6774800(e) {
    this.var_122 = e;
    let r = this._friendList?.friendRequests.requests ?? [];
    for (let t of r)
      (this.getRequestEntry(t), this.refreshRequestEntry(t), t.view != null && e.addListItem(t.view));
    this._friendList?.friendRequests.refreshShading();
  }
  _r8ea31888f115fd(e) {
    this.var_122 != null && this._friendList?.friendRequests._rfba60cd726e045(!0);
  }
  refreshShading(e, r) {
    this.var_122 == null ||
      this._friendList == null ||
      e.view == null ||
      ((e.view.color = this._friendList._r6dce2f14add5ec._rc2e3809e8c04e6(_ia4c17117df4f10._rfadb4d8e33d276, r)),
      this.setButtonBg(e.view, "reject"),
      this.setButtonBg(e.view, "accept"));
  }
  refreshRequestEntry(e) {
    if (this.var_122 == null || this._friendList == null || e.view == null) return;
    let r = e.view;
    Util.hideChildren(r);
    let t = r.findChildByName("bg_region");
    t != null &&
      ((t.visible = !0), (t.procedure = this.onEntry.bind(this)), (t.id = e.requesterUserId));
    let i = r.findChildByName("user_info_region");
    (i != null && (i.visible = !0),
      Io.setUserInfoState(!1, r),
      this._friendList.refreshText(r, "requester_name_text", !0, e._r19234559776703),
      e.state === Po.STATE_OPEN
        ? (this._friendList.refreshIcon(
            r,
            "accept",
            !0,
            this._r710d9eae0f37d1.bind(this),
            e.requestId,
          ),
          this._friendList.refreshIcon(
            r,
            "reject",
            !0,
            this.onDeclineButtonClick.bind(this),
            e.requestId,
          ))
        : e.state === Po.STATE_ACCEPTED
          ? this._friendList.refreshText(r, "info_text", !0, "${friendlist.request.accepted}")
          : e.state === Po.STATE_DECLINED
            ? this._friendList.refreshText(r, "info_text", !0, "${friendlist.request.declined}")
            : e.state === Po.STATE_FAILED &&
              this._friendList.refreshText(r, "info_text", !0, "${friendlist.request.failed}"));
  }
  _r2513a3d4c4957f(e) {
    this.var_122 != null &&
      (this.getRequestEntry(e),
      this.refreshRequestEntry(e),
      e.view != null && this.var_122.addListItem(e.view),
      this._friendList?.friendRequests.refreshShading(),
      this.refreshButtons());
  }
  _r96e1219e2390cb(e) {
    this.var_122 == null ||
      e.view == null ||
      (this.var_122.removeListItem(e.view), this.refreshButtons());
  }
  acceptRequest(e) {
    let r = this._friendList?.friendRequests._r878647e1c0612e(e) ?? null;
    if (r == null || this._friendList == null) return;
    if (
      ((r.state = Po.STATE_ACCEPTED),
      this._friendList.categories.getFriendCount(!1) >= this._friendList.friendRequests.limit)
    ) {
      this._friendList.showLimitReachedAlert();
      return;
    }
    let t = new class_3778();
    (t.addAcceptedRequest(r.requestId),
      this._friendList.send(t),
      this.refreshRequestEntry(r),
      this.refresh(),
      this._friendList.events.dispatchEvent(new FriendRequestEvent(FriendRequestEvent.ACCEPTED, e)));
  }
  acceptAllRequests() {
    if (this._friendList == null) return;
    if (
      this._friendList.categories.getFriendCount(!1) +
        this._friendList.friendRequests.requests.length >
      this._friendList.friendRequests.limit
    ) {
      this._friendList.showLimitReachedAlert();
      return;
    }
    let e = new class_3778();
    for (let r of this._friendList.friendRequests.requests)
      r.state !== Po.STATE_ACCEPTED &&
        r.state !== Po.STATE_DECLINED &&
        (e.addAcceptedRequest(r.requestId),
        (r.state = Po.STATE_ACCEPTED),
        this.refreshRequestEntry(r),
        this._friendList.events.dispatchEvent(new FriendRequestEvent(FriendRequestEvent.ACCEPTED, r.requestId)));
    (this._friendList.send(e), this.refresh());
  }
  declineRequest(e) {
    let r = this._friendList?.friendRequests._r878647e1c0612e(e) ?? null;
    if (r == null || this._friendList == null) return;
    r.state = Po.STATE_DECLINED;
    let t = new class_3207();
    (t.addDeclinedRequest(e),
      this._friendList.send(t),
      this.refreshRequestEntry(r),
      this.refresh(),
      this._friendList.events.dispatchEvent(new FriendRequestEvent(FriendRequestEvent.DECLINED, e)));
  }
  declineAllRequests() {
    if (this._friendList == null) return;
    let e = new class_3207();
    this._friendList.send(e);
    for (let r of this._friendList.friendRequests.requests)
      r.state !== Po.STATE_ACCEPTED &&
        r.state !== Po.STATE_DECLINED &&
        ((r.state = Po.STATE_DECLINED),
        this.refreshRequestEntry(r),
        this._friendList.events.dispatchEvent(new FriendRequestEvent(FriendRequestEvent.DECLINED, r.requestId)));
    this.refresh();
  }
  setButtonBg(e, r) {
    let t = e.findChildByName(r);
    t != null && (t.color = e.color);
  }
  getRequestEntry(e) {
    let r = this._friendList?.getXmlWindow("friend_request_entry");
    r != null && (e.view = r);
  }
  _r710d9eae0f37d1(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.accept}"),
      e.type === u.CLICK && this.acceptRequest(r.id));
  }
  onDeclineButtonClick(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.decline}"),
      e.type === u.CLICK && this.declineRequest(r.id));
  }
  onEntry(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${infostand.profile.link.tooltip}"),
      Io.onEntry(e, r),
      e.type === u.CLICK &&
        this._friendList != null &&
        (this._friendList.trackGoogle("extendedProfile", "friendList_friendRequests"),
        this._friendList.send(new class_2134(r.id))));
  }
  _r07a9c1720ec1f5(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.declineall}"),
      e.type === u.CLICK && this.declineAllRequests());
  }
  _rbd958fafd00bb4(e, r) {
    (this._friendList?.view._r8b0a1f4ed09a31(e, "${friendlist.tip.acceptall}"),
      e.type === u.CLICK && this.acceptAllRequests());
  }
  refresh() {
    this.refreshButtons();
  }
  refreshButtons() {
    let e = (this._friendList?.friendRequests._rf97e254fea641d() ?? 0) > 0;
    (this._rf075e1a10c68ec(this._re98a4650ac9b58, e), this._rf075e1a10c68ec(this.var_4014, e));
  }
  _rf075e1a10c68ec(e, r) {
    e != null && (r ? e.enable() : e.disable());
  }
}
