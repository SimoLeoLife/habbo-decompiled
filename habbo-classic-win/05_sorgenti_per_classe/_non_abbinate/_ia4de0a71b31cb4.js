// Estratto da HabboAirLauncher.deobf.js, riga 330811.

class {
  static {
    n(this, "_ia4de0a71b31cb4");
  }
  var_1271 = !1;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FURNI_TROPHY_WIDGET;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_TROPHY_WIDGET];
  }
  RoomWidgetLetUserInMessage(e) {
    if (this.disposed || e == null) return null;
    switch (e.type) {
      case RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_TROPHY_WIDGET: {
        if (!(e instanceof RoomWidgetFurniToWidgetMessage)) break;
        let r = e,
          i = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.id, r.category)?.getStringToStringMap();
        if (i == null) return null;
        let s = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_167),
          o = i.getString(RoomObjectVariableEnum.FURNITURE_DATA),
          d = Number.parseInt(i.getString(RoomObjectVariableEnum.FURNITURE_EXTRAS), 10),
          c = o.substring(0, o.indexOf("	"));
        o = o.substring(c.length + 1);
        let f = o.substring(0, o.indexOf("	")),
          l = o.substring(f.length + 1);
        this._container?.events?.dispatchEvent?.(new RoomWidgetTrophyDataUpdateEvent(RoomWidgetTrophyDataUpdateEvent.UPDATE_TROPHY_DATA, s, c, f, l, d));
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
