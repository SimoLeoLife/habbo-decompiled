// Extracted from HabboAirLauncher.deobf.js, line 329980.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _id564e63da488c3

class {
  static {
    n(this, "UnkClass_d564e6");
  }
  _container = null;
  var_17 = null;
  _rdabf59255df77b = -1;
  _rc18898862514ca = -1;
  _r4564ad8ea7f3be = Number.NaN;
  set widget(e) {
    this.var_17 = e;
  }
  get type() {
    return RoomWidgetEnum.CUSTOM_STACK_HEIGHT;
  }
  set container(e) {
    (this._container != null && this._container._r6d3762cbc9bcf8(this),
      (this._container = e),
      this._container != null && this._container._red6812ce45e270(this));
  }
  get container() {
    return this._container;
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
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET:
        if (r != null && this._container?.roomEngine != null) {
          ((this._rdabf59255df77b = r.roomId), (this._rc18898862514ca = r.objectId));
          let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
          if (t != null && this._r8f4b8bdb278c04(t)) {
            let i = t.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_191) ?? 0,
              o =
                this.container?.sessionDataManager
                  ?.getFloorItemData(i)
                  ?.className.indexOf("tile_walkmagic") === 0,
              d = (t.getStringToStringMap()?._ra3dc9a405b5c73(RoomObjectVariableEnum.const_1194) ?? 0) === 1,
              c = this._r72245f8fac3ba9(t);
            (this.var_17?.open(this._rc18898862514ca, c, o ?? !1, d), (this._r4564ad8ea7f3be = c));
          }
        }
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET:
        r != null &&
          this._container?.roomEngine != null &&
          this.var_17 != null &&
          this._rc18898862514ca === r.objectId &&
          (this.var_17.hide(), this._r26fc31181e5b9e());
        break;
    }
  }
  update() {
    if (
      this._container == null ||
      this._container.roomEngine == null ||
      this.var_17 == null ||
      this.var_17.mainWindow == null ||
      !this.var_17.mainWindow.visible ||
      this._rdabf59255df77b < 0 ||
      this._rc18898862514ca < 0
    )
      return;
    let e = this._container.roomEngine._ra1f5cb56d0c2d8(
      this._rdabf59255df77b,
      this._rc18898862514ca,
      RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE,
    );
    if (e == null || !this._r8f4b8bdb278c04(e)) return;
    let r = this._r72245f8fac3ba9(e);
    (Number.isNaN(this._r4564ad8ea7f3be) || this._r4564ad8ea7f3be !== r) &&
      ((this._r4564ad8ea7f3be = r), this.var_17._rf215d0fe559649(e.getId(), r));
  }
  dispose() {
    (this._container != null && this._container._r6d3762cbc9bcf8(this),
      this._r26fc31181e5b9e(),
      (this._container = null),
      (this.var_17 = null));
  }
  get disposed() {
    return this._container == null;
  }
  _r72245f8fac3ba9(e) {
    let r = e?.getLocation() ?? null;
    if (r == null) return 0;
    let t = r.z;
    return Number.isNaN(t) ? 0 : t;
  }
  _r8f4b8bdb278c04(e = null) {
    let r = this._container?._r2eac8239a09fe7?.isRoomOwner ?? !1,
      t = (this._container?._r2eac8239a09fe7?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_CONTROLLER,
      i = this._container?.sessionDataManager?.isAnyRoomController ?? !1,
      s = e != null && (this._container?._rc2337883ff003a(e) ?? !1);
    return r || i || t || s;
  }
  _r26fc31181e5b9e() {
    ((this._rdabf59255df77b = -1), (this._rc18898862514ca = -1), (this._r4564ad8ea7f3be = Number.NaN));
  }
}
