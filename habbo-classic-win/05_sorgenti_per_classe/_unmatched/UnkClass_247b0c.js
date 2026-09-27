// Extracted from HabboAirLauncher.deobf.js, line 330529.
// Placeholder name: no AIR 15 match was found, the original name is unknown.
// Obfuscated name: _i247b0ca1f6c5a5

class {
  static {
    n(this, "UnkClass_247b0c");
  }
  _container = null;
  var_17 = null;
  _r3f0623418ada70 = null;
  _rd1c0454f9512e6 = null;
  _r857f9e55434816 = null;
  get type() {
    return RoomWidgetEnum.RENTABLESPACE;
  }
  set widget(e) {
    this.var_17 = e;
  }
  set container(e) {
    (this.removeMessageEvents(),
      (this._container = e),
      this._container?.connection != null &&
        ((this._r3f0623418ada70 = new class_2700(this._r51cc968ed51c7a)),
        this._container.connection.addMessageEvent(this._r3f0623418ada70),
        (this._rd1c0454f9512e6 = new class_2387(this._r44ca8c7c2f6d26)),
        this._container.connection.addMessageEvent(this._rd1c0454f9512e6),
        (this._r857f9e55434816 = new class_3021(this._r056f84ff3b32d4)),
        this._container.connection.addMessageEvent(this._r857f9e55434816)));
  }
  get container() {
    return this._container;
  }
  get disposed() {
    return this._container == null;
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
        t != null && this.var_17?.show(t);
        break;
      case RoomEngineToWidgetEvent.REQUEST_CLOSE_WIDGET:
        this.var_17?.hide(t);
        break;
    }
  }
  update() {}
  dispose() {
    this.disposed || (this.removeMessageEvents(), (this._container = null));
  }
  _r1669dc743860b4(e) {
    this._container?.connection?.send(new UnkMessageComposer_1args_119583(e));
  }
  _rfc8afddbd2d10c(e) {
    this._container?.connection?.send(new UnkMessageComposer_1args_8ad390(e));
  }
  _rc9b335a0fef7a4(e) {
    this._container?.connection?.send(new UnkMessageComposer_1args_7007e8(e));
  }
  _rfd984c4ae7ebf0() {
    return this._container?.sessionDataManager?.clubLevel ?? 0;
  }
  _r229f1246af5ab2() {
    return this._container?.catalog?.getPurse().credits ?? 0;
  }
  _r44ca8c7c2f6d26 = n((e) => {
    this.var_17?.updateWidgetState();
  }, "_r44ca8c7c2f6d26");
  _r056f84ff3b32d4 = n((e) => {
    let r = e.getParser();
    this.var_17?.showErrorView(r.reason);
  }, "_r056f84ff3b32d4");
  _r51cc968ed51c7a = n((e) => {
    let r = e.getParser();
    this.var_17?.populateRentInfo(
      r._r60165b0677617a,
      r._rb507cf904a1d48,
      r._r2bdde5f2e1ce0c,
      r.renterId,
      r._r8995cb8f6716b5,
      r.timeRemaining,
      r.price,
    );
  }, "_r51cc968ed51c7a");
  removeMessageEvents() {
    if (this._container?.connection == null) {
      ((this._r3f0623418ada70 = null), (this._rd1c0454f9512e6 = null), (this._r857f9e55434816 = null));
      return;
    }
    (this._r3f0623418ada70 != null &&
      (this._container.connection.removeMessageEvent(this._r3f0623418ada70), (this._r3f0623418ada70 = null)),
      this._rd1c0454f9512e6 != null &&
        (this._container.connection.removeMessageEvent(this._rd1c0454f9512e6),
        (this._rd1c0454f9512e6 = null)),
      this._r857f9e55434816 != null &&
        (this._container.connection.removeMessageEvent(this._r857f9e55434816),
        (this._r857f9e55434816 = null)));
  }
}
