// Estratto da HabboAirLauncher.deobf.js, riga 332210.

class {
  static {
    n(this, "_ida8978e04d483c");
  }
  var_1271 = !1;
  var_17 = null;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  dispose() {
    this.var_1271 || ((this.container = null), (this.var_1271 = !0));
  }
  get type() {
    return RoomWidgetEnum.MANNEQUIN;
  }
  set widget(e) {
    this.var_17 = e;
  }
  get container() {
    return this._container;
  }
  set container(e) {
    this._container = e;
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_MANNEQUIN];
  }
  _r9b1b0209eb1b5a(e) {
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_MANNEQUIN: {
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category),
          i = t?.getStringToStringMap(),
          s = i?.getString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_FIGURE) ?? null,
          o = i?.getString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_GENDER) ?? null,
          d = i?.getString(RoomObjectVariableEnum.FURNITURE_MANNEQUIN_NAME) ?? "";
        s != null && o != null && this.var_17?.open(t?.getId() ?? r.objectId, s, o, d);
        break;
      }
    }
  }
  update() {}
}
