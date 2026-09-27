// Extracted from HabboAirLauncher.deobf.js, line 299261.
// Matches AIR 15: 03_sorgenti_e_asset/HabboAir/scripts/com/sulake/habbo/room/object/logic/furniture/FurnitureCuckooClockLogic.as
// Obfuscated name: _i7f5c093fe1ca11

class extends UnkClass_eead78 {
  static {
    n(this, "FurnitureCuckooClockLogic");
  }
  _state = -1;
  _rc8047af3b949ad = null;
  getEventTypes() {
    return this.getAllEventTypes(super.getEventTypes(), [RoomObjectPlaySoundIdEvent.PLAY_SOUND_AT_PITCH]);
  }
  processUpdateMessage(e) {
    super.processUpdateMessage(e);
    let r = e instanceof UnkRoomObjectUpdateMessageSubclass_39f7ec ? e : null;
    r != null
      ? (this._state !== -1 &&
          r.state !== this._state &&
          this.playSoundAt(this._rc8047af3b949ad?.z ?? 0),
        (this._state = r.state))
      : e?.loc != null && (this._rc8047af3b949ad = e.loc);
  }
  playSoundAt(e) {
    if (this.object == null) return;
    let r = Math.pow(2, e - 1.2);
    this._r11e12b4ff1ca8e?.dispatchEvent?.(
      new RoomObjectPlaySoundIdEvent(RoomObjectPlaySoundIdEvent.PLAY_SOUND_AT_PITCH, this.object, "FURNITURE_cuckoo_clock", r),
    );
  }
}
