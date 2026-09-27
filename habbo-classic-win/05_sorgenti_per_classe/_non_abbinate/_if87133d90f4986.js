// Estratto da HabboAirLauncher.deobf.js, riga 329267.

class {
  static {
    n(this, "_if87133d90f4986");
  }
  var_1271 = !1;
  var_17 = null;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.ROOM_BACKGROUND_COLOR;
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
  dispose() {
    this.var_1271 || ((this.container = null), (this.var_1271 = !0));
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_BACKGROUND_COLOR];
  }
  _r9b1b0209eb1b5a(e) {
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_BACKGROUND_COLOR: {
        if (!this._r8f4b8bdb278c04()) return;
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category),
          i = t?.getStringToStringMap();
        if (t == null || i == null) return;
        let s = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_556),
          o = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_663),
          d = i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_ROOM_BACKGROUND_COLOR_LIGHTNESS);
        this.var_17?.open(t.getId(), s, o, d);
        break;
      }
    }
  }
  update() {}
  _r8f4b8bdb278c04() {
    let e = this._container?._r2eac8239a09fe7 ?? null,
      r = this._container?.sessionDataManager ?? null,
      t = e?.isRoomOwner ?? !1,
      i = (e?._rea9739215487be ?? RoomControllerLevelEnum.NOT_CONTROLLER) >= RoomControllerLevelEnum.ROOM_CONTROLLER,
      s = r?.isAnyRoomController ?? !1;
    return t || s || i;
  }
}
