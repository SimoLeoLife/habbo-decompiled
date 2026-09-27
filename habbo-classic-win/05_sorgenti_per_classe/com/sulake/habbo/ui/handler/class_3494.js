// Extracted from HabboAirLauncher.deobf.js, line 330270.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/class_3494.as
// Obfuscated name: _iab13b3950b1b8f

class a {
  static {
    n(this, "class_3494");
  }
  static INTERNAL_LINK_KEY = "internalLink";
  _container = null;
  get type() {
    return RoomWidgetEnum.INTERNAL_LINK;
  }
  set container(e) {
    this._container = e;
  }
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_INTERNAL_LINK];
  }
  _r9b1b0209eb1b5a(e) {
    switch (e.type) {
      case RoomEngineToWidgetEvent.REQUEST_INTERNAL_LINK: {
        let r = e;
        if (r == null || this._container?.roomEngine == null) return;
        let t = this._container.roomEngine._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
        if (t == null) return;
        let i = t.getStringToStringMap();
        if (i == null) return;
        let o = i._r51b8bfd516ad9d(RoomObjectVariableEnum.FURNITURE_DATA)?.getValue(a.INTERNAL_LINK_KEY) ?? null;
        ((o == null || o.length === 0) && (o = i.getString(RoomObjectVariableEnum.const_144)),
          o != null && o.length > 0 && this._container.roomEngine.context._r6b6c989018eb05(o));
        break;
      }
    }
  }
  update() {}
  dispose() {
    this._container = null;
  }
  get disposed() {
    return this._container == null;
  }
}
