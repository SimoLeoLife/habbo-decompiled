// Estratto da HabboAirLauncher.deobf.js, riga 328557.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/CraftingWidgetHandler.as
// Nome offuscato: _i76099cd02223e2

class {
  constructor(e) {
    this.var_1263 = e;
  }
  static {
    n(this, "CraftingWidgetHandler");
  }
  _disposed = !1;
  _container = null;
  var_17 = null;
  _messageEvents = null;
  _r9fe271dc5e4639 = null;
  _r3937e2bef147fa = -1;
  _r2d3b7e89c486fa = !1;
  _rd912b9ebf91ce9 = !1;
  _r33f3654eed3cca = !1;
  var_3379 = null;
  var_2527 = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.CRAFTING;
  }
  get _r15b2ea2c393fea() {
    return this.var_1263;
  }
  set _r15b2ea2c393fea(e) {
    this.var_1263 = e;
  }
  set container(e) {
    (this.removeMessageEvents(),
      (this._container = e),
      this._r7a5132a0911745(),
      this._container?.inventory?.events?.addEventListener?.(Vy.const_506, this._rce290efe88d2bd));
  }
  get container() {
    return this._container;
  }
  set widget(e) {
    this.var_17 = e;
  }
  dispose() {
    this._disposed ||
      (this.removeMessageEvents(),
      (this.var_17 = null),
      (this._container = null),
      (this.var_1263 = null),
      (this.var_3379 = null),
      (this.var_2527 = null),
      (this._disposed = !0));
  }
  _r7a5132a0911745() {
    if (this._container?.connection != null) {
      this._messageEvents = [
        new _ie8c30e3f7339c9(this._rbd67862b0f8c28),
        new _ibd224616b4ce29(this._r60c39cb1ff4995),
        new class_2703(this._rb7833db035f2a8),
        new _i37d86de6645bc1(this._r7e26569a916469),
      ];
      for (let e of this._messageEvents) this._container.connection.addMessageEvent(e);
    }
  }
  removeMessageEvents() {
    if (this._container?.connection != null && this._messageEvents != null)
      for (let e of this._messageEvents) (this._container.connection.removeMessageEvent(e), e.dispose());
    (this._re3ea3eb2a306be(),
      this._container?.inventory?.events?.removeEventListener?.(Vy.const_506, this._rce290efe88d2bd),
      (this._messageEvents = null));
  }
  initializeData() {
    this._r2d3b7e89c486fa ||
      ((this._r2d3b7e89c486fa = !0),
      this._container?.inventory?._r9fc90ede19317b(class_2106.FURNITURE) && this._r45a4471dc4da6d());
  }
  _rce290efe88d2bd = n((e) => {
    let r = e;
    this._r2d3b7e89c486fa && r?.category === class_2106.FURNITURE && this._r45a4471dc4da6d();
  }, "_rce290efe88d2bd");
  _r45a4471dc4da6d() {
    this._container?.connection?.send(new _ib058384eff53f4(this._r3937e2bef147fa));
  }
  _rbd67862b0f8c28 = n((e) => {
    let t = e.getParser();
    if (((this._r2d3b7e89c486fa = !1), this.var_17 != null)) {
      if (!t._r7e512aa496c54d()) {
        this.var_17.hide();
        return;
      }
      (this.var_17._r988bd8f420d230(),
        this.var_17.showCraftingCategories(
          t._r99dbde3898bd93,
          t._r8c8b3c921da433,
          this._container?.roomEngine ?? null,
          this._container?.sessionDataManager ?? null,
        ),
        (this._rd912b9ebf91ce9 = !1));
    }
  }, "_rbd67862b0f8c28");
  getCraftingRecipe(e, r) {
    this._container?.sessionDataManager == null ||
      e == null ||
      ((this.var_3379 = r != null ? this._container.sessionDataManager.getProductData(r) : null),
      (this.var_2527 = e),
      this._container.connection?.send(new class_3259(e)));
  }
  _r60c39cb1ff4995 = n((e) => {
    let r = e;
    this.var_17?._r556b3abec6f096(r.getParser()._re260ed8e0c1afa);
  }, "_r60c39cb1ff4995");
  _r83815d236b153e(e) {
    this._container?.connection?.send(new _ibfcc88bd37e593(this._r3937e2bef147fa, e));
  }
  _r7e26569a916469 = n((e) => {
    let t = e.getParser();
    this.var_17?._r358ab1645ce8ea?._r54cf4b4cc74722(t.count, t._r6fa48641fcc8cb);
  }, "_r7e26569a916469");
  _rad1c36f2e5c5bd() {
    this.var_3379 == null ||
      this.var_2527 == null ||
      (this.var_17?._r358ab1645ce8ea?.setState(class_2920.STATE_WORKING),
      this._r4c69a15bf77ded(),
      this._container?.connection?.send(new _if914b3161943a3(this._r3937e2bef147fa, this.var_2527)));
  }
  _r086379c6bd0b16() {
    this.var_17?._r358ab1645ce8ea?.setState(class_2920.STATE_WORKING);
    let e = this.var_17?._r3f6ee5b99d3df0() ?? [];
    (this._r4c69a15bf77ded(), this._container?.connection?.send(new _if6b08dd932b8a3(this._r3937e2bef147fa, e)));
  }
  _rb7833db035f2a8 = n((e) => {
    let t = e.getParser();
    if (((this._r33f3654eed3cca = !1), !t.success)) {
      (this.var_17?._ra150f104b5208e(),
        (this._rd912b9ebf91ce9 = !1),
        this._re3ea3eb2a306be(),
        this.var_17?._ra88797d3b195c4(class_2920.const_939));
      return;
    }
    this.var_17?._ra150f104b5208e();
    let i = t.productData;
    if (i == null) return;
    let s = this._container?.sessionDataManager?.getFloorItemDataByName(i.furnitureClassName) ?? null;
    s != null && this.var_17?._ra88797d3b195c4(class_2920.STATE_CRAFTING_RESULT_OK, s);
  }, "_rb7833db035f2a8");
  _r4c69a15bf77ded() {
    ((this._rd912b9ebf91ce9 = !0),
      this._r9fe271dc5e4639 == null &&
        this._container?.connection != null &&
        ((this._r9fe271dc5e4639 = new _i8f6c202c9a982a(this._rd9f559c42aef2f)),
        this._container.connection.addMessageEvent(this._r9fe271dc5e4639)));
  }
  _rd9f559c42aef2f = n((e) => {
    (this._container?.connection?.send(new class_3710()),
      this._container?.connection?.send(new _ib058384eff53f4(this._r3937e2bef147fa)),
      this._re3ea3eb2a306be());
  }, "_rd9f559c42aef2f");
  _re3ea3eb2a306be() {
    this._r9fe271dc5e4639 != null &&
      this._container?.connection != null &&
      (this._container.connection.removeMessageEvent(this._r9fe271dc5e4639), (this._r9fe271dc5e4639 = null));
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
    if (this._container?.roomEngine == null || this.var_17 == null) return;
    let r = e;
    if (r == null) return;
    let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_OPEN_WIDGET:
        if (this.var_17.window != null) return;
        t != null && ((this._r3937e2bef147fa = t.getId()), this.initializeData());
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET:
        ((this._r3937e2bef147fa = -1), this.var_17.hide());
        break;
    }
  }
  get isOwner() {
    let e = this._container?.roomEngine?.activeRoomId ?? 0,
      r = this._container?.roomEngine?._ra1f5cb56d0c2d8(e, this._r3937e2bef147fa, RoomObjectCategoryEnum.OBJECT_CATEGORY_FURNITURE) ?? null;
    return r != null && !!this._container?._rc2337883ff003a(r);
  }
  get _r2292b359576f1e() {
    return this._r33f3654eed3cca;
  }
  set _r2292b359576f1e(e) {
    this._r33f3654eed3cca = e;
  }
  get _r99dbebb17f07b6() {
    return this._rd912b9ebf91ce9;
  }
  update() {}
}
