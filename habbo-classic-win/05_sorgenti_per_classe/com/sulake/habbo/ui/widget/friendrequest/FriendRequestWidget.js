// Estratto da HabboAirLauncher.deobf.js, riga 314044.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/widget/friendrequest/FriendRequestWidget.as
// Nome offuscato: _i4a4d87dfc39421

class extends RoomWidgetBase {
  static {
    n(this, "FriendRequestWidget");
  }
  var_82;
  _ra75e017568ad17;
  constructor(e, r, t, i, s) {
    (super(e, r, t, i), (this.var_82 = s), (this._ra75e017568ad17 = new B()));
  }
  dispose() {
    if (!this.disposed) {
      if (
        (this.var_82?.removeUpdateReceiver(this),
        (this.var_82 = null),
        this._ra75e017568ad17 != null)
      ) {
        for (let e of this._ra75e017568ad17.getValues()) e?.dispose();
        (this._ra75e017568ad17.dispose(), (this._ra75e017568ad17 = null));
      }
      super.dispose();
    }
  }
  registerUpdateEvents(e) {
    e != null &&
      (e.addEventListener?.(RoomWidgetFriendRequestUpdateEvent.SHOW_FRIEND_REQUEST, this.eventHandler),
      e.addEventListener?.(RoomWidgetFriendRequestUpdateEvent.HIDE_FRIEND_REQUEST, this.eventHandler),
      super.registerUpdateEvents(e));
  }
  unregisterUpdateEvents(e) {
    e != null &&
      (e.removeEventListener?.(RoomWidgetFriendRequestUpdateEvent.SHOW_FRIEND_REQUEST, this.eventHandler),
      e.removeEventListener?.(RoomWidgetFriendRequestUpdateEvent.HIDE_FRIEND_REQUEST, this.eventHandler));
  }
  eventHandler = n((e) => {
    if (e != null) {
      switch (e.type) {
        case RoomWidgetFriendRequestUpdateEvent.SHOW_FRIEND_REQUEST:
          this._r2513a3d4c4957f(e.requestId, new FriendRequestDialog(this, e.requestId, e.userId, e.userName ?? ""));
          break;
        case RoomWidgetFriendRequestUpdateEvent.HIDE_FRIEND_REQUEST:
          this._r96e1219e2390cb(e.requestId);
          break;
      }
      this.checkUpdateNeed();
    }
  }, "eventHandler");
  checkUpdateNeed() {
    this.var_82 != null &&
      (this._ra75e017568ad17 != null && this._ra75e017568ad17.length > 0
        ? this.var_82.registerUpdateReceiver(this, 10)
        : this.var_82.removeUpdateReceiver(this));
  }
  update(e) {
    if (!(this._ra75e017568ad17 == null || this._r1515e6bde00451 == null))
      for (let r of this._ra75e017568ad17.getValues()) {
        if (r == null) continue;
        let t = this._r1515e6bde00451.RoomWidgetLetUserInMessage(
          new RoomWidgetGetObjectLocationMessage(RoomWidgetGetObjectLocationMessage.const_284, r.userId, RoomObjectTypeEnum.OBJECT_TYPE_USER),
        );
        t != null && (r.targetRect = t.rectangle);
      }
  }
  acceptRequest(e) {
    this._r1515e6bde00451 != null &&
      (this._r1515e6bde00451.RoomWidgetLetUserInMessage(new RoomWidgetFriendRequestMessage(RoomWidgetFriendRequestMessage.ACCEPT, e)), this._r96e1219e2390cb(e));
  }
  declineRequest(e) {
    this._r1515e6bde00451 != null &&
      (this._r1515e6bde00451.RoomWidgetLetUserInMessage(new RoomWidgetFriendRequestMessage(RoomWidgetFriendRequestMessage.DECLINE, e)), this._r96e1219e2390cb(e));
  }
  _r523036c1e05a75(e) {
    this._r96e1219e2390cb(e);
  }
  _r2513a3d4c4957f(e, r) {
    this._ra75e017568ad17 == null || r == null || this._ra75e017568ad17.add(e, r);
  }
  _r96e1219e2390cb(e) {
    if (this._ra75e017568ad17 == null) return;
    let r = this._ra75e017568ad17.getValue(e) ?? null;
    r != null && (this._ra75e017568ad17.remove(e), r.dispose(), this.checkUpdateNeed());
  }
  _r44cfd4df9a8991(e, r) {
    this._r1515e6bde00451?.RoomWidgetLetUserInMessage(new RoomWidgetOpenProfileMessage(RoomWidgetOpenProfileMessage.const_1290, e, r));
  }
}
