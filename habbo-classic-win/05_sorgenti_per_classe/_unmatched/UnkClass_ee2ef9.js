// Extracted from HabboAirLauncher.deobf.js, line 333377.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _iee2ef9c53a9ddd

class {
  static {
    n(this, "UnkClass_ee2ef9");
  }
  _container = null;
  var_1271 = !1;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.USER_CHOOSER;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetRequestWidgetMessage.REQUEST_USER_CHOOSER, RoomWidgetRoomObjectMessage.const_1117];
  }
  isChooserDisabled() {
    return this._container?.roomEngine?._rb908be66c6903d ?? !1;
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null || this._container == null) return null;
    switch (e.type) {
      case RoomWidgetRequestWidgetMessage.REQUEST_USER_CHOOSER:
        this._rf132e6bae27b64();
        break;
      case RoomWidgetRoomObjectMessage.const_1117: {
        if (!(e instanceof RoomWidgetRoomObjectMessage)) break;
        let r = e;
        r.category === RoomObjectCategoryEnum.OBJECT_CATEGORY_USER &&
          this._container.roomEngine?._r5def02e220e83a(
            this._container._r2eac8239a09fe7?.roomId ?? 0,
            r.id,
            r.category,
          );
        break;
      }
    }
    return null;
  }
  _rcd7ff8f3cc8f50(e, r) {
    return e == null || r == null || e.name === r.name || e.name.length === 0 || r.name.length === 0
      ? 1
      : [e.name.toUpperCase(), r.name.toUpperCase()].sort().indexOf(e.name.toUpperCase()) === 0
        ? -1
        : 1;
  }
  _rf132e6bae27b64() {
    if (
      this._container?._r2eac8239a09fe7 == null ||
      this._container.roomEngine == null ||
      this._container._r2eac8239a09fe7.getUserDataByIndex == null
    )
      return;
    let e = this._container._r2eac8239a09fe7.roomId,
      r = [],
      t = this._container.roomEngine.getRoomObjectCount(e, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
    for (let i = 0; i < t; i += 1) {
      let s = this._container.roomEngine.getRoomObjectWithIndex(e, i, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER);
      if (s == null) continue;
      let o = this._container._r2eac8239a09fe7.getUserDataByIndex.userDataManager(s.getId());
      o != null && r.push(new ChooserItem(o._r2fdf1f24b1e612, RoomObjectCategoryEnum.OBJECT_CATEGORY_USER, o.name, null, o.type));
    }
    (r.sort((i, s) => this._rcd7ff8f3cc8f50(i, s)),
      this._container.events?.dispatchEvent?.(new RoomWidgetChooserContentEvent(RoomWidgetChooserContentEvent.USER_CHOOSER_CONTENT, r)));
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
