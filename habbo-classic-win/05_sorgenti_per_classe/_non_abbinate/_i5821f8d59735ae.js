// Estratto da HabboAirLauncher.deobf.js, riga 328758.

class {
  static {
    n(this, "_i5821f8d59735ae");
  }
  _container = null;
  var_1271 = !1;
  var_17 = null;
  _r7d0372d032287f = null;
  get type() {
    return RoomWidgetEnum.CUSTOM_USER_NOTIFICATION;
  }
  set widget(e) {
    this.var_17 = e;
  }
  set container(e) {
    (this._container?.connection != null &&
      this._r7d0372d032287f != null &&
      this._container.connection.removeMessageEvent(this._r7d0372d032287f),
      (this._container = e),
      this._container?.connection != null &&
        ((this._r7d0372d032287f = new class_3839(this._rd15d986202f967)),
        this._container.connection.addMessageEvent(this._r7d0372d032287f)));
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
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
  dispose() {
    this.disposed ||
      (this._container?.connection != null &&
        this._r7d0372d032287f != null &&
        this._container.connection.removeMessageEvent(this._r7d0372d032287f),
      (this._r7d0372d032287f = null),
      (this.var_17 = null),
      (this._container = null),
      (this.var_1271 = !0));
  }
  get disposed() {
    return this.var_1271;
  }
  _rd15d986202f967 = n((e) => {
    let r = e.getParser().code;
    if (this.var_17 != null)
      switch (r) {
        case 1:
          this.var_17.open(Q1.TYPE_COSTUMEHOPPER);
          break;
        case 2:
          this.var_17.open(Q1.TYPE_VIPHOPPER);
          break;
        case 3:
          this.var_17.open(Q1.const_310);
          break;
        case 4:
          this.var_17.open(Q1.TYPE_RESPECT_VOTE_FAILED_NO_STAGE);
          break;
        case 5:
          this.var_17.open(Q1.const_415);
          break;
      }
  }, "_rd15d986202f967");
}
