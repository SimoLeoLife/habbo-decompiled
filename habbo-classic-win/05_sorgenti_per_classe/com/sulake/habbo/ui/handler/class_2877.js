// Extracted from HabboAirLauncher.deobf.js, line 329079.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/ui/handler/class_2877.as
// Obfuscated name: _i257ef750370511

class {
  static {
    n(this, "class_2877");
  }
  var_1271 = !1;
  _container = null;
  var_17 = null;
  get disposed() {
    return this.var_1271;
  }
  get type() {
    return RoomWidgetEnum.FRIEND_FURNI_ENGRAVING;
  }
  get container() {
    return this._container;
  }
  set container(e) {
    this._container = e;
  }
  set widget(e) {
    this.var_17 = e;
  }
  dispose() {
    ((this.var_1271 = !0), (this._container = null), (this.var_17 = null));
  }
  _r8f2a14a26f6017() {
    return [RoomEngineToWidgetEvent.REQUEST_FRIEND_FURNITURE_ENGRAVING];
  }
  _r9b1b0209eb1b5a(e) {
    if (!(this.disposed || e == null))
      switch (e.type) {
        case RoomEngineToWidgetEvent.REQUEST_FRIEND_FURNITURE_ENGRAVING: {
          let r = e,
            t = this._container?.roomEngine?._ra1f5cb56d0c2d8(r.roomId, r.objectId, r.category);
          if (t != null) {
            let i = t.getStringToStringMap();
            if (i != null) {
              let s = new ao();
              (s._r8476f6049cdad6(i),
                this.var_17?.open(t.getId(), i._ra3dc9a405b5c73(RoomObjectVariableEnum.FURNITURE_FRIENDFURNI_ENGRAVING_TYPE), s));
            }
          }
          break;
        }
      }
  }
  update() {}
  _rc3479181526e34() {
    return [];
  }
  RoomWidgetLetUserInMessage(e) {
    return null;
  }
}
