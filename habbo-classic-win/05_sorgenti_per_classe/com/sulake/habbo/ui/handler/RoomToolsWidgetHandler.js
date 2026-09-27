// Estratto da HabboAirLauncher.deobf.js, riga 333171.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/RoomToolsWidgetHandler.as
// Nome offuscato: _ie5864b61bc82b7

class {
  static {
    n(this, "RoomToolsWidgetHandler");
  }
  _disposed = !1;
  var_17 = null;
  _container = null;
  _navigator = null;
  _r0b7c27277cad1b = null;
  set widget(e) {
    this.var_17 = e;
  }
  get type() {
    return RoomWidgetEnum.ROOM_TOOLS;
  }
  set container(e) {
    if (
      (this._container?.sessionDataManager?.events.removeEventListener?.(
        Kb.const_72,
        this._r729c945b759c35,
      ),
      this._container?.connection != null &&
        this._r0b7c27277cad1b != null &&
        this._container.connection.removeMessageEvent(this._r0b7c27277cad1b),
      (this._container = e),
      (this._navigator = e?.navigator ?? null),
      this._container == null)
    ) {
      this._r0b7c27277cad1b = null;
      return;
    }
    (this._container.sessionDataManager?.events.addEventListener?.(
      Kb.const_72,
      this._r729c945b759c35,
    ),
      (this._r0b7c27277cad1b = new class_2027(this.onRoomInfo)),
      this._container.connection?.addMessageEvent(this._r0b7c27277cad1b));
  }
  get containerRef() {
    return this._container;
  }
  get navigator() {
    return this._navigator;
  }
  get sessionDataManager() {
    return this._container?.sessionDataManager ?? null;
  }
  get disposed() {
    return this._disposed;
  }
  _rc3479181526e34() {
    return [pm.const_85];
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
    ((this._disposed = !0),
      this._container?.connection != null &&
        this._r0b7c27277cad1b != null &&
        this._container.connection.removeMessageEvent(this._r0b7c27277cad1b),
      this._container?.sessionDataManager?.events.removeEventListener?.(
        Kb.const_72,
        this._r729c945b759c35,
      ),
      (this._r0b7c27277cad1b = null),
      (this._navigator = null),
      (this.var_17 = null),
      (this._container = null));
  }
  _r865761362c6928() {
    this._navigator?._r2fc1e9a895a4db();
  }
  _r32d169e0ccf735(e) {
    this._navigator?._r32d169e0ccf735(e);
  }
  _r26ff9fd8042368() {
    this._container?.connection?.send(new _i91d8a6f47dd539(1));
  }
  get _r43a02485c61e00() {
    return this._navigator?._r2fec64fe1f887e() ?? !1;
  }
  onRoomInfo = n((e) => {
    let r = ClassUtils.getParser(e, class_2052);
    if (r == null) return;
    let t = r?.data;
    if (
      (t != null && this.var_17?._r2aa8520dadf0bb(t),
      r?._r545a567b7e1354 === !0 && t != null && this.var_17 != null)
    ) {
      let i = t._r6b883803c75d7f
        ? `${this.var_17.localizations?.getLocalizationWithParams("room.tool.room.owner.prefix", "By") ?? "By"} ${t.ownerName}`
        : (this.var_17.localizations?.getLocalizationWithParams("room.tool.public.room", "Public room") ??
          "Public room");
      (this.var_17.showRoomInfo(!0, t.roomName, i, t.tags),
        this.var_17._r8d438559cfbbe4(t),
        this.var_17.enterNewRoom(t.flatId));
    }
  }, "onRoomInfo");
  _r729c945b759c35 = n((e) => {}, "_r729c945b759c35");
}
