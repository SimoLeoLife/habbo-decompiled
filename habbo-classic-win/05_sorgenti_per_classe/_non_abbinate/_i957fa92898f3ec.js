// Estratto da HabboAirLauncher.deobf.js, riga 330193.

class {
  static {
    n(this, "_i957fa92898f3ec");
  }
  var_1271 = !1;
  _container = null;
  var_344 = -1;
  _name = "";
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_ECOTRONBOX_WIDGET;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_ECOTRONBOX_WIDGET, RoomWidgetEcotronBoxOpenMessage.const_1345];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_ECOTRONBOX_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e,
          i = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category)?.getStringToStringMap();
        if (i == null) return null;
        this.var_344 = r.id;
        let s = i.getString(RoomObjectVariableEnum.FURNITURE_DATA);
        if (s == null) return null;
        let o = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191),
          c = this._container?.sessionDataManager?.getFloorItemData(o)?.className ?? "",
          f =
            (this._container?._r2eac8239a09fe7?.isRoomOwner ?? !1) ||
            (this._container?.sessionDataManager?.isAnyRoomController ?? !1);
        this._container?.events?.dispatchEvent?.(new RoomWidgetEcotronBoxDataUpdateEvent(RoomWidgetEcotronBoxDataUpdateEvent.UPDATE_PACKAGEINFO, r.id, s, c, f));
        break;
      }
      case RoomWidgetEcotronBoxOpenMessage.const_1345: {
        if (!(e instanceof RoomWidgetEcotronBoxOpenMessage)) break;
        let r = e;
        if (r.objectId !== this.var_344) return null;
        this._container?._r2eac8239a09fe7?._r49fac7bf5a9e98(r.objectId);
        break;
      }
    }
    return null;
  }
  imageReady(e, r) {
    this.disposed ||
      this._container?.events?.dispatchEvent?.(new RoomWidgetEcotronBoxDataUpdateEvent(RoomWidgetEcotronBoxDataUpdateEvent.const_128, 0, this._name, "", !1, r));
  }
  imageFailed(e) {}
  _r8f2a14a26f6017() {
    return [RoomSessionPresentEvent.ROOM_SESSION_PRESENT_OPENED];
  }
  _r9b1b0209eb1b5a(e) {
    if (e.type !== RoomSessionPresentEvent.ROOM_SESSION_PRESENT_OPENED || this._container?.events == null) return;
    let r = e,
      t = null,
      i = null;
    ((this._name = ""),
      r.itemType === "s"
        ? ((t = this._container.roomEngine?._r65a31a885a1252(r.classId, this)),
          (i = this._container.sessionDataManager?.getFloorItemData(r.classId)))
        : r.itemType === "i" &&
          ((t = this._container.roomEngine?.getWallItemDataByName(r.classId, this)),
          (i = this._container.sessionDataManager?.getWallItemData(r.classId))),
      i != null && (this._name = i.localizedName),
      t != null &&
        this._container.events.dispatchEvent?.(new RoomWidgetEcotronBoxDataUpdateEvent(RoomWidgetEcotronBoxDataUpdateEvent.const_128, 0, this._name, "", !1, t.data)));
  }
  update() {}
}
