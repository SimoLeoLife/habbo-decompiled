// Extracted from HabboAirLauncher.deobf.js, line 332559.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i584ed2dff7febe

class {
  static {
    n(this, "UnkClass_584ed2");
  }
  _disposed = !1;
  _container = null;
  dispose() {
    ((this._disposed = !0), (this._container = null));
  }
  get disposed() {
    return this._disposed;
  }
  get type() {
    return "";
  }
  set container(e) {
    this._container = e;
  }
  _rc3479181526e34() {
    return [RoomWidgetGetObjectLocationMessage.const_284, RoomWidgetGetObjectLocationMessage.const_1052];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null || this._container == null) return null;
    let r = e instanceof RoomWidgetGetObjectLocationMessage ? e : null;
    if (r == null) return null;
    let t = this._container._r2eac8239a09fe7,
      i = null,
      s = null,
      o = null;
    switch (e.type) {
      case RoomWidgetGetObjectLocationMessage.const_284: {
        if (t?.getUserDataByIndex == null) return null;
        let d = t.getUserDataByIndex._r0e420e8c38fe10(r.objectId, r.objectType);
        return (
          d != null &&
            ((i =
              this._container.roomEngine?._r37626001a0be81(
                t.roomId,
                d._r2fdf1f24b1e612,
                RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
                this._container.getFirstCanvasId(),
              ) ?? null),
            (s =
              this._container.roomEngine?.getRoomObjectScreenLocation(
                t.roomId,
                d._r2fdf1f24b1e612,
                RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
                this._container.getFirstCanvasId(),
              ) ?? null),
            (o = this._container.getRoomViewRect()),
            i != null && o != null && s != null && (i.offset(o.x, o.y), s.offset(o.x, o.y))),
          new aJ(r.objectId, i, s)
        );
      }
      case RoomWidgetGetObjectLocationMessage.const_1052:
        return t == null
          ? null
          : ((i =
              this._container.roomEngine?._r37626001a0be81(
                t.roomId,
                r.objectId,
                RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
                this._container.getFirstCanvasId(),
              ) ?? null),
            (s =
              this._container.roomEngine?.getRoomObjectScreenLocation(
                t.roomId,
                r.objectId,
                RoomObjectCategoryEnum.OBJECT_CATEGORY_USER,
                this._container.getFirstCanvasId(),
              ) ?? null),
            (o = this._container.getRoomViewRect()),
            i != null && o != null && s != null && (i.offset(o.x, o.y), s.offset(o.x, o.y)),
            new aJ(r.objectId, i, s));
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
