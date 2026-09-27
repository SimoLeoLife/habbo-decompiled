// Extracted from HabboAirLauncher.deobf.js, line 330636.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/FurnitureRoomLinkHandler.as
// Obfuscated name: _ic55260dbbeb5f1

class a {
  static {
    n(this, "FurnitureRoomLinkHandler");
  }
  static INTERNAL_LINK_KEY = "internalLink";
  _container = null;
  _re33554793bb424 = null;
  _messageEvents = [];
  var_2642 = 0;
  var_933 = null;
  get type() {
    return RoomWidgetEnum.ROOM_LINK;
  }
  set container(e) {
    this._container !== e && (this._r71c4346a186f38(), (this._container = e), this._r2c15b16e6eba6e());
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
    return [RoomEngineToWidgetEvent.REQUEST_ROOM_LINK];
  }
  _r9b1b0209eb1b5a(e) {
    if (e.type !== RoomEngineToWidgetEvent.REQUEST_ROOM_LINK) return;
    let r = e;
    if (this._container?.roomEngine == null) return;
    let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
    if (t == null) return;
    let i = t.getStringToStringMap(),
      s = this.getLink(i);
    s != null &&
      (this._container.navigator != null &&
      this._container.localization != null &&
      this._container.connection != null
        ? (this._re33554793bb424?.dispose(),
          (this._re33554793bb424 = null),
          (this.var_933 = s),
          (this.var_2642 = Number.parseInt(s, 10)),
          this._container.connection.send(new class_2142(this.var_2642, !1, !1)))
        : this._r54d4d202beb376(s));
  }
  update() {}
  dispose() {
    (this._r71c4346a186f38(),
      this._re33554793bb424?.dispose(),
      (this._re33554793bb424 = null),
      (this._container = null),
      (this.var_933 = null),
      (this.var_2642 = 0));
  }
  _r2c15b16e6eba6e() {
    if (this._container?.connection == null) return;
    let e = new class_2027(this.onRoomInfo);
    (this._container.connection.addMessageEvent(e), this._messageEvents.push(e));
  }
  _r71c4346a186f38() {
    if (this._container?.connection != null)
      for (let e of this._messageEvents) this._container.connection.removeMessageEvent(e);
    this._messageEvents = [];
  }
  getLink(e) {
    if (e == null) return null;
    let r = e._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA)?.getValue(a.INTERNAL_LINK_KEY) ?? null;
    return (
      (r == null || r.length === 0) && (r = e.getString(RoomObjectVariableEnum.const_144)),
      r == null || r.length === 0 ? null : r
    );
  }
  onRoomInfo = n((e) => {
    let r = ClassUtils.getParser(e, class_2052);
    if (r == null) return;
    let t = r.data;
    if (t == null || t.flatId !== this.var_2642 || this._container == null) return;
    this.var_2642 = 0;
    let i =
      this._container.localization?.getLocalization("room.link.confirmation.message") ??
      "${room.link.confirmation.message}";
    (i.indexOf("%%room_name%%") > -1 && (i = i.replace("%%room_name%%", t.roomName)),
      i.indexOf("%%room_owner%%") > -1 && (i = i.replace("%%room_owner%%", t.ownerName)),
      (this._re33554793bb424 =
        this._container.windowManager?.confirm(
          "${room.link.confirmation.title}",
          i,
          HabboAlertDialogFlag.const_427 | HabboAlertDialogFlag.const_688,
          this._racac9590a6d2cc,
        ) ?? null));
  }, "onRoomInfo");
  _racac9590a6d2cc = n((e, r) => {
    e == null ||
      e.disposed ||
      (e.dispose(),
      (this._re33554793bb424 = null),
      r.type === y.const_1300 &&
        this.var_933 != null &&
        this.var_933.length > 0 &&
        this._r54d4d202beb376(this.var_933));
  }, "_racac9590a6d2cc");
  _r54d4d202beb376(e) {
    this._container?.roomEngine != null &&
      this._container.roomEngine.context._r6b6c989018eb05(`navigator/goto/${e}`);
  }
}
