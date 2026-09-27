// Estratto da HabboAirLauncher.deobf.js, riga 330744.

class {
  static {
    n(this, "_ia988f6899b904d");
  }
  var_1271 = !1;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_STICKIE_WIDGET;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_STICKIE_WIDGET, RoomWidgetStickieSendUpdateMessage.const_766, RoomWidgetStickieSendUpdateMessage.const_216];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_STICKIE_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category),
          i = t?.getStringToStringMap();
        if (i == null || t == null) return null;
        let s = i.getString(RoomObjectVariableEnum.FURNITURE_ITEMDATA);
        if (s.length < 6) return null;
        let o = s,
          d = "",
          c = s.indexOf(" ");
        c > 0 && ((o = s.slice(0, c)), (d = s.slice(c + 1)));
        let f =
          (this._container?._r2eac8239a09fe7?.isRoomOwner ?? !1) ||
          (this._container?.sessionDataManager?.isAnyRoomController ?? !1);
        this._container?.events?.dispatchEvent?.(new RoomWidgetStickieDataUpdateEvent(RoomWidgetStickieDataUpdateEvent.UPDATE_STICKIE_DATA, r.id, t.getType(), d, o, f));
        break;
      }
      case RoomWidgetStickieSendUpdateMessage.const_216: {
        if (!(e instanceof RoomWidgetStickieSendUpdateMessage)) break;
        let r = e;
        this._container?.roomEngine?._r4096b94e274999(
          r.objectId,
          RoomObjectCategoryEnum.const_909,
          r._r90e16a8c48c219,
          r.text,
        );
        break;
      }
      case RoomWidgetStickieSendUpdateMessage.const_766: {
        if (!(e instanceof RoomWidgetStickieSendUpdateMessage)) break;
        let r = e;
        this._container?.roomEngine?._r8731f36a48353d(r.objectId, RoomObjectCategoryEnum.const_909);
        break;
      }
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
