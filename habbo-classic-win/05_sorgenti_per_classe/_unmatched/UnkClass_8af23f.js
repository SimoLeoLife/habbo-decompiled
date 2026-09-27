// Extracted from HabboAirLauncher.deobf.js, line 329133.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i8af23fb20a7d10

class {
  static {
    n(this, "UnkClass_8af23f");
  }
  _disposed = !1;
  _container = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.POLL;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFriendRequestMessage.ACCEPT, RoomWidgetFriendRequestMessage.DECLINE];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null || this._container == null) return null;
    switch (e.type) {
      case RoomWidgetFriendRequestMessage.ACCEPT: {
        let r = e instanceof RoomWidgetFriendRequestMessage ? e : null;
        if (r == null || this._container.friendList == null) return null;
        this._container.friendList._r2261fa54b0d7ce(r.requestId);
        break;
      }
      case RoomWidgetFriendRequestMessage.DECLINE: {
        let r = e instanceof RoomWidgetFriendRequestMessage ? e : null;
        if (r == null || this._container.friendList == null) return null;
        this._container.friendList._r62afd2c361c783(r.requestId);
        break;
      }
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [O8.FRIEND_REQUEST, FriendRequestEvent.ACCEPTED, FriendRequestEvent.DECLINED];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.events == null) return;
    let r = null;
    switch (e.type) {
      case O8.FRIEND_REQUEST: {
        let t = e;
        if (t == null) return;
        r = new RoomWidgetFriendRequestUpdateEvent(RoomWidgetFriendRequestUpdateEvent.SHOW_FRIEND_REQUEST, t.requestId, t.userId, t.userName);
        break;
      }
      case FriendRequestEvent.ACCEPTED:
      case FriendRequestEvent.DECLINED: {
        let t = e;
        if (t == null) return;
        r = new RoomWidgetFriendRequestUpdateEvent(RoomWidgetFriendRequestUpdateEvent.HIDE_FRIEND_REQUEST, t.requestId);
        break;
      }
    }
    r != null && this._container.events.dispatchEvent?.(r);
  }
  update() {}
}
