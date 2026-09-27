// Estratto da HabboAirLauncher.deobf.js, riga 330859.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/class_3348.as
// Nome offuscato: _if7bc470a5ba277

class a {
  static {
    n(this, "class_3348");
  }
  static VIDEO_ID_KEY = "videoId";
  _container = null;
  var_17 = null;
  get type() {
    return RoomWidgetEnum.VIMEO;
  }
  set container(e) {
    this._container = e;
  }
  get container() {
    return this._container;
  }
  get disposed() {
    return this._container == null;
  }
  set widget(e) {
    this.var_17 = e;
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET, RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET];
  }
  _r9b1b0209eb1b5a(e) {
    let r = e;
    if (r == null || this._container?.roomEngine == null) return;
    let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET:
        if (t != null) {
          let i = t.getStringToStringMap()?._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA) ?? null,
            s = Number(i?.getValue(a.VIDEO_ID_KEY) ?? 0);
          this.var_17?.show(t, !1, Number.isFinite(s) ? s : 0);
        }
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET:
        this.var_17?.hide(t);
        break;
    }
  }
  update() {}
  dispose() {
    this.disposed || ((this._container = null), (this.var_17 = null));
  }
}
