// Extracted from HabboAirLauncher.deobf.js, line 299906.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureJukeboxLogic.as
// Obfuscated name: _i5b6a182d13dae6

class extends UnkClass_eead78 {
  static {
    n(this, "FurnitureJukeboxLogic");
  }
  _r143fa87cdecfa5 = !1;
  var_217 = !1;
  var_2475 = -1;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectFurnitureActionEvent.const_1240,
      RoomObjectFurnitureActionEvent.const_222,
      RoomObjectFurnitureActionEvent.const_73,
      RoomObjectFurnitureActionEvent.JUKEBOX_INIT,
      RoomObjectWidgetRequestEvent.PLAYLIST_EDITOR,
    ]);
  }
  dispose() {
    (this.requestDispose(), super.dispose());
  }
  processUpdateMessage(e) {
    if (
      (super.processUpdateMessage(e),
      this.object == null ||
        this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) !== 1 ||
        (this.var_217 || this.requestInit(),
        this.object.getModelController().setString(RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM, RoomWidgetInfostandExtraParamEnum.INFOSTAND_EXTRAPARAM_JUKEBOX),
        !(e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec)))
    )
      return;
    let r = this.object.getState(0);
    r !== this.var_2475 &&
      ((this.var_2475 = r), r === 1 ? this.requestPlayList() : r === 0 && this.requestStopPlaying());
  }
  mouseEvent(e, r) {
    if (!(e == null || r == null || this.object == null)) {
      if (e.type === UnkClass_fd7c12.DOUBLE_CLICK) {
        this._rce2b5eb85a79e0();
        return;
      }
      super.mouseEvent(e, r);
    }
  }
  _rce2b5eb85a79e0() {
    this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      (this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.PLAYLIST_EDITOR, this.object)),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectStateChangeEvent(RoomObjectStateChangeEvent.ROOM_OBJECT_STATE_CHANGE, this.object, -1)));
  }
  requestInit() {
    this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      ((this._r143fa87cdecfa5 = !0),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.JUKEBOX_INIT, this.object)),
      (this.var_217 = !0));
  }
  requestPlayList() {
    this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      ((this._r143fa87cdecfa5 = !0),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.const_1240, this.object)));
  }
  requestStopPlaying() {
    this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.const_222, this.object));
  }
  requestDispose() {
    !this._r143fa87cdecfa5 ||
      this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.const_73, this.object));
  }
}
