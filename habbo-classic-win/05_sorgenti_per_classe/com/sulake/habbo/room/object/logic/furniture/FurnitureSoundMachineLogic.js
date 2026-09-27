// Estratto da HabboAirLauncher.deobf.js, riga 300802.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureSoundMachineLogic.as
// Nome offuscato: _i3267fa15a4e78d

class extends _ieead78a21202a2 {
  static {
    n(this, "FurnitureSoundMachineLogic");
  }
  _r143fa87cdecfa5 = !1;
  var_217 = !1;
  var_2475 = -1;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectFurnitureActionEvent.SOUND_MACHINE_START,
      RoomObjectFurnitureActionEvent.SOUND_MACHINE_STOP,
      RoomObjectFurnitureActionEvent.SOUND_MACHINE_DISPOSE,
      RoomObjectFurnitureActionEvent.SOUND_MACHINE_INIT,
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
        (this.var_217 || this._rbc6c6d54772e95(), !(e instanceof _i39f7ecd6ab9902)))
    )
      return;
    let r = this.object.getState(0);
    r !== this.var_2475 &&
      ((this.var_2475 = r), r === 1 ? this.requestPlayList() : r === 0 && this.requestStopPlaying());
  }
  _rbc6c6d54772e95() {
    this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      ((this._r143fa87cdecfa5 = !0),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.SOUND_MACHINE_INIT, this.object)),
      (this.var_217 = !0));
  }
  requestPlayList() {
    this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      ((this._r143fa87cdecfa5 = !0),
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.SOUND_MACHINE_START, this.object)));
  }
  requestStopPlaying() {
    this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.SOUND_MACHINE_STOP, this.object));
  }
  requestDispose() {
    !this._r143fa87cdecfa5 ||
      this.object == null ||
      this._r11e12b4ff1ca8e == null ||
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectFurnitureActionEvent(RoomObjectFurnitureActionEvent.SOUND_MACHINE_DISPOSE, this.object));
  }
}
