// Estratto da HabboAirLauncher.deobf.js, riga 300720.
// Corrisponde a AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/class_2266.as
// Nome offuscato: _i3b93d84677a1f6

class a extends _ieead78a21202a2 {
  static {
    n(this, "class_2266");
  }
  static const_1411 = 12;
  static const_322 = -12;
  static STATE_UNINITIALIZED = -1;
  _state = a.STATE_UNINITIALIZED;
  var_2756 = a.STATE_UNINITIALIZED;
  _r4cc086a9d545cf = !1;
  var_3777 = 0;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [
      RoomObjectSamplePlaybackEvent.PLAY_SAMPLE,
      RoomObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED,
      RoomObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED,
    ]);
  }
  dispose() {
    (this._state !== a.STATE_UNINITIALIZED &&
      this._r11e12b4ff1ca8e != null &&
      this.object != null &&
      this._r11e12b4ff1ca8e.dispatchEvent?.(new RoomObjectSamplePlaybackEvent(RoomObjectSamplePlaybackEvent.ROOM_OBJECT_DISPOSED, this.object, this.var_2756)),
      super.dispose());
  }
  initialize(e) {
    if ((super.initialize(e), e == null)) return;
    let r = e.child("sound");
    if (r.length() === 0) return;
    let t = r.child("sample");
    if (t.length() === 0) return;
    let [i] = t.toArray();
    if (i == null || !(i instanceof Object) || !("attribute" in i)) return;
    let s = i;
    ((this.var_2756 = Number.parseInt(String(s.attribute("id") ?? "-1"), 10)),
      (this._r4cc086a9d545cf = String(s.attribute("nopitch") ?? "") === "true"),
      this.object?.getModelController()?.setNumber(RoomObjectVariableEnum.const_832, 1));
  }
  processUpdateMessage(e) {
    if ((super.processUpdateMessage(e), this.object == null)) return;
    let r = this.object.getLocation(),
      t = e instanceof _i39f7ecd6ab9902 ? e : null;
    t != null &&
      (this._state === a.STATE_UNINITIALIZED &&
        this.object.getModelController()._ra3dc9a405b5c73(RoomObjectVariableEnum.const_420) === 1 &&
        r != null &&
        this._r11e12b4ff1ca8e != null &&
        ((this.var_3777 = r.z),
        this._r11e12b4ff1ca8e.dispatchEvent?.(
          new RoomObjectSamplePlaybackEvent(RoomObjectSamplePlaybackEvent.ROOM_OBJECT_INITIALIZED, this.object, this.var_2756, this._rb11ee6e7bbb4a5(r.z)),
        )),
      this._state !== a.STATE_UNINITIALIZED &&
        r != null &&
        this._r11e12b4ff1ca8e != null &&
        this.var_3777 !== r.z &&
        (this._r11e12b4ff1ca8e.dispatchEvent?.(
          new RoomObjectSamplePlaybackEvent(RoomObjectSamplePlaybackEvent.CHANGE_PITCH, this.object, this.var_2756, this._rb11ee6e7bbb4a5(r.z)),
        ),
        (this.var_3777 = r.z)),
      this._state !== a.STATE_UNINITIALIZED &&
        t.state !== this._state &&
        r != null &&
        this._r11e12b4ff1ca8e != null &&
        this.playSoundAt(r.z),
      (this._state = t.state));
  }
  playSoundAt(e) {
    if (this.object == null || this._r11e12b4ff1ca8e == null) return;
    let r = this._rb11ee6e7bbb4a5(e);
    (this.object.getModelController().setNumber(RoomObjectVariableEnum.const_832, r),
      this._r11e12b4ff1ca8e.dispatchEvent?.(
        new RoomObjectSamplePlaybackEvent(RoomObjectSamplePlaybackEvent.PLAY_SAMPLE, this.object, this.var_2756, r),
      ));
  }
  _rb11ee6e7bbb4a5(e) {
    let r = (e * 2) | 0;
    return (
      r > a.const_1411 && (r = Math.min(0, a.const_322 + (r - a.const_1411 - 1))),
      this._r4cc086a9d545cf ? 1 : Math.pow(2, r / 12)
    );
  }
}
