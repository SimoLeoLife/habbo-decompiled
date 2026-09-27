// Estratto da HabboAirLauncher.deobf.js, riga 332732.

class {
  static {
    n(this, "_i54e410066cd13f");
  }
  _container = null;
  dispose() {
    this._container = null;
  }
  get disposed() {
    return !1;
  }
  get type() {
    return RoomWidgetEnum.FURNI_PLACEHOLDER_WIDGET;
  }
  set container(e) {
    this._container = e;
  }
  _rc3479181526e34() {
    return [RoomWidgetFurniToWidgetMessage.WIDGET_MESSAGE_REQUEST_PLACEHOLDER_WIDGET];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      default:
        this._container?.events?.dispatchEvent?.(new RoomWidgetShowPlaceholderEvent(RoomWidgetShowPlaceholderEvent.SHOW_PLACEHOLDER));
        break;
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
