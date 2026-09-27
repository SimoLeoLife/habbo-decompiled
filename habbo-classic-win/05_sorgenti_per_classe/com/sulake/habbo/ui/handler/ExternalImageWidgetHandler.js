// Extracted from HabboAirLauncher.deobf.js, line 328928.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/ExternalImageWidgetHandler.as
// Obfuscated name: _i443c847635aa66

class {
  static {
    n(this, "ExternalImageWidgetHandler");
  }
  _disposed = !1;
  _container = null;
  var_17 = null;
  set container(e) {
    this._container = e;
  }
  get container() {
    return this._container;
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
    return [RoomEngineUseProductEvent.USE_PRODUCT_FROM_INVENTORY];
  }
  _r9b1b0209eb1b5a(e) {
    if (this._container?.roomEngine == null) return;
    e instanceof RoomEngineUseProductEvent && e.type === RoomEngineUseProductEvent.USE_PRODUCT_FROM_INVENTORY && this.var_17?._r955a0cc29e2d58(e.objectId);
    let r = e;
    if (r == null) return;
    let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET:
        t != null && this.var_17?._ra56b220b7d53ae(t);
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET:
        this.var_17?.hide();
        break;
    }
  }
  _r6bb1cbe225bc83(e) {
    this._container?.roomEngine?._r8731f36a48353d(e, RoomObjectCategoryEnum.const_909);
  }
  isRoomOwner() {
    return this._container?._r2eac8239a09fe7?.isRoomOwner ?? !1;
  }
  _r323167d04fe54f() {
    return (this._container?._r2eac8239a09fe7?._rea9739215487be ?? 0) >= RoomControllerLevelEnum.ROOM_OWNER;
  }
  _rb13ed3a89b85ae(e) {
    this._container?.connection?.send(e);
  }
  update() {}
  dispose() {
    ((this._container = null), (this.var_17 = null), (this._disposed = !0));
  }
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.EXTERNAL_IMAGE;
  }
  get storiesImageUrlBase() {
    return this._container?.config?.getProperty("stories.image_url_base") ?? "";
  }
  get storiesImageShareUrl() {
    return this._container?.config?.getProperty("stories.image.sharing_url_base") ?? "";
  }
  get extraDataServiceUrl() {
    return this._container?.config?.getProperty("extra_data_service_url") ?? "";
  }
  isSelfieReportingEnabled() {
    return this._container?.config?.getProperty("stories.report.selfie.enabled") === "true";
  }
}
