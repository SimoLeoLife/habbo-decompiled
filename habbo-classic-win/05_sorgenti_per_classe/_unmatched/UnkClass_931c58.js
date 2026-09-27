// Extracted from HabboAirLauncher.deobf.js, line 329197.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i931c587734d43c

class {
  static {
    n(this, "UnkClass_931c58");
  }
  var_1271 = !1;
  var_17 = null;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.AREA_HIDE;
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
    return [RoomEngineToWidgetEvent.REQUEST_AREA_HIDE, D6.UPDATE_STATE_AREA_HIDE];
  }
  _r9b1b0209eb1b5a(e) {
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_AREA_HIDE: {
        if (!this._r8f4b8bdb278c04()) return;
        let r = e,
          t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category),
          i = t?.getStringToStringMap();
        if (t == null || i == null) return;
        let s = t.getState(0) !== 0,
          o = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_449),
          d = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_910),
          c = i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_WIDTH),
          f = i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_LENGTH),
          l = i._ra3dc9a405b5c73(RoomObjectVariableEnum.const_312) === 1,
          b = i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_WALL_ITEMS) === 1,
          _ = i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_AREA_HIDE_INVERT) === 1;
        this.var_17?.open(t.getId(), s, o, d, c, f, l, b, _);
        break;
      }
      case D6.UPDATE_STATE_AREA_HIDE: {
        let r = e;
        this.var_17?._rd77dfeac5f0c52(r.objectId, r.isOn);
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
