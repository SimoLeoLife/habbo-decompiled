// Estratto da HabboAirLauncher.deobf.js, riga 299698.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_1863.as
// Nome offuscato: _ife02fee8328419

class a extends _ieead78a21202a2 {
  static {
    n(this, "class_1863");
  }
  static STATE_UNINITIALIZED = -1;
  static STATE_UNLOCKED = 0;
  static STATE_LOCKED = 1;
  state = a.STATE_UNINITIALIZED;
  get _r1acb913b784880() {
    return _icf8611d0b0b385._r09e2b3a379adb1;
  }
  get contextMenu() {
    return this.state === a.STATE_UNLOCKED ? class_3015.FRIEND_FURNITURE : class_3015.DUMMY;
  }
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectWidgetRequestEvent.FRIEND_FURNITURE_ENGRAVING]);
  }
  initialize(e) {
    (super.initialize(e),
      this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.FURNITURE_FRIENDFURNI_ENGRAVING_TYPE, this._r1acb913b784880));
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof _i39f7ecd6ab9902 ? e : null;
    if (r != null) {
      let t = r.data instanceof ao ? r.data : null;
      this.state = t != null ? t.state : r.state;
    }
  }
  _rce2b5eb85a79e0() {
    if (this.object != null) {
      if (this.state === a.STATE_LOCKED) {
        this._r11e12b4ff1ca8e?.dispatchEvent?.(new RoomObjectWidgetRequestEvent(RoomObjectWidgetRequestEvent.FRIEND_FURNITURE_ENGRAVING, this.object));
        return;
      }
      super._rce2b5eb85a79e0();
    }
  }
}
