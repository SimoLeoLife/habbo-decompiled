// Estratto da HabboAirLauncher.deobf.js, riga 328878.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/class_3320.as
// Nome offuscato: _if8669f2118a79c

class {
  static {
    n(this, "class_3320");
  }
  _disposed = !1;
  _container = null;
  var_17 = null;
  get disposed() {
    return this._disposed;
  }
  get type() {
    return RoomWidgetEnum.const_65;
  }
  set widget(e) {
    this.var_17 = e;
  }
  set container(e) {
    (this._container?.inventory != null &&
      this._container.inventory.events.removeEventListener?.(HabboInventoryEffectsEvent.const_1391, this._re6ec71615ddf8d),
      (this._container = e),
      this._container?.inventory != null &&
        this._container.inventory.events.addEventListener?.(HabboInventoryEffectsEvent.const_1391, this._re6ec71615ddf8d));
  }
  get container() {
    return this._container;
  }
  dispose() {
    this._disposed || ((this.container = null), (this.var_17 = null), (this._disposed = !0));
  }
  _re6ec71615ddf8d = n((e) => {
    this.var_17?.open();
  }, "_re6ec71615ddf8d");
  _rc3479181526e34() {
    return [RoomWidgetRequestWidgetMessage.REQUEST_EFFECTS];
  }
  _r8f2a14a26f6017() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    if (e == null) return null;
    switch (e.type) {
      case RoomWidgetRequestWidgetMessage.REQUEST_EFFECTS:
        this.var_17?.open();
        break;
    }
    return null;
  }
  _r9b1b0209eb1b5a(e) {}
  update() {}
}
