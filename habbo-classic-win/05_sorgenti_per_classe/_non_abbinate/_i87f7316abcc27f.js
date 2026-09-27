// Estratto da HabboAirLauncher.deobf.js, riga 328513.

class {
  static {
    n(this, "_i87f7316abcc27f");
  }
  var_1271 = !1;
  _container = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.CONVERSION_TRACKING;
  }
  set container(e) {
    this._container = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null));
  }
  _rc3479181526e34() {
    return [RoomWidgetConversionPointMessage.const_534];
  }
  RoomWidgetLetUserInMessage(e) {
    switch (e.type) {
      case RoomWidgetConversionPointMessage.const_534: {
        let r = e instanceof RoomWidgetConversionPointMessage ? e : null;
        if (r == null) return null;
        this._container?._r2eac8239a09fe7?.sendConversionPoint(
          r.category,
          r._ra2bcef9f38acce,
          r.action,
          r._r7d70ec716ad48a,
          r._r5002f054757d5a,
        );
        break;
      }
    }
    return null;
  }
  _r8f2a14a26f6017() {
    return [];
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
